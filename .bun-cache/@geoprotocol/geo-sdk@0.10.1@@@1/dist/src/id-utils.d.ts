/**
 * This module provides utility functions for working knowledge graph
 * identifiers in TypeScript.
 */
import { type Id as GrcId } from '@geoprotocol/grc-20';
import { Brand } from 'effect';
import { Id, isValid } from './id.js';
export { isValid };
export type { GrcId };
export type IdBase64 = string & Brand.Brand<'IdBase64'>;
export declare const IdBase64: Brand.Brand.Constructor<IdBase64>;
/**
 * Generates a globally unique knowledge graph identifier.
 *
 * @example
 * ```
 * import { Id } from '@geoprotocol/geo-sdk'
 *
 * const id = Id.generate();
 * console.log(id)
 * ```
 *
 * @returns dashless v4 UUID (32 hex characters without dashes)
 */
export declare function generate(): Id;
export declare function isValidBase64(id: string): boolean;
export declare function assertValid(id: string, sourceHint?: string): void;
export declare function toBytes(id: Id | string): Uint8Array;
export declare function fromBytes(bytes: Uint8Array): Id;
/**
 * Converts a local string Id to a GRC-20 Id (Uint8Array).
 */
export declare function toGrcId(id: Id | string): GrcId;
export declare function toBase64(id: Id): IdBase64;
export declare function fromBase64(id: IdBase64): Id;
/**
 * Validates and converts a number or bigint to a bigint for int64 values.
 * If the value is already a bigint, it is returned as-is.
 * If the value is a number, it must be a safe integer to be converted.
 *
 * @param value - The value to convert (bigint or number)
 * @param sourceHint - Optional hint for error messages indicating where the value came from
 * @returns The value as a bigint
 * @throws Error if the number is not an integer, is NaN, is Infinity, or is outside safe integer range
 */
export declare function toInt64(value: bigint | number, sourceHint?: string): bigint;
//# sourceMappingURL=id-utils.d.ts.map