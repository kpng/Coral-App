import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import RecycleScreen from '../screens/RecycleScreen';
import ProfileScreen from '../screens/ProfileScreen';
import TabBarIconFontAwesome from '../components/TabBarIconFontAwesome';


const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Collectors',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-search${focused ? '' : '-outline'}`
          : 'md-search'
      }
    />
  ),
};

const RecycleStack = createStackNavigator({
  Recycle: RecycleScreen,
});

RecycleStack.navigationOptions = {
  tabBarLabel: 'Recycle',
  tabBarIcon: ({ focused }) => (
    <TabBarIconFontAwesome
      focused={focused}
      name={Platform.OS === 'ios' ? `recycle${focused ? '' : ''}` : 'recycle'}
    />
  ),
};

const ProfileStack = createStackNavigator({
  Profile: ProfileScreen,
});

ProfileStack.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios-person' ? `user-circle${focused ? '' : '-outline'}` : 'md-person'}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  RecycleStack,
  ProfileStack,
});
