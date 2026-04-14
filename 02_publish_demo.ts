

import * as fs from "fs";
import dotenv from "dotenv";
import { Graph, Position, type Op, ContentIds } from "@geoprotocol/geo-sdk";
import { printOps, publishOps } from "./src/functions";
import { TYPES, PROPERTIES, QUERY_DATA_SOURCE, COLLECTION_DATA_SOURCE, VIEWS } from "./src/constants";

dotenv.config();

\
const VALUE_PROPERTIES: Record<string, { id: string; type: "text" | "date" | "number" }> = {

  web_url: { id: PROPERTIES.web_url, type: "text" },
  birth_date: { id: PROPERTIES.birth_date, type: "date" },
  date_founded: { id: PROPERTIES.date_founded, type: "date" },

  // Capitalized keys (for project_200_corrected.json)
  "Web URL": { id: PROPERTIES.web_url, type: "text" },
  "Birth Date": { id: PROPERTIES.birth_date, type: "date" },
  "Date Founded": { id: PROPERTIES.date_founded, type: "date" },
  "Latest version": { id: PROPERTIES.latest_version, type: "text" },
  "Latest release date": { id: PROPERTIES.latest_release_date, type: "date" },
  "Actively maintained": { id: PROPERTIES.actively_maintained, type: "text" },
  "Categories": { id: PROPERTIES.categories, type: "text" },
  "Backed by": { id: PROPERTIES.backed_by, type: "text" },
  "Contributors": { id: PROPERTIES.contributors, type: "text" },
  "Primary language": { id: PROPERTIES.primary_language, type: "text" },
  "Software licenses": { id: PROPERTIES.software_licenses, type: "text" },
  "GitHub stars": { id: PROPERTIES.github_stars, type: "text" },
  "First release": { id: PROPERTIES.first_release, type: "date" },
};

const RELATION_PROPERTIES: Record<string, string> = {
  "Contributors": PROPERTIES.contributors,
};

function extractValues(data: Record<string, any>) {
  const values: any[] = [];
  for (const [field, meta] of Object.entries(VALUE_PROPERTIES)) {
    // Skip fields that are intended as relations
    if (RELATION_PROPERTIES[field] || field === "Topics") continue;

    if (data[field] != null) {
      let value = data[field];

      // Simple converter for "M/D/YY(YY)" or "M-D-YYYY" to "YYYY-MM-DD"
      if (meta.type === "date" && typeof value === "string" && (value.includes("/") || value.includes("-"))) {
        const separator = value.includes("/") ? "/" : "-";
        const parts = value.split(separator);
        if (parts.length === 3) {
          const m = parts[0].padStart(2, "0");
          const d = parts[1].padStart(2, "0");
          let y = parts[2];


          if (y.length === 2) {
            y = parseInt(y, 10) > 26 ? `19${y}` : `20${y}`;
          }


          if (y.length === 4 && m.length === 2 && d.length === 2) {
            value = `${y}-${m}-${d}`;
          } else {
            console.warn(`    Warning: Invalid date format for field "${field}": ${data[field]}`);
            continue;
          }
        }
      }


      if (meta.id === PROPERTIES.github_stars && typeof value === "string") {

        value = value.replace(/,/g, "");
      }

      if (!meta.id) {
        console.warn(`    Warning: Property ID is undefined for field "${field}". Skipping.`);
        continue;
      }

      values.push({ property: meta.id, type: meta.type, value });
    }
  }
  return values;
}

// ─── JSON Data Types ─────────────────────────────────────────────────────────

type PersonData = {
  name: string;
  description: string;
  web_url?: string;
  birth_date?: string;
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
  "topics"?: string;
  "avatar_url"?: string;
  "blocks"?: string[];
};

// ─── Main: Build Entities & Publish ──────────────────────────────────────────

