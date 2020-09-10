import React, { useState, useEffect }  from "react";
import { useSelector, useDispatch } from "react-redux";
import Nav from "./Nav";
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  TouchableOpacity,
  Image,
  Linking,
  Button,
} from "react-native";
import axios from 'axios';


export default function FavoritesView(){
    
    const mockData = [
    {
        name: "エルトリート 西葛西店",
        opentime: " 11:00～24:00(L.O.23:00)",
        tel: "050-3469-5266",
        image_url: "https://rimage.gnst.jp/rest/img/4323u30n0000/t_005y.jpg",
        url: "https://r.gnavi.co.jp/g047005/?ak=weHzA%2F9AqDO3TNzkDdjl7C6E%2FDWGLiZ0HTVI4tW5qHQ%3D"
    },
    {
        name: "エルトリート 西葛西店",
        opentime: " 11:00～24:00(L.O.23:00)",
        tel: "050-3469-5266",
        image_url: "https://rimage.gnst.jp/rest/img/4323u30n0000/t_005y.jpg",
        url: "https://r.gnavi.co.jp/g047005/?ak=weHzA%2F9AqDO3TNzkDdjl7C6E%2FDWGLiZ0HTVI4tW5qHQ%3D"
    },

]

const [userFavorites, setFavorites] = useState(mockData);
const userId = useSelector((state) => state.userIdReducer);
const restaurantList = useSelector((state) => state.restaurantsListReducer);

async function getUserFavorites(id){

    
    const favoritesUsers = await axios.get("http://localhost:8080/favoritesInfo");

    const usersData = favoritesUsers.data;
    
    const userFavorite = usersData.filter(user => user.user_Id===id);
    
    const restIds = userFavorite[0].restaurant_Id
    console.log(restIds)
    const results = restaurantList.filter(item=>{
        if(restIds.includes(item.id)) {
            return item;
        } 
        })
    console.log(results)
    setFavorites(results);
    console.log(userFavorites)

}


useEffect(() => {
    getUserFavorites(userId);
  }, []);


    return (
        <ScrollView style={styles.container}>
          <View>
            <Nav />
          </View>
          <View>
            <Text style={styles.title}>Favorites</Text>
          </View>
          <View>
              {userFavorites.map(favorite=>(
        <View style={styles.checkboxContainer}>
                <Text style={styles.textTitle}>Name</Text>
                <Text style={styles.textBody}>{favorite.name}</Text>
                <Text style={styles.textTitle}>Open time</Text>
                <Text style={styles.textBody}>{favorite.opentime}</Text>
                <Text style={styles.textTitle}>Telephone</Text>
                <Text style={styles.textBody}>{favorite.tel}</Text>
                <Text style={styles.textTitle}>Link to Restaurant</Text>
                <Text style={styles.linkText}
                onPress={() => Linking.openURL(favorite.url)}>
                Press To Go to Restaurant Page</Text>
        <TouchableOpacity
          style={styles.buttons}
        //   onPress={() => {}}
          >
            <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>
             X
            </Text>
          </TouchableOpacity>
        </View>  
              ))}
          </View>
          </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F9C74F',
    },
    title: {
        textAlign: 'center',
        fontFamily: "MPLUS1p-Medium",
        fontSize: 40,
      },
      checkboxContainer: {
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 12,
        padding: 10,
      },
      textBody: {
        fontSize: 20,
        fontFamily: "MPLUS1p-Bold",
        textAlign: "center",
      },
      linkText: {
        fontSize: 20,
        fontFamily: "MPLUS1p-Bold",
        textAlign: "center",
        color: "#3780E8",
      },
      textTitle: {
        fontSize: 20,
        textDecorationLine: "underline",
        fontFamily: "MPLUS1p-Bold",
        textAlign: "center",
      },
      buttons: {
        height: 50,
        width: 200,
        backgroundColor: "#ff0000",
        borderRadius: 12,
        justifyContent: "center",
        alignItems: "center",
      },
})