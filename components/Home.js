import React from "react";
import { Link } from "react-router-dom";
import { StyleSheet, View, Text } from "react-native";
import data from "../data/restaurants.json";
import Slider from "./Pictureslider";
import Userinfo from "./Userinfo";

export default function Home() {
  const linkStyle = {
    fontFamily: "verdana",
  };

  const restaurants = data.filter((restaurant) => restaurant.id === "g398515");
  const images = [];
  for (let key in restaurants[0].image_url) {
    if (restaurants[0].image_url[key] !== "") {
      images.push(restaurants[0].image_url[key]);
    }
  }

  return (
    <View>
      <View style={styles.container}>
        <Link className="choice-no" to="/" style={linkStyle}>
          No
        </Link>
        <Link className="choice-yes" to="/details" style={linkStyle}>
          Yes
        </Link>
      </View>

      <Slider />
      <Userinfo />
      <View>
        {restaurants.map((restaurant) => {
          return (
            <View className="restaurant-info" key={restaurant.id}>
              <Text className="title">{restaurant.name}</Text>
              <Text className="kana">{restaurant.name_kana}</Text>
              <Text className="category">{restaurant.category}</Text>
              <Text className="address">{restaurant.address}</Text>
              <Text className="open-time">{restaurant.opentime}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