async function main() {
  console.log("=== Geo SDK Demo: Publishing Entities ===\n");

  // ── Step 1: Read JSON data ──────────────────────────────────────────────
  console.log("Step 1: Reading entity data from JSON files...");

  const people: PersonData[] = JSON.parse(
    fs.readFileSync("./data_to_publish/people.json", "utf-8")
  );
  const rawProjects: any[] = JSON.parse(
    fs.readFileSync("./data_to_publish/project_200_corrected.json", "utf-8")
  );


  const projects: ProjectData[] = rawProjects.map((p) => {
    const cleaned: any = {};
    for (const [key, val] of Object.entries(p)) {
      const cleanKey = key.trim();
      const cleanVal = typeof val === "string" ? val.trim() : val;
      cleaned[cleanKey] = cleanVal;
    }
         present for the script to function
    if (!cleaned.Name && cleaned.name) cleaned.Name = cleaned.name;
    if (!cleaned.Description && cleaned.description) cleaned.Description = cleaned.description;
    return cleaned;
  });

  console.log(`  Loaded: ${people.length} people, ${projects.length} projects\n`);

  const allOps: Op[] = [];

  // ── Step 3: Create Person entities ──────────────────────────────────────
  // People can have relations to Topics.
  console.log("\nStep 3: Creating Person entities...");

  const personIdsByName: Record<string, string> = {};

  for (const person of people) {
    const values = extractValues(person);

    const relations: Record<string, Array<{ toEntity: string }>> = {};

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

  for (const project of projects) {
    const values = extractValues(project);

    const relations: Record<string, any[]> = {};

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

    const { id, ops } = Graph.createEntity({
      name: project.Name || "Untitled Project",
      description: project.Description || "",
      types: [TYPES.project],
      values,
      relations,
    });

    projectIdsByName[project.Name] = id;
    allOps.push(...ops);
    console.log(`  Created project: "${project.Name}" → ${id}`);
  }

  console.log("\nStep 5: Adding Text Blocks from JSON data...");

  const lastPosByEntity: Record<string, string> = {};
  let pos: string;

  for (const project of projects) {
    if (!project.blocks || project.blocks.length === 0) continue;

    const parentId = projectIdsByName[project.Name];
    if (!parentId) continue;
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


  for (const project of projects) {
    if (!project.avatar_url) continue;

    const parentId = projectIdsByName[project.Name];
    if (!parentId) continue;
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

  // ── Step 6: Add Data Blocks (Collection) ──────────────────────────
  // Data Blocks render structured results inside an entity page.
  //
  //   Collection Data Block — a fixed, hand-picked set of entities.
  //                         Defined by Collection item relations + the Collection
  //                         data source marker.
  //
  // A *View* (Table, List, Gallery, Bullets) can be set on the Blocks
  // relation via the `entityRelations` parameter — this decorates the
  // relation entity with a View relation.
  console.log("\nStep 6: Adding Data Blocks (Collection) to the first project...");

  const firstProjectName = projects[0].Name;
  const firstProjectId = projectIdsByName[firstProjectName];

  const personNames = Object.keys(personIdsByName);
  if (personNames.length > 0) {
    const selectedPeople = personNames.slice(0, 2).map(name => ({ toEntity: personIdsByName[name] }));

    const { id: collectionBlockId, ops: collectionBlockOps } = Graph.createEntity({
      name: "Key People",
      types: [TYPES.data_block],
      relations: {
        // Mark as a Collection data source
        [PROPERTIES.data_source_type]: { toEntity: COLLECTION_DATA_SOURCE },
        // Add each person as a collection item (order follows array order)
        [PROPERTIES.collection_item]: selectedPeople,
      },
    });
    allOps.push(...collectionBlockOps);
    console.log(`  Created collection data block ("Key People"): ${collectionBlockId}`);
    console.log(`    Items: ${personNames.slice(0, 2).join(", ")}`);

    // Attach to the first project with a List view — position after any text blocks
    if (firstProjectId) {
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
    }
  }

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

  // Split allOps into chunks of 100 to avoid transaction size limits
  const chunkSize = 100;
  for (let i = 0; i < allOps.length; i += chunkSize) {
    const chunk = allOps.slice(i, i + chunkSize);
    console.log(`\nPublishing batch ${Math.floor(i / chunkSize) + 1} of ${Math.ceil(allOps.length / chunkSize)} (${chunk.length} operations)...`);
    try {
      const txHash = await publishOps(chunk, `Demo: publish batch ${Math.floor(i / chunkSize) + 1}`);
      console.log(`Batch ${Math.floor(i / chunkSize) + 1} Done! Transaction: ${txHash}`);
    } catch (err) {
      console.error(`Error publishing batch ${Math.floor(i / chunkSize) + 1}:`, err);
      // Continue with next batch or stop? Usually stop if one fails as they might be dependent
      break;
    }
  }

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
