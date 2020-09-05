import React from 'react';
import { useSelector } from "react-redux";
import { StyleSheet, Text, ScrollView, View, Image, Linking } from 'react-native';
import Nav from './Nav';

export default function Details() {

    const restData = useSelector(state => state.restaurantReducer);

    return (
        <ScrollView>
            <Nav />
            <ScrollView style={styles.container}>
                <Image
                    source={{
                        uri: restData[0].image_url["shop_image1"],
                    }}
                    style={styles.image}
                />
                <View style={styles.basic_container}>
                    <Text style={styles.text_title}>Basic Details</Text>
                    <Text style={styles.text_sub}>Name:</Text>
                    <Text style={styles.text}>{restData[0].name}</Text>
                    <Text style={styles.text_sub}>Name (kana):</Text>
                    <Text style={styles.text}>{restData[0].name_kana}</Text>
                    <Text style={styles.text_sub}>Type:</Text>
                    <Text style={styles.text}>{restData[0].category}</Text>
                    <Text style={styles.text_sub}>Telephone No:</Text>
                    <Text style={styles.text}>{restData[0].tel}</Text>
                    <Text style={styles.text_sub}>Website:</Text>
                    <Text
                        style={styles.text}
                        style={{ color: 'dodgerblue' }}
                        onPress={() => Linking.openURL(`${restData[0].url}`)}
                    >Click Here! to go to website</Text>
                </View>
                <View style={styles.location_container}>
                    <Text style={styles.text_title}>Location Details</Text>
                    <Text style={styles.text_sub}>Address:</Text>
                    <Text style={styles.text}>{restData[0].address}</Text>
                    <Text style={styles.text_sub}>Latitude:</Text>
                    <Text style={styles.text}>{restData[0].latitude}</Text>
                    <Text style={styles.text_sub}>Longitude:</Text>
                    <Text style={styles.text}>{restData[0].longitude}</Text>
                    <Text style={styles.text_sub}>Station:</Text>
                    <Text style={styles.text}>{restData[0].access["station"]}</Text>
                    <Text style={styles.text_sub}>Open Time:</Text>
                    <Text style={styles.text}>{restData[0].opentime}</Text>
                </View>
                <View style={styles.payment_container}>
                    <Text style={styles.text_title}>Payment Details</Text>
                    <Text style={styles.text_sub}>Budget:</Text>
                    <Text style={styles.text}>{restData[0].budget}</Text>
                    <Text style={styles.text_sub}>Party:</Text>
                    <Text style={styles.text}>{restData[0].party}</Text>
                    <Text style={styles.text_sub}>Lunch:</Text>
                    <Text style={styles.text}>{restData[0].lunch}</Text>
                    <Text style={styles.text_sub}>Credit Card:</Text>
                    <Text style={styles.text}>{restData[0].credit_card}</Text>
                    <Text style={styles.text_sub}>E-Money:</Text>
                    <Text style={styles.text}>{restData[0].e_money}</Text>
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
        fontFamily: 'MPLUS1p-Black',
        textAlign: 'center',
    },
    text: {
        fontSize: 15,
        fontFamily: 'MPLUS1p-Medium',
    },
    text_sub: {
        fontSize: 15,
        fontFamily: 'MPLUS1p-Black',
    },
    container: {
        flex: 1,
        margin: 5,
        borderRadius: 12,
    },
    image: {
        width: '100%',
        height: 300,
        marginBottom: 7,
    },
});