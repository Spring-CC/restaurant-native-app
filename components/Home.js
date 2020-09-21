import axios from "axios";
import React, { useEffect } from "react";
import { StyleSheet, ScrollView, Image, Text } from "react-native";
import {
  Container,
  View,
  DeckSwiper,
  Card,
  CardItem,
  Left,
  Body,
  Footer,
  FooterTab,
  Button,
  Icon,
} from "native-base";
import { useSelector, useDispatch } from "react-redux";
import { restaurant, setRestaurantsList } from "../actions";
import Nav from "./Nav";

export default function Home({ navigation }) {
  const restData = useSelector((state) => state.restaurantReducer);
  const restaurantList = useSelector((state) => state.restaurantsListReducer);
  const userId = useSelector((state) => state.userIdReducer);

  const dispatch = useDispatch();

  async function getRestaurants() {
    try {
      const results = await axios.get(
        "https://restaurantserverspring.herokuapp.com/restaurants"
      );
      const restaurants = results.data;
      for (let i = restaurants.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i);
        const temp = restaurants[i];
        restaurants[i] = restaurants[j];
        restaurants[j] = temp;
      }
      dispatch(setRestaurantsList(restaurants));
    } catch (err) {
      console.log(err);
    }
  }

  async function getUserRecommendation(user) {
    const results = await axios.get(
      `https://restaurantserverspring.herokuapp.com/recommender/${user}`
    );
    const data = results.data;

    const allResults = await axios.get(
      "https://restaurantserverspring.herokuapp.com/restaurants"
    );
    const allRestaurants = allResults.data;
    for (let i = allRestaurants.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i);
      const temp = allRestaurants[i];
      allRestaurants[i] = allRestaurants[j];
      allRestaurants[j] = temp;
    }

    for (let i = 0; i < data.length; i++) { // recommended restaurant
      for (let j = 0; j < allRestaurants.length; j++) { // current restaurant state
        if (data[i].id === allRestaurants[j].id) {
          allRestaurants.splice(j, 1)  // remove duplicated
          allRestaurants.unshift(data[i]) // move it to the front
        }
      }
    }

    dispatch(setRestaurantsList(allRestaurants));
  }

  useEffect(() => {
    if (userId === "") {
      getRestaurants();
    } else {
      getUserRecommendation(userId);
    }
  }, []);

  async function liked(user, restaurant) {
    try {
      const likedResId = restaurant.id;
      const likedRes = restaurant;

      await axios.post(
        `https://restaurantserverspring.herokuapp.com/recommender/${user}`,
        {
          restId: likedResId,
        }
      );
    } catch (err) {
      console.log(err);
    }
  }

  function onSwipeRight(card) {
    dispatch(restaurant(card));
    liked(userId, restData);
    navigation.navigate("Details");
  }


  // async function unliked(card) {
  //   try {
  //     const swiped_left = restData.id;

  //     await axios.post(
  //       `https://restaurantserverspring.herokuapp.com/swipedleft/${userId}`,
  //       {
  //         restId: swiped_left,
  //       }
  //     );
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }


  // Updating the CSV
  // function updateCsv() {
  //   axios.post("https://restaurantserverspring.herokuapp.com/updatecsv");
  // }
  // useEffect(() => {
  //   updateCsv();
  // }, []);

  return (
    <Container>
      <Nav />
      <View style={styles.container}>
        <DeckSwiper
          key={restaurantList.length}
          dataSource={restaurantList}
          onSwipeRight={(card) => onSwipeRight(card)}
          //onSwipeLeft={(card) => unliked(card)}
          renderItem={(item) => (
            <Card style={styles.card}>
              <CardItem>
                <Left>
                  <Body>
                    <Text style={styles.text}>{item.name}</Text>
                    <Text note style={styles.text}>
                      Swipe left for 'No' and right for 'Yes'
                    </Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem cardBody>
                <Image
                  style={{ height: 300, flex: 1 }}
                  source={{
                    uri: item.image_url["shop_image1"],
                  }}
                />
              </CardItem>
              <CardItem>
                <Body>
                  <ScrollView>
                    <Text style={styles.text_sub}>Name</Text>
                    <Text style={styles.text}>{item.name}</Text>
                    <Text style={styles.text_sub}>Type of Restaurant</Text>
                    <Text style={styles.text}>{item.category}</Text>
                    <Text style={styles.text_sub}>Station</Text>
                    <Text style={styles.text}>{item.access["station"]}</Text>
                    <Text style={styles.text_sub}>Open Hours</Text>
                    <Text style={styles.text}>{item.opentime}</Text>
                  </ScrollView>
                </Body>
              </CardItem>
            </Card>
          )}
        />
      </View>
      <Footer>
        <FooterTab style={{ backgroundColor: "#F3722C" }}>
          <Button vertical onPress={() => navigation.navigate("Home")}>
            <Icon name="home" style={{ color: "#fff" }} />
            <Text style={{ color: "#fff", fontSize: 12 }}>Home</Text>
          </Button>
          <Button
            active
            vertical
            onPress={() => navigation.navigate("Search")}
            style={{ backgroundColor: "#F8961E" }}
          >
            <Icon name="search" style={{ color: "#fff" }} />
            <Text style={{ color: "#fff", fontSize: 12 }}>Search</Text>
          </Button>
          <Button vertical onPress={() => navigation.navigate("Preferences")}>
            <Icon active name="cog" style={{ color: "#fff" }} />
            <Text style={{ color: "#fff", fontSize: 12 }}>Preference</Text>
          </Button>
          <Button vertical onPress={() => navigation.navigate("Profile")}>
            <Icon name="person" style={{ color: "#fff" }} />
            <Text style={{ color: "#fff", fontSize: 12 }}>User</Text>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9C74F",
    padding: 5,
  },
  text: {
    fontFamily: "MPLUS1p-Bold",
  },
  text_sub: {
    fontFamily: "MPLUS1p-Bold",
    color: "#F3722C",
  },
});
