import * as React from "react";
import { Button, View, Text, StyleSheet } from "react-native";
import { createAppContainer } from "react-navigation";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { useSelector } from "react-redux";
// import Icon from "react-native-vector-icons/FontAwesome";
import Login from "./Auth";
import SignUp from "./SignUp";
import Search from "./Home";
import Landing from "./Landing";
import About from "./About";
import Details from "./Details";
import UserInfo from "./UserInfo";
import FavoritesView from "./FavoritesView";
import Preferences from "./Preferences";
import Auth from "./Auth";
import ChangePassword from "./ChangePassword";

export default function DrawerNavigator() {
  const MainDrawerNavigator = createDrawerNavigator();
  const name = useSelector((state) => state.profileReducer)[0].name;

  const Stack = createStackNavigator();
  function SearchStack() {
    return (
      <Stack.Navigator
        headerShown={false}
        options={{ headerMode: "none", headerShown: false }}
      >
        <Stack.Screen
          name="Search"
          component={Search}
          options={{
            headerMode: "none",
            header: null,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{
            headerMode: "none",
            header: null,
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    );
  }

  return (
    <MainDrawerNavigator.Navigator
      initialRouteName="Landing"
      // drawerContent={(props) => <CustomDrawerContent {...props} />}
      options={{
        headerStyle: { backgroundColor: "#f4511e" },
        headerTintColor: "#fff",
        headerTitleStyle: {
          color: "white",
        },
        contentOptions: {
          // add your styling here
          activeTintColor: "white",
          itemsContainerStyle: {
            marginVertical: 0,
          },
          iconContainerStyle: {
            opacity: 1,
          },
        },
        drawerBackgroundColor: "#F8961E", // sets background color of drawer
      }}
    >
      <MainDrawerNavigator.Screen name="Home" component={Landing} />
      <MainDrawerNavigator.Screen name="Search" component={SearchStack} />
      {name ? (
        <>
          <MainDrawerNavigator.Screen
            name="Profile"
            component={UserInfoStack}
          />
        </>
      ) : (
        <>
          <MainDrawerNavigator.Screen name="Login" component={Auth} />
        </>
      )}

      <MainDrawerNavigator.Screen name="Preferences" component={Preferences} />
      <MainDrawerNavigator.Screen name="About" component={About} />
      <MainDrawerNavigator.Screen name="Favorites" component={FavoritesView} />
    </MainDrawerNavigator.Navigator>
  );
}

const styles = StyleSheet.create({});
