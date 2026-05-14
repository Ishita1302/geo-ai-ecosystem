/**
 * This module provides utility functions for interacting with the default
 * IPFS gateway in TypeScript.
 *
 * @since 0.1.1
 */
import { type Op } from '@geoprotocol/grc-20';
import type { Id } from './id.js';
import type { Network } from './types.js';
type PublishEditProposalParams = {
    name: string;
    ops: Op[];
    /** The author's Person Entity ID (UUID). Used as the `authors` field in the proto Edit message. */
    author: Id | string;
    network?: Network;
};
type PublishEditResult = {
    cid: string;
    editId: Id;
};
/**
 * Generates correct GRC-20 v2 binary encoding for an Edit and uploads it to IPFS.
 *
 * @example
 * ```ts
 * import { IPFS } from '@geoprotocol/geo-sdk';
 *
 * const { cid, editId } = await IPFS.publishEdit({
 *   name: 'Edit name',
 *   ops: ops,
 *   author: 'your-person-entity-id',
 * });
 * ```
 *
 * @param args arguments for publishing an edit to IPFS {@link PublishEditProposalParams}
 * @returns - {@link PublishEditResult}
 */
export declare function publishEdit(args: PublishEditProposalParams): Promise<PublishEditResult>;
type PublishImageParams = {
    blob: Blob;
} | {
    url: string;
};
export declare function uploadImage(params: PublishImageParams, network?: Network, alternativeGateway?: boolean): Promise<{
    cid: `ipfs://${string}`;
    dimensions: {
        width: number;
        height: number;
    };
} | {
    cid: `ipfs://${string}`;
    dimensions?: undefined;
}>;
/**
 * Uploads a CSV file to IPFS and returns the CID. This CSV
 * file will be compressed using gzip before being uploaded.
 *
 * @example
 * ```ts
 * const file = Bun.file('cities.csv');
 * const fileText = await file.text();
 *
 * const cid = await Ipfs.uploadCSV(fileText);
 * ```
 *
 * @example
 * ```ts
 * import { Csv } from '@geoprotocol/geo-sdk';
 *
 * const csvString = Csv.stringify({
 *   data: Array.from({ length: 151_000 }, (_, i: number) => [i.toString(), (i * 2).toString(), (i * 3).toString()]),
 *   metadata: {
 *     filetype: 'CSV',
 *     columns: [
 *       {
 *         id: 'foo',
 *         type: 'TEXT',
 *       },
 *       {
 *         id: 'bar',
 *         type: 'NUMBER',
 *       },
 *       {
 *         id: 'baz',
 *         type: 'TEXT',
 *       },
 *     ],
 *   },
 * })
 *
 * const cid = await Ipfs.uploadCSV(csvString);
 * ```
 *
 * @param csvString The CSV to upload as a string
 * @returns IPFS CID representing the uploaded file prefixed with `ipfs://`
 */
export declare function uploadCSV(csvString: string, network?: Network): Promise<`ipfs://${string}`>;
export {};
//# sourceMappingURL=ipfs.d.ts.map