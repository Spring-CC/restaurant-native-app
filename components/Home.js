import React from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SliderBox } from "react-native-image-slider-box";
import { useSelector, useDispatch } from "react-redux";
import { increment, restaurant } from "../actions";
import data from '../data/restaurants.json';
import Nav from './Nav';

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

    var color1 = "#f94144" // - Red Salsa
    var color2 = "#f3722c" // - Orange Red

    const index = useSelector(state => state.incrementReducer);
    const dispatch = useDispatch();

    const restaurants = data.filter((restaurant, idx) => idx === index);
    const images = [];
    for (let key in restaurants[0].image_url) {
        if (restaurants[0].image_url[key] !== "") {
            images.push(restaurants[0].image_url[key]);
        }
    }

    function onPress() {
        dispatch(restaurant(restaurants))
        navigation.navigate('Details')
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.buttons}
                    onPress={() => dispatch(increment())}>
                    <Text
                        style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}
                    >No</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttons}
                    onPress={() => onPress()}>
                    <Text
                        style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}
                    >Yes</Text>
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
                            paddingVertical: 10
                        }}
                        dotStyle={{
                            width: 25,
                            height: 25,
                            borderRadius: 25,
                            marginHorizontal: 0,
                            padding: 0,
                            margin: 0,
                            backgroundColor: "rgba(128, 128, 128, 0.92)"
                        }}
                        ImageComponentStyle={{ borderRadius: 15, width: '97%', marginTop: 5 }}
                        imageLoadingColor="#2196F3"
                    />
                </ScrollView>
            </View>
            <View style={styles.restaurant}>
                {restaurants.map(restaurant => {
                    return (
                        <View key={restaurant.id}>
                            <Text style={styles.textName}>{restaurant.name}</Text>
                            <Text style={styles.textKana}>{`(${restaurant.name_kana})`}</Text>
                            <Text style={styles.textBody}>{restaurant.category}</Text>
                            <Text style={styles.textBody}>{restaurant.address}</Text>
                            <Text style={styles.textBody}>{restaurant.opentime}</Text>
                        </View>
                    );
                })}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20,
    },
    buttons: {
        height: 50,
        width: 100,
        backgroundColor: '#F8961E',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
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
        fontFamily: 'MPLUS1p-Bold',
        textAlign: 'center',
    },
    textKana: {
        fontSize: 25,
        fontFamily: 'MPLUS1p-Bold',
        textAlign: 'center',
    },
    textBody: {
        fontSize: 20,
        fontFamily: 'MPLUS1p-Bold',
        textAlign: 'center',
    },
});
