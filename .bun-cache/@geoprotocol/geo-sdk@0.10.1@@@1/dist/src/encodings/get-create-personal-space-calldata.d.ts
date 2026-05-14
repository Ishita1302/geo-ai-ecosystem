/**
 * Get the calldata for creating a personal space.
 *
 * This function encodes the `registerSpaceId` function call for the Space Registry contract.
 * It registers the caller's address as a personal space with a deterministically derived space ID.
 *
 * For creating DAO spaces, use the DAO Space Factory instead via `getCreateDaoSpaceCalldata`.
 *
 * @returns Encoded calldata for the transaction
 *
 * @example
 * ```ts
 * import { getCreatePersonalSpaceCalldata, TESTNET } from '@geoprotocol/geo-sdk';
 * import { createWalletClient, http } from 'viem';
 *
 * const calldata = getCreatePersonalSpaceCalldata();
 *
 * // Using viem
 * const hash = await walletClient.sendTransaction({
 *   to: TESTNET.SPACE_REGISTRY_ADDRESS,
 *   data: calldata,
 * });
 *
 * // Using wagmi
 * const { sendTransaction } = useSendTransaction();
 * sendTransaction({
 *   to: TESTNET.SPACE_REGISTRY_ADDRESS,
 *   data: calldata,
 * });
 * ```
 */
export declare function getCreatePersonalSpaceCalldata(): `0x${string}`;
//# sourceMappingURL=get-create-personal-space-calldata.d.ts.map