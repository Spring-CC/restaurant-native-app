import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Slide from './components/Pictureslider'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Home from './components/Home';
import About from './components/About';
import Details from './components/Details';
import Drawer from './components/Drawer'

const AppNavigator = createStackNavigator(
  {
    Home: Home,
    Drawer: Drawer,
    Login: Login,
    CreateAccount: SignUp,
    PictureSlider: Slide,
    About : About,
    Details : Details
  },
  {
    initialRouteName: 'Home',
  },
);

export default createAppContainer(AppNavigator);