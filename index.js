import './globals';
import 'react-native-get-random-values';
import 'react-native-url-polyfill/auto';

import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';
import StorybookUIRoot from './.storybook';

const useStorybook = false;

AppRegistry.registerComponent(appName, () =>
  useStorybook ? StorybookUIRoot : App,
);
