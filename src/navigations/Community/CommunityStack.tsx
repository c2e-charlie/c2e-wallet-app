import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Community from '@/pages/Community';

const Stack = createNativeStackNavigator();

const CommunityStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="community" component={Community} />
    </Stack.Navigator>
  );
};

export default CommunityStack;
