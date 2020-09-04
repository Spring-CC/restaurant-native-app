import * as AuthSession from "expo-auth-session";
import { StyleSheet, View, Button } from "react-native";
import React from "react";

import { auth0Domain, auth0ClientId } from "react-native-dotenv";

function toQueryString(params) {
  return (
    "?" +
    Object.entries(params)
      .map(
        ([key, value]) =>
          `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
      )
      .join("&")
  );
}
export default function Auth0({ navigation }) {
  const loginWithAuth0 = async () => {
    const redirectUrl = AuthSession.getRedirectUrl();
    let authUrl =
      `${auth0Domain}/authorize` +
      toQueryString({
        client_id: auth0ClientId,
        response_type: "token",
        scope: "openid profile email",
        redirect_uri: redirectUrl,
      });
    console.log(`Redirect URL (add this to Auth0): ${redirectUrld}`);
    console.log(`AuthURL is:  ${authUrl}`);
    const result = await AuthSession.startAsync({
      authUrl: authUrl,
    });
  };
  // if (result.type === "success") {
  //   console.log(result);
  //   let token = result.params.access_token;
  //   this.props.setToken(token);
  //   this.props.navigation.navigate("Next Screen");
  // }

  return (
    <View style={styles.container}>
      {name ? (
        <Text style={styles.title}>You are logged in, {name}!</Text>
      ) : (
        <Button
          title="Log in with Auth0"
          onPress={() => {
            loginWithAuth0;
          }}
        />
      )}
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
