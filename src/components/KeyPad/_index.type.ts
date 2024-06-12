export interface NumberPadProps {
  onValueChange: (value: string | ((prevValue: string) => string)) => void;
}
