import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import AuthScreen from '../screens/AuthScreen';
import TabBarIconFontAwesome from '../components/TabBarIconFontAwesome';

const AuthStack = createStackNavigator({
  Auth: AuthScreen,
});

AuthStack.navigationOptions = {
  tabBarLabel: '   ',
  // tabBarIcon: ({ focused }) => (
  //   <TabBarIcon
  //     focused={focused}
  //     name={
  //       Platform.OS === 'ios'
  //         ? `ios-search${focused ? '' : '-outline'}`
  //         : 'md-search'
  //     }
  //   />
  // ),
}



export default createBottomTabNavigator({
  AuthStack
});
