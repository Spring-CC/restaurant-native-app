import React from 'react';
import { Link } from 'react-router-dom';
import { StyleSheet, View } from 'react-native';
// import data from '../data/restaurants.json';

export default function Home() {

    const linkStyle = {
        fontFamily: "verdana"
    }

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
                <Link className="choice-no" to="/" style={linkStyle}>No</Link>
                <Link className="choice-yes" to="/details" style={linkStyle}>Yes</Link>
            </View>
            <View>
                {restaurants.map(restaurant => {
                    return (
                        <View className="restaurant-info" key={restaurant.id}>
                            <View className="title">{restaurant.name}</View>
                            <View className="kana">{restaurant.name_kana}</View>
                            <View className="category">{restaurant.category}</View>
                            <View className="address">{restaurant.address}</View>
                            <View className="open-time">{restaurant.opentime}</View>
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
        justifyContent: 'center',
    },
});