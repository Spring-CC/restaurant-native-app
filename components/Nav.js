import React from "react";
import { StyleSheet, SafeAreaView, Image } from "react-native";

export default function Nav() {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("./../assets/logo_bowl.png")}
        style={styles.logo}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },

  logo: {
    marginTop: 3,
    width: 100,
    height: 100,
  },
});
