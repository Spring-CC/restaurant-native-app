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

const useProxy = Platform.select({ web: false, default: true });
const redirectUri = AuthSession.makeRedirectUri({ useProxy });
WebBrowser.maybeCompleteAuthSession();

export default function changePassword({ navigation }) {
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");
  function change(email, newPassword) {
    const bcrypt = require("bcryptjs");
    const MongoClient = require("mongodb").MongoClient;
    const client = new MongoClient(
      "mongodb+srv://" +
        configuration.ATLAS_USER +
        ":" +
        configuration.ATLAS_PSWD +
        "@cc13.temn3.mongodb.net/" +
        configuration.ATLAS_DB +
        "?retryWrites=true&w=majority"
    );

    client.connect(function (err) {
      if (err) return console.log(err);

      const db = client.db("" + configuration.ATLAS_DB + "");
      const users = db.collection("Users");

      bcrypt.hash(newPassword, 10, function (err, hash) {
        if (err) {
          client.close();
          return console.log(err);
        }

        users.update({ email: email }, { $set: { password: hash } }, function (
          err,
          count
        ) {
          client.close();
          if (err) return console.log(err);
          console.log(null, count > 0);
        });
      });
    });
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={(text) => {
          onChangeEmail(text);
          console.log(email);
        }}
        value={email}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        onChangeText={(text) => {
          onChangePassword(text);
          console.log(password);
        }}
        value={password}
        secureTextEntry
      />
      <View>
        <Button
          title="change password"
          onPress={() => {
            change(email, password);
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
