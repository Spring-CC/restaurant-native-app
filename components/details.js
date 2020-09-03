import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

// this component was made by Shaun, feel free to ask if you have questions about the code.

// colours
var color1 = "#f94144" // - Red Salsa
var color2 = "#f3722c" // - Orange Red
var color3 = "#f8961e" // - Yellow Orange Color Wheel
var color4 = "#f9c74f" // - Maize Crayola
var color5 = "#90be6d" // - Pistachio 

export default function Details() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={{fontSize: 20, textAlign: 'center'}}>Details Component</Text>
        <Text>Name</Text>
        <Text>Type</Text>
        <Text>Address</Text>
        <Text>Etc.</Text>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: 'center',
    justifyContent: 'center',
  }
});
