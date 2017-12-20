import React from 'react';
import { Platform, StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';

import WelcomeScreen from './src/pages/Welcome';
import DrawerScreen from './src/pages/DrawerIndex';

const Main = StackNavigator({
  Home: {
    screen: WelcomeScreen,
  },
  Drawer: {
    screen: DrawerScreen,
  },

});

export default Main;
