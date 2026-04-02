/**
 * Geo SDK Demo — Publishing Entities to the Knowledge Graph
 *
 * This script demonstrates how to:
 *   1. Read entity data from JSON files
 *   2. Convert them into Graph operations using the Geo SDK
 *   3. Publish the operations to a space on the Geo testnet
 *
 * Usage:
 *   bun run 02_publish_demo.ts
 *
 * Prerequisites:
 *   - Set DEMO_SPACE_ID in .env to the space you want to publish to
 *   - Set PK_SW to the private key of your smart wallet
 */

import * as fs from "fs";
import dotenv from "dotenv";
import { Graph, Position, type Op, ContentIds } from "@geoprotocol/geo-sdk";
import { printOps, publishOps } from "./src/functions";
import { TYPES, PROPERTIES, QUERY_DATA_SOURCE, COLLECTION_DATA_SOURCE, VIEWS } from "./src/constants";

dotenv.config();

// ─── Property Registry ──────────────────────────────────────────────────────
// Maps JSON field names to their property ID and value type.
// To add a new property, just add an entry here — no other code changes needed.

const VALUE_PROPERTIES: Record<string, { id: string; type: "text" | "date" | "number" }> = {
  // Original lowercase keys (for people.json, topics.json)
  web_url:             { id: PROPERTIES.web_url,             type: "text" },
  birth_date:          { id: PROPERTIES.birth_date,          type: "date" },
  date_founded:        { id: PROPERTIES.date_founded,        type: "date" },

  // Capitalized keys (for project_200_1.json)
  "Web URL":             { id: PROPERTIES.web_url,             type: "text" },
  "Birth Date":          { id: PROPERTIES.birth_date,          type: "date" },
  "Date Founded":        { id: PROPERTIES.date_founded,        type: "date" },
  "GitHub stars":        { id: PROPERTIES.github_stars,        type: "number" },
  "Software licenses":   { id: PROPERTIES.software_licenses,   type: "text" },
  "Primary language":    { id: PROPERTIES.primary_language,    type: "text" },
  "First release":       { id: PROPERTIES.first_release,       type: "date" },
  "Latest version":      { id: PROPERTIES.latest_version,      type: "text" },
  "Latest release date": { id: PROPERTIES.latest_release_date, type: "date" },
  "Actively maintained": { id: PROPERTIES.actively_maintained, type: "text" },
};

// Build a values array from any entity data object using the registry above.
// Date values should be RFC 3339 strings (e.g. "2023-01-01") — the SDK parses them internally.
function extractValues(data: Record<string, any>) {
  const values: any[] = [];
  for (const [field, meta] of Object.entries(VALUE_PROPERTIES)) {
    if (data[field] != null) {
      let value = data[field];
      
      // Simple converter for "M/D/YYYY" to "YYYY-MM-DD"
      if (meta.type === "date" && typeof value === "string" && value.includes("/")) {
        const parts = value.split("/");
        if (parts.length === 3) {
          const m = parts[0].padStart(2, "0");
          const d = parts[1].padStart(2, "0");
          const y = parts[2];
          value = `${y}-${m}-${d}`;
        }
      }
      
      values.push({ property: meta.id, type: meta.type, value });
    }
  }
  return values;
}

// ─── JSON Data Types ─────────────────────────────────────────────────────────

type TopicData = {
  name: string;
  description: string;
};

type PersonData = {
  name: string;
  description: string;
  web_url?: string;
  birth_date?: string;
  topics?: string[];
};

type ProjectData = {
  "Name": string;
  "Description": string;
  "Web URL"?: string;
  "Date Founded"?: string;
  "GitHub stars"?: string;
  "Software licenses"?: string;
  "Primary language"?: string;
  "Categories"?: string;
  "Backed by"?: string;
  "First release"?: string;
  "Latest version"?: string;
  "Latest release date"?: string;
  "Actively maintained"?: string;
  "Contributors"?: string;
  "Dependencies"?: string; // Added field for cross-project relations
  "topics"?: string[];
  "avatar_url"?: string;
  "blocks"?: string[];
};

// ─── Main: Build Entities & Publish ──────────────────────────────────────────

