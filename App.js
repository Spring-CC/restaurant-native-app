import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Slide from './components/pictureslider'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Home from './components/Home';
import About from './components/About';
import Details from './components/Details';

const AppNavigator = createStackNavigator(
  {
    Home: Home,
    Login: Login,
    CreateAccount: SignUp,
    PictureSlider: Slide,
    About : About,
    Details : Details
  },
  {
    initialRouteName: 'Login',
  },
);

let Navigation = createAppContainer(AppNavigator);

export default function App() {

  
    return (
      <Navigation/>
    );
}
