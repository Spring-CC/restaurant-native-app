import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  Image,
  Linking,
  Button,
} from "react-native";
import Nav from "./Nav";
import axios from "axios";

export default function Details({ navigation }) {
  const [isSelected, setSelection] = useState(false);
  const restData = useSelector((state) => state.restaurantReducer);
  const userId = useSelector((state) => state.userIdReducer);

  async function updateToDatabase(id, restId) {
    if (id === "" || id === null || id === undefined) {
      alert("No user login");
      return;
    }

    const favoritesUsers = await axios.get(
      "https://restaurantserverspring.herokuapp.com/favorites"
    );

    let newInfo = true;
    let userIndex;

    const usersData = favoritesUsers.data;
    //Check if user exist, if not will change newInfo variable to false and set the userIndex
    for (let i = 0; i < usersData.length; i++) {
      if (id === usersData[i].user_Id) {
        newInfo = false;
        userIndex = i;
      }
    }
    //mongodb endpoint
    if (newInfo) {
      await axios.post(
        `https://restaurantserverspring.herokuapp.com/favorites/user/${id}`,
        {
          restaurant_Id: restId,
        }
      );
      alert("Added to Favorites"); // <-- this should not be an alert ? 
      return;
    }
    //if the user exist it will check if the restaurant it is already on its favorites list
    for (let i = 0; i < usersData[userIndex].restaurant_Id.length; i++) {
      if (restId === usersData[userIndex].restaurant_Id[i]) {
        alert("Already in your Favorites List");
        return;
      }
    }

    await axios.post(
      `https://restaurantserverspring.herokuapp.com/favorites/${restId}`,
      {
        user_Id: id,
      }
    );
    alert("Added to Favorites");
  }

  async function checkFavorites() {
    const favoritesUsers = await axios.get(
      "https://restaurantserverspring.herokuapp.com/favorites"
    );

    const data = favoritesUsers.data;

    const result = data.filter((item) => item.user_Id === userId);
    if (result[0].restaurant_Id.includes(restData.id)) {
      setSelection(true);
    }
  }

  useEffect(() => {
    checkFavorites();
  }, []);

  async function deleteFavorite(id, restId) {
    await axios.delete(`https://restaurantserverspring.herokuapp.com/favorites/${id}/${restId}`);
  }

  return (
    <ScrollView>
      <Nav />
      <ScrollView style={styles.container}>
        <View >
          <Button
            title="Go Back"
            color="#F3722C"
            onPress={() => {
              // Navigate using the `navigation` prop that you received
              navigation.navigate("Search");
            }}
          />
        </View>
        <View style={styles.text_title}>
          {isSelected ? (
            <Button
              title="Delete from Favorites 💔"
              color="#ff3300"
              onPress={() => {
                deleteFavorite(userId, restData.id);
                setSelection(false);
              }}
            />
          ) : (
              <Button
                title="Add to Favorites ❤️"
                color="#ff3300"
                onPress={() => {
                  updateToDatabase(userId, restData.id);
                  setSelection(true);
                }}
              />
            )}
        </View>
        <Image
          source={{
            uri: restData.image_url["shop_image1"],
          }}
          style={styles.image}
        />
        <View style={{ marginBottom: 5 }}>
          <Button
            style={styles.button}
            title="Go To Maps"
            color="#90BE6D"
            onPress={() =>
              Linking.openURL(
                `https://www.google.com/maps/place/${restData.latitude},${restData.longitude}`
              )
            }
          />
        </View>
        <View style={styles.basic_container}>
          <Text style={styles.text_title}>Basic Details</Text>
          <Text style={styles.text_sub}>Name</Text>
          <Text style={styles.text}>{restData.name}</Text>
          <Text style={styles.text_sub}>Name (kana)</Text>
          <Text style={styles.text}>{restData.name_kana}</Text>
          <Text style={styles.text_sub}>Type</Text>
          <Text style={styles.text}>{restData.category}</Text>
          <Text style={styles.text_sub}>Telephone No</Text>
          <Text style={styles.text}>{restData.tel}</Text>
          <Text style={styles.text_sub}>Website</Text>
          <Text
            style={styles.text}
            onPress={() => Linking.openURL(`${restData.url}`)}
          >
            Press Here! to go to website
          </Text>
        </View>
        <View style={styles.location_container}>
          <Text style={styles.text_title}>Location Details</Text>
          <Text style={styles.text_sub}>Address</Text>
          <Text style={styles.text}>{restData.address}</Text>
          <Text style={styles.text_sub}>Station</Text>
          <Text style={styles.text}>{restData.access["station"]}</Text>
          <Text style={styles.text_sub}>Open Time</Text>
          <Text style={styles.text}>{restData.opentime}</Text>
        </View>
        <View style={styles.payment_container}>
          <Text style={styles.text_title}>Payment Details</Text>
          <Text style={styles.text_sub}>Budget</Text>
          <Text style={styles.text}>{restData.budget}</Text>
          <Text style={styles.text_sub}>Party</Text>
          <Text style={styles.text}>{restData.party}</Text>
          <Text style={styles.text_sub}>Lunch</Text>
          <Text style={styles.text}>{restData.lunch}</Text>
          <Text style={styles.text_sub}>Credit Card</Text>
          <Text style={styles.text}>{restData.credit_card}</Text>
          <Text style={styles.text_sub}>E-Money</Text>
          <Text style={styles.text}>{restData.e_money}</Text>
        </View>
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  basic_container: {
    backgroundColor: "#F8961E",
    padding: 5,
    marginBottom: 7,
  },
  button: {
    padding: "10",
    color: "#F3722C",
  },
  location_container: {
    backgroundColor: "#F9C74F",
    padding: 5,
    marginBottom: 7,
  },
  payment_container: {
    backgroundColor: "#90BE6D",
    padding: 5,
  },
  text_title: {
    fontSize: 20,
    fontFamily: "MPLUS1p-Black",
    textAlign: "center",
    color: "#fffacd",
  },
  text: {
    fontSize: 15,
    fontFamily: "MPLUS1p-Medium",
  },
  text_sub: {
    fontSize: 15,
    fontFamily: "MPLUS1p-Medium",
    color: "#fffacd",
  },
  container: {
    flex: 1,
    margin: 5,
    borderRadius: 12,
  },
  image: {
    width: "100%",
    height: 300,
    marginBottom: 7,
  },
});
