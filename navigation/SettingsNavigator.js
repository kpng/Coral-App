import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import SettingsScreen from '../screens/SettingsScreen';
import TabBarIconFontAwesome from '../components/TabBarIconFontAwesome';


const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});


SettingsStack.navigationOptions = {
  tabBarVisible: false,
  // tabBarLabel: 'Sign In',
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
  SettingsStack,
},

);
