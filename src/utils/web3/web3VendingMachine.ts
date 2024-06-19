import { BigNumber, Contract, ethers } from "ethers";
// import vm_abi from "@/lib/web3/abis/VM.json";
import { getWallet, approveForRelayer, permit } from "@/lib/web3/web3C2E";
import { simulate } from "./web3Simulater";
import VendingMachine from "@/lib/web3/abis/VendingMachine.json";

export const vmCA = "0xA1BD41e01e9979710360213e6F0f485df5D3c54d";

const vm_address = process.env.NEXT_PUBLIC_VM_ADDRESS || "";
const relayer_privatekey = process.env.NEXT_PUBLIC_RELAYER_PRIVATEKEY || "";
const rpc_url = process.env.NEXT_PUBLIC_RPC_URL_BIFROST || "";

const provider = new ethers.providers.JsonRpcProvider(rpc_url);
const relayer = new ethers.Wallet(relayer_privatekey, provider);
const VMContract = new ethers.Contract(vm_address, VendingMachine.abi, relayer);

const getNonce = async (privateKey: string) => {
  const wallet = getWallet(privateKey);
  const nonce = await wallet.getTransactionCount("latest");
  return nonce;
};

export const getItemPrice = async (itemId: number) => {
  const item = (await VMContract.getItems())[itemId];
  const itemPrice = ethers.utils.formatEther(item.price.toString());
  return itemPrice;
};

export const insertCoin = async (itemId: number, privateKey: string) => {
  const result = {
    gifticonHash: "",
    txHash: "",
    error: "",
  };

  try {
    await permit(privateKey).then(() => {
      // vending-machine
    });

    return result;
  } catch (error: any) {
    console.error(error, "error error");
    const errBody = JSON.parse(
      error?.error?.body ?? {
        error: {
          message: "Unknown Error",
        },
      }
    );
    const message = errBody.error.message;
    const match = message.match(/revert (.*)/);
    const insufficient = message.match(/insufficient (.*)/);

    const extractedMessage = match
      ? match[1]
      : insufficient
      ? "insufficient funds"
      : "Unknown Error";
    return {
      gifticonHash: "",
      txHash: "",
      error: extractedMessage,
    };
  }
};
