import React, { useEffect, useState } from "react";
import * as WebBrowser from "expo-web-browser";
import * as Linking from "expo-linking";
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
import { useDispatch } from "react-redux";
import { setProfile, setPic, setUserId } from "../actions";

const authorizationEndpoint = process.env.REACT_APP_APP_AUTHENDPOINT;
const useProxy = Platform.select({ web: false, native: true, default: true });
const redirectUri = AuthSession.makeRedirectUri({ useProxy });

export default function Landing({ navigation }) {
  const [name, setName] = useState(null);
  const [snap, setSnap] = useState(null);
  const [userId, setId] = useState(null);
  const dispatch = useDispatch();

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
        console.log(decoded);
        const { nickname } = decoded;
        const { picture } = decoded;
        const { sub } = decoded;
        const userId = sub.substr(6);
        setId(userId);
        setSnap(picture);
        setName(nickname);
        dispatch(setProfile(nickname));
        dispatch(setPic(picture));
        dispatch(setUserId(userId));
      }
    }
  }, [result]);

  function handleRedirect() {
    dispatch(setUserId(null));
    dispatch(setProfile(null));
    WebBrowser.dismissBrowser();
    navigation.navigate("Home", { screen: "Landing" });
  }

  return (
    <View>
      {name ? (
        <View style={styles.container}>
          <View style={styles.image}>
            <Image
              style={styles.logo}
              source={require("../assets/logo_bowl.png")}
            />
          </View>
          <View>
            <Text>Welcome, {name}!</Text>
          </View>

          <TouchableOpacity
            accessibilityTraits="button"
            onPress={async () => {
              Linking.addEventListener("url", handleRedirect);
              const redirectUrl = Linking.makeUrl("/");
              await WebBrowser.openBrowserAsync(
                `https://${process.env.REACT_APP_APP_AUTHDOMAIN}/v2/logout?client_id=${process.env.REACT_APP_APP_AUTHID}&returnTo=${redirectUrl}`
              );
              console.log(redirectUrl);
              Linking.removeEventListener("url", handleRedirect);
              setName(null);
              dispatch(setUserId(null));
            }}
            activeOpacity={0.8}
            style={styles.button}
          >
            <Text style={styles.text}>LOGOUT</Text>
          </TouchableOpacity>

          <View>
            <TouchableOpacity
              accessibilityTraits="button"
              onPress={() => {
                navigation.navigate("ChangePassword");
              }}
              activeOpacity={0.8}
              style={styles.button}
            >
              <Text style={styles.text}>CHANGE PASSWORD</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            accessibilityTraits="button"
            onPress={() => {
              navigation.navigate("Search");
            }}
            activeOpacity={0.8}
            style={styles.button}
          >
            <Text style={styles.text}>SKIP</Text>
          </TouchableOpacity>

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
      ) : (
        <View style={styles.container}>
          <View style={styles.image}>
            <Image
              style={styles.logo}
              source={require("../assets/logo_bowl.png")}
            />
          </View>

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

          <TouchableOpacity
            title="SKIP"
            accessibilityTraits="button"
            onPress={() => {
              navigation.navigate("Search");
            }}
            activeOpacity={0.8}
            style={styles.button}
          >
            <Text style={styles.text}>SKIP</Text>
          </TouchableOpacity>

          <TouchableOpacity
            title="about"
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
      )}
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
    minWidth: "60%",
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
  },
  separatorOr: {
    color: "#9B9FA4",
    paddingVertical: 5,
  },
});
