import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Button,
} from "react-native";
import { SliderBox } from "react-native-image-slider-box";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { useSelector, useDispatch } from "react-redux";
import { increment, restaurant, setRestaurantsList } from "../actions";
import data from "../data/restaurants.json";
import Nav from "./Nav";
import axios from "axios";

// <Button title="Login" onPress={() => navigation.navigate('Login')} />

// export default function Home({ navigation }) {

// return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//     <Text>Home</Text>
//     <Button title="Log out" onPress={() => navigation.navigate('Login')} />
//   </View>
// );
// }

export default function Home({ navigation }) {
  var color1 = "#f94144"; // - Red Salsa
  var color2 = "#f3722c"; // - Orange Red
  var color3 = "#f8961e"; // - Yellow Orange Color Wheel
  var color4 = "#f9c74f"; // - Maize Crayola
  var color5 = "#90be6d"; // - Pistachio

  const [resData, setResData] = useState(data);

  const index = useSelector((state) => state.incrementReducer);
  const categories = useSelector((state) => state.categoryReducer);
  const price = useSelector((state) => state.priceReducer);
  const restaurantList = useSelector((state) => state.restaurantsListReducer);
  const userId = useSelector((state) => state.userIdReducer);
  const dispatch = useDispatch();

  async function getRestaurants() {
    try {
      const results = await axios.get("http://localhost:8080/restAtlas");
      const restaurants = results.data;
      const filtBudget = restaurants.filter(
        (res) => res.budget >= price.min && res.budget <= price.max
      );
      dispatch(setRestaurantsList(filtBudget));
      console.log(filtBudget);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getRestaurants();
    console.log(restaurants);
  }, []);

  const restaurants = restaurantList.filter((restaurant, idx) => idx === index);
  const images = [];
  for (let key in restaurants[0].image_url) {
    if (restaurants[0].image_url[key] !== "") {
      images.push(restaurants[0].image_url[key]);
    }
  }

  async function liked() {
    try {
      const likedResId = restaurants[0].id;
      await axios.post(`http://localhost:8080/dummyusers/${userId}`, {
        restId: likedResId,
      });
    } catch (err) {
      console.log(err);
    }
  }

  function onPress() {
    dispatch(restaurant(restaurants));
    liked();
    console.log(userId);
    navigation.navigate("Details");
  }

  function leftActions() {
    return (
      <View
        style={{ flex: 1, backgroundColor: "blue", justifyContent: "center" }}
      >
        <Text
          style={{
            color: "white",
            paddingHorizontal: 10,
            fontWeight: "600",
          }}
        >
          Go to next
        </Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Nav />
      <View>
        <Button
          title="Go To Login"
          onPress={() => {
            // Navigate using the `navigation` prop that you received
            navigation.navigate("Login");
          }}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.buttons}
          onPress={() => {
            dispatch(increment());
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>
            No
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons} onPress={() => onPress()}>
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>
            Yes
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <ScrollView>
          <SliderBox
            images={images}
            sliderBoxHeight={400}
            circleLoop
            dotColor={color1}
            inactiveDotColor={color2}
            paginationBoxStyle={{
              position: "absolute",
              bottom: 0,
              padding: 0,
              alignItems: "center",
              alignSelf: "center",
              justifyContent: "center",
              paddingVertical: 10,
            }}
            dotStyle={{
              width: 25,
              height: 25,
              borderRadius: 25,
              marginHorizontal: 0,
              padding: 0,
              margin: 0,
              backgroundColor: "rgba(128, 128, 128, 0.92)",
            }}
            ImageComponentStyle={{
              borderRadius: 15,
              width: "97%",
              marginTop: 5,
            }}
            imageLoadingColor="#2196F3"
          />
        </ScrollView>
      </View>
      <Swipeable
        renderRightActions={navigation.navigate("Detail")}
        renderLeftActions={() => leftActions()}
      >
        <View style={styles.restaurant}>
          {restaurants.map((restaurant) => {
            return (
              <View key={restaurant.id}>
                <Text style={styles.textTitle}>Restaurant Name</Text>
                <Text style={styles.textName}>{restaurant.name}</Text>
                <Text style={styles.textTitle}>Restaurant Name (Katakana)</Text>
                <Text
                  style={styles.textKana}
                >{`(${restaurant.name_kana})`}</Text>
                <Text style={styles.textTitle}>Restaurant Category</Text>
                <Text style={styles.textBody}>{restaurant.category}</Text>
                <Text style={styles.textTitle}>Restaurant Address</Text>
                <Text style={styles.textBody}>{restaurant.address}</Text>
                <Text style={styles.textTitle}>Restaurant Open</Text>
                <Text style={styles.textBody}>{restaurant.opentime}</Text>
              </View>
            );
          })}
        </View>
      </Swipeable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },
  buttons: {
    height: 50,
    width: 100,
    backgroundColor: "#F8961E",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  restaurant: {
    backgroundColor: "#F9C74F",
    borderRadius: 12,
    padding: 5,
    margin: 7,
    marginTop: 10,
  },
  textName: {
    fontSize: 30,
    fontFamily: "MPLUS1p-Bold",
    textAlign: "center",
  },
  textKana: {
    fontSize: 25,
    fontFamily: "MPLUS1p-Bold",
    textAlign: "center",
  },
  textBody: {
    fontSize: 20,
    fontFamily: "MPLUS1p-Bold",
    textAlign: "center",
  },
  textTitle: {
    fontSize: 20,
    textDecorationLine: "underline",
    fontFamily: "MPLUS1p-Bold",
    textAlign: "center",
  },
});
