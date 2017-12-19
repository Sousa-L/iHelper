import React from 'react';
import { Platform, StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';

import WelcomeScreen from './src/pages/Welcome';
import ResumeScreen from './src/pages/Resume';

const Main = StackNavigator({
  Home: {
    screen: WelcomeScreen,
  },
  Resume: {
    screen: ResumeScreen,
  },

});

export default Main;
