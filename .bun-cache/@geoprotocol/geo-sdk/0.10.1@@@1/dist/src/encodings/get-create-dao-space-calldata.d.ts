/**
 * The base value for percentage ratios in the contract.
 * 100% = 10e6 (10,000,000), so 50% = 5e6 (5,000,000)
 */
export declare const RATIO_BASE: bigint;
/** Minimum voting duration in seconds (2 days) */
export declare const MINIMUM_VOTING_DURATION: bigint;
/** Minimum voting duration in days */
export declare const MINIMUM_VOTING_DURATION_DAYS = 2;
/**
 * User-friendly voting settings input (using percentages and days)
 */
export interface VotingSettingsInput {
    /** Percentage threshold for slow path (0-100) */
    slowPathPercentageThreshold: number;
    /** Number of editors required for fast path approval */
    fastPathFlatThreshold: number;
    /** Minimum number of editors required to vote */
    quorum: number;
    /** Voting duration in days (minimum 2 days) */
    durationInDays: number;
}
/**
 * Contract-level voting settings (using raw values)
 */
export interface VotingSettings {
    slowPathPercentageThreshold: bigint;
    fastPathFlatThreshold: bigint;
    quorum: bigint;
    duration: bigint;
}
/**
 * Convert a percentage (0-100) to the contract's ratio format.
 *
 * @param percentage - A number between 0 and 100
 * @returns The ratio value used by the contract (where 10e6 = 100%)
 *
 * @example
 * ```ts
 * percentageToRatio(100) // 10000000n (100%)
 * percentageToRatio(50)  // 5000000n (50%)
 * percentageToRatio(0)   // 0n (0%)
 * ```
 */
export declare function percentageToRatio(percentage: number): bigint;
/**
 * Convert days to seconds.
 *
 * @param days - Number of days
 * @returns The equivalent duration in seconds as a bigint
 *
 * @example
 * ```ts
 * daysToSeconds(1) // 86400n
 * daysToSeconds(7) // 604800n
 * ```
 */
export declare function daysToSeconds(days: number): bigint;
/**
 * Convert user-friendly voting settings to contract format.
 *
 * @param input - User-friendly voting settings with percentages and days
 * @returns Contract-level voting settings with bigint values
 *
 * @example
 * ```ts
 * const contractSettings = toContractVotingSettings({
 *   slowPathPercentageThreshold: 50,  // 50%
 *   fastPathFlatThreshold: 3,         // 3 editors
 *   quorum: 2,                        // 2 editors minimum
 *   durationInDays: 7,                // 7 days
 * });
 * // Returns: { slowPathPercentageThreshold: 5000000n, fastPathFlatThreshold: 3n, quorum: 2n, duration: 604800n }
 * ```
 */
export declare function toContractVotingSettings(input: VotingSettingsInput): VotingSettings;
/**
 * Validate an IPFS URI format.
 *
 * @param uri - The URI to validate
 * @returns Error message if invalid, null if valid
 */
export declare function validateIpfsUri(uri: string): string | null;
/**
 * Validate voting settings input.
 *
 * @param settings - The voting settings to validate
 * @param totalEditors - The total number of initial editors
 * @returns Error message if invalid, null if valid
 *
 * @example
 * ```ts
 * const error = validateVotingSettingsInput(
 *   { slowPathPercentageThreshold: 50, fastPathFlatThreshold: 3, quorum: 2, durationInDays: 7 },
 *   5  // total editors
 * );
 * if (error) {
 *   console.error(error);
 * }
 * ```
 */
export declare function validateVotingSettingsInput(settings: VotingSettingsInput, totalEditors: number): string | null;
type CreateDaoSpaceCalldataParams = {
    /** Voting settings for the DAO space */
    votingSettings: VotingSettingsInput;
    /** Space IDs of initial editors (at least one required). Must be bytes16 hex strings without dashes. */
    initialEditorSpaceIds: `0x${string}`[];
    /** Space IDs of initial members (can be empty). Must be bytes16 hex strings without dashes. */
    initialMemberSpaceIds: `0x${string}`[];
    /** Initial edits content URI, e.g. "ipfs://Qm..." (optional) */
    initialEditsContentUri?: string;
    /** Initial topic ID as UUID string (optional - if provided, declares a topic on creation) */
    initialTopicId?: string;
};
/**
 * Get the calldata for creating a DAO space proxy.
 *
 * This function encodes the `createDAOSpaceProxy` function call for the DAO Space Factory contract.
 * The returned calldata can be used with viem or wagmi to send a transaction.
 *
 * @param args - The parameters for creating the DAO space
 * @returns Encoded calldata for the transaction
 * @throws Error if validation fails (e.g., no editors, invalid voting settings)
 *
 * @example
 * ```ts
 * import { getCreateDaoSpaceCalldata, TESTNET } from '@geoprotocol/geo-sdk';
 * import { createWalletClient, http } from 'viem';
 *
 * const calldata = getCreateDaoSpaceCalldata({
 *   votingSettings: {
 *     slowPathPercentageThreshold: 50,  // 50% approval needed
 *     fastPathFlatThreshold: 3,         // 3 editors for fast path
 *     quorum: 2,                        // minimum 2 editors must vote
 *     durationInDays: 7,                // 7 day voting period
 *   },
 *   initialEditorSpaceIds: ['0x01234567890abcdef01234567890abcd', '0x56789abcdef01234567890abcdef0123'],
 *   initialMemberSpaceIds: ['0xabcdef01234567890abcdef012345678'],
 * });
 *
 * // Using viem
 * const hash = await walletClient.sendTransaction({
 *   to: TESTNET.DAO_SPACE_FACTORY_ADDRESS,
 *   data: calldata,
 * });
 *
 * // Using wagmi
 * const { sendTransaction } = useSendTransaction();
 * sendTransaction({
 *   to: TESTNET.DAO_SPACE_FACTORY_ADDRESS,
 *   data: calldata,
 * });
 * ```
 */
export declare function getCreateDaoSpaceCalldata(args: CreateDaoSpaceCalldataParams): `0x${string}`;
export {};
//# sourceMappingURL=get-create-dao-space-calldata.d.ts.map