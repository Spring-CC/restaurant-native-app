import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { SliderBox } from "react-native-image-slider-box";
import Details from './Details';

// this component was made by Shaun, feel free to ask if you have questions about the code.

// images 
const image1 = require('./../assets/1.jpg')
const image2 = require('./../assets/2.jpg')
const image3 = require('./../assets/3.jpg')
const image4 = require('./../assets/4.jpg')
const image5 = require('./../assets/5.jpg')

// colours
var color1 = "#f94144" // - Red Salsa
var color2 = "#f3722c" // - Orange Red
var color3 = "#f8961e" // - Yellow Orange Color Wheel
var color4 = "#f9c74f" // - Maize Crayola
var color5 = "#90be6d" // - Pistachio 

const array = [image1, image2, image3, image4, image5]

export default function About() {
    return (
        <View style={styles.container}>
            <ScrollView>
                <Text style={{ fontSize: 100, textAlign: 'center' }}>About Page</Text>
                <SliderBox
                    images={array}
                    onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
                    currentImageEmitter={index => console.warn(`current pos is: ${index}`)}
                    autoplay
                    circleLoop
                    dotColor={color1}
                    inactiveDotColor={color2}
                    // resizeMethod={'resize'}
                    // resizeMode={'cover'}
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
                <Details></Details>
            </ScrollView>
            <StatusBar style="auto" />
        </View>
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
