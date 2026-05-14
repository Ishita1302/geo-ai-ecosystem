/**
 * Action hash for GOVERNANCE.PROPOSAL_CREATED
 * Used when creating proposals via SpaceRegistry.enter()
 */
export declare const PROPOSAL_CREATED_ACTION: `0x${string}`;
/**
 * Empty topic (bytes32(0)) used for proposals
 */
export declare const EMPTY_TOPIC: "0x0000000000000000000000000000000000000000000000000000000000000000";
/**
 * Empty signature used when msg.sender == fromSpace
 */
export declare const EMPTY_SIGNATURE: "0x";
/**
 * Regex for bytes16 hex: 0x prefix + 32 hex characters (16 bytes)
 */
export declare const BYTES16_HEX_REGEX: RegExp;
/**
 * Regex for bytes32 hex: 0x prefix + 64 hex characters (32 bytes)
 */
export declare const BYTES32_HEX_REGEX: RegExp;
/**
 * Checks if a string is a valid bytes16 hex (0x prefix + 32 hex chars).
 */
export declare function isBytes16Hex(value: string): boolean;
/**
 * Converts a bytes32 hex string to bytes16 by taking the first 16 bytes.
 */
export declare function toBytes16(hex32: `0x${string}`): `0x${string}`;
/**
 * Converts a bytes16 hex string to bytes32 (left-aligned, right-padded with zeros).
 */
export declare function bytes16ToBytes32LeftAligned(bytes16Hex: `0x${string}`): `0x${string}`;
//# sourceMappingURL=constants.d.ts.map