import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Nav from "./Nav";
import {
  StyleSheet,
  ScrollView,
  View,
  Linking,
  RefreshControl,
  Text,
} from "react-native";
import {
  Container,
  Footer,
  FooterTab,
  Button,
  Icon,
  Card,
  CardItem,
  Body,
} from "native-base";
import axios from "axios";
import { addFavorites } from "../actions";

//*** wait function for refresh control ***//
const wait = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};

export default function FavoritesView({ navigation }) {
  const userId = useSelector((state) => state.userIdReducer);
  const favoritesList = useSelector((state) => state.addFavoritesReducer);
  const dispatch = useDispatch();

  //*** Refresh Control ***//
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getUserFavorites(userId);

    wait(2000).then(() => setRefreshing(false));
  }, []);

  async function getUserFavorites(id) {
    //getting all restaurants to filter
    const resultsRes = await axios.get(
      "https://restaurantserverspring.herokuapp.com/restAtlas"
    );
    const dataRes = resultsRes.data;
    const favoritesUsers = await axios.get(
      "https://restaurantserverspring.herokuapp.com/favoritesInfo"
    );

    const usersData = favoritesUsers.data;

    const userFavorite = usersData.filter((user) => user.user_Id === id);

    const restIds = userFavorite[0].restaurant_Id;

    const results = dataRes.filter((item) => {
      if (restIds.includes(item.id)) {
        return item;
      }
    });

    dispatch(addFavorites(results));
  }

  async function deleteFavorite(userId, restId) {
    await axios.patch(
      "https://restaurantserverspring.herokuapp.com/deleteFavorite",
      {
        user_Id: userId,
        restaurant_Id: restId,
      }
    );
  }

  useEffect(() => {
    if (userId !== "") {
      getUserFavorites(userId);
    }
  }, []);

  return (
    <Container>
      <Nav />
      <ScrollView
        style={styles.container}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor="#F3722C"
            colors={["#F3722C"]}
          />
        }
      >
        <Card style={styles.card}>
          <Text style={styles.title}>Favorites</Text>
        </Card>
        <View>
          {userId === "" ? (
            <Card style={styles.card}>
              <Body>
                <Text style={styles.textLogin}>
                  You must be Logged In to use this option
                </Text>
              </Body>
            </Card>
          ) : (
              <>
                <View>
                  {favoritesList.map((favorite, index) => (
                    <Card key={index} style={styles.card}>
                      <CardItem>
                        <Body>
                          <Text style={styles.textTitle}>Name</Text>
                          <Text style={styles.textBody}>{favorite.name}</Text>
                          <Text style={styles.textTitle}>Type of Restaurant</Text>
                          <Text style={styles.textBody}>{favorite.category}</Text>
                          <Text style={styles.textTitle}>Telephone</Text>
                          <Text style={styles.textBody}>{favorite.tel}</Text>
                          <Text style={styles.textTitle}>Link</Text>
                          <Text
                            style={styles.linkText}
                            onPress={() => Linking.openURL(favorite.url)}
                          >
                            Go to Restaurant Page
                        </Text>
                          <Button
                            style={{ alignSelf: "center", paddingRight: 15 }}
                            iconLeft
                            danger
                            onPress={() => {
                              deleteFavorite(userId, favorite.id);
                              setTimeout(() => {
                                getUserFavorites(userId);
                              }, 2000);
                            }}
                          >
                            <Icon name="trash" />
                            <Text
                              style={{
                                fontSize: 20,
                                fontWeight: "bold",
                                color: "white",
                              }}
                            >
                              Delete
                          </Text>
                          </Button>
                        </Body>
                      </CardItem>
                    </Card>
                  ))}
                </View>
              </>
            )}
        </View>
      </ScrollView>
      <Footer>
        <FooterTab style={{ backgroundColor: "#F3722C" }}>
          <Button vertical onPress={() => navigation.navigate("Home")}>
            <Icon name="home" style={{ color: "#fff" }} />
            <Text style={{ color: "#fff", fontSize: 12 }}>Home</Text>
          </Button>
          <Button vertical onPress={() => navigation.navigate("Search")}>
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
  },
  title: {
    textAlign: "center",
    fontFamily: "MPLUS1p-Medium",
    fontSize: 40,
    color: "#F3722C",
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
  },
  checkboxContainer: {
    backgroundColor: "white",
    margin: 10,
    borderRadius: 12,
    padding: 10,
  },
  textBody: {
    fontSize: 20,
    fontFamily: "MPLUS1p-Bold",
    marginBottom: 10,
  },
  textLogin: {
    fontSize: 20,
    fontFamily: "MPLUS1p-Bold",
    textAlign: "center",
  },
  linkText: {
    fontSize: 18,
    fontFamily: "MPLUS1p-Bold",
    marginBottom: 20,
    color: "#4169e1",
  },
  textTitle: {
    color: "#F3722C",
    fontSize: 17,
    fontFamily: "MPLUS1p-Bold",
    fontWeight: "bold",
  },
  buttons: {
    height: 50,
    width: 200,
    backgroundColor: "#ff0000",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonRefresh: {
    height: 50,
    width: 200,
    backgroundColor: "#90BE6D",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  card: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    borderRadius: 12,
    padding: 10,
  },
  button: {
    alignItems: "center",
    margin: 20,
  },
});
