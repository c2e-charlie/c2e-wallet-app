import BigNumber from 'bignumber.js';

export const formatNumber = (input: number | string): string => {
  let num = new BigNumber(input);
  if (num.isNaN()) {
    num = new BigNumber(0);
  }
  let numStr = num.toString();
  const decimalIndex = numStr.indexOf('.');
  if (decimalIndex !== -1 && numStr.length > decimalIndex + 4) {
    numStr = numStr.substring(0, decimalIndex + 4);
  }
  numStr = numStr.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return numStr;
};
