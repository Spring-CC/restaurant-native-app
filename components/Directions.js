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
import train from "../data/train.json";

export default function Directions({ navigation }) {
    const [Kara, setKara] = useState("南町田");
    const [Made, setMade] = useState("");  
  const restData = useSelector((state) => state.restaurantReducer);
// const api = `https://api.transithq.co/v1/directions?origin=${EkiKara}&destination=${EkiMade}`
// const api = `https://api.trip2.jp/ex/tokyo/v1.0/json?src=${EkiKara}&dst=${EkiMade}&key=Key`

  useEffect(() => {
    console.log(data[0].access.station)
    console.log(train[0].name.ja)
    stationFinder()
  }, []);

function stationFinder () {
    console.log('Starting')
for (let index = 0; index < train.length; index++) {
    const station = train[index].name.ja;
    console.log(station)
    if (station === Kara) {
        setMade("Found!")
        console.log(Made)
    }
}
}

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
