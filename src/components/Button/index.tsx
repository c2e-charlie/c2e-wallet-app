import { TouchableOpacity, Text } from 'react-native';

export type ButtonProps = {
  onPress: () => void;
  text: string;
};

const Button = ({ onPress, text }: ButtonProps) => {
  return (
    <TouchableOpacity
      style={{
        borderWidth: 1,
        borderRadius: 30,
        paddingHorizontal: 71,
        paddingVertical: 21,
        backgroundColor: '#1BE0CD',
        borderColor: '#FFFFFF',
      }}
      activeOpacity={0.3}
      onPress={onPress}>
      <Text
        style={{
          color: '#FFFFFF',
          fontWeight: 800,
          fontSize: 16,
          lineHeight: 17.68,
        }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
