export const shuffle = (array: any) => {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
};

export const randomKeyPadHandlePress = (
  input: string,
  setInput: (value: string | ((prevValue: string) => string)) => void,
  openModal: () => void,
) => {
  if (input === 'C') {
    setInput(prevValue => prevValue.slice(0, -1));
  } else if (input === '.') {
    openModal();
  } else {
    setInput(prevValue => prevValue + input);
  }
};
