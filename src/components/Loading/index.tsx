import { ActivityIndicator, View } from 'react-native';

const Loading = () => {
  return (
    <View>
      <ActivityIndicator size={'large'} color={'#0000ff'} />
    </View>
  );
};

export default Loading;
