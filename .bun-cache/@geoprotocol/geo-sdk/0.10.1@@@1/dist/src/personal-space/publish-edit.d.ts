import type { PublishEditParams, PublishEditResult } from './types.js';
/**
 * Publish an edit to IPFS and get the calldata for submitting it on-chain.
 *
 * This function:
 * 1. Validates the spaceId (accepts UUID or 32-char hex string)
 * 2. Publishes the ops to IPFS using the GRC-20 binary format
 * 3. Encodes the calldata for the Space Registry's `enter()` function
 *
 * @param params - The parameters for publishing the edit
 * @returns Object containing `editId`, `cid`, `to` (contract address), and `calldata`
 *
 * @example
 * ```ts
 * import { personalSpace, Graph } from '@geoprotocol/geo-sdk';
 *
 * const { ops } = Graph.createEntity({ name: 'Test' });
 * const { editId, cid, to, calldata } = await personalSpace.publishEdit({
 *   name: 'Add entity',
 *   spaceId: 'your-space-id',
 *   ops,
 *   author: 'your-person-entity-id',
 * });
 *
 * await walletClient.sendTransaction({ to, data: calldata });
 * ```
 */
export declare function publishEdit(params: PublishEditParams): Promise<PublishEditResult>;
//# sourceMappingURL=publish-edit.d.ts.map