import { createPublicClient, http } from 'viem';
import { EMPTY_SPACE_ID, TESTNET } from '../../contracts.js';
import { SpaceRegistryAbi } from '../abis/index.js';
import { TESTNET_RPC_URL } from '../smart-wallet.js';
export async function hasSpace({ address, rpcUrl = TESTNET_RPC_URL, }) {
    const publicClient = createPublicClient({ transport: http(rpcUrl) });
    const spaceIdHex = (await publicClient.readContract({
        address: TESTNET.SPACE_REGISTRY_ADDRESS,
        abi: SpaceRegistryAbi,
        functionName: 'addressToSpaceId',
        args: [address],
    }));
    return spaceIdHex.toLowerCase() !== EMPTY_SPACE_ID.toLowerCase();
}
//# sourceMappingURL=has-space.js.map