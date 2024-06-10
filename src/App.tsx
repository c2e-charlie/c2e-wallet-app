import React from 'react';
import { StatusBar, useColorScheme, View } from 'react-native';
import 'react-native-gesture-handler';
import RootNavigator from './navigations/Stack';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { ThemeProvider } from 'styled-components/native';
import theme from './theme';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <ThemeProvider theme={theme}>
      <View style={backgroundStyle}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <RootNavigator />
      </View>
    </ThemeProvider>
  );
}

export default App;
