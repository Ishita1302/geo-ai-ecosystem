export declare const UUID_DASHLESS_REGEX: RegExp;
/**
 * If `id` looks like a UUID without dashes (32 hex chars), convert it to the
 * dashed UUID format. Otherwise returns `null`.
 */
export declare function dashlessUuidToDashed(id: string): string | null;
/**
 * `uuid.parse` accepts the dashed UUID format, so normalize canonical (dashless)
 * UUIDs into the dashed representation, leaving other inputs unchanged.
 */
export declare function normalizeUuidForParse(id: string): string;
//# sourceMappingURL=uuid.d.ts.map