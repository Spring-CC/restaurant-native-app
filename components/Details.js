import React from 'react';
import { useSelector } from "react-redux";
import { StyleSheet, Text, ScrollView, View } from 'react-native';

export default function Details() {

    const restData = useSelector(state => state.restaurantReducer);

    return (
        <ScrollView>
            <Image
                source={require('../assets/profile.jpeg')}
                style={styles.text}
            />
            <View style={styles.basic_container}>
                <Text style={styles.text_title}>Basic Details</Text>
                <Text style={styles.text}>Name:</Text>
                <Text style={styles.text}>{restData[0].name}</Text>
                <Text style={styles.text}>Name (kana):</Text>
                <Text style={styles.text}>{restData[0].name_kana}</Text>
                <Text style={styles.text}>Type:</Text>
                <Text style={styles.text}>{restData[0].category}</Text>
                <Text style={styles.text}>Telephone No:</Text>
                <Text style={styles.text}>{restData[0].tel}</Text>
                <Text style={styles.text}>Website:</Text>
                <Text style={styles.text}>{restData[0].url}</Text>
            </View>
            <View style={styles.location_container}>
                <Text style={styles.text_title}>Location Details</Text>
                <Text style={styles.text}>Address:</Text>
                <Text style={styles.text}>{restData[0].address}</Text>
                <Text style={styles.text}>Latitude:</Text>
                <Text style={styles.text}>{restData[0].latitude}</Text>
                <Text style={styles.text}>Longitude:</Text>
                <Text style={styles.text}>{restData[0].longitude}</Text>
                <Text style={styles.text}>Station:</Text>
                <Text style={styles.text}>{restData[0].access["station"]}</Text>
                <Text style={styles.text}>Open Time:</Text>
                <Text style={styles.text}>{restData[0].opentime}</Text>
            </View>
            <View style={styles.payment_container}>
                <Text style={styles.text_title}>Payment Details</Text>
                <Text style={styles.text}>Budget:</Text>
                <Text style={styles.text}>{restData[0].budget}</Text>
                <Text style={styles.text}>Party:</Text>
                <Text style={styles.text}>{restData[0].party}</Text>
                <Text style={styles.text}>Lunch:</Text>
                <Text style={styles.text}>{restData[0].lunch}</Text>
                <Text style={styles.text}>Credit Card:</Text>
                <Text style={styles.text}>{restData[0].credit_card}</Text>
                <Text style={styles.text}>E-Money:</Text>
                <Text style={styles.text}>{restData[0].e_money}</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    basic_container: {
        backgroundColor: "#F8961E",
    },
    location_container: {
        backgroundColor: "#F9C74F",
    },
    payment_container: {
        backgroundColor: "#90BE6D",
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
    container: {

    },
    image: {
        width: 50,
        height: 50,
    },
});
