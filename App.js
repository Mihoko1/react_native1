import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import HomeScreen from './screens/home';
import WishlistScreen from './screens/wishlist';
import MembershipScreen from './screens/membership';
import ProductMainScreen from './screens/productMain';
import DetailsScreen from './screens/details';

const tintColor = "#43464b";
const tabNavigator =  createBottomTabNavigator({
    Home:{
      screen: HomeScreen,
        navigationOptions: {
          tabBarIcon: ({ tintColor }) => 
            <Icon name='home' color={ tintColor } size={28} />
        },
        tabBarOptions: {
          tintColor: '#43464b',
          activeTintColor: '#43464b',
          activeBackgroundColor: '#ffffff',
          inactiveBackgroundColor: '#ffffff',
          inactiveTintColor: "#3f3f3f",
          style: { borderTopWidth: 2, borderTopColor: '#5ab4bd' },
        },
        headerStyle: {  
          backgroundColor: '#fff',  
        },
        headerTitleStyle: {  
          fontWeight: 'bold',  
        },  
    },
    Wishlist:{
      screen: WishlistScreen,
        navigationOptions: {
          tabBarIcon: ({ tintColor }) => 
            <Icon name='heart' color={tintColor} size={24} />
        },
    },
    Membership:{
      screen: MembershipScreen,
        navigationOptions:{
          tabBarIcon: ({ tintColor }) => 
            <Icon name='user' color={tintColor} size={24} />
        },
    },
});

const ProductStack = createStackNavigator({
  Details: {
    screen: DetailsScreen,
    navigationOptions: {
      header: 'Products',               
      headerBackTitle: 'Back',    
    },
  },
  ProductMain: {
    screen: ProductMainScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'AAA',
    }),
  },
}, {
  headerMode: 'screen',
});

export default createAppContainer(tabNavigator)



