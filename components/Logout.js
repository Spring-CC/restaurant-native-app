import React, { useState, useEffect } from "react";
import * as AuthSession from "expo-auth-session";
import * as WebBrowser from "expo-web-browser";
import jwtDecode from "jwt-decode";
import { Alert, Button, Platform, StyleSheet, Text, View } from "react-native";

export default function Logout({ navigation }) {
  function handleRedirect() {
    WebBrowser.dismissBrowser();
    navigation.navigate("Auth");
  }
  return (
    <Button
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
  );
}
