/**
 * Setup script for Rank types in the knowledge graph.
 *
 * This script generates the Ops needed to create the Rank schema types:
 * - RANK_TYPE_PROPERTY: A TEXT property storing ORDINAL/WEIGHTED
 * - RANK_VOTES_RELATION_TYPE: A RELATION property linking rank to voted entities
 * - VOTE_ORDINAL_VALUE_PROPERTY: A TEXT property storing fractional indexing position
 * - VOTE_WEIGHTED_VALUE_PROPERTY: A FLOAT property storing numeric score
 * - RANK_TYPE: A Type entity representing a Rank
 *
 * Usage: import { ops } from './scripts/setup-rank-types.js'
 */
import type { Op } from '@geoprotocol/grc-20';
export declare const ops: Op[];
//# sourceMappingURL=setup-rank-types.d.ts.map