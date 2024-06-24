/* eslint-disable react-native/no-inline-styles */
import theme from './theme';
import 'react-native-gesture-handler';
import Navigations from '@/navigations';
import React, { useEffect } from 'react';
import Toast from 'react-native-toast-message';
import SplashScreen from 'react-native-splash-screen';
import { ThemeProvider } from 'styled-components/native';
import { SnackbarConfig } from './configs/SnackbarConfig';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaView, StatusBar, useColorScheme, View } from 'react-native';

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
      <GestureHandlerRootView style={{ flex: 1 }}>
        <BottomSheetModalProvider>
          <View style={backgroundStyle}>
            <StatusBar
              barStyle={isDarkMode ? 'light-content' : 'dark-content'}
              backgroundColor={backgroundStyle.backgroundColor}
            />
            <NavigationContainer>
              <Navigations />
            </NavigationContainer>
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
