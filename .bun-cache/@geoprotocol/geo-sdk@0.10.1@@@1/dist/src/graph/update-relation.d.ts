import type { CreateResult, UpdateRelationParams } from '../types.js';
/**
 * Updates a relation.
 *
 * @example
 * ```ts
 * const { id, ops } = updateRelation({
 *   id: relationId,
 *   position: 'position of the relation', // optional
 *   fromSpace: 'id of the from space', // optional
 *   toSpace: 'id of the to space', // optional
 *   fromVersion: 'id of the from version', // optional
 *   toVersion: 'id of the to version', // optional
 * });
 * ```
 * @param params – {@link UpdateRelationParams}
 * @returns – {@link CreateResult}
 * @throws Will throw an error if any provided ID is invalid
 */
export declare const updateRelation: ({ id, position, fromSpace, toSpace, fromVersion, toVersion, }: UpdateRelationParams) => CreateResult;
//# sourceMappingURL=update-relation.d.ts.map