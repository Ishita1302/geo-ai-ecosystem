import { Brand } from 'effect';
/**
 * A globally unique knowledge graph identifier.
 *
 * Canonical form is a UUID v4 **without dashes** (32 hex chars).
 * For compatibility, UUIDs **with dashes** are also accepted anywhere an `Id` is validated.
 */
export type Id = string & Brand.Brand<'Id'>;
export declare const Id: Brand.Brand.Constructor<Id>;
export declare function isValid(id: string): boolean;
//# sourceMappingURL=id.d.ts.map