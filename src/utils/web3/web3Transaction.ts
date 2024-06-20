import {ethers} from "ethers";
import {getWallet} from "@/lib/web3/web3C2E";
import ApiManager from "@/app/lib/apiClient/api";

export async function sendEther(fromPrivateKey: string, toAddress: string, amount: string, txid: number) {
  const fromWallet = getWallet(fromPrivateKey)
  let transaction = {to: toAddress, value: ethers.utils.parseEther(amount)}
  const txResponse = await fromWallet.sendTransaction(transaction)
  await updateTransfer(txResponse.hash, "PENDING", txid, fromPrivateKey)
  try{
    const txReceipt = await txResponse.wait();
    await updateTransfer(txResponse.hash, "SUCCESS", txid, fromPrivateKey)
    return txReceipt.transactionHash
  }catch (err){
    console.log('[bifrostSendEther] sendEther error', err)
    await updateTransfer(txResponse.hash, "FAIL", txid, fromPrivateKey)
  }
}

export const updateTransfer = async (txHash: string, transState: string, txId: number, fromPrivateKey: string) => {
  const apiClient = new ApiManager(fromPrivateKey)
  try {
    await apiClient.updateTransfer(txId, { txHash, transState });
  } catch (err) {
    console.log('[updateTransfer] error', err);
  }
}