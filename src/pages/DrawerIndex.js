import React from 'react';
import { Platform, StatusBar } from 'react-native';
import { DrawerNavigator } from 'react-navigation';

import ResumeScreen from './Resume';
import RelatorioScreen from './Relatorio';

const Drawer = DrawerNavigator({
  Resume: {
    screen: ResumeScreen,
  },
  Relatorio: {
    screen: RelatorioScreen,
  },
});

export default Drawer;
