import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import Nav from "./Nav";

export default function Receive({ navigation }) {
  return (
    <View>
      <Nav />
      <View style={styles.container}>
        <Text>This is placeholder</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9C74F",
    padding: 5,
  },
});
