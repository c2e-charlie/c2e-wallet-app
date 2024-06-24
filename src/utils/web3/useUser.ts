import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { web3authState } from "../atom";
import { getLocalStorage, removeLocalStorage } from "../utils/localStorage";
import UseWeb3Auth from "./web3auth";
import { WALLET_ADAPTERS } from "@web3auth/base";

export default function useUser() {
  const [web3auth, setWeb3auth] = useRecoilState(web3authState);
  const [isInitiated, setIsInitiated] = useState<boolean>(true);

  useEffect(() => {
    console.log("check w3a in Initiating", web3auth);
    if (!web3auth) InitializeUser();
  }, []);

  useEffect(() => {
    if (!web3auth) return;
    initWeb3Auth();
  }, [web3auth]);

  const InitializeUser = async () => {
    setIsInitiated(false);
    try {
      if (!web3auth) {
        await UseWeb3Auth(setWeb3auth);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const initWeb3Auth = async () => {
    if (web3auth) {
      await web3auth.init();
      setIsInitiated(true);
    }
  };

  const login = async () => {
    if (!web3auth) return;
    web3auth.clearCache();
    await web3auth.connectTo(WALLET_ADAPTERS.OPENLOGIN, {
      mfaLevel: "none",
      loginProvider: "google",
    });
    setWeb3auth(web3auth);
  };

  const logout = async () => {
    if (web3auth) {
      web3auth.status = "connected";
      try {
        web3auth.logout();
      } catch (error) {
        console.error(error);
      } finally {
        const { srlNumber } = getLocalStorage("user");
        removeLocalStorage("user");
        removeLocalStorage("openlogin_store");
        removeLocalStorage("recoil-persist");
        setWeb3auth(null);
        srlNumber !== "undefined"
          ? (window.location.href = `/welcome?member_srl=${srlNumber}`)
          : (window.location.href = `/welcome`);
      }
    }
  };

  // 2. 로컬 스토리지에서 핀코드 확인
  // 3. 핀코드가 없다면:
  //    1. 사용자에게 핀코드 입력 받기
  //    2. 사용자에게 핀코드 재입력 받기
  //    3. 두 입력 값이 일치하면 로컬 스토리지에 핀코드 저장
  //    4. 일치하지 않으면 에러 메시지 출력 후 3.1로 돌아가기
  // 4. 로그아웃 과정 수행
  //    1. 로컬 스토리지에서 핀코드 삭제
  // 5. 앱 접근 시 핀코드 확인 프로세스
  //    1. 마지막 핀코드 입력 시간 확인
  //    2. 일정 시간이 지났다면:
  //       1. 사용자에게 핀코드 입력 받기
  //       2. 입력한 핀코드가 저장된 핀코드와 일치하면 접근 허용
  //       3. 일치하지 않으면 에러 메시지 출력 후 5.2.1로 돌아가기
  //    3. 일정 시간이 지나지 않았다면 접근 허용

  return {
    logout,
    login,
    isInitiated,
    setIsInitiated,
    web3auth,
  };
}
