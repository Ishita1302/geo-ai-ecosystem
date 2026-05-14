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
    readonly name: "InvalidCaller";
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
    readonly name: "SpaceAlreadyRegistered";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "SpaceNotRegistered";
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
    readonly anonymous: true;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "bytes16";
        readonly name: "fromSpaceId";
        readonly type: "bytes16";
    }, {
        readonly indexed: true;
        readonly internalType: "bytes16";
        readonly name: "toSpaceId";
        readonly type: "bytes16";
    }, {
        readonly indexed: true;
        readonly internalType: "bytes32";
        readonly name: "action";
        readonly type: "bytes32";
    }, {
        readonly indexed: true;
        readonly internalType: "bytes32";
        readonly name: "topic";
        readonly type: "bytes32";
    }, {
        readonly indexed: false;
        readonly internalType: "bytes";
        readonly name: "data";
        readonly type: "bytes";
    }];
    readonly name: "Action";
    readonly type: "event";
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
        readonly internalType: "bytes16";
        readonly name: "_spaceId";
        readonly type: "bytes16";
    }, {
        readonly internalType: "bytes32";
        readonly name: "_type";
        readonly type: "bytes32";
    }, {
        readonly internalType: "bytes";
        readonly name: "_version";
        readonly type: "bytes";
    }];
    readonly name: "acceptSpaceMigration";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "_account";
        readonly type: "address";
    }];
    readonly name: "addressToSpaceId";
    readonly outputs: readonly [{
        readonly internalType: "bytes16";
        readonly name: "_spaceId";
        readonly type: "bytes16";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "clearSpaceId";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes16";
        readonly name: "_fromSpaceId";
        readonly type: "bytes16";
    }, {
        readonly internalType: "bytes16";
        readonly name: "_toSpaceId";
        readonly type: "bytes16";
    }, {
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
    }, {
        readonly internalType: "bytes";
        readonly name: "_signature";
        readonly type: "bytes";
    }];
    readonly name: "enter";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "_account";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "_nonce";
        readonly type: "uint256";
    }];
    readonly name: "generateSpaceId";
    readonly outputs: readonly [{
        readonly internalType: "bytes16";
        readonly name: "_spaceId";
        readonly type: "bytes16";
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
    readonly inputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "_action";
        readonly type: "bytes32";
    }];
    readonly name: "permissionlessActions";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "_isPermissionless";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "_newAccount";
        readonly type: "address";
    }];
    readonly name: "proposeSpaceMigration";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
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
    readonly inputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "_type";
        readonly type: "bytes32";
    }, {
        readonly internalType: "bytes";
        readonly name: "_version";
        readonly type: "bytes";
    }];
    readonly name: "registerSpaceId";
    readonly outputs: readonly [{
        readonly internalType: "bytes16";
        readonly name: "_spaceId";
        readonly type: "bytes16";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "renounceOwnership";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "_action";
        readonly type: "bytes32";
    }, {
        readonly internalType: "bool";
        readonly name: "_isPermissionless";
        readonly type: "bool";
    }];
    readonly name: "setPermissionlessAction";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes16";
        readonly name: "_spaceId";
        readonly type: "bytes16";
    }];
    readonly name: "spaceIdToAddress";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "_account";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes16";
        readonly name: "_spaceId";
        readonly type: "bytes16";
    }];
    readonly name: "spaceIdToProposedAddress";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "_account";
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
//# sourceMappingURL=space-registry.d.ts.map