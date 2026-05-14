import type { Hex, WalletClient } from 'viem';
import type { GeoSmartAccount } from './types.js';
export declare const TESTNET_RPC_URL = "https://rpc-geo-test-zc16z3tcvf.t.conduit.xyz";
/**
 * Custom Safe contract addresses for Geo Testnet.
 *
 * Safe uses deterministic deployment so the canonical addresses are the same on
 * every chain. On Geo Mainnet (80451) those canonical addresses exist, so the
 * permissionless library's defaults work. On Geo Testnet (19411) the canonical
 * deployer was never run — the Safe contracts were deployed separately and
 * landed at different addresses. We pass them explicitly to toSafeSmartAccount.
 *
 * Source of truth: curator-app packages/curator-utils/src/utils/smart-account-constants.ts
 */
export declare const GEO_TESTNET_SAFE_ADDRESSES: {
    readonly safeModuleSetupAddress: Hex;
    readonly safe4337ModuleAddress: Hex;
    readonly safeProxyFactoryAddress: Hex;
    readonly safeSingletonAddress: Hex;
    readonly multiSendAddress: Hex;
    readonly multiSendCallOnlyAddress: Hex;
};
type GetSmartAccountWalletClientParams = {
    privateKey: Hex;
    rpcUrl?: string;
};
/**
 * Get a smart account wallet client for your Geo account.
 *
 * IMPORTANT: Be careful with your private key. Don't commit it to version control.
 * You can get your private key using https://www.geobrowser.io/export-wallet
 *
 * @example
 * ```ts
 * const smartAccountWalletClient = await getSmartAccountWalletClient({
 *   privateKey: '0x...',
 *   rpcUrl: '...', // optional
 * });
 * ```
 * @param params – {@link GetSmartAccountWalletClientParams}
 * @returns – {@link SmartAccountClient}
 */
export declare const getSmartAccountWalletClient: ({ privateKey, rpcUrl, }: GetSmartAccountWalletClientParams) => Promise<GeoSmartAccount>;
export declare const getWalletClient: ({ privateKey, rpcUrl, }: GetSmartAccountWalletClientParams) => Promise<WalletClient>;
export {};
//# sourceMappingURL=smart-wallet.d.ts.map