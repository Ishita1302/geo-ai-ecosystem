import type { CreateResult, RelationParams } from '../types.js';
/**
 * Creates a relation.
 *
 * @example
 * ```ts
 * const { id, ops } = createRelation({
 *   id: relationId, // optional
 *   fromEntity: entityId1,
 *   toEntity: entityId2,
 *   type: relationTypeId,
 *   fromSpace: spaceId1, // optional
 *   toSpace: spaceId2, // optional
 *   fromVersion: versionId1, // optional
 *   toVersion: versionId2, // optional
 *   position: 'position of the relation', // optional
 *   entityId: entityId3, // optional and will be generated if not provided
 *   entityValues: [ // optional
 *     { property: propertyId1, value: 'value1' },
 *     { property: propertyId2, value: 'value2' },
 *   ],
 *   entityRelations: { // optional
 *     relationTypeId1: {
 *       toEntity: entityId3,
 *       type: relationTypeId2,
 *       toSpace: spaceId3,
 *       toVersion: versionId3,
 *       position: 'position of the relation',
 *     },
 *   },
 *   entityTypes: [typeId1, typeId2], // optional
 *   entityName: 'name of the relation entity', // optional
 *   entityDescription: 'description of the relation entity', // optional
 *   entityCover: imageEntityId, // optional
 * });
 * ```
 * @param params – {@link RelationParams}
 * @returns – {@link CreateResult}
 * @throws Will throw an error if any provided ID is invalid
 */
export declare const createRelation: ({ id: providedId, fromEntity, toEntity, position, fromSpace, toSpace, fromVersion, toVersion, type, entityId: providedEntityId, entityName, entityDescription, entityCover, entityValues, entityRelations, entityTypes, }: RelationParams) => CreateResult;
//# sourceMappingURL=create-relation.d.ts.map