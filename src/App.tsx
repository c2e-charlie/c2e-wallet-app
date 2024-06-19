import React, { useEffect } from 'react';
import { SafeAreaView, StatusBar, useColorScheme, View } from 'react-native';
import 'react-native-gesture-handler';
import RootNavigator from './navigations/Stack';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { ThemeProvider } from 'styled-components/native';
import theme from './theme';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Toast from 'react-native-toast-message';
import { SnackbarConfig } from './configs/SnackbarConfig';
import SplashScreen from 'react-native-splash-screen';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  useEffect(() => {
    SplashScreen.hide();
  }, []);

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
            <View style={{ marginHorizontal: 0 }}>
              <Toast config={SnackbarConfig} />
            </View>
          </View>
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </ThemeProvider>
  );
}

export default App;
