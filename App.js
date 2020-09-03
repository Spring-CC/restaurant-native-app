import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Slide from './components/pictureslider'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from './components/Login';
import Home from './components/Home';
import SignUp from './components/SignUp';

const AppNavigator = createStackNavigator(
  {
    Home: Home,
    Login: Login,
    CreateAccount: SignUp,
    PictureSlider: Slide,
  },
  {
    initialRouteName: 'Login',
  },
);

// function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <Slide></Slide>
//           <AppNavigator/>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

export default createAppContainer(AppNavigator);