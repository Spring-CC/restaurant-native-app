import React, { useEffect, useState } from "react";
import * as WebBrowser from "expo-web-browser";
import * as AuthSession from "expo-auth-session";
import jwtDecode from "jwt-decode";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  Alert,
  Platform,
} from "react-native";

import { useSelector, useDispatch } from "react-redux";
import { setProfile, setUserId, setLoginStatus, setRestaurantsList } from "../actions";
import axios from 'axios';

const authorizationEndpoint = process.env.REACT_APP_APP_AUTHENDPOINT;
const useProxy = Platform.select({ web: false, native: true, default: true });
const redirectUri = AuthSession.makeRedirectUri({ useProxy });
WebBrowser.maybeCompleteAuthSession();

export default function Landing({ navigation }) {
  const [name, setName] = useState(null);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.loginStatusReducer);

  const [request, result, promptAsync] = AuthSession.useAuthRequest(
    {
      redirectUri,
      clientId: process.env.REACT_APP_APP_AUTHID,
      // id_token will return a JWT token
      responseType: "id_token",
      // retrieve the user's profile
      scopes: ["openid", "profile"],
      extraParams: {
        // ideally, this will be a random value
        nonce: "nonce",
      },
    },
    { authorizationEndpoint }
  );
  console.log(`Redirect URL: ${redirectUri}`);

  async function getUserRecommendation(user) {
    try {
      const results = await axios.get(
        `https://restaurantserverspring.herokuapp.com/recommender/${user}`
      );
      const data = results.data;
        const allResults = await axios.get(
          "https://restaurantserverspring.herokuapp.com/restaurants"
        );
        const allRestaurants = allResults.data;
        for (let i = allRestaurants.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * i);
          const temp = allRestaurants[i];
          allRestaurants[i] = allRestaurants[j];
          allRestaurants[j] = temp;
        }
        const result = data.concat(allRestaurants);
        dispatch(setRestaurantsList(result));
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    if (result) {
      if (result.error) {
        Alert.alert(
          "Authentication error",
          result.params.error_description || "something went wrong"
        );
        return;
      }
      if (result.type === "success") {
        // Retrieve the JWT token and decode it
        const jwtToken = result.params.id_token;
        const decoded = jwtDecode(jwtToken);
        const { nickname } = decoded;
        const { sub } = decoded;
        const userId = sub.substr(6);
        setName(nickname);
        dispatch(setProfile(nickname));
        dispatch(setUserId(userId));
        dispatch(setLoginStatus(""));
        getUserRecommendation(userId);
      }
    }
  }, [result]);

  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image
          style={styles.logo}
          source={require("../assets/logo_bowl.png")}
        />
      </View>
      {isLoggedIn ? (
        <View>
          <View>
            <Text style={styles.welcometext}>Welcome, {name}!</Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              accessibilityTraits="button"
              onPress={() => {
                navigation.navigate("Profile");
              }}
              activeOpacity={0.8}
              style={styles.button}
            >
              <Text style={styles.text}>PROFILE</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
          <View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                disabled={!request}
                accessibilityTraits="button"
                title="LOGIN"
                onPress={() => {
                  promptAsync({ useProxy });
                }}
                activeOpacity={0.8}
                style={styles.button}
              >
                <Text style={styles.text}>LOGIN</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      <View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            accessibilityTraits="button"
            onPress={() => {
              navigation.navigate("Search");
            }}
            activeOpacity={0.8}
            style={styles.button}
          >
            <Text style={styles.text}>SEARCH</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            accessibilityTraits="button"
            onPress={() => {
              navigation.navigate("About");
            }}
            activeOpacity={0.8}
            style={styles.button}
          >
            <Text style={styles.text}>ABOUT</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    backgroundColor: "#F9C74F",
    alignItems: "center",
    height: "100%",
  },
  image: {
    height: 200,
  },
  button: {
    minWidth: "80%",
    backgroundColor: "transparent",
    elevation: 8,
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  logo: {
    flex: 1,
    width: 200,
    resizeMode: "center",
  },
  text: {
    marginVertical: 10,
    fontFamily: "MPLUS1p-Medium",
    textAlign: "center",
    color: "#fff",
  },
  separatorOr: {
    color: "#9B9FA4",
    paddingVertical: 5,
  },
  buttonContainer: {
    backgroundColor: "#E6772E",
    borderRadius: 5,
    padding: 8,
    margin: 8,
  },
  welcometext: {
    marginVertical: 10,
    fontFamily: "MPLUS1p-Medium",
    textAlign: "center",
    color: "#fff",
    fontSize: 20,
  },
});
