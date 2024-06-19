import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Quest from '@/pages/Quest';

const Stack = createNativeStackNavigator();

const QuestStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="quest" component={Quest} />
    </Stack.Navigator>
  );
};

export default QuestStack;
