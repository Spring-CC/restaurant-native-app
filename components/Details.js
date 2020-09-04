import React from 'react';
import { useSelector } from "react-redux";
import { StyleSheet, Text, ScrollView } from 'react-native';

export default function Details() {

    const restData = useSelector(state => state.restaurantReducer);

    console.log(restData);

    return (
        <ScrollView>
            <Text style={{ fontSize: 20, textAlign: 'center' }}>Details Component</Text>
            <Text>Name</Text>
            <Text>Type</Text>
            <Text>Address</Text>
            <Text>Etc.</Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
    }
});
