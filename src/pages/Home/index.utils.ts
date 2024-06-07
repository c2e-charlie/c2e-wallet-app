import BigNumber from 'bignumber.js';

export const handleInputChange = (
  text: string,
  myPoint: number,
  dailyMaxChangeC2e: number,
  exChangeRate: number,
  setInputPoint: (value: string) => void,
) => {
  if (text === '' || text === '.' || text.endsWith('.')) {
    setInputPoint(text);
    return;
  }
  const match = text.match(/^(\d+(\.\d{0,3})?)?/);
  if (match) {
    text = match[0];
  }
  let newPoint = new BigNumber(text);
  if (newPoint.isNaN()) {
    newPoint = new BigNumber(0);
  }
  if (newPoint.isGreaterThan(myPoint)) {
    newPoint = new BigNumber(myPoint);
  }
  if (newPoint.isGreaterThan(dailyMaxChangeC2e / exChangeRate)) {
    newPoint = new BigNumber(dailyMaxChangeC2e / exChangeRate);
  }
  setInputPoint(newPoint.toString());
};
