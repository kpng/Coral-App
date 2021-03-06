import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import AuthScreen from '../screens/AuthScreen';
import SignUpScreen from '../screens/SignUpScreen';
import TabBarIconFontAwesome from '../components/TabBarIconFontAwesome';


// const SignUpStack = createStackNavigator({
//   SignUp: SignUpScreen,
// });


// SignUpStack.navigationOptions = {
//   tabBarVisible: false,
//   // tabBarLabel: 'Sign Up',
//   // tabBarIcon: ({ focused }) => (
//   //   <TabBarIcon
//   //     focused={focused}
//   //     name={
//   //       Platform.OS === 'ios'
//   //         ? `ios-search${focused ? '' : '-outline'}`
//   //         : 'md-search'
//   //     }
//   //   />
//   // ),
// }

const AuthStack = createStackNavigator({
  Auth: AuthScreen,
  SignUp: SignUpScreen,
});


AuthStack.navigationOptions = {
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
  AuthStack,
  // SignUpStack,
},

);
