import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
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
import axios from 'axios';

export default function Details({ navigation }) {


  const restData = useSelector((state) => state.restaurantReducer);
  const userId = useSelector((state) => state.userIdReducer);

  async function updateToDatabase(id, restId) {

    if (id === '') {
      alert("No user login")
      return
    }

    const favoritesUsers = await axios.get("https://restaurantserverspring.herokuapp.com/favoritesInfo");


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

    //if the user dont exist it will post a new user with the restaurant Id
    // if(newInfo){
    //   const favorite = await axios.post("http://localhost:8080/Favorites", {
    //     user_Id : id,
    //     restaurant_Id : restId
    //   })
    //   alert("Added to Favorites, Deletion is manage in Favorites Option")
    //   return;
    // }
    if (newInfo) {

      const favorite = await axios.post("https://restaurantserverspring.herokuapp.com/Favorites", {
        user_Id: id,
        restaurant_Id: restId
      })
      alert("Added to Favorites")
      return;
    }
    //if the user exist it will check if the restaurant it is already on its favorites list
    for (let i = 0; i < usersData[userIndex].restaurant_Id.length; i++) {
      if (restId === usersData[userIndex].restaurant_Id[i]) {
        alert("Already in your Favorites List")
        return;
      }
    }

    const favorite = await axios.post("https://restaurantserverspring.herokuapp.com/favoritesUpdate", {
      user_Id: id,
      restaurant_Id: restId
    })
    alert("Added to Favorites")

  }



  return (

    <ScrollView>
      <Nav />
      <ScrollView style={styles.container}>
        <View>
          <Button
            title="Go Back"
            onPress={() => {
              // Navigate using the `navigation` prop that you received
              navigation.navigate('Search');
            }} />
        </View>
        <View style={styles.text_title}>

          <Button
            title="Add to Favorites ❤️"
            color="#ff3300"
            onPress={() => {
              updateToDatabase(userId, restData.id);
            }} />

        </View>
        <Image
          source={{
            uri: restData.image_url["shop_image1"],
          }}
          style={styles.image}
        />
        <View>
          <Button
            style={styles.button}
            title="Go To Maps"
            onPress={() =>
              Linking.openURL(
                `https://www.google.com/maps/place/${restData.latitude},${restData.longitude}`
              )
            }
          />
        </View>
        <View style={styles.basic_container}>
          <Text style={styles.text_title}>Basic Details</Text>
          <Text style={styles.text_sub}>Name:</Text>
          <Text style={styles.text}>{restData.name}</Text>
          <Text style={styles.text_sub}>Name (kana):</Text>
          <Text style={styles.text}>{restData.name_kana}</Text>
          <Text style={styles.text_sub}>Type:</Text>
          <Text style={styles.text}>{restData.category}</Text>
          <Text style={styles.text_sub}>Telephone No:</Text>
          <Text style={styles.text}>{restData.tel}</Text>
          <Text style={styles.text_sub}>Website:</Text>
          <Text
            style={styles.text}
            onPress={() => Linking.openURL(`${restData.url}`)}
          >Press Here! to go to website</Text>
        </View>
        <View style={styles.location_container}>
          <Text style={styles.text_title}>Location Details</Text>
          <Text style={styles.text_sub}>Address:</Text>
          <Text style={styles.text}>{restData.address}</Text>
          <Text style={styles.text_sub}>Latitude:</Text>
          <Text style={styles.text}>{restData.latitude}</Text>
          <Text style={styles.text_sub}>Longitude:</Text>
          <Text style={styles.text}>{restData.longitude}</Text>
          <Text style={styles.text_sub}>Station:</Text>
          <Text style={styles.text}>{restData.access["station"]}</Text>
          <Text style={styles.text_sub}>Open Time:</Text>
          <Text style={styles.text}>{restData.opentime}</Text>
        </View>
        <View style={styles.payment_container}>
          <Text style={styles.text_title}>Payment Details</Text>
          <Text style={styles.text_sub}>Budget:</Text>
          <Text style={styles.text}>{restData.budget}</Text>
          <Text style={styles.text_sub}>Party:</Text>
          <Text style={styles.text}>{restData.party}</Text>
          <Text style={styles.text_sub}>Lunch:</Text>
          <Text style={styles.text}>{restData.lunch}</Text>
          <Text style={styles.text_sub}>Credit Card:</Text>
          <Text style={styles.text}>{restData.credit_card}</Text>
          <Text style={styles.text_sub}>E-Money:</Text>
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
    color: "#841584",
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
  },
  text: {
    fontSize: 15,
    fontFamily: "MPLUS1p-Medium",
  },
  text_sub: {
    fontSize: 15,
    fontFamily: "MPLUS1p-Black",
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
