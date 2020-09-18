import axios from "axios";
import React, { useEffect } from "react";
import { StyleSheet, ScrollView, Image } from "react-native";
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
  Text,
} from "native-base";
import { useSelector, useDispatch } from "react-redux";
import { restaurant, setRestaurantsList } from "../actions";
import Nav from "./Nav";

export default function Home({ navigation }) {
  const restData = useSelector((state) => state.restaurantReducer);
  const restaurantList = useSelector((state) => state.restaurantsListReducer);
  const userId = useSelector((state) => state.userIdReducer);
  const status = useSelector((state) => state.loginStatusReducer);
  console.log("this is the status", status);

  const dispatch = useDispatch();

  async function getRestaurants() {
    try {
      const results = await axios.get(
        "https://restaurantserverspring.herokuapp.com/restAtlas"
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
    console.log("userid!!!!!!: ", user);
    console.log("In recommended");
    const results = await axios.get(
      `https://restaurantserverspring.herokuapp.com/dummyfavorites/${user}`
    );
    const data = results.data;

    const allResults = await axios.get(
      "https://restaurantserverspring.herokuapp.com/restAtlas"
    );
    const allRestaurants = allResults.data;
    for (let i = allRestaurants.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i);
      const temp = allRestaurants[i];
      allRestaurants[i] = allRestaurants[j];
      allRestaurants[j] = temp;
    }

    for(let i = 0; i< data.length; i++){ // recommended restaurabt
      for(let j=0; j < allRestaurants.length; j++){ // current restaurant state
        if(data[i].id === allRestaurants[j].id){ 
          allRestaurants.splice(j,1)  // remove duplicated
          allRestaurants.unshift(data[i]) // move it to the front
        }
      }
  }

    console.log(data);
    //dispatch({ type: "SORT_RESTAURANTS", payload: data });
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
        `https://restaurantserverspring.herokuapp.com/testdata/${user}`,
        {
          restId: likedResId,
        }
      );
      await axios.post(
        `https://restaurantserverspring.herokuapp.com/dummyfavorites/${user}`,
        {
          rest: likedRes,
        }
      );
    } catch (err) {
      console.log(err);
    }
  }

  function onSwipeRight(card) {
    dispatch(restaurant(card));
    console.log(restData);
    liked(userId, restData);
    navigation.navigate("Details");
  }

  async function unliked(card) {
    try {
      const swiped_left = restData.id;

      await axios.post(
        `https://restaurantserverspring.herokuapp.com/swipedleft/${userId}`,
        {
          restId: swiped_left,
        }
      );
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Container>
      <Nav />
      <View style={styles.container}>
        <DeckSwiper
          dataSource={restaurantList}
          onSwipeRight={(card) => onSwipeRight(card)}
          onSwipeLeft={(card) => unliked(card)}
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
            <Text style={{ color: "#fff" }}>Home</Text>
          </Button>
          <Button
            active
            vertical
            onPress={() => navigation.navigate("Search")}
            style={{ backgroundColor: "#F8961E" }}
          >
            <Icon name="eye" style={{ color: "#fff" }} />
            <Text style={{ color: "#fff" }}>Search</Text>
          </Button>
          <Button vertical onPress={() => navigation.navigate("Preferences")}>
            <Icon active name="pizza" style={{ color: "#fff" }} />
            <Text style={{ color: "#fff" }}>Preference</Text>
          </Button>
          <Button vertical onPress={() => navigation.navigate("Profile")}>
            <Icon name="person" style={{ color: "#fff" }} />
            <Text style={{ color: "#fff" }}>User</Text>
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
  card: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
