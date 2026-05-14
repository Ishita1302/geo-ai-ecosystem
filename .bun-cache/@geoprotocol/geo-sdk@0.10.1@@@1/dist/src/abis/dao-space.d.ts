export declare const abi: readonly [{
    readonly inputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "constructor";
}, {
    readonly inputs: readonly [];
    readonly name: "ActionReverted";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "CanNotExecute";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "CanNotVote";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "FastPathRestricted";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "InvalidAction";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "InvalidCaller";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "InvalidFromSpace";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "InvalidInitialization";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "InvalidProposalId";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "InvalidSetting";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "InvalidSpaceIdForRole";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "NotInitializing";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "OneActionForFastPath";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "VerifyDisabled";
    readonly type: "error";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: false;
        readonly internalType: "uint64";
        readonly name: "version";
        readonly type: "uint64";
    }];
    readonly name: "Initialized";
    readonly type: "event";
}, {
    readonly inputs: readonly [];
    readonly name: "DAO";
    readonly outputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "";
        readonly type: "bytes32";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "EDITOR";
    readonly outputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "";
        readonly type: "bytes32";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "FAST_PATH_RESTRICTED";
    readonly outputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "";
        readonly type: "bytes32";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "MEMBER";
    readonly outputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "";
        readonly type: "bytes32";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "MINIMUM_VOTING_DURATION";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "RATIO_BASE";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "SPACE_REGISTRY";
    readonly outputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "";
        readonly type: "bytes32";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes4";
        readonly name: "_selector";
        readonly type: "bytes4";
    }];
    readonly name: "actionIsFastPathValid";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "_isValid";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes16";
        readonly name: "_newEditorSpaceId";
        readonly type: "bytes16";
    }];
    readonly name: "addEditor";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes16";
        readonly name: "_newMemberSpaceId";
        readonly type: "bytes16";
    }];
    readonly name: "addMember";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "_action";
        readonly type: "bytes32";
    }, {
        readonly internalType: "bytes32";
        readonly name: "_topicInput";
        readonly type: "bytes32";
    }, {
        readonly internalType: "bytes";
        readonly name: "_data";
        readonly type: "bytes";
    }];
    readonly name: "fetch";
    readonly outputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "_topicOutput";
        readonly type: "bytes32";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "_topic";
        readonly type: "bytes32";
    }, {
        readonly internalType: "bytes";
        readonly name: "_flaggedId";
        readonly type: "bytes";
    }];
    readonly name: "flag";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes16";
        readonly name: "_proposalId";
        readonly type: "bytes16";
    }];
    readonly name: "getLatestProposalInformation";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "_executed";
        readonly type: "bool";
    }, {
        readonly internalType: "bytes16";
        readonly name: "_creator";
        readonly type: "bytes16";
    }, {
        readonly components: readonly [{
            readonly internalType: "enum IDAOSpace.VotingMode";
            readonly name: "votingMode";
            readonly type: "uint8";
        }, {
            readonly internalType: "uint256";
            readonly name: "supportThreshold";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "quorum";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "startDate";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "lastDate";
            readonly type: "uint256";
        }];
        readonly internalType: "struct IDAOSpace.ProposalParameters";
        readonly name: "_parameters";
        readonly type: "tuple";
    }, {
        readonly components: readonly [{
            readonly internalType: "uint256";
            readonly name: "yes";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "no";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "abstain";
            readonly type: "uint256";
        }];
        readonly internalType: "struct IDAOSpace.Tally";
        readonly name: "_tally";
        readonly type: "tuple";
    }, {
        readonly components: readonly [{
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }];
        readonly internalType: "struct IDAOSpace.Action[]";
        readonly name: "_actions";
        readonly type: "tuple[]";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes16";
        readonly name: "_proposalId";
        readonly type: "bytes16";
    }, {
        readonly internalType: "bytes16";
        readonly name: "_voterSpaceId";
        readonly type: "bytes16";
    }];
    readonly name: "getLatestProposalVote";
    readonly outputs: readonly [{
        readonly internalType: "enum IDAOSpace.VoteOption";
        readonly name: "_voteOption";
        readonly type: "uint8";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes16";
        readonly name: "_proposalId";
        readonly type: "bytes16";
    }, {
        readonly internalType: "uint8";
        readonly name: "_version";
        readonly type: "uint8";
    }];
    readonly name: "getProposalInformation";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "_executed";
        readonly type: "bool";
    }, {
        readonly internalType: "bytes16";
        readonly name: "_creator";
        readonly type: "bytes16";
    }, {
        readonly components: readonly [{
            readonly internalType: "enum IDAOSpace.VotingMode";
            readonly name: "votingMode";
            readonly type: "uint8";
        }, {
            readonly internalType: "uint256";
            readonly name: "supportThreshold";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "quorum";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "startDate";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "lastDate";
            readonly type: "uint256";
        }];
        readonly internalType: "struct IDAOSpace.ProposalParameters";
        readonly name: "_parameters";
        readonly type: "tuple";
    }, {
        readonly components: readonly [{
            readonly internalType: "uint256";
            readonly name: "yes";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "no";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "abstain";
            readonly type: "uint256";
        }];
        readonly internalType: "struct IDAOSpace.Tally";
        readonly name: "_tally";
        readonly type: "tuple";
    }, {
        readonly components: readonly [{
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }];
        readonly internalType: "struct IDAOSpace.Action[]";
        readonly name: "_actions";
        readonly type: "tuple[]";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes16";
        readonly name: "_proposalId";
        readonly type: "bytes16";
    }, {
        readonly internalType: "uint8";
        readonly name: "_version";
        readonly type: "uint8";
    }, {
        readonly internalType: "bytes16";
        readonly name: "_voterSpaceId";
        readonly type: "bytes16";
    }];
    readonly name: "getProposalVote";
    readonly outputs: readonly [{
        readonly internalType: "enum IDAOSpace.VoteOption";
        readonly name: "_voteOption";
        readonly type: "uint8";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "_role";
        readonly type: "bytes32";
    }, {
        readonly internalType: "bytes16";
        readonly name: "_spaceId";
        readonly type: "bytes16";
    }];
    readonly name: "hasRole";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "_hasRole";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes";
        readonly name: "_initializerData";
        readonly type: "bytes";
    }];
    readonly name: "initialize";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes16";
        readonly name: "_proposalId";
        readonly type: "bytes16";
    }];
    readonly name: "isSupportThresholdReached";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "_isSupportThresholdReached";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes16";
        readonly name: "_proposalId";
        readonly type: "bytes16";
    }];
    readonly name: "latestProposalVersion";
    readonly outputs: readonly [{
        readonly internalType: "uint8";
        readonly name: "_version";
        readonly type: "uint8";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "name";
    readonly outputs: readonly [{
        readonly internalType: "string";
        readonly name: "_name";
        readonly type: "string";
    }];
    readonly stateMutability: "pure";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "_action";
        readonly type: "bytes32";
    }, {
        readonly internalType: "bytes32";
        readonly name: "_topic";
        readonly type: "bytes32";
    }, {
        readonly internalType: "bytes";
        readonly name: "_data";
        readonly type: "bytes";
    }];
    readonly name: "ping";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "_topic";
        readonly type: "bytes32";
    }, {
        readonly internalType: "bytes";
        readonly name: "_editsContentUri";
        readonly type: "bytes";
    }, {
        readonly internalType: "bytes";
        readonly name: "_editsMetadata";
        readonly type: "bytes";
    }];
    readonly name: "publish";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes16";
        readonly name: "_oldEditorSpaceId";
        readonly type: "bytes16";
    }];
    readonly name: "removeEditor";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes16";
        readonly name: "_oldMemberSpaceId";
        readonly type: "bytes16";
    }];
    readonly name: "removeMember";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "spaceRegistry";
    readonly outputs: readonly [{
        readonly internalType: "contract ISpaceRegistry";
        readonly name: "_spaceRegistry";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "totalEditors";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "_totalEditors";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "typeId";
    readonly outputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "_type";
        readonly type: "bytes32";
    }];
    readonly stateMutability: "pure";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "_topic";
        readonly type: "bytes32";
    }, {
        readonly internalType: "bytes";
        readonly name: "_unflaggedId";
        readonly type: "bytes";
    }];
    readonly name: "unflag";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes16";
        readonly name: "_spaceId";
        readonly type: "bytes16";
    }];
    readonly name: "unrestrictSpace";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "uint256";
            readonly name: "slowPathPercentageThreshold";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "fastPathFlatThreshold";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "quorum";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "duration";
            readonly type: "uint256";
        }];
        readonly internalType: "struct IDAOSpace.VotingSettings";
        readonly name: "_votingSettings";
        readonly type: "tuple";
    }];
    readonly name: "updateVotingSettings";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes16";
        readonly name: "";
        readonly type: "bytes16";
    }, {
        readonly internalType: "bytes32";
        readonly name: "";
        readonly type: "bytes32";
    }, {
        readonly internalType: "bytes32";
        readonly name: "";
        readonly type: "bytes32";
    }, {
        readonly internalType: "bytes";
        readonly name: "";
        readonly type: "bytes";
    }, {
        readonly internalType: "bytes";
        readonly name: "";
        readonly type: "bytes";
    }];
    readonly name: "verify";
    readonly outputs: readonly [];
    readonly stateMutability: "pure";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "version";
    readonly outputs: readonly [{
        readonly internalType: "string";
        readonly name: "_version";
        readonly type: "string";
    }];
    readonly stateMutability: "pure";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "votingSettings";
    readonly outputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "uint256";
            readonly name: "slowPathPercentageThreshold";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "fastPathFlatThreshold";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "quorum";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "duration";
            readonly type: "uint256";
        }];
        readonly internalType: "struct IDAOSpace.VotingSettings";
        readonly name: "_votingSettings";
        readonly type: "tuple";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes16";
        readonly name: "_fromSpaceId";
        readonly type: "bytes16";
    }, {
        readonly internalType: "bytes32";
        readonly name: "_action";
        readonly type: "bytes32";
    }, {
        readonly internalType: "bytes32";
        readonly name: "";
        readonly type: "bytes32";
    }, {
        readonly internalType: "bytes";
        readonly name: "_data";
        readonly type: "bytes";
    }];
    readonly name: "write";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}];
//# sourceMappingURL=dao-space.d.ts.map