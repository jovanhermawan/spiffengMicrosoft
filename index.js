import 'react-native-gesture-handler';
import { registerRootComponent } from 'expo';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Page from './Page';
import App from './Homescreen'

import Welcome from './Welcome';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(App);

