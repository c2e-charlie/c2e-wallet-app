import { NATIVE_TOKEN_ADDRESS } from "@thirdweb-dev/react";
import BFC_TOKEN_IMAGE from "@/assets/images/tokens/BFC.png";
import C2E_TOKEN_IMAGE from "@/assets/images/tokens/C2E.png";
import mintingImage1 from "@/assets/images/mintings/minting1.png";
import mintingImage2 from "@/assets/images/mintings/minting2.png";
import mintingImage3 from "@/assets/images/mintings/minting3.png";
import mintingImage4 from "@/assets/images/mintings/minting4.png";

export const C2E_ADDRESS =
  process.env.NEXT_PUBLIC_C2E_ADDRESS ||
  "0x059BAf8874837895aDe3a1AF4f0A19C1a9385FEF";
const NFT_ADDRESS = process.env.NEXT_PUBLIC_NFT_ADDRESS;

const TokenAddresses = [
  {
    address: NATIVE_TOKEN_ADDRESS,
    image: BFC_TOKEN_IMAGE,
  },
  {
    address: C2E_ADDRESS || "0x059BAf8874837895aDe3a1AF4f0A19C1a9385FEF",
    image: C2E_TOKEN_IMAGE,
  },
];

const NftAddresses = [
  {
    address: NFT_ADDRESS || "0x7B2186759479704D77649Ff3f7b681bE8fBe8c37",
    images: [mintingImage2, mintingImage1, mintingImage3, mintingImage4],
  },
];

export { TokenAddresses, NftAddresses };
