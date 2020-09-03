import React from 'react';
import { View, Text } from 'react-native';

// import axios from 'axios'
// require("dotenv").config();

// async function getdata () {
//     const data = await axios.get(`https://api.gnavi.co.jp/RestSearchAPI/v3/?keyid=5d3350892d24701b473ca9748ac04669&pref=PREF13&hit_per_page=100&offset_page=6`)
//     console.log(data.data.rest)
//   }

// getdata();

export default function About() {
    return (
        <View>
            <Text h1>About Page!!</Text>
        </View>
    );
}