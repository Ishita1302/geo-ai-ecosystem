import type { CreateResult, UpdateEntityParams } from '../types.js';
/**
 * Updates an entity with the given name, description, cover and properties.
 * All IDs passed to this function (cover, property IDs) are validated.
 * If any invalid ID is provided, the function will throw an error.
 *
 * @example
 * ```ts
 * const { id, ops } = updateEntity({
 *   id: entityId,
 *   name: 'name of the entity',
 *   description: 'description of the entity',
 *   values: [
 *     {
 *       property: propertyId,
 *       value: 'value of the property',
 *     }
 *   ],
 *   unset: [
 *     { property: propertyId },                              // unset all languages
 *     { property: propertyId2, language: languages.english() }, // unset english only
 *     { property: propertyId3, language: germanLanguageId }, // unset specific language
 *   ],
 * });
 * ```
 * @param params – {@link UpdateEntityParams}
 * @returns – {@link CreateResult}
 * @throws Will throw an error if any provided ID is invalid
 */
export declare const updateEntity: ({ id, name, description, values, unset }: UpdateEntityParams) => CreateResult;
//# sourceMappingURL=update-entity.d.ts.map