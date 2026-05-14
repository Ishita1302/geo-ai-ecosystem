import { deleteRelation as grcDeleteRelation } from '@geoprotocol/grc-20';
import { Id } from '../id.js';
import { assertValid, toGrcId } from '../id-utils.js';
/**
 * Deletes a relation.
 *
 * @example
 * ```ts
 * const { ops } = await deleteRelation({ id: relationId });
 * ```
 *
 * @param params – {@link DeleteRelationParams}
 * @returns The operations to delete the relation.
 */
export const deleteRelation = ({ id }) => {
    assertValid(id, '`id` in `deleteRelation`');
    return { id: Id(id), ops: [grcDeleteRelation(toGrcId(id))] };
};
//# sourceMappingURL=delete-relation.js.map