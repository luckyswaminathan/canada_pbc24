/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  Receiver,
  ReceiverInterface,
} from "../../../../artifacts/contracts/ccip/Receiver";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Received",
    type: "event",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [],
    name: "getBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555061073b806100606000396000f3fe6080604052600436106100435760003560e01c806312065fe0146100e85780638da5cb5b14610113578063f2fde38b1461013e578063f3fef3a31461016757610098565b36610098573373ffffffffffffffffffffffffffffffffffffffff167f88a5966d370b9919b20f3e2c13ff65706f196a4e32cc2c12bf57088f885258743460405161008e9190610431565b60405180910390a2005b3373ffffffffffffffffffffffffffffffffffffffff167f88a5966d370b9919b20f3e2c13ff65706f196a4e32cc2c12bf57088f88525874346040516100de9190610431565b60405180910390a2005b3480156100f457600080fd5b506100fd610190565b60405161010a9190610431565b60405180910390f35b34801561011f57600080fd5b50610128610198565b604051610135919061048d565b60405180910390f35b34801561014a57600080fd5b50610165600480360381019061016091906104d9565b6101bc565b005b34801561017357600080fd5b5061018e60048036038101906101899190610570565b6102fc565b005b600047905090565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461024a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102419061060d565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036102b9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102b090610679565b60405180910390fd5b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461038a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103819061060d565b60405180910390fd5b478111156103cd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103c4906106e5565b60405180910390fd5b8173ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f19350505050158015610413573d6000803e3d6000fd5b505050565b6000819050919050565b61042b81610418565b82525050565b60006020820190506104466000830184610422565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006104778261044c565b9050919050565b6104878161046c565b82525050565b60006020820190506104a2600083018461047e565b92915050565b600080fd5b6104b68161046c565b81146104c157600080fd5b50565b6000813590506104d3816104ad565b92915050565b6000602082840312156104ef576104ee6104a8565b5b60006104fd848285016104c4565b91505092915050565b60006105118261044c565b9050919050565b61052181610506565b811461052c57600080fd5b50565b60008135905061053e81610518565b92915050565b61054d81610418565b811461055857600080fd5b50565b60008135905061056a81610544565b92915050565b60008060408385031215610587576105866104a8565b5b60006105958582860161052f565b92505060206105a68582860161055b565b9150509250929050565b600082825260208201905092915050565b7f4e6f7420746865206f776e657200000000000000000000000000000000000000600082015250565b60006105f7600d836105b0565b9150610602826105c1565b602082019050919050565b60006020820190508181036000830152610626816105ea565b9050919050565b7f4e6577206f776e657220697320746865207a65726f2061646472657373000000600082015250565b6000610663601d836105b0565b915061066e8261062d565b602082019050919050565b6000602082019050818103600083015261069281610656565b9050919050565b7f496e73756666696369656e742062616c616e6365000000000000000000000000600082015250565b60006106cf6014836105b0565b91506106da82610699565b602082019050919050565b600060208201905081810360008301526106fe816106c2565b905091905056fea2646970667358221220967ec759ffb4cc6a6d0e6468213d4e2c115fc2818e54d5057ee86d267636d83064736f6c63430008130033";

type ReceiverConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ReceiverConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Receiver__factory extends ContractFactory {
  constructor(...args: ReceiverConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Receiver> {
    return super.deploy(overrides || {}) as Promise<Receiver>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Receiver {
    return super.attach(address) as Receiver;
  }
  override connect(signer: Signer): Receiver__factory {
    return super.connect(signer) as Receiver__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ReceiverInterface {
    return new utils.Interface(_abi) as ReceiverInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Receiver {
    return new Contract(address, _abi, signerOrProvider) as Receiver;
  }
}
