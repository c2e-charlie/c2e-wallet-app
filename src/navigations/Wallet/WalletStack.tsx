import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Wallet from '@/pages/Wallet';

const Stack = createNativeStackNavigator();

const WalletStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="wallet" component={Wallet} />
    </Stack.Navigator>
  );
};

export default WalletStack;
