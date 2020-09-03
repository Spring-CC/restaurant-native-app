import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import data from '../data/restaurants.json';
import Slider from './Pictureslider';
// <Button title="Login" onPress={() => navigation.navigate('Login')} />

// export default function Home({ navigation }) {

// return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//     <Text>Home</Text>
//     <Button title="Log out" onPress={() => navigation.navigate('Login')} />
//   </View>  
// );
// }

export default function Home() {

    const linkStyle = {
        fontFamily: "verdana"
    }

    const index = useSelector(state => state);
    const dispatch = useDispatch();

    const restaurants = data.filter((restaurant, idx) => idx === index);
    const images = [];
    for (let key in restaurants[0].image_url) {
        if (restaurants[0].image_url[key] !== "") {
            images.push(restaurants[0].image_url[key]);
        }
    }

    return (
        <View>
            <View style={styles.container}>
                <Button
                    title="No"
                    onPress={() => dispatch(increment())}
                />
                <Button
                    title="Yes"
                />
            </View>
            <Slider />
            <View>
                {restaurants.map(restaurant => {
                    return (
                        <View key={restaurant.id}>
                            <Text>{restaurant.name}</Text>
                            <Text>{restaurant.name_kana}</Text>
                            <Text>{restaurant.category}</Text>
                            <Text>{restaurant.address}</Text>
                            <Text>{restaurant.opentime}</Text>
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
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    choiceNo: {

    },
    choiceYes: {

    },
    restaurantInfo: {

    },
    title: {

    },
    kana: {

    },
    category: {

    },
    address: {

    },
    openTime: {

    },
});
