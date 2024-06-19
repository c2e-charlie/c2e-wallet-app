import { ethers, BigNumber } from "ethers";
import { Signer } from "@ethersproject/abstract-signer";
import { Provider } from "@ethersproject/abstract-provider";
import c2e_abi from "@/lib/web3/abis/ERC20Permit.json";
import vm_abi from "@/lib/web3/abis/VM.json";

/*
  1. input type value(contract_function name)
    - C2E 
        permit: c2e_permit
    - Vending
        insertCoin: vm_insertCoin

  2.  input data value([contract function input data])
    - data: [input1, input2, ...]
*/

const relayer_privatekey = process.env.NEXT_PUBLIC_RELAYER_PRIVATEKEY || "";
const rpc_url = process.env.NEXT_PUBLIC_RPC_URL_BIFROST || "";
const c2e_address = process.env.NEXT_PUBLIC_C2E_ADDRESS || "";
const vm_address = process.env.NEXT_PUBLIC_VM_ADDRESS || "";

const provider = new ethers.providers.JsonRpcProvider(rpc_url);
const relayer = new ethers.Wallet(relayer_privatekey, provider);

export const simulate = async (type: string, data: any, fromPk?: string) => {
  let contract: ethers.Contract;
  let method: string = type.split("_")[1];
  let wallet: ethers.Wallet;
  let estimateGas: BigNumber = ethers.BigNumber.from(0);
  const gasPrice = await provider.getGasPrice();

  if (fromPk) {
    wallet = new ethers.Wallet(fromPk, provider);
  } else {
    wallet = relayer;
  }

  const c2e = new ethers.Contract(c2e_address, c2e_abi.abi, wallet);
  const vm = new ethers.Contract(vm_address, vm_abi.abi, wallet);

  switch (type.split("_")[0]) {
    case "c2e":
      contract = c2e;
      break;
    case "vm":
      contract = vm;
      break;
    // Todo : Add more cases as needed
    default:
      throw new Error("Unsupported operation type");
  }

  try {
    const txData = contract.interface.encodeFunctionData(`${method}`, [
      ...data,
    ]);

    estimateGas = await contract.estimateGas[method](...data, {
      from: wallet.address,
    });

    const simulatedTx = {
      from: wallet.address,
      to: contract.address,
      data: txData,
      gasPrice: gasPrice,
      gasLimit: estimateGas,
    };

    await provider.call(simulatedTx);

    return {
      message: "Success",
      overrides: {
        gasPrice: gasPrice,
        gasLimit: estimateGas,
      },
    };
  } catch (error: any) {
    const errBody = JSON.parse(
      error?.error?.body ?? '{"error": {"message": "Unknown Error"}}'
    );
    const message = errBody.error.message;
    console.log("simulate 실패 사유 : ", message);

    const match = message.match(/revert (.*)/);
    const insufficient = message.match(/insufficient (.*)/);

    const extractedMessage = match
      ? match[1]
      : insufficient
      ? "insufficient funds"
      : "Unknown Error";

    if (
      extractedMessage === "insufficient funds" ||
      message.includes("out of gas")
    ) {
      console.log("simulate 기반으로 트랜잭션을 재전송합니다...");

      return {
        message: "Retry",
        overrides: {
          gasPrice: gasPrice,
          gasLimit: estimateGas.add(ethers.BigNumber.from(100000)),
        },
      };
    }

    return {
      message: extractedMessage,
      overrides: {
        gasPrice: gasPrice,
        gasLimit: estimateGas,
      },
    };
  }
};
