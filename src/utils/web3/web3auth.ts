"use client";
import { Web3AuthNoModal } from "@web3auth/no-modal";
import {
  CHAIN_NAMESPACES,
  ADAPTER_EVENTS,
  CONNECTED_EVENT_DATA,
} from "@web3auth/base";
import { OpenloginAdapter } from "@web3auth/openlogin-adapter";
import {
  getLocalStorage,
  setLocalStorage,
} from "../utils/localStorage";
import RPC from "./ethersRPC";
import { EthereumPrivateKeyProvider } from "@web3auth/ethereum-provider";

const clientId =
  "BJeNh9KOrwcrdkzjc-mBMrohQlP-VayrQgfAgmRlSIAnRVqC7hSGVOapUBEPLqeeEcIxjWvapAXm9C-pP07cxGo";

export default async (setWeb3auth: Function) => {
  try {
    const chainConfig = {
      chainNamespace: CHAIN_NAMESPACES.EIP155,
      chainId: "0xbfc",
      rpcTarget: "https://public-01.mainnet.bifrostnetwork.com/rpc",
      displayName: "Ethereum Mainnet",
      blockExplorer: "https://explorer.mainnet.thebifrost.io",
      ticker: "BFC",
      tickerName: "Bifrost",
    };
    const web3auth = new Web3AuthNoModal({
      clientId,
      web3AuthNetwork: "aqua", // mainnet, aqua, celeste, cyan or testnet
      chainConfig,
    });
    const privateKeyProvider = new EthereumPrivateKeyProvider({
      config: { chainConfig },
    });
    const openloginAdapter = new OpenloginAdapter({
      loginSettings: {
        mfaLevel: "none",
      },
      privateKeyProvider,
    });
    web3auth.configureAdapter(openloginAdapter);

    web3auth.on(ADAPTER_EVENTS.CONNECTED,
      async (data: CONNECTED_EVENT_DATA) => {
        if (!web3auth.provider) return;
        const rpc = new RPC(web3auth.provider);
        const userInfo = await web3auth.getUserInfo();
        const localUser = getLocalStorage("user");
        setLocalStorage("user", {
          ...localUser,
          privateKey: await rpc.getPrivateKey(),
        });
        setLocalStorage("openlogin_store", userInfo);
      }
    );
    web3auth.on(ADAPTER_EVENTS.CONNECTING, () => {
      console.log("connecting");
    });
    web3auth.on(ADAPTER_EVENTS.DISCONNECTED, () => {
      console.log("disconnected");

      const { srlNumber } = getLocalStorage("user");
      setWeb3auth(null);
      window.location.href = `/welcome?member_srl=${srlNumber}`;
    });
    web3auth.on(ADAPTER_EVENTS.ERRORED, (error) => {
      console.log("error", error);
    });
    setWeb3auth(web3auth);
  } catch (error) {
    console.error(error);
  }
};