async function main() {
  console.log("=== Geo SDK Demo: Publishing Entities ===\n");

  // ── Step 1: Read JSON data ──────────────────────────────────────────────
  console.log("Step 1: Reading entity data from JSON files...");

  const topics: TopicData[] = JSON.parse(
    fs.readFileSync("./data_to_publish/topics.json", "utf-8")
  );
  const people: PersonData[] = JSON.parse(
    fs.readFileSync("./data_to_publish/people.json", "utf-8")
  );
  const rawProjects: any[] = JSON.parse(
    fs.readFileSync("./data_to_publish/project_200_1.json", "utf-8")
  );

  // Clean up data from JSON (some keys/values in project_200_1 have trailing spaces)
  const projects: ProjectData[] = rawProjects.map((p) => {
    const cleaned: any = {};
    for (const [key, val] of Object.entries(p)) {
      const cleanKey = key.trim();
      const cleanVal = typeof val === "string" ? val.trim() : val;
      cleaned[cleanKey] = cleanVal;
    }
    return cleaned;
  });

  console.log(`  Loaded: ${topics.length} topics, ${people.length} people, ${projects.length} projects\n`);

  const allOps: Op[] = [];

  // ── Step 2: Create Topic entities ───────────────────────────────────────
  // Topics have no dependencies, so we create them first.
  console.log("Step 2: Creating Topic entities...");

  const topicIdsByName: Record<string, string> = {};

  for (const topic of topics) {
    const { id, ops } = Graph.createEntity({
      name: topic.name,
      description: topic.description,
      types: [TYPES.topic],
    });

    topicIdsByName[topic.name] = id;
    allOps.push(...ops);
    console.log(`  Created topic: "${topic.name}" → ${id}`);
  }

  // ── Step 3: Create Person entities ──────────────────────────────────────
  // People can have relations to Topics.
  console.log("\nStep 3: Creating Person entities...");

  const personIdsByName: Record<string, string> = {};

  for (const person of people) {
    const values = extractValues(person);

    // Build topic relations
    const topicRelations = (person.topics || [])
      .filter((t) => topicIdsByName[t])
      .map((t) => ({ toEntity: topicIdsByName[t] }));

    const relations: Record<string, Array<{ toEntity: string }>> = {};
    if (topicRelations.length > 0) {
      relations[PROPERTIES.topics] = topicRelations;
    }

    const { id, ops } = Graph.createEntity({
      name: person.name,
      description: person.description,
      types: [TYPES.person],
      values,
      relations,
    });

    personIdsByName[person.name] = id;
    allOps.push(...ops);
    console.log(`  Created person: "${person.name}" → ${id}`);
  }

  // ── Step 4: Create Project entities ─────────────────────────────────────
  // Projects can have a date_founded and relations to Topics.
  console.log("\nStep 4: Creating Project entities...");

  const projectIdsByName: Record<string, string> = {};
  const companyIdsByName: Record<string, string> = {};
  const categoryIdsByName: Record<string, string> = {};

  for (const project of projects) {
    const values = extractValues(project);

    const topicRelations = (project.topics || [])
      .filter((t) => topicIdsByName[t])
      .map((t) => ({ toEntity: topicIdsByName[t] }));

    const relations: Record<string, any[]> = {};
    if (topicRelations.length > 0) {
      relations[PROPERTIES.topics] = topicRelations;
    }

    // Parse and create contributor Person entities
    if (project.Contributors) {
      // Split by commas, ampersands, or "and", then clean up
      const contributorNames = project.Contributors.split(/[,&]|\band\b/)
        .map((name) => name.trim())
        .filter((name) => name.length > 0);

      const contributorRelations: Array<{ toEntity: string }> = [];

      for (const name of contributorNames) {
        // Reuse existing person if already created in Step 3
        let personId = personIdsByName[name];

        if (!personId) {
          // Create a new Person entity if not found
          const { id: newPersonId, ops: personOps } = Graph.createEntity({
            name: name,
            types: [TYPES.person],
          });
          personId = newPersonId;
          allOps.push(...personOps);
          personIdsByName[name] = personId; // Cache for other projects
          console.log(`  Created contributor: "${name}" → ${personId}`);
        }

        contributorRelations.push({ toEntity: personId });
      }

      if (contributorRelations.length > 0) {
        relations[PROPERTIES.contributors] = contributorRelations;
      }
    }

    // Parse and create Backed by (Company) entities
    if (project["Backed by"]) {
      const companyNames = project["Backed by"].split(/[,&]|\band\b/)
        .map((name) => name.trim())
        .filter((name) => name.length > 0);

      const companyRelations: Array<{ toEntity: string }> = [];

      for (const name of companyNames) {
        let companyId = companyIdsByName[name];

        if (!companyId) {
          const { id: newCompanyId, ops: companyOps } = Graph.createEntity({
            name: name,
            types: [TYPES.company],
          });
          companyId = newCompanyId;
          allOps.push(...companyOps);
          companyIdsByName[name] = companyId;
          console.log(`  Created company: "${name}" → ${companyId}`);
        }

        companyRelations.push({ toEntity: companyId });
      }

      if (companyRelations.length > 0) {
        relations[PROPERTIES.backed_by] = companyRelations;
      }
    }

    // Parse and create Category entities
    if (project.Categories) {
      const categoryNames = project.Categories.split(/[,&]|\band\b/)
        .map((name) => name.trim())
        .filter((name) => name.length > 0);

      const categoryRelations: Array<{ toEntity: string }> = [];

      for (const name of categoryNames) {
        let categoryId = categoryIdsByName[name];

        if (!categoryId) {
          const { id: newCategoryId, ops: categoryOps } = Graph.createEntity({
            name: name,
            types: [TYPES.category],
          });
          categoryId = newCategoryId;
          allOps.push(...categoryOps);
          categoryIdsByName[name] = categoryId;
          console.log(`  Created category: "${name}" → ${categoryId}`);
        }

        categoryRelations.push({ toEntity: categoryId });
      }

      if (categoryRelations.length > 0) {
        relations[PROPERTIES.categories] = categoryRelations;
      }
    }

    const { id, ops } = Graph.createEntity({
      name: project.Name,
      description: project.Description,
      types: [TYPES.project],
      values,
      relations,
    });

    projectIdsByName[project.Name] = id;
    allOps.push(...ops);
    console.log(`  Created project: "${project.Name}" → ${id}`);
  }

  // ── Step 5: Link project dependencies ──────────────────────────────────
  // Now that all projects have IDs, we can create cross-project relations.
  console.log("\nStep 5: Linking cross-project dependencies...");

  for (const project of projects) {
    if (!project.Dependencies) continue;

    const parentId = projectIdsByName[project.Name];
    const depNames = project.Dependencies.split(/[,&]|\band\b/)
      .map((name) => name.trim())
      .filter((name) => name.length > 0);

    const depRelations: Array<{ toEntity: string }> = [];

    for (const name of depNames) {
      // Find the project ID by name (case-insensitive search for better matching)
      const depId = projectIdsByName[name] || 
                    Object.keys(projectIdsByName).find(k => k.toLowerCase() === name.toLowerCase()) && projectIdsByName[Object.keys(projectIdsByName).find(k => k.toLowerCase() === name.toLowerCase())!];

      if (depId) {
        depRelations.push({ toEntity: depId });
      } else {
        console.warn(`    Warning: Dependency "${name}" not found in current dataset.`);
      }
    }

    if (depRelations.length > 0) {
      for (const dep of depRelations) {
        const { ops: depOps } = Graph.createRelation({
          fromEntity: parentId,
          toEntity: dep.toEntity,
          type: PROPERTIES.dependencies,
        });
        allOps.push(...depOps);
      }
      console.log(`  Linked ${depRelations.length} dependencies to "${project.Name}"`);
    }
  }

  // ── Step 6: Add Text Blocks to entities that have them ─────────────────
  // Blocks are standalone entities attached to a parent via the Blocks
  // relation. Each relation carries a `position` string for ordering
  // (fractional indexing — positions sort lexicographically).
  //
  // Each line of content is its own Text Block entity:
  //   - type:  Text Block  (76474f2f…)
  //   - value: Markdown content  (e3e363d1…)  →  a single line / paragraph
  //
  // Every block gets its own Blocks relation from the parent entity,
  // with a `position` string that controls rendering order.
  // Position.generateBetween(after, null) produces a position that sorts
  // after the given one.  We track the last position per entity so every
  // block (text blocks first, then data blocks) is ordered correctly.
  console.log("\nStep 5: Adding Text Blocks from JSON data...");

  const lastPosByEntity: Record<string, string> = {};
  let pos: string;

  for (const project of projects) {
    if (!project.blocks || project.blocks.length === 0) continue;

    const parentId = projectIdsByName[project.Name];
    console.log(`  Adding ${project.blocks.length} text blocks to "${project.Name}"...`);

    for (const line of project.blocks) {
      const { id: blockId, ops: blockOps } = Graph.createEntity({
        types: [TYPES.text_block],
        values: [
          {
            property: PROPERTIES.markdown_content,
            type: "text",
            value: line,
          },
        ],
      });
      allOps.push(...blockOps);

      pos = Position.generateBetween(lastPosByEntity[parentId] ?? null, null);
      lastPosByEntity[parentId] = pos;
      const { ops: relOps } = Graph.createRelation({
        fromEntity: parentId,
        toEntity: blockId,
        type: PROPERTIES.blocks,
        position: pos,
      });
      allOps.push(...relOps);

      const preview = line.length > 50 ? line.slice(0, 50) + "…" : line;
      console.log(`    Block ${blockId}  pos: ${pos}  "${preview}"`);
    }
  }

  // ── 5b: Avatar Images ────────────────────────────────────────────────
  // Graph.createImage() fetches the image, uploads it to IPFS, and returns
  // an Image entity with the IPFS URL, width, and height set automatically.
  // The entity's type is automatically set to Image (ba4e4146…).

  for (const project of projects) {
    if (!project.avatar_url) continue;

    const parentId = projectIdsByName[project.Name];
    console.log(`\n  Uploading avatar for "${project.Name}" to IPFS...`);

    const { id: imageId, ops: imageOps, cid: imageCid } = await Graph.createImage({
      url: project.avatar_url,
      name: `${project.Name} Avatar`,
      network: "TESTNET",
    });
    allOps.push(...imageOps);
    console.log(`  Created image entity: ${imageId} (IPFS CID: ${imageCid})`);

    const { ops: attachImageOps } = Graph.createRelation({
      fromEntity: parentId,
      toEntity: imageId,
      type: ContentIds.AVATAR_PROPERTY,
    });
    allOps.push(...attachImageOps);
    console.log(`  Attached image as avatar`);
  }

  // ── Step 6: Add Data Blocks (Query + Collection) ──────────────────────────
  // Data Blocks render structured results inside an entity page.
  // There are two flavours:
  //
  //   Query Data Block   — a live, declarative query evaluated at render time.
  //                         Defined by a JSON filter + the Query data source marker.
  //
  //   Collection Data Block — a fixed, hand-picked set of entities.
  //                         Defined by Collection item relations + the Collection
  //                         data source marker.
  //
  // Both are regular Data Block entities (type b8803a86…).
  // A *View* (Table, List, Gallery, Bullets) can be set on the Blocks
  // relation via the `entityRelations` parameter — this decorates the
  // relation entity with a View relation.
  console.log("\nStep 6: Adding Data Blocks (Query + Collection) to the first project...");

  // ── 6a: Query Data Block — "Related Topics" ───────────────────────────
  // This block renders all Topic-typed entities in the space at view time.
  // The filter JSON mirrors what the Geo Browser stores natively:
  //   { "filter": { "<TYPES property id>": { "is": "<Topic type id>" } } }
  const queryFilter = JSON.stringify({
    spaceId: { 
      in: [process.env.DEMO_SPACE_ID]
    },
    filter: {
      [PROPERTIES.types]: { is: TYPES.topic },
    },
  });

  const { id: queryBlockId, ops: queryBlockOps } = Graph.createEntity({
    name: "Related Topics",
    types: [TYPES.data_block],
    values: [
      {
        property: PROPERTIES.filter,
        type: "text",
        value: queryFilter,
      },
    ],
    relations: {
      // Point to the Query data source singleton to mark this as a live query
      [PROPERTIES.data_source_type]: { toEntity: QUERY_DATA_SOURCE },
    },
  });
  allOps.push(...queryBlockOps);
  console.log(`  Created query data block ("Related Topics"): ${queryBlockId}`);
  console.log(`    Filter: ${queryFilter}`);

  // Attach to the first project with a Gallery view — position after last text block
  const firstProjectName = projects[0].Name;
  const firstProjectId = projectIdsByName[firstProjectName];
  pos = Position.generateBetween(lastPosByEntity[firstProjectId] ?? null, null);
  lastPosByEntity[firstProjectId] = pos;
  const { ops: attachQueryOps } = Graph.createRelation({
    fromEntity: firstProjectId,
    toEntity: queryBlockId,
    type: PROPERTIES.blocks,
    position: pos,
    // The View is set on the *relation entity* — this is the entity that
    // represents the Blocks relation itself.  entityRelations lets you
    // add relations to that implicit entity.
    entityRelations: {
      [PROPERTIES.view]: { toEntity: VIEWS.gallery },
    },
  });
  allOps.push(...attachQueryOps);
  console.log(`  Attached query block to "${firstProjectName}" → position: ${pos}  (Gallery view)`);

  // ── 6b: Collection Data Block — "Key People" ─────────────────────────
  // This block shows a hand-picked, ordered list of entities.
  // Each entity is added via a Collection item relation.
  const andrejId = personIdsByName["Andrej Karpathy"];
  const yannId = personIdsByName["Yann LeCun"];

  const { id: collectionBlockId, ops: collectionBlockOps } = Graph.createEntity({
    name: "Key People",
    types: [TYPES.data_block],
    relations: {
      // Mark as a Collection data source
      [PROPERTIES.data_source_type]: { toEntity: COLLECTION_DATA_SOURCE },
      // Add each person as a collection item (order follows array order)
      [PROPERTIES.collection_item]: [
        { toEntity: andrejId },
        { toEntity: yannId },
      ],
    },
  });
  allOps.push(...collectionBlockOps);
  console.log(`  Created collection data block ("Key People"): ${collectionBlockId}`);
  console.log(`    Items: Andrej Karpathy (${andrejId}), Yann LeCun (${yannId})`);

  // Attach to the first project with a List view — position after query block
  pos = Position.generateBetween(lastPosByEntity[firstProjectId] ?? null, null);
  lastPosByEntity[firstProjectId] = pos;
  const { ops: attachCollectionOps } = Graph.createRelation({
    fromEntity: firstProjectId,
    toEntity: collectionBlockId,
    type: PROPERTIES.blocks,
    position: pos,
    entityRelations: {
      [PROPERTIES.view]: { toEntity: VIEWS.list },
    },
  });
  allOps.push(...attachCollectionOps);
  console.log(`  Attached collection block to "${firstProjectName}" → position: ${pos}  (List view)`);

  // ── Step 7: Summary ───────────────────────────────────────────────────────
  console.log(`\n--- Summary ---`);
  console.log(`Total operations generated: ${allOps.length}`);
  console.log(`Operation breakdown:`);

  const opCounts: Record<string, number> = {};
  for (const op of allOps) {
    opCounts[op.type] = (opCounts[op.type] || 0) + 1;
  }
  for (const [type, count] of Object.entries(opCounts)) {
    console.log(`  ${type}: ${count}`);
  }

  // ── Step 8: Publish ───────────────────────────────────────────────────────
  console.log("\nStep 8: Publishing to the Geo knowledge graph...");
  if (!fs.existsSync("data_to_delete")) {
    fs.mkdirSync("data_to_delete");
  }
  printOps(allOps, "data_to_delete", "demo_publish_ops.txt")
  const txHash = await publishOps(allOps, "Demo: publish sample entities");
  console.log(`\nDone! Transaction: ${txHash}`);

  // ── Step 9: How to verify ─────────────────────────────────────────────────
  const spaceId = process.env.DEMO_SPACE_ID;
  console.log(`\nVerify your entities at:`);
  console.log(`  https://geobrowser.io/space/${spaceId}`);
  console.log(`\nOr query the API with: bun run 01_api_demo.ts`);
}

main().catch((err) => {
  console.error("Error:", err);
  process.exit(1);
});
