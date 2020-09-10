import React, { useState, useEffect } from "react";
// import { StyleSheet, Text, View } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
// import { createDrawerNavigator } from "react-navigation-drawer";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import About from "./components/About";
import Details from "./components/Details";
import Auth from "./components/Auth";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import Navigator from "./components/Drawer";

const fetchFonts = () => {
  return Font.loadAsync({
    "MPLUS1p-Black": require("./assets/fonts/MPLUS1p-Black.ttf"),
    "MPLUS1p-Bold": require("./assets/fonts/MPLUS1p-Bold.ttf"),
    "MPLUS1p-ExtraBold": require("./assets/fonts/MPLUS1p-ExtraBold.ttf"),
    "MPLUS1p-Medium": require("./assets/fonts/MPLUS1p-Medium.ttf"),
  });
};

const store = createStore(rootReducer);

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
      />
    );
  }

  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}
