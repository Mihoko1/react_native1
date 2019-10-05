import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import HomeScreen from './home';
import AboutScreen from './about';
import MembershipScreen from './setting';


export default createBottomTabNavigator({
  Home: HomeScreen,
  Details: AboutScreen,
  Membership: SettingScreen,
//   Login: LoginScreen,
});
