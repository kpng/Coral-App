import React from 'react';
import { createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import AuthNavigator from './AuthNavigator';
import SettingsNavigator from './SettingsNavigator';


export default createSwitchNavigator(
  {
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  AuthLoading: AuthNavigator,
  Main: MainTabNavigator,
  Settings: SettingsNavigator,
  },
  {
    initialRouteName: 'AuthLoading',
    // initialRouteName: 'Main',
  }
);