import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Nav from './Nav';

export default function About() {
    return (
        <ScrollView>
            <Nav />
            <View style={styles.container}>
                <Text >About Page!</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: 'center',
        alignItems: 'center',
    }
});
