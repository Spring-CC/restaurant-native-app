import React, { useState, useEffect } from "react";
import * as AuthSession from "expo-auth-session";
import * as WebBrowser from "expo-web-browser";
import jwtDecode from "jwt-decode";
import { Alert, Button, Platform, StyleSheet, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import { setProfile, setPic, setUserId } from "../actions";
import { set } from "react-native-reanimated";

const authorizationEndpoint = process.env.REACT_APP_APP_AUTHENDPOINT;

const useProxy = Platform.select({ web: false, native: true, default: true });
const redirectUri = AuthSession.makeRedirectUri({ useProxy });
WebBrowser.maybeCompleteAuthSession();

export default function Auth({ navigation }) {
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

  // Retrieve the redirect URL, add this to the callback URL list
  // of your Auth0 application.
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

  async function logOut() {
    await WebBrowser.openBrowserAsync(
      `https://${process.env.REACT_APP_APP_AUTHDOMAIN}/v2/logout?federated&client_id=${process.env.REACT_APP_APP_AUTHID}`
    );
  }

  return (
    <View style={styles.container}>
      <View>
        {name ? (
          <Text style={styles.title}>You are logged in, {name}!</Text>
        ) : (
          <Button
            disabled={!request}
            title="Log in with Auth0"
            onPress={() => promptAsync({ useProxy })}
          />
        )}
      </View>
      <View>
        <Button
          title="Log out with Auth0"
          onPress={() => {
            logOut();
          }}
        />
      </View>

      <View>
        <Button
          title="change password"
          onPress={() => {
            navigation.navigate("ChangePassword");
          }}
        />
      </View>
      <View>
        <Button
          style={styles.button}
          title="Go Home"
          onPress={() => navigation.navigate("Home")}
        />
      </View>
      <View>
        <Button
          style={styles.button}
          title="Go profile"
          onPress={() => navigation.navigate("Profile")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 40,
  },
});
