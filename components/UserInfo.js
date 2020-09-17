import React, { Component } from "react";
import {
  StyleSheet,
  // View,
  Image,
  // Text,
  // Button,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import {
  Container,
  View,
  Footer,
  FooterTab,
  Button,
  Icon,
  Text,
} from "native-base";

import * as WebBrowser from "expo-web-browser";
import * as Linking from "expo-linking";
import { useSelector, useDispatch } from "react-redux";
import { setProfile, setPic, setUserId, setLoginStatus } from "../actions";
import Nav from "./Nav";

export default function UserInfo({ navigation }) {
  // const profileImage = require("../assets/profile.jpeg");
  const name = useSelector((state) => state.profileReducer);
  const profileImage = useSelector((state) => state.picReducer);

  const dispatch = useDispatch();

  function handleRedirect() {
    dispatch(setUserId(null));
    dispatch(setProfile(null));
    WebBrowser.dismissBrowser();
    navigation.navigate("Home");
  }

  if (!name) {
    return (
      <Container>
        <Nav />
        <View style={styles.container}>
          <View style={styles.body}>
            <Text style={styles.text}>
              You are not logged in, please log in before trying to view your
              profile.
            </Text>
            <View style={styles.button}>
              <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                <Text style={styles.text}>Go home to login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <Footer>
          <FooterTab style={{ backgroundColor: "#F3722C" }}>
            <Button vertical onPress={() => navigation.navigate("Home")}>
              <Icon name="home" style={{ color: "#fff" }} />
              <Text style={{ color: "#fff" }}>Home</Text>
            </Button>
            <Button vertical onPress={() => navigation.navigate("Search")}>
              <Icon name="eye" style={{ color: "#fff" }} />
              <Text style={{ color: "#fff" }}>Search</Text>
            </Button>
            <Button vertical onPress={() => navigation.navigate("Preferences")}>
              <Icon active name="pizza" style={{ color: "#fff" }} />
              <Text style={{ color: "#fff" }}>Preference</Text>
            </Button>
            <Button
              active
              vertical
              onPress={() => navigation.navigate("Profile")}
              style={{ backgroundColor: "#F8961E" }}
            >
              <Icon name="person" style={{ color: "#fff" }} />
              <Text style={{ color: "#fff" }}>User</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  } else {
    return (
      <Container>
        <Nav />
        <View style={styles.container}>
          <View style={styles.body}>
            <Text style={styles.name}>Hello, {name} !</Text>
            <View style={styles.button}>
              <TouchableOpacity onPress={() => navigation.navigate("Share")}>
                <Text style={styles.text}>Share</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.button}>
              <TouchableOpacity onPress={() => navigation.navigate("Receive")}>
                <Text style={styles.text}>Receive</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.button}>
              <TouchableOpacity
                onPress={() => navigation.navigate("Favorites")}
              >
                <Text style={styles.text}>Favorites</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.button}>
              <TouchableOpacity
                onPress={() => navigation.navigate("Change Password")}
              >
                <Text style={styles.text}>Change Password</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.button}>
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
                  dispatch(setLoginStatus());
                }}
              >
                <Text style={styles.text}>Logout</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Footer>
          <FooterTab style={{ backgroundColor: "#F3722C" }}>
            <Button vertical onPress={() => navigation.navigate("Home")}>
              <Icon name="home" style={{ color: "#fff" }} />
              <Text style={{ color: "#fff" }}>Home</Text>
            </Button>
            <Button vertical onPress={() => navigation.navigate("Search")}>
              <Icon name="eye" style={{ color: "#fff" }} />
              <Text style={{ color: "#fff" }}>Search</Text>
            </Button>
            <Button vertical onPress={() => navigation.navigate("Preferences")}>
              <Icon active name="pizza" style={{ color: "#fff" }} />
              <Text style={{ color: "#fff" }}>Preference</Text>
            </Button>
            <Button
              active
              vertical
              onPress={() => navigation.navigate("Profile")}
              style={{ backgroundColor: "#F8961E" }}
            >
              <Icon name="person" style={{ color: "#fff" }} />
              <Text style={{ color: "#fff" }}>User</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9C74F",
    padding: 5,
  },

  name: {
    fontSize: 22,
    color: "#000000",
    fontWeight: "600",
  },

  body: {
    alignItems: "center",
  },
  logo: {
    marginTop: 3,
    width: 100,
    height: 100,
  },
  text: {
    marginVertical: 10,
    fontFamily: "MPLUS1p-Medium",
    textAlign: "center",
    color: "#fff",
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
    backgroundColor: "#E6772E",
  },
});
