import React, { useState, useEffect } from "react";
import {
  ScrollView,
  StyleSheet,
  TextInput,
  Button,
  Text,
  Separator,
} from "react-native";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import data from "../data/restaurants.json";

export default function Directions({ navigation }) {
    const [Kara, setKara] = useState("南町田");
    const [Made, setMade] = useState("");  
  const restData = useSelector((state) => state.restaurantReducer);
// const api = `https://api.transithq.co/v1/directions?origin=${EkiKara}&destination=${EkiMade}`
// const api = `https://api.trip2.jp/ex/tokyo/v1.0/json?src=${EkiKara}&dst=${EkiMade}&key=Key`

  useEffect(() => {
    console.log(data[0].access.station)
    stationFinder()
  }, []);

  // https://www.google.com/maps/place/35%C2%B030'34.5%22N+139%C2%B028'13.6%22E/@35.509583,139.4682623,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d35.509583!4d139.470451

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Button
        style={styles.button}
        title="Go Home"
        onPress={() => navigation.navigate("Home")}
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
