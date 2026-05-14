import type { ProposeEditParams, ProposeEditResult } from './types.js';
/**
 * Creates a proposal to publish an edit to a DAO space.
 *
 * This function:
 * 1. Publishes the ops to IPFS using the GRC-20 binary format
 * 2. Generates a unique proposal ID (or uses the provided one)
 * 3. Encodes the proposal data for the SpaceRegistry's `enter()` function
 *
 * The proposal, when executed, will call the DAO space's `publish()` function
 * to publish the edit. Since `publish()` is a valid fast-path action, with
 * FAST voting mode and sufficient votes, the proposal will auto-execute.
 *
 * @param params - The parameters for creating the proposal
 * @returns Object containing `editId`, `cid`, `to` (Space Registry address),
 *          `calldata`, and `proposalId`
 *
 * @example
 * ```ts
 * import { daoSpace, Graph } from '@geoprotocol/geo-sdk';
 *
 * const { ops } = Graph.createEntity({ name: 'New Entity' });
 * const { editId, cid, to, calldata, proposalId } = await daoSpace.proposeEdit({
 *   name: 'Add new entity',
 *   ops,
 *   author: 'your-person-entity-id',
 *   daoSpaceAddress: '0xDAOSpaceContractAddress...',
 *   callerSpaceId: '0xCallerBytes16SpaceId...',
 *   daoSpaceId: '0xDAOBytes16SpaceId...',
 * });
 *
 * // Submit the transaction using viem or another client
 * await walletClient.sendTransaction({ to, data: calldata });
 * ```
 */
export declare function proposeEdit(params: ProposeEditParams): Promise<ProposeEditResult>;
//# sourceMappingURL=propose-edit.d.ts.map