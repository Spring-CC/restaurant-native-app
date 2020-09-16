import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Text,
} from "react-native";
import Nav from "./Nav";

export default function Receive({ navigation }) {
  function submit() {}
  const [number, onChangeNumber] = useState("");
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Nav />

      <View style={styles.container}>
        <TextInput
          placeholder="Type your unique number"
          style={styles.input}
          onChangeText={(num) => {
            onChangeNumber(num);
          }}
          value={number}
          keyboardType="default"
        />
        <TouchableOpacity style={styles.button} onPress={() => submit(number)}>
          <Text> Submit </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F9C74F",
    padding: 5,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    height: 40,
    width: 300,
    borderColor: "#E6772E",
    borderWidth: 1,
    marginTop: 20,
  },
  button: {
    backgroundColor: "#E6772E",
    borderRadius: 5,
    padding: 20,
    margin: 8,
  },
});
