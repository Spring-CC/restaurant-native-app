import React from "react";
import { StyleSheet, SafeAreaView, Text, Image } from "react-native";

export default function Nav() {

  return (
    <SafeAreaView style={styles.container}>
      {/* <Text style={styles.text}>Munchify</Text> */}
      <Image source={require('./../assets/logo_bowl.png')} style={styles.logo} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#90BE6D',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  text: {
    fontFamily: 'MPLUS1p-Black',
    fontSize: 25,
  },
  logo: {
    width: 100,
    height: 100,
  }
});