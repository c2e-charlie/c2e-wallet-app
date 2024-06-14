import React from 'react';
import { StatusBar, useColorScheme, View } from 'react-native';
import 'react-native-gesture-handler';
import RootNavigator from './navigations/Stack';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { ThemeProvider } from 'styled-components/native';
import theme from './theme';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <ThemeProvider theme={theme}>
      <GestureHandlerRootView>
        <BottomSheetModalProvider>
          <View style={backgroundStyle}>
            <StatusBar
              barStyle={isDarkMode ? 'light-content' : 'dark-content'}
              backgroundColor={backgroundStyle.backgroundColor}
            />
            <RootNavigator />
          </View>
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </ThemeProvider>
  );
}

export default App;
