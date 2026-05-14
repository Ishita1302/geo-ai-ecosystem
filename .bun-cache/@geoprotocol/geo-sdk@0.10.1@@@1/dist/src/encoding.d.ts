import type { Network } from './types.js';
type GetEditCalldataParams = {
    spaceId: string;
    cid: string;
    network?: Network;
};
export declare function getEditCalldata(params: GetEditCalldataParams): Promise<{
    to: `0x${string}`;
    data: `0x${string}`;
}>;
export {};
//# sourceMappingURL=encoding.d.ts.map