import React from 'react';
import { View, Text } from 'react-native';

const Community = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#EBF9FF',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text numberOfLines={1} ellipsizeMode="middle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. CurabiturLorem
        ipsum dolor sit amet, consectetur adipiscing elit. CurabiturLorem ipsum
        dolor sit amet, consectetur adipiscing elit. Curabitur
      </Text>
    </View>
  );
};

export default Community;
