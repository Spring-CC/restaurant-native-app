import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Linking } from 'react-native';
import Nav from './Nav';

export default function About() {
    return (
        <ScrollView style={styles.container}>
            <Nav />
            <View style={styles.box1}>
                <Text style={styles.text}>Eri Shimada</Text>
                <Image
                    source={{
                        uri: 'https://ca.slack-edge.com/T0139VDCF27-U013CHJSHRT-ac0cf8bdb88e-512',
                    }}
                    style={styles.image}
                />
                <Text
                    style={styles.text_sub}
                    onPress={() => Linking.openURL('https://github.com/Erismd')}
                >GitHub</Text>
            </View>
            <View style={styles.box2}>
                <Text style={styles.text}>Shaun Darragh</Text>
                <Image
                    source={{
                        uri: 'https://ca.slack-edge.com/T0139VDCF27-U013WT7EC86-6f3ce91e3443-512',
                    }}
                    style={styles.image}
                />
                <Text
                    style={styles.text_sub}
                    onPress={() => Linking.openURL('https://github.com/ottotsuma')}
                >GitHub</Text>
            </View>
            <View style={styles.box3}>
                <Text style={styles.text}>Alberto Medellin</Text>
                <Image
                    source={{
                        uri: 'https://ca.slack-edge.com/T0139VDCF27-U013T9A9NF3-768002e495e2-512',
                    }}
                    style={styles.image}
                />
                <Text
                    style={styles.text_sub}
                    onPress={() => Linking.openURL('https://github.com/MEGAALBERT')}
                >GitHub</Text>
            </View>
            <View style={styles.box4}>
                <Text style={styles.text}>Yuri Amami</Text>
                <Image
                    source={{
                        uri: 'https://ca.slack-edge.com/T0139VDCF27-U013ZK9AX97-6067ec7e3310-512',
                    }}
                    style={styles.image}
                />
                <Text
                    style={styles.text_sub}
                    onPress={() => Linking.openURL('https://github.com/yuriamm')}
                >GitHub</Text>
            </View>
            <View style={styles.box5}>
                <Text style={styles.text}>Dylan Cooper</Text>
                <Image
                    source={{
                        uri: 'https://ca.slack-edge.com/T0139VDCF27-U013K8SSE6Q-fb608ad7d078-512',
                    }}
                    style={styles.image}
                />
                <Text
                    style={styles.text_sub}
                    onPress={() => Linking.openURL('https://github.com/Dylanc55')}
                >GitHub</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 100,
        marginBottom: 20,
    },
    text: {
        fontSize: 20,
        fontFamily: 'MPLUS1p-Black',
        color: 'white'
    },
    text_sub: {
        fontSize: 20,
        fontFamily: 'MPLUS1p-Medium',
        color: 'dodgerblue',
    },
    box1: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F8961E',
        margin: 10,
        borderRadius: 12,
    },
    box2: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F9C74F',
        margin: 10,
        borderRadius: 12,
    },
    box3: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#90BE6D',
        margin: 10,
        borderRadius: 12,
    },
    box4: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F8961E',
        margin: 10,
        borderRadius: 12,
    },
    box5: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F9C74F',
        margin: 10,
        borderRadius: 12,
    },
});
