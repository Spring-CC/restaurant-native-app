import React, { useState } from "react";
import * as WebBrowser from "expo-web-browser";
import { Button, StyleSheet, Text, View, TextInput } from "react-native";

WebBrowser.maybeCompleteAuthSession();

export default function changePassword({ navigation }) {
  const [email, onChangeEmail] = useState("");

  const url = `https://${process.env.REACT_APP_APP_AUTHDOMAIN}/dbconnections/change_password`;
  const options = {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      client_id: process.env.REACT_APP_APP_AUTHID,
      email: email,
      connection: "atlas-db-connection",
    }),
  };

  async function change() {
    const response = await fetch(url, options)
      .then((response) => response.text())
      .then(() => {
        console.log("Success");
      })
      .catch((error) => {
        console.error("Error:", error);
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

      <View>
        <Text>Email:</Text>
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
    borderColor: "#F9C74F",
    borderWidth: 1,
    marginTop: 20,
  },
  button: {
    padding: "10",
    color: "#841584",
  },
});
