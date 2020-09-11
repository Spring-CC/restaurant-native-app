import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from 'react-native';
import Nav from "./Nav";
import {
  StyleSheet,
  ScrollView,
  View,
  TouchableOpacity,
  Image,
  Linking,
} from "react-native";
import { Container, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
import axios from 'axios';
import { addFavorites } from "../actions";



export default function FavoritesView({ navigation }) {

  // rerender***************************************
  const [updateVal, setUpdateVal] = useState(false);
  const forceUpdate = newState => {
    if (newState === 'active')
      setUpdateVal(!updateVal); // forces a rerender
  }
  useEffect(() => {
    AppState.addEventListener('change', forceUpdate);
    return () => AppState.removeEventListener('change', forceUpdate);
  }, []);
  //************************************************** */
  const userId = useSelector((state) => state.userIdReducer);
  const restaurantList = useSelector((state) => state.restaurantsListReducer);
  const favoritesList = useSelector((state) => state.addFavoritesReducer);
  const dispatch = useDispatch()


  async function getUserFavorites(id) {

    console.log(id)
    const favoritesUsers = await axios.get("https://restaurantserverspring.herokuapp.com/favoritesInfo");

    const usersData = favoritesUsers.data;

    const userFavorite = usersData.filter(user => user.user_Id === id);

    const restIds = userFavorite[0].restaurant_Id
    console.log(restIds)
    const results = restaurantList.filter(item => {
      if (restIds.includes(item.id)) {
        return item;
      }
    })
    console.log(results)

    //setUserFavorites(results);
    dispatch(addFavorites(results))

  }

  async function deleteFavorite(userId, restId) {

    await axios.patch("https://restaurantserverspring.herokuapp.com/deleteFavorite", {
      user_Id: userId,
      restaurant_Id: restId,
    })
    console.log("restaurant remove from favorites")
  }

  useEffect(() => {
    if (userId !== '') {
      getUserFavorites(userId);
    }
  }, []);

  return (
    <Container>
      <ScrollView style={styles.container}>
        <View>
          <Nav />
        </View>
        <View>
          <Text style={styles.title}>Favorites</Text>
        </View>
        <View>
          {userId === '' ?
            (
              <View>
                <Text style={styles.title}>You must be Logged In to use this option</Text>
              </View>
            )
            :
            (
              <View>
                {favoritesList.map(favorite => (
                  <View style={styles.checkboxContainer}>
                    <Text style={styles.textTitle}>Name</Text>
                    <Text style={styles.textBody}>{favorite.name}</Text>
                    <Text style={styles.textTitle}>Open time</Text>
                    <Text style={styles.textBody}>{favorite.opentime}</Text>
                    <Text style={styles.textTitle}>Telephone</Text>
                    <Text style={styles.textBody}>{favorite.tel}</Text>
                    <Text style={styles.textTitle}>Link to Restaurant</Text>
                    <Text style={styles.linkText}
                      onPress={() => Linking.openURL(favorite.url)}>
                      Press To Go to Restaurant Page</Text>
                    <TouchableOpacity
                      style={styles.buttons}
                      onPress={() => {
                        deleteFavorite(userId, favorite.id);
                        setTimeout(() => {
                          getUserFavorites(userId);
                        }, 2000);
                      }}
                    >
                      <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>
                        X
                  </Text>
                    </TouchableOpacity>
                  </View>
                )
                )}
              </View>
            )}

        </View>
      </ScrollView>
      <Footer>
        <FooterTab>
          <Button vertical onPress={() => navigation.navigate("Home")}>
            <Icon name="home" />
            <Text>Home</Text>
          </Button>
          <Button vertical onPress={() => navigation.navigate("Search")}>
            <Icon name="eye" />
            <Text>Search</Text>
          </Button>
          <Button vertical onPress={() => navigation.navigate("Preferences")}>
            <Icon active name="pizza" />
            <Text>Preference</Text>
          </Button>
          <Button active vertical onPress={() => navigation.navigate("Favorites")}>
            <Icon name="heart" />
            <Text>Favorites</Text>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9C74F',
  },
  title: {
    textAlign: 'center',
    fontFamily: "MPLUS1p-Medium",
    fontSize: 40,
  },
  checkboxContainer: {
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 12,
    padding: 10,
  },
  textBody: {
    fontSize: 20,
    fontFamily: "MPLUS1p-Bold",
    textAlign: "center",
  },
  linkText: {
    fontSize: 20,
    fontFamily: "MPLUS1p-Bold",
    textAlign: "center",
    color: "#3780E8",
  },
  textTitle: {
    fontSize: 20,
    textDecorationLine: "underline",
    fontFamily: "MPLUS1p-Bold",
    textAlign: "center",
  },
  buttons: {
    height: 50,
    width: 200,
    backgroundColor: "#ff0000",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
})