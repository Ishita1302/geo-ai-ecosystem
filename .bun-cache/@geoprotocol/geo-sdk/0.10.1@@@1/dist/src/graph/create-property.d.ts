import type { CreatePropertyParams, CreateResult } from '../types.js';
/**
 * Creates a property with the given name, description, cover, and dataType.
 * All IDs passed to this function (cover, relation value types, properties) are validated.
 * If any invalid ID is provided, the function will throw an error.
 *
 * @example
 * ```ts
 * const { id, ops } = createProperty({
 *   id: propertyId, // optional and will be generated if not provided
 *   dataType: 'TEXT',
 *   name: 'name of the property', // optional
 *   description: 'description of the property', // optional
 *   cover: imageEntityId, // optional
 *   properties: [propertyId1, propertyId2], // optional
 *   relationValueTypes: [relationValueTypeId1, relationValueTypeId2], // optional
 * });
 * ```
 * @param params – {@link CreatePropertyParams}
 * @returns – {@link CreateResult}
 * @throws Will throw an error if any provided ID is invalid
 */
export declare const createProperty: (params: CreatePropertyParams) => CreateResult;
//# sourceMappingURL=create-property.d.ts.map