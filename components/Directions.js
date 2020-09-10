import React, { useState, useEffect } from "react";
import {
  ScrollView,
  StyleSheet,
  TextInput,
  Button,
  Text,
  Separator,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import data from "../data/restaurants.json";
import * as Linking from 'expo-linking';

export default function Directions({ navigation }) {
    const [long, setLong] = useState("latitude");
    const [lat, setLat] = useState("longitude");  
  const restData = useSelector((state) => state.restaurantReducer);

  useEffect(() => {
    console.log(restData[0].latitude)
    console.log(restData[0].longitude)
    setLat(restData[0].latitude)
    setLong(restData[0].longitude)
  }, []);



  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Button
        style={styles.button}
        title="Go Home"
        onPress={() => navigation.navigate("Home")}
      />
      <Button
        style={styles.button}
        title="Go To Maps"
        onPress={() => Linking.openURL(`https://www.google.com/maps/place/35%C2%B030'34.5%22N+139%C2%B028'13.6%22E/@${lat},${long},17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d35.509583!4d139.470451`)}
      />
    </ScrollView>
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
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 20,
  },
  button: {
    padding: "10",
    color: "#841584",
  },
});
