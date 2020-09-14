import React, { useState } from "react";
// import { InputAutoSuggest } from 'react-native-autocomplete-search';
import {
  StyleSheet,
  View,
  ScrollView,
  Picker,
  TouchableOpacity
} from "react-native";
import { Container, Footer, FooterTab, Button, Icon, Text } from 'native-base';
import { useSelector, useDispatch } from "react-redux";
import { category, priceRange, setLocations, setRestaurantsList } from "../actions";
import axios from "axios";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import categoryFilter from "../actions/cateforyFilter";
import Nav from "./Nav";
//import Slider from './Slider'
import Spinner from 'react-native-loading-spinner-overlay';
import data from "../data/autoinfo.json"
import locationFilter from "../actions/locationFilter"

// needs comments 
export default function Preferences({ navigation }) {

  const [loading, setLoading] = useState(false);

  async function getRestaurants() {
    setLoading(true)
    try {
      const results = await axios.get("https://restaurantserverspring.herokuapp.com/restAtlas");
      const restaurants = results.data;
      const filtBudget = restaurants.filter(res => (res.budget >= price.min && res.budget <= price.max));
      const filtCat = categoryFilter(filtBudget, categories);
      // console.log(filtCat)
      if(filtCat.length === 0){
        setLoading(false)
        alert("No restaurants found with those preferences, please change the prefrences");
        return;
      }
      const finalFil = locationFilter(filtCat, location)
      dispatch(setRestaurantsList(filtCat));
      setTimeout(()=>{
            setLoading(false)
            navigation.navigate('Search');
       }, 2000);
       
    } catch (err) {
      setLoading(false)
      return
    }
  }


  const [priceSelected, setSelected] = useState([
    {
      id: 0,
      checked: false,
    },
    {
      id: 1,
      checked: false,
    },
    {
      id: 2,
      checked: false,
    },
    {
      id: 3,
      checked: false,
    },
    {
      id: 4,
      checked: false,
    },
    {
      id: 5,
      checked: false,
    },
  ]);

  const checkBoxSelected = (id) => {
    const selection = priceSelected.map((value, i) => {
      if (value.id === id) {
        return {
          id: i,
          checked: true,
        };
      } else {
        return {
          id: i,
          checked: false,
        };
      }
    });
    // console.log(selection);
    setSelected(selection);
  };

  const categories = useSelector((state) => state.categoryReducer);
  const price = useSelector((state) => state.priceReducer);
  const location = useSelector((state) => state.locationReducer);
  const restaurantList = useSelector((state) => state.restaurantsListReducer);
  const dispatch = useDispatch();

  if (loading === true) {
    return (
      <Container>
        <ScrollView style={styles.container}>
          <View>
            <Spinner
          visible={true}
          textContent={'Loading...'}
          textStyle={styles.spinnerTextStyle}
          size="large" 
          color="#90be6d" // green too light ?
        />
          </View>
        </ScrollView>
      </Container>
    )
  }
  return (
    <Container>
      <ScrollView style={styles.container}>
        <View>
          <Nav />
        </View>

        <View>

          <Text style={styles.title}>Preferences</Text>

          <View style={styles.checkboxContainer}>

            <BouncyCheckbox
              isChecked={categories["居酒屋"]}
              text="Izakaya 🍺"
              textDecoration={true}
              onPress={() => {
                dispatch(
                  category((categories["居酒屋"] = !categories["居酒屋"]))
                );
              }}
            />
            <BouncyCheckbox
              isChecked={categories["日本料理"]}
              text="Japanese 🍙"
              textDecoration={true}
              onPress={() => {
                dispatch(
                  category((categories["日本料理"] = !categories["日本料理"]))
                );
              }}
            />
            <BouncyCheckbox
              isChecked={categories["寿司"]}
              text="Sushi / Seafood 🍣"
              textDecoration={true}
              onPress={() => {
                dispatch(
                  category(
                    (categories["寿司"] = !categories[
                      "寿司"
                    ])
                  )
                );
              }}
            />
            <BouncyCheckbox
              isChecked={categories["鍋"]}
              text="Nabe 🍲"
              textDecoration={true}
              onPress={() => {
                dispatch(category((categories["鍋"] = !categories["鍋"])));
              }}
            />
            <BouncyCheckbox
              isChecked={categories["焼肉"]}
              text="Yakiniku 🥓"
              textDecoration={true}
              onPress={() => {
                dispatch(category((categories["焼肉"] = !categories["焼肉"])));
              }}
            />
            <BouncyCheckbox
              isChecked={categories["焼き鳥"]}
              text="Yakitori 🍢"
              textDecoration={true}
              onPress={() => {
                dispatch(
                  category((categories["焼き鳥"] = !categories["焼き鳥"]))
                );
              }}
            />
            <BouncyCheckbox
              isChecked={categories["焼肉・ホルモン"]}
              text="Yakiniku (Offal) 🍛"
              textDecoration={true}
              onPress={() => {
                dispatch(
                  category(
                    (categories["焼肉・ホルモン"] = !categories["焼肉・ホルモン"])
                  )
                );
              }}
            />
            <BouncyCheckbox
              isChecked={categories["お好み焼き"]}
              text="Okonomiyaki 🍘"
              textDecoration={true}
              onPress={() => {
                dispatch(
                  category((categories["お好み焼き"] = !categories["お好み焼き"]))
                );
              }}
            />
            <BouncyCheckbox
              isChecked={categories["郷土料理"]}
              text="Local Cuisine 🍘"
              textDecoration={true}
              onPress={() => {
                dispatch(
                  category((categories["郷土料理"] = !categories["郷土料理"]))
                );
              }}
            />
            <BouncyCheckbox
              isChecked={categories["うどん"]}
              text="Udon 🍜"
              textDecoration={true}
              onPress={() => {
                dispatch(
                  category((categories["うどん"] = !categories["うどん"]))
                );
              }}
            />
            <BouncyCheckbox
              isChecked={categories["中華"]}
              text="Chinese 🍖"
              textDecoration={true}
              onPress={() => {
                dispatch(category((categories["中華"] = !categories["中華"])));
              }}
            />
            <BouncyCheckbox
              isChecked={categories["イタリアン・フレンチ"]}
              text="Italian/French 🍝"
              textDecoration={true}
              onPress={() => {
                dispatch(
                  category(
                    (categories["イタリアン・フレンチ"] = !categories[
                      "イタリアン・フレンチ"
                    ])
                  )
                );
              }}
            />
            <BouncyCheckbox
              isChecked={categories["フレンチ(フランス料理)"]}
              text="French 🏳🍮"
              textDecoration={true}
              onPress={() => {
                dispatch(
                  category((categories["フレンチ(フランス料理)"] = !categories["フレンチ(フランス料理)"]))
                );
              }}
              style={styles.checkbox}
            />
            <BouncyCheckbox
              isChecked={categories["ラーメン"]}
              text="Ramen 🍜"
              textDecoration={true}
              onPress={() => {
                dispatch(
                  category(
                    (categories["ラーメン"] = !categories[
                      "ラーメン"
                    ])
                  )
                );
              }}
            />
            <BouncyCheckbox
              isChecked={categories["カレー"]}
              text="Curry 🍛"
              textDecoration={true}
              onPress={() => {
                dispatch(
                  category((categories["カレー"] = !categories["カレー"]))
                );
              }}
            />
            <BouncyCheckbox
              isChecked={categories["カフェ"]}
              text="Cafe ☕"
              textDecoration={true}
              onPress={() => {
                dispatch(
                  category(
                    (categories["カフェ"] = !categories[
                      "カフェ"
                    ])
                  )
                );
              }}
            />
            <BouncyCheckbox
              isChecked={categories["メキシコ料理"]}
              text="Mexican 🌮"
              textDecoration={true}
              onPress={() => {
                dispatch(
                  category(
                    (categories["メキシコ料理"] = !categories["メキシコ料理"])
                  )
                );
              }}
            />
            <BouncyCheckbox
              isChecked={categories["とんかつ（トンカツ）"]}
              text="Tonkatsu (Pork cutlet) 🥓"
              textDecoration={true}
              onPress={() => {
                dispatch(
                  category((categories["とんかつ（トンカツ）"] = !categories["とんかつ（トンカツ）"]))
                );
              }}
            />
            <BouncyCheckbox
              isChecked={categories["定食・食事処"]}
              text="Set menu 🍽"
              textDecoration={true}
              onPress={() => {
                dispatch(
                  category(
                    (categories["定食・食事処"] = !categories["定食・食事処"])
                  )
                );
              }}
            />
            <BouncyCheckbox
              isChecked={categories["ワイン"]}
              text="Wine 🍾"
              textDecoration={true}
              onPress={() => {
                dispatch(
                  category(
                    (categories["ワイン"] = !categories[
                      "ワイン"
                    ])
                  )
                );
              }}
            />
            <BouncyCheckbox
              isChecked={categories["しゃぶしゃぶ"]}
              text="Shabushabu 🍱"
              textDecoration={true}
              onPress={() => {
                dispatch(
                  category((categories["しゃぶしゃぶ"] = !categories["しゃぶしゃぶ"]))
                );
              }}
            />
            <BouncyCheckbox
              isChecked={categories["ステーキ"]}
              text="Steak 🥩"
              textDecoration={true}
              onPress={() => {
                dispatch(
                  category((categories["ステーキ"] = !categories["ステーキ"]))
                );
              }}
            />
            <BouncyCheckbox
              isChecked={categories["ハンバーグ"]}
              text="Hamburger Patty 🍔"
              textDecoration={true}
              onPress={() => {
                dispatch(category((categories["ハンバーグ"] = !categories["ハンバーグ"])));
                // console.log(categories);
              }}
            />
            <BouncyCheckbox
              isChecked={categories["洋食屋"]}
              text="Western restaurant 🌯"
              textDecoration={true}
              onPress={() => {
                dispatch(category((categories["洋食屋"] = !categories["洋食屋"])));
                // console.log(categories);
              }}
            />
            <BouncyCheckbox
              isChecked={categories["火鍋"]}
              text="Hot pot 🥘"
              textDecoration={true}
              onPress={() => {
                dispatch(category((categories["火鍋"] = !categories["火鍋"])));
                // console.log(categories);
              }}
            />
            <BouncyCheckbox
              isChecked={categories["バー"]}
              text="Bar 🍸"
              textDecoration={true}
              onPress={() => {
                dispatch(category((categories["バー"] = !categories["バー"])));
                // console.log(categories);
              }}
            />
            <BouncyCheckbox
              isChecked={categories["そば"]}
              text="Soba (Noodles) 🍜"
              textDecoration={true}
              onPress={() => {
                dispatch(category((categories["そば"] = !categories["そば"])));
                // console.log(categories);
              }}
            />
          </View>
        </View>

        <View style={styles.container}>

          <Text style={styles.title}>Price Range</Text>

          <View style={styles.checkboxContainer}>

            <BouncyCheckbox
              isChecked={priceSelected[0].checked}
              text="¥500 - ¥1000 💴"
              textDecoration={true}
              onPress={() => {
                dispatch(priceRange((price.min = 500)));
                dispatch(priceRange((price.max = 1000)));
                checkBoxSelected(0);
                // console.log(priceSelected[0])
              }}
            />
            <BouncyCheckbox
              isChecked={priceSelected[1].checked}
              text="¥1000 - ¥2000 💴"
              textDecoration={true}
              onPress={() => {
                dispatch(priceRange((price.min = 1000)));
                dispatch(priceRange((price.max = 2000)));
                checkBoxSelected(1);
              }}
            />
            <BouncyCheckbox
              isChecked={priceSelected[2].checked}
              text="¥2000 - ¥5000 💴"
              textDecoration={true}
              onPress={() => {
                dispatch(priceRange((price.min = 2000)));
                dispatch(priceRange((price.max = 5000)));
                checkBoxSelected(2);
              }}
            />
            <BouncyCheckbox
              isChecked={priceSelected[3].checked}
              text="¥5000 - ¥10000 💴"
              textDecoration={true}
              onPress={() => {
                dispatch(priceRange((price.min = 5000)));
                dispatch(priceRange((price.max = 10000)));
                checkBoxSelected(3);
              }}
            />
            <BouncyCheckbox
              isChecked={priceSelected[4].checked}
              text="¥10000 - ¥15000 💴"
              textDecoration={true}
              onPress={() => {
                dispatch(priceRange((price.min = 10000)));
                dispatch(priceRange((price.max = 15000)));
                checkBoxSelected(4);
              }}
            />
            <BouncyCheckbox
              isChecked={priceSelected[5].checked}
              text="¥15000 - ¥20000 💴"
              textDecoration={true}
              onPress={() => {
                dispatch(priceRange((price.min = 10000)));
                dispatch(priceRange((price.max = 15000)));
                // console.log(price);
                checkBoxSelected(5);
              }}
            />
          </View>
        </View>

        <View style={styles.container}>

          <Text style={styles.title}>Location</Text>

          {/* <View style={styles.pickerContainer}>
            <Picker
              selectedValue={location.name}
              itemStyle={styles.pickerItem}
              onValueChange={(itemValue) => {
                dispatch(setLocations((location.name = itemValue)));
              }}
            >
              {mockdata.map((elem) => (
                <Picker.Item key={elem.id} label={elem.name} value={elem.name} />
              ))}
            </Picker>
        </View> */}

        {/* <InputAutoSuggest
        style={{flex:1, margin: 20, padding: 20, justifyContent: "center"}}
        staticData={data}
        onDataSelectedChange={loc => {
          dispatch(setLocations((loc)))
          
        }}
        /> */}

          </View>

      
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.buttons}
            onPress={() => {
              getRestaurants();
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>
              Set Preferences
        </Text>
          </TouchableOpacity>
        </View>

      </ScrollView>

      <Footer>
        <FooterTab>
          <Button vertical onPress={() => navigation.navigate("Home")}>
            <Icon name="home" />
            <Text>Home</Text>
          </Button>
          <Button vertical onPress={() => navigation.navigate("Search")}>
            <Icon name="eye" />
            <Text>Search</Text>
          </Button>
          <Button active vertical onPress={() => navigation.navigate("Preferences")}>
            <Icon active name="pizza" />
            <Text>Preference</Text>
          </Button>
          <Button vertical onPress={() => navigation.navigate("Favorites")}>
            <Icon name="heart" />
            <Text>Favorites</Text>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9C74F',
  },
  descriptionContainer: {
    // `backgroundColor` needs to be set otherwise the
    // autocomplete input will disappear on text input.
    backgroundColor: '#F5FCFF',
    marginTop: 8
  },
  infoText: {
    textAlign: 'center'
  },
  checkboxContainer: {
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 12,
    padding: 10,
  },
  pickerContainer: {
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 12,
  },
  title: {
    textAlign: 'center',
    fontFamily: "MPLUS1p-Medium",
    fontSize: 40,
  },
  pickerItem: {
    color: "red",
  },
  buttonContainer: {
    alignItems: 'center',
    margin: 20,
  },
  buttons: {
    height: 50,
    width: 200,
    backgroundColor: "#90BE6D",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  spinnerTextStyle: {
    color: '#FFF'
  },
});


