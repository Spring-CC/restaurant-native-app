import React, { useState, useEffect } from "react";
import * as AuthSession from "expo-auth-session";
import jwtDecode from "jwt-decode";
import { Alert, Button, Platform, StyleSheet, Text, View } from "react-native";

const authorizationEndpoint = process.env.REACT_APP_APP_AUTHENDPOINT;
const useProxy = Platform.select({ web: false, default: true });
const redirectUri = AuthSession.makeRedirectUri({ useProxy });

export default function Auth() {
  const [name, setName] = useState(null);

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

        const { name } = decoded;
        setName(name);
      }
    }
    console.log(result);
    console.log(name);
  }, [result]);

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
          onPress={async () => {
            // Adapted from this example for Linking
            // https://github.com/expo/examples/blob/master/with-webbrowser-redirect/app/App.js
            // TODO: Test Android. May run into https://github.com/expo/expo/issues/5555
            Linking.addEventListener("url", handleRedirect);
            const redirectUrl = Linking.makeUrl("/");
            // Adapted from this example for logging out
            // https://github.com/expo/auth0-example/issues/25#issuecomment-468533295
            await WebBrowser.openBrowserAsync(
              `https://${process.env.AUTH0_DOMAIN}/v2/logout?client_id=${process.env.AUTH0_CLIENT_ID}&returnTo=${redirectUrl}`
            );
            Linking.removeEventListener("url", handleRedirect);
          }}
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
