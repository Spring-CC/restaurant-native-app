import React from 'react';
import { StyleSheet, View, Text, Button, ScrollView } from 'react-native';
import { SliderBox } from "react-native-image-slider-box";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "../actions";
import data from '../data/restaurants.json';

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

    // colours
    var color1 = "#f94144" // - Red Salsa
    var color2 = "#f3722c" // - Orange Red

    const linkStyle = {
        fontFamily: "verdana"
    };

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
            <View>
                <Button
                    title="No"
                    onPress={() => dispatch(increment())}
                />
                <Button
                    title="Yes"
                    onPress={() => console.log("yes pressed")}
                />
            </View>
            <View>
                <ScrollView>
                    <SliderBox
                        images={images}
                        sliderBoxHeight={400}
                        circleLoop
                        dotColor={color1}
                        inactiveDotColor={color2}
                        // autoplay
                        // resizeMode={'cover'}
                        // resizeMethod={'resize'}
                        // onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
                        // currentImageEmitter={index => console.warn(`current pos is: ${index}`)}
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
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
});
