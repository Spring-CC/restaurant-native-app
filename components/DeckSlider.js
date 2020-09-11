import axios from "axios";
import React, { useEffect, useState } from "react";
import {
    StyleSheet,
    ScrollView,
    Image,
} from "react-native";
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
} from 'native-base';
import { useSelector, useDispatch } from "react-redux";
import { setRestaurantsList, restaurant } from "../actions";
import Nav from "./Nav";

export default function Home({ navigation }) {

    const price = useSelector((state) => state.priceReducer);
    const restaurantList = useSelector((state) => state.restaurantsListReducer);

    const dispatch = useDispatch();

    async function getRestaurants() {
        try {
            const results = await axios.get("https://restaurantserverspring.herokuapp.com/restAtlas");
            const restaurants = results.data;
            const filtBudget = restaurants.filter(
                (res) => res.budget >= price.min && res.budget <= price.max
            );
            dispatch(setRestaurantsList(filtBudget));
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getRestaurants();
    }, []);

    function onSwipeRight(card) {
        dispatch(restaurant(card))
        navigation.navigate("Details");
    }

    return (
        <Container>
            <Nav />
            <View style={styles.container}>
                <DeckSwiper
                    dataSource={restaurantList}
                    onSwipeRight={(card) => onSwipeRight(card)}
                    onSwipeLeft={() => console.log("No")}
                    renderItem={item =>
                        <Card style={{ elevation: 3 }} >
                            <CardItem>
                                <Left>
                                    <Body>
                                        <Text style={styles.text}>Restaurant</Text>
                                        <Text note style={styles.text}>Swipe left for 'No' and right for 'Yes'</Text>
                                    </Body>
                                </Left>
                            </CardItem>
                            <CardItem cardBody>
                                <Image
                                    style={{ height: 300, flex: 1 }}
                                    source={{
                                        uri: item.image_url["shop_image1"],
                                    }} />
                            </CardItem>
                            <CardItem>
                                <ScrollView>
                                    <Body >
                                        <Text style={styles.text}>Name: </Text>
                                        <Text style={styles.text}>{item.name}</Text>
                                        <Text style={styles.text}>Type of Restaurant: </Text>
                                        <Text style={styles.text}>{item.category}</Text>
                                        <Text style={styles.text}>Station:</Text>
                                        <Text style={styles.text}>{item.access["station"]}</Text>
                                        <Text style={styles.text}>Open Hours: </Text>
                                        <Text style={styles.text}>{item.opentime}</Text>
                                    </Body>
                                </ScrollView>
                            </CardItem>
                        </Card>
                    }
                    renderEmpty={() =>
                        <Card style={{ elevation: 3 }}>
                            <CardItem>
                                <Text>No restaurants match your selected preference.</Text>
                            </CardItem>
                        </Card>
                    }
                />
            </View>
            <Footer>
                <FooterTab>
                    <Button vertical onPress={() => navigation.navigate("Home")}>
                        <Icon name="home" />
                        <Text>Home</Text>
                    </Button>
                    <Button active vertical onPress={() => navigation.navigate("Search")}>
                        <Icon name="eye" />
                        <Text>Search</Text>
                    </Button>
                    <Button vertical onPress={() => navigation.navigate("Preferences")}>
                        <Icon active name="pizza" />
                        <Text>Preference</Text>
                    </Button>
                    <Button vertical onPress={() => navigation.navigate("Favorites")}>
                        <Icon name="heart" />
                        <Text>Favorites</Text>
                    </Button>
                </FooterTab>
            </Footer>
        </Container >
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
        textDecorationLine: "underline",
    },
});