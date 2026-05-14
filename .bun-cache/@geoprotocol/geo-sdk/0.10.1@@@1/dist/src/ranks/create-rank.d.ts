import type { CreateRankParams, CreateRankResult } from './types.js';
/**
 * Creates a rank entity with the given name, description, rankType, and votes.
 * All IDs passed to this function are validated. If any invalid ID is provided,
 * the function will throw an error.
 *
 * For ORDINAL ranks, the position is derived from the array order and fractional
 * indexing strings are generated internally.
 *
 * @example
 * ```ts
 * // Create an ordinal rank (ordered list) - position derived from array order
 * const { id, ops, voteIds } = createRank({
 *   id: rankId, // optional, will be generated if not provided
 *   name: 'My Favorite Movies',
 *   description: 'A ranked list of my favorite movies', // optional
 *   rankType: 'ORDINAL',
 *   votes: [
 *     { entityId: movie1Id },  // 1st place
 *     { entityId: movie2Id },  // 2nd place
 *     { entityId: movie3Id },  // 3rd place
 *   ],
 * });
 *
 * // Create a weighted rank (scored list)
 * const { id, ops, voteIds } = createRank({
 *   name: 'Restaurant Ratings',
 *   rankType: 'WEIGHTED',
 *   votes: [
 *     { entityId: restaurant1Id, value: 4.5 },  // numeric score
 *     { entityId: restaurant2Id, value: 3.8 },
 *   ],
 * });
 * ```
 *
 * @param params – {@link CreateRankParams}
 * @returns – {@link CreateRankResult}
 * @throws Will throw an error if any provided ID is invalid
 * @throws Will throw an error if any entityId is duplicated in votes
 */
export declare const createRank: ({ id: providedId, name, description, rankType, votes, }: CreateRankParams) => CreateRankResult;
//# sourceMappingURL=create-rank.d.ts.map