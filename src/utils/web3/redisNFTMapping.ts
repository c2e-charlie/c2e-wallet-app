import fetch from "node-fetch";

const UPSTASH_ENDPOINT = "https://apn1-driving-basilisk-33627.upstash.io";
const AUTH_TOKEN = `Bearer AYNbACQgMGZiMGJkNjktODU3Mi00OGZmLWIwYmEtMDBkZGU3NmY4NWE5Zjk4ZjkxZWFmNmUyNDlkNDkyZTM0YTMyMjYwNDM5MTQ=`;

interface ResponseData {
  result: number[];
  error?: string;
}

export async function associateNFTWithAddress(
  ethAddress: string,
  nftID: number
): Promise<ResponseData> {
  const url = `${UPSTASH_ENDPOINT}/rpush/${ethAddress}/${nftID}`;

  const response = await fetch(url, {
    headers: {
      Authorization: AUTH_TOKEN,
    },
  });

  return response.json() as unknown as ResponseData; // 타입 단언 사용
}

export async function retrieveNFTsForAddress(
  ethAddress: string
): Promise<ResponseData> {
  const url = `${UPSTASH_ENDPOINT}/lrange/${ethAddress}/0/-1`;

  const response = await fetch(url, {
    headers: {
      Authorization: AUTH_TOKEN,
    },
  });

  return response.json() as unknown as ResponseData; // 타입 단언 사용
}
