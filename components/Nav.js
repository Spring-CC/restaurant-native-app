import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Nav({ user }) {

  return (
    <View style={styles.container}>
      <Text>Munchify</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 50,
    backgroundColor: ''
  },
});