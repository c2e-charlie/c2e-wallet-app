export const checkAddress = (
  address: string,
  setIsAddressError: (value: boolean) => void,
) => {
  // 지갑 주소가 완전히 입력되지 않았다면 에러 체크를 하지 않습니다.
  if (address.length < 42) {
    setIsAddressError(false);
    return;
  }
  // 지갑 주소의 유효성을 검사합니다.
  const isValidAddress = /^0x[a-fA-F0-9]{40}$/.test(address);
  setIsAddressError(!isValidAddress);
};

export const isDeleteActive = (
  isDeleteState: boolean,
  setIsDeleteState: (value: boolean) => void,
) => {
  setIsDeleteState(!isDeleteState);
};
