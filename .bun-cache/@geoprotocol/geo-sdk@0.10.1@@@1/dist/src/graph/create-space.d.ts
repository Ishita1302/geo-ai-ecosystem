import type { Op } from '@geoprotocol/grc-20';
import { Id } from '../id.js';
import type { Network } from '../types.js';
type CreateSpaceParams = {
    editorAddress: string;
    name: string;
    network?: Network;
    ops?: Op[];
    spaceEntityId?: string;
    /**
     * Select which contracts to deploy based on the governance type.
     * If no governance type is provided it defaults to PERSONAL
     */
    governanceType?: 'PUBLIC' | 'PERSONAL';
};
/**
 * Creates a space with the given name and editor address.
 *
 * @example
 * ```ts
 * const { id } = await createSpace({
 *   editorAddress: '0x1234567890123456789012345678901234567890',
 *   name: 'My Space',
 *   network: 'TESTNET', // optional, defaults to 'TESTNET'
 *   spaceEntityId: '1234567890123456789012345678901234567890', // optional
 *   governanceType: 'PUBLIC', // optional, defaults to 'PERSONAL'
 *   ops: [], // optional
 * });
 * ```
 * @param params – {@link CreateSpaceParams}
 * @returns – {@link Id}
 */
export declare const createSpace: (params: CreateSpaceParams) => Promise<{
    id: Id;
}>;
export {};
//# sourceMappingURL=create-space.d.ts.map