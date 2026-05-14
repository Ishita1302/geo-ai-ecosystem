import { IdUtils } from '../../index.js';
import { Id } from '../id.js';
import { getApiOrigin } from './constants.js';
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
export const createSpace = async (params) => {
    const network = params.network ?? 'TESTNET';
    const governanceType = params.governanceType ?? 'PERSONAL';
    const apiHost = getApiOrigin(network);
    const formData = new FormData();
    formData.append('name', params.name);
    formData.append('editorAddress', params.editorAddress);
    if (params.spaceEntityId) {
        formData.append('spaceEntityId', params.spaceEntityId);
    }
    if (params.ops) {
        formData.append('ops', JSON.stringify(params.ops));
    }
    let url = `${apiHost}/deploy`;
    const deployParams = governanceType === 'PERSONAL'
        ? {
            spaceName: params.name,
            ops: params.ops,
            spaceEntityId: params.spaceEntityId,
            initialEditorAddress: params.editorAddress,
        }
        : {
            spaceName: params.name,
            ops: params.ops,
            spaceEntityId: params.spaceEntityId,
            initialEditorAddresses: [params.editorAddress],
        };
    if (governanceType === 'PERSONAL') {
        url = `${url}/personal`;
    }
    if (governanceType === 'PUBLIC') {
        url = `${url}/public`;
    }
    const result = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(deployParams),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const jsonResult = await result.json();
    if (!jsonResult || !jsonResult.spaceId || !IdUtils.isValid(jsonResult.spaceId)) {
        throw new Error(`Failed to create space: ${JSON.stringify(jsonResult)}`);
    }
    return { id: Id(jsonResult.spaceId) };
};
//# sourceMappingURL=create-space.js.map