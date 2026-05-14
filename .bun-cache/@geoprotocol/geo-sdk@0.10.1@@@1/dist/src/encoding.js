import { Micro } from 'effect';
import { getApiOrigin } from './graph/constants.js';
class GetEditCalldataError extends Error {
    _tag = 'GetEditCalldataError';
}
export async function getEditCalldata(params) {
    const network = params.network ?? 'TESTNET';
    const getCalldata = Micro.gen(function* () {
        const result = yield* Micro.tryPromise({
            try: () => fetch(`${getApiOrigin(network)}/space/${params.spaceId}/edit/calldata`, {
                method: 'POST',
                body: JSON.stringify({ cid: params.cid }),
            }),
            catch: error => new GetEditCalldataError(`Could not get edit calldata from space ${params.spaceId}: ${error}`),
        });
        const calldata = yield* Micro.tryPromise({
            try: async () => {
                const { to, data } = await result.json();
                return {
                    to: to,
                    data: data,
                };
            },
            catch: error => new GetEditCalldataError(`Could not parse response from API when getting calldata for space ${params.spaceId}: ${error}`),
        });
        return calldata;
    });
    return await Micro.runPromise(getCalldata);
}
//# sourceMappingURL=encoding.js.map