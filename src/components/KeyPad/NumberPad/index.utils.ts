export const handlePress = (
  input: string,
  setInput: (value: string | ((prevValue: string) => string)) => void,
) => {
  if (input === 'C') {
    setInput(prevValue => prevValue.slice(0, -1));
  } else {
    setInput(prevValue => prevValue + input);
  }
};
