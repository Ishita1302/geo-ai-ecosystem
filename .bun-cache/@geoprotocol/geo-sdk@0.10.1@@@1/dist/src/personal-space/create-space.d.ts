import type { CreateSpaceResult } from './types.js';
/**
 * Get the target address and calldata for creating a personal space.
 *
 * This function returns everything needed to submit a transaction that creates
 * a personal space on the Space Registry contract.
 *
 * @returns Object containing `to` (contract address) and `calldata` for the transaction
 *
 * @example
 * ```ts
 * import { personalSpace } from '@geoprotocol/geo-sdk';
 * import { createWalletClient, http } from 'viem';
 *
 * const { to, calldata } = personalSpace.createSpace();
 *
 * // Using viem
 * const hash = await walletClient.sendTransaction({
 *   to,
 *   data: calldata,
 * });
 * ```
 */
export declare function createSpace(): CreateSpaceResult;
//# sourceMappingURL=create-space.d.ts.map