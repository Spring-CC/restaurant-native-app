import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Home from './components/Home';
// import Slide from './components/Pictureslider';
import About from './components/About';
import Details from './components/Details';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import increment from './reducers/increment';

const store = createStore(increment);

const AppNavigator = createStackNavigator(
  {
    Home: Home,
    Login: Login,
    CreateAccount: SignUp,
    About: About,
    Details: Details
  },
  {
    initialRouteName: "Home",
  }
);

const Navigator = createAppContainer(AppNavigator);

export default function App() {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}
