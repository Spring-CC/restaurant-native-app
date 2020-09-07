import React, { useState, useEffect } from "react";
import * as AuthSession from "expo-auth-session";
import * as WebBrowser from "expo-web-browser";
import jwtDecode from "jwt-decode";
import {
  Alert,
  Button,
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
} from "react-native";
import request from "request";

WebBrowser.maybeCompleteAuthSession();

export default function changePassword({ navigation }) {
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");

  const options = {
    method: "POST",
    url: `https://${process.env.REACT_APP_APP_AUTHDOMAIN}/dbconnections/change_password`,
    headers: { "content-type": "application/json" },
    body: {
      client_id: process.env.REACT_APP_APP_AUTHID,
      email: email,
      connection: "atlas-db-connection",
    },
    json: true,
  };

  function change() {
    request(options, function (error, response, body) {
      if (error) throw new Error(error);

      console.log(body);
    });
  }
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={(text) => {
          onChangeEmail(text);
        }}
        value={email}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        onChangeText={(text) => {
          onChangePassword(text);
        }}
        value={password}
        secureTextEntry
      />
      <View>
        <Button title="change password" onPress={() => change(email)} />
      </View>
      <View>
        <Button
          style={styles.button}
          title="Go Home"
          onPress={() => navigation.navigate("Home")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: "10",
  },
  input: {
    height: 40,
    width: 300,
    borderColor: "#gray",
    borderWidth: 1,
    marginTop: 20,
  },
  button: {
    padding: "10",
    color: "#841584",
  },
});
