import type { CreateResult, DeleteEntityParams } from '../types.js';
/**
 * Deletes an entity.
 *
 * @example
 * ```ts
 * const { ops } = deleteEntity({ id: entityId });
 * ```
 *
 * @param params – {@link DeleteEntityParams}
 * @returns The operations to delete the entity.
 */
export declare const deleteEntity: ({ id }: DeleteEntityParams) => CreateResult;
//# sourceMappingURL=delete-entity.d.ts.map