import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  Button,
  SafeAreaView,
} from "react-native";
import Icon from "react-native-vector-icons/Foundation";

import * as WebBrowser from "expo-web-browser";
import * as Linking from "expo-linking";

import { useSelector, useDispatch } from "react-redux";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function UserInfo({ navigation }) {
  // const profileImage = require("../assets/profile.jpeg");
  const name = useSelector((state) => state.profileReducer);
  const profileImage = useSelector((state) => state.picReducer);
  const dispatch = useDispatch();

  function handleRedirect() {
    dispatch(setUserId(null));
    WebBrowser.dismissBrowser();
    navigation.navigate("Home");
  }
  if (name[0].name === "" || null) {
    return (
      <SafeAreaView style={styles.background}>
        <Image
          source={require("./../assets/logo_bowl.png")}
          style={styles.logo}
        />
        <Text>
          You are not logged in, please log in before trying to view your
          profile.
        </Text>
        <Button
          title="Go To Home"
          onPress={() => {
            // Navigate using the `navigation` prop that you received
            navigation.navigate("Home");
          }}
        />

        <Button
          title="Go To Login"
          onPress={() => {
            // Navigate using the `navigation` prop that you received
            navigation.navigate("Login");
          }}
        />
      </SafeAreaView>
    );
  } else {
    console.log(name);
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <Image style={styles.avatar} source={profileImage} />
            <Text style={styles.name}>Your name is, {name[0].name}!</Text>
          </View>
        </View>

        <View style={styles.body}>
          <View style={styles.item}>
            <View style={styles.iconContent}>
              <Icon style={styles.icon} name="key" size={30} />
            </View>
            <View style={styles.infoContent}>
              <Text
                style={styles.info}
                onPress={() => navigation.navigate("ChangePassword")}
              >
                Change Password
              </Text>
            </View>
          </View>

          <View style={styles.item}>
            <View style={styles.iconContent}>
              <Icon style={styles.icon} name="heart" size={30} />
            </View>
            <View style={styles.infoContent}>
              <Text
                style={styles.info}
                onPress={() => navigation.navigate("Favorites")}
              >
                Favorites
              </Text>
            </View>
            <View>
              <TouchableOpacity
                onPress={async () => {
                  Linking.addEventListener("url", handleRedirect);
                  const redirectUrl = Linking.makeUrl("/");
                  await WebBrowser.openBrowserAsync(
                    `https://${process.env.REACT_APP_APP_AUTHDOMAIN}/v2/logout?client_id=${process.env.REACT_APP_APP_AUTHID}&returnTo=${redirectUrl}`
                  );
                  console.log(redirectUrl);
                  Linking.removeEventListener("url", handleRedirect);
                  dispatch(setProfile(null));
                  dispatch(setUserId(null));
                }}
              >
                Log out
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#F9C74F",
  },
  background: {
    alignItems: "center",
  },
  headerContent: {
    padding: 30,
    alignItems: "center",
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    color: "#000000",
    fontWeight: "600",
  },
  userInfo: {
    fontSize: 16,
    color: "#778899",
    fontWeight: "600",
  },
  body: {
    backgroundColor: "#DCDCDC",
    height: 500,
    alignItems: "center",
  },
  logo: {
    marginTop: 3,
    width: 100,
    height: 100,
  },
  item: {
    flexDirection: "row",
  },
  infoContent: {
    flex: 1,
    alignItems: "flex-start",
    paddingLeft: 5,
  },
  iconContent: {
    flex: 1,
    alignItems: "flex-end",
    paddingRight: 5,
  },
  icon: {
    width: 30,
    height: 30,
    marginTop: 20,
  },
  info: {
    fontSize: 18,
    marginTop: 20,
    color: "#FFFFFF",
  },
  button: {
    marginTop: 10,
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    backgroundColor: "#00BFFF",
  },
});
