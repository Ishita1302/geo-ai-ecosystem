export declare const abi: readonly [{
    readonly inputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "constructor";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "target";
        readonly type: "address";
    }];
    readonly name: "AddressEmptyCode";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "implementation";
        readonly type: "address";
    }];
    readonly name: "ERC1967InvalidImplementation";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "ERC1967NonPayable";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "FailedCall";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "InvalidInitialization";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "NotInitializing";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "owner";
        readonly type: "address";
    }];
    readonly name: "OwnableInvalidOwner";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "account";
        readonly type: "address";
    }];
    readonly name: "OwnableUnauthorizedAccount";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "UUPSUnauthorizedCallContext";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "slot";
        readonly type: "bytes32";
    }];
    readonly name: "UUPSUnsupportedProxiableUUID";
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
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "previousOwner";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "newOwner";
        readonly type: "address";
    }];
    readonly name: "OwnershipTransferred";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "implementation";
        readonly type: "address";
    }];
    readonly name: "Upgraded";
    readonly type: "event";
}, {
    readonly inputs: readonly [];
    readonly name: "UPGRADE_INTERFACE_VERSION";
    readonly outputs: readonly [{
        readonly internalType: "string";
        readonly name: "";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
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
    }, {
        readonly internalType: "bytes16[]";
        readonly name: "_initialEditors";
        readonly type: "bytes16[]";
    }, {
        readonly internalType: "bytes16[]";
        readonly name: "_initialMembers";
        readonly type: "bytes16[]";
    }, {
        readonly internalType: "bytes";
        readonly name: "_initialEditsContentUri";
        readonly type: "bytes";
    }, {
        readonly internalType: "bytes";
        readonly name: "_initialEditsMetadata";
        readonly type: "bytes";
    }, {
        readonly internalType: "bytes16";
        readonly name: "_initialTopicId";
        readonly type: "bytes16";
    }, {
        readonly internalType: "bytes";
        readonly name: "_initialTopicData";
        readonly type: "bytes";
    }];
    readonly name: "createDAOSpaceProxy";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "_newDAOSpaceProxy";
        readonly type: "address";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "daoSpaceBeacon";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "_daoSpaceBeacon";
        readonly type: "address";
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
    readonly inputs: readonly [];
    readonly name: "owner";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "proxiableUUID";
    readonly outputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "";
        readonly type: "bytes32";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "renounceOwnership";
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
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "newOwner";
        readonly type: "address";
    }];
    readonly name: "transferOwnership";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
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
        readonly internalType: "address";
        readonly name: "newImplementation";
        readonly type: "address";
    }, {
        readonly internalType: "bytes";
        readonly name: "data";
        readonly type: "bytes";
    }];
    readonly name: "upgradeToAndCall";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
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
}];
//# sourceMappingURL=dao-space-factory.d.ts.map