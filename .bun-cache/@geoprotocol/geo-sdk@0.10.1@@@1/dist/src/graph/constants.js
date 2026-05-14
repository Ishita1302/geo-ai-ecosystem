export const TESTNET_API_ORIGIN = 'https://testnet-api.geobrowser.io';
export function getApiOrigin(network) {
    if (network === 'TESTNET') {
        return TESTNET_API_ORIGIN;
    }
    throw new Error(`Network ${network} not supported`);
}
//# sourceMappingURL=constants.js.map