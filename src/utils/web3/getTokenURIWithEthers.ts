import { ethers } from "ethers";

const ERC721_ABI = [
  {
    constant: true,
    inputs: [
      {
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
];

export async function getTokenURIWithEthers(tokenId: number): Promise<string> {
  const provider = new ethers.providers.JsonRpcProvider(
    "https://public-01.mainnet.bifrostnetwork.com/rpc"
  );
  const contract = new ethers.Contract(
    process.env.NEXT_PUBLIC_NFT_ADDRESS as string,
    ERC721_ABI,
    provider
  );

  try {
    const uri = await contract.tokenURI(tokenId);
    return uri;
  } catch (error) {
    throw new Error(
      `Error fetching tokenURI with ethers.js: ${error as string}`
    );
  }
}
