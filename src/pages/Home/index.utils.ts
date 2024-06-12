import BigNumber from 'bignumber.js';

export const handleInputChange = (
  inputValue: string,
  userPoint: number,
  dailyMaxChangeC2e: number,
  ratio: number,
  setInputPoint: (value: string) => void,
) => {
  const isValidInput = /^[0-9]*\.?[0-9]*$/.test(inputValue);

  if (!isValidInput) {
    return setInputPoint('');
  }

  if (inputValue === '.' || inputValue === '..') {
    return setInputPoint('0.');
  }

  const decimalPart = inputValue.split('.')[1];
  if (decimalPart && decimalPart.length > 3) {
    // 소수점 이하 3자리 초과시 입력 무시
    setInputPoint(inputValue.slice(0, inputValue.length - 1));
  } else {
    const numericValue = new BigNumber(inputValue);
    const product = numericValue.multipliedBy(ratio);

    if (!numericValue.isNaN() && numericValue.isGreaterThan(userPoint)) {
      setInputPoint(userPoint.toString());
    } else if (!product.isNaN() && product.isGreaterThan(dailyMaxChangeC2e)) {
      setInputPoint(
        new BigNumber(dailyMaxChangeC2e).dividedBy(ratio).toFixed(3),
      );
    } else {
      setInputPoint(inputValue);
    }
  }
};
