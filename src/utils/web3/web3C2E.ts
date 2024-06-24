import { ethers } from "ethers";
import c2e_abi from "@/lib/web3/abis/ERC20Permit.json";
import { simulate } from "./web3Simulater";
import {updateTransfer} from "@/lib/web3/web3Transaction";

const c2e_address = process.env.NEXT_PUBLIC_C2E_ADDRESS || "";
const relayer_privatekey = process.env.NEXT_PUBLIC_RELAYER_PRIVATEKEY || "";
const rpc_url = process.env.NEXT_PUBLIC_RPC_URL_BIFROST || "";

const provider = new ethers.providers.JsonRpcProvider(rpc_url);
export const relayer = new ethers.Wallet(relayer_privatekey, provider);
const C2EContract = new ethers.Contract(c2e_address, c2e_abi.abi, relayer);

export const getWallet = (privatekey: string) => {
  const wallet = new ethers.Wallet(privatekey, provider);
  return wallet;
};
export const permit = async (
  fromPrivateKey: string,
  spenderAddress?: string
) => {
  const fromWallet = getWallet(fromPrivateKey);
  const fromC2EBalance = await getC2EBalance(fromWallet.address);
  const spender = spenderAddress ?? relayer.address;

  const domain = {
    name: await C2EContract.name(),
    version: "1",
    chainId: (await provider.getNetwork()).chainId,
    verifyingContract: C2EContract.address,
  };
  const types = {
    Permit: [
      { name: "owner", type: "address" },
      { name: "spender", type: "address" },
      { name: "value", type: "uint256" },
      { name: "nonce", type: "uint256" },
      { name: "deadline", type: "uint256" },
    ],
  };
  const nonce = await C2EContract.nonces(fromWallet.address);
  const message = {
    owner: fromWallet.address,
    spender: spender,
    value: ethers.utils.parseUnits(fromC2EBalance, 18),
    nonce: nonce,
    deadline: Math.floor(Date.now() / 1000) + 3600,
  };

  const signature = await fromWallet._signTypedData(domain, types, message);
  const { v, r, s } = ethers.utils.splitSignature(signature);

  try {
    const resultSimulate = await simulate("c2e_permit", [
      message.owner,
      message.spender,
      message.value,
      message.deadline,
      v,
      r,
      s,
    ]);

    let receipt: any;

    try {
      const permit = await C2EContract.permit(
        message.owner,
        message.spender,
        message.value,
        message.deadline,
        v,
        r,
        s,
        {
          gasPrice: resultSimulate.overrides.gasPrice,
          gasLimit: resultSimulate.overrides.gasLimit,
        }
      );
      receipt = await permit.wait();
    } catch (e) {
      // retryTx
      const permit = await C2EContract.permit(
        message.owner,
        message.spender,
        message.value,
        message.deadline,
        v,
        r,
        s,
        {
          gasPrice: resultSimulate.overrides.gasPrice.mul(2),
          gasLimit: resultSimulate.overrides.gasLimit.add(
            ethers.BigNumber.from("100000")
          ),
        }
      );
      receipt = await permit.wait();
    }

    if (receipt.status === 1) {
      return { result: true, message: "" };
    } else {
      return { result: false, message: resultSimulate.message };
    }
  } catch (error: any) {
    const errBody = JSON.parse(
      error?.error?.body ?? '{"error": {"message": "Unknown Error"}}'
    );
    const message = errBody.error.message;
    return { result: false, message: message };
  }
};

export const getC2EBalance = async (address: string) => {
  const balance = await C2EContract.balanceOf(address);
  const result = ethers.utils.formatEther(balance.toString());
  return result;
};

export const sendC2E = async (
  fromPrivateKey: string,
  toAddress: string,
  amount: number,
  txId: number
) => {
  const fromWallet = getWallet(fromPrivateKey);
  const resultPermit = await permit(fromPrivateKey);

  const executeTransfer = async (gasPrice: any, gasLimit: any, txId: number) => {
    const transferFrom = await C2EContract.transferFrom(
      fromWallet.address,
      toAddress,
      ethers.utils.parseUnits(amount.toString(), 18),
      { gasPrice, gasLimit }
    );
    await updateTransfer(transferFrom.hash, "PENDING", txId, fromPrivateKey);
    return await transferFrom.wait()
  };

  if (!resultPermit.result) {
    return { result: false, message: resultPermit.message };
  }

  try {
    const resultSimulate = await simulate("c2e_transferFrom", [
      fromWallet.address,
      toAddress,
      ethers.utils.parseUnits(amount.toString(), 18),
    ]);

    try {
      const receipt = await executeTransfer(
        resultSimulate.overrides.gasPrice,
        resultSimulate.overrides.gasLimit,
        txId
      );
      await updateTransfer(receipt.transactionHash, "SUCCESS", txId, fromPrivateKey);
      return receipt.transactionHash;
    } catch (error: any) {
      const receipt = await executeTransfer(
        resultSimulate.overrides.gasPrice.mul(2),
        resultSimulate.overrides.gasLimit.add(ethers.BigNumber.from("100000")),
        txId
      );
      await updateTransfer(receipt.transactionHash, "SUCCESS", txId, fromPrivateKey);
      return receipt.transactionHash;
    }
  } catch (error: any) {
    const errBody = JSON.parse(error?.error?.body ?? '{"error": {"message": "Unknown Error"}}');
    const message = errBody.error.message;
    console.log("c2e sender error", message);
    await updateTransfer(error.transactionHash, "FAIL", txId, fromPrivateKey);
  }
};

export const approveForRelayer = async () => {
  try {
    const fromC2EBalance = await getC2EBalance(relayer.address);
    console.log(fromC2EBalance, relayer.address, "fromC2EBalance");
    const approve = await C2EContract.approve(
      "0xA1BD41e01e9979710360213e6F0f485df5D3c54d",
      ethers.utils.parseUnits(fromC2EBalance, 18)
    );
    await approve.wait();
  } catch (error) {
    console.log(error);
  }
};
