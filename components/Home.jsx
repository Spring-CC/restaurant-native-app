import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Home() {
    const linkStyle = {
        fontFamily: "verdana"
    }
    return (
        <View style={styles.container}>
            <Link className="choice-no" to="/" style={linkStyle}>No</Link>
            <Link className="choice-yes" to="/details" style={linkStyle}>Yes</Link>
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