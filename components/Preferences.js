import React, { useState, useEffect } from "react";
import { InputAutoSuggest } from "react-native-autocomplete-search";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {
  StyleSheet,
  View,
  ScrollView,
  Picker,
  TouchableOpacity,
  KeyboardAvoidingView,
  Text,
} from "react-native";
import {
  Container,
  Footer,
  FooterTab,
  Button,
  Icon,
  // Text,
  Card,
  CardItem,
  Body,
} from "native-base";
import { useSelector, useDispatch } from "react-redux";
import {
  category,
  priceRange,
  setLocations,
  setRestaurantsList,
  setpriceCheckBox,
  restaurant
} from "../actions";
import axios from "axios";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import categoryFilter from "../actions/cateforyFilter";
import Nav from "./Nav";
//import Slider from './Slider'
import Spinner from "react-native-loading-spinner-overlay";
import data from "../data/autoinfo.json";
import locationFilter from "../actions/locationFilter";

// needs comments
export default function Preferences({ navigation }) {
  const [loading, setLoading] = useState(false);
  const categories = useSelector((state) => state.categoryReducer);
  const price = useSelector((state) => state.priceReducer);
  const location = useSelector((state) => state.locationReducer);
  const priceCheck = useSelector((state) => state.priceCheckReducer);
  const restaurantList = useSelector((state) => state.restaurantsListReducer);
  const restData = useSelector((state) => state.restaurantReducer);
  const dispatch = useDispatch();

  //function to filter restaurants through preferences
  async function getRestaurants() {
    setLoading(true);
    //Get all restaurants from DB
    try {
      const results = await axios.get(
        "https://restaurantserverspring.herokuapp.com/restAtlas"
      );
      const restaurants = results.data;
      //Filter restaurants by budget
      const filtBudget = restaurants.filter(
        (res) => res.budget >= price.min && res.budget <= price.max
      );
      const filtCat = categoryFilter(filtBudget, categories);

      //if location is selected filter by location as well
      if (location !== "") {
        const finalFil = locationFilter(filtCat, location);
        if (finalFil.length === 0) {
          setLoading(false);
          alert(
            "No restaurants found with those preferences, please change the preferences"
          );
          dispatch(setLocations(""));
          return;
        }

        dispatch(setRestaurantsList(finalFil));
        // add dispatch , create a state that has recommended restaurant data

        setTimeout(() => {
          setLoading(false);
          navigation.navigate("Search");
        }, 2000);
        dispatch(setLocations(""));
        console.log(location);
        return;
      }

      //if no location is selected, filter by other preferences only
      // console.log(filtCat)
      if (filtCat.length === 0) {
        setLoading(false);
        alert(
          "No restaurants found with those preferences, please change the preferences"
        );
        return;
      }

      dispatch(setRestaurantsList(filtCat));
      setTimeout(() => {
        setLoading(false);
        navigation.navigate("Search");
      }, 2000);
      dispatch(setLocations(""));
      console.log(location);
    } catch (err) {
      setLoading(false);
      return;
    }
  }

  useEffect(() => {
    console.log(categories);
  })

  const checkBoxSelected = (id) => {
    const selection = priceCheck.map((value, i) => {
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
    dispatch(setpriceCheckBox(selection));
  };

  if (loading === true) {
    return (
      <Container>
        <ScrollView style={styles.container}>
          <View>
            <Spinner
              visible={true}
              textContent={"Loading..."}
              textStyle={styles.spinnerTextStyle}
              size="large"
              color="#90be6d" // green too light ?
            />
          </View>
        </ScrollView>
      </Container>
    );
  }
  return (

    <Container>
      <Nav />

      <ScrollView style={styles.container}>
        <KeyboardAwareScrollView
          resetScrollToCoords={{ x: 0, y: 0 }}
          contentContainerStyle={styles.container}
          extraHeight={10}
          scrollEnabled
        >
          <Card style={styles.card}>
            <Text style={styles.title}>Preferences</Text>
            <CardItem>
              <Body style={styles.checkboxContainer}>
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
                {/* <BouncyCheckbox
                isChecked={categories["日本料理"]}
                text="Japanese 🍙"
                textDecoration={true}
                onPress={() => {
                  dispatch(
                    category((categories["日本料理"] = !categories["日本料理"]))
                  );
                }}
              /> */}
                <BouncyCheckbox
                  isChecked={categories["寿司"]}
                  text="Sushi / Seafood 🍣"
                  textDecoration={true}
                  onPress={() => {
                    dispatch(
                      category((categories["寿司"] = !categories["寿司"]))
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
                    dispatch(
                      category((categories["焼肉"] = !categories["焼肉"]))
                    );
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
                        (categories["焼肉・ホルモン"] = !categories[
                          "焼肉・ホルモン"
                        ])
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
                      category(
                        (categories["お好み焼き"] = !categories["お好み焼き"])
                      )
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
                    dispatch(
                      category((categories["中華"] = !categories["中華"]))
                    );
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
                  isChecked={categories["フレンチ"]}
                  text="French 🏳🍮"
                  textDecoration={true}
                  onPress={() => {
                    dispatch(
                      category((categories["フレンチ"] = !categories["フレンチ"]))
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
                      category((categories["ラーメン"] = !categories["ラーメン"]))
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
                      category((categories["カフェ"] = !categories["カフェ"]))
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
                      category(
                        (categories["とんかつ（トンカツ）"] = !categories[
                          "とんかつ（トンカツ）"
                        ])
                      )
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
                      category((categories["ワイン"] = !categories["ワイン"]))
                    );
                  }}
                />
                <BouncyCheckbox
                  isChecked={categories["しゃぶしゃぶ"]}
                  text="Shabushabu 🍱"
                  textDecoration={true}
                  onPress={() => {
                    dispatch(
                      category(
                        (categories["しゃぶしゃぶ"] = !categories["しゃぶしゃぶ"])
                      )
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
                    dispatch(
                      category(
                        (categories["ハンバーグ"] = !categories["ハンバーグ"])
                      )
                    );
                    // console.log(categories);
                  }}
                />
                <BouncyCheckbox
                  isChecked={categories["洋食屋"]}
                  text="Western restaurant 🌯"
                  textDecoration={true}
                  onPress={() => {
                    dispatch(
                      category((categories["洋食屋"] = !categories["洋食屋"]))
                    );
                    // console.log(categories);
                  }}
                />
                <BouncyCheckbox
                  isChecked={categories["火鍋"]}
                  text="Hot pot 🥘"
                  textDecoration={true}
                  onPress={() => {
                    dispatch(
                      category((categories["火鍋"] = !categories["火鍋"]))
                    );
                    // console.log(categories);
                  }}
                />
                <BouncyCheckbox
                  isChecked={categories["バー"]}
                  text="Bar 🍸"
                  textDecoration={true}
                  onPress={() => {
                    dispatch(
                      category((categories["バー"] = !categories["バー"]))
                    );
                    // console.log(categories);
                  }}
                />
                <BouncyCheckbox
                  isChecked={categories["そば"]}
                  text="Soba (Noodles) 🍜"
                  textDecoration={true}
                  onPress={() => {
                    dispatch(
                      category((categories["そば"] = !categories["そば"]))
                    );
                    // console.log(categories);
                  }}
                />
              </Body>
            </CardItem>
          </Card>

          <Card style={styles.card}>
            <Text style={styles.title}>Price Range</Text>
            <CardItem>
              <Body style={styles.checkboxContainer}>
                <BouncyCheckbox
                  isChecked={priceCheck[0].checked}
                  text="¥500 - ¥1000 💴"
                  textDecoration={true}
                  onPress={() => {
                    dispatch(priceRange(({ min: 500, max: 1000 })));
                    checkBoxSelected(0);
                    console.log(priceCheck);
                  }}
                />
                <BouncyCheckbox
                  isChecked={priceCheck[1].checked}
                  text="¥1000 - ¥2000 💴"
                  textDecoration={true}
                  onPress={() => {
                    dispatch(priceRange(({ min: 100, max: 2000 })));
                    checkBoxSelected(1)
                  }}
                />
                <BouncyCheckbox
                  isChecked={priceCheck[2].checked}
                  text="¥2000 - ¥5000 💴"
                  textDecoration={true}
                  onPress={() => {
                    dispatch(priceRange(({ min: 2000, max: 5000 })));
                    checkBoxSelected(2)

                  }}
                />
                <BouncyCheckbox
                  isChecked={priceCheck[3].checked}
                  text="¥5000 - ¥10000 💴"
                  textDecoration={true}
                  onPress={() => {
                    dispatch(priceRange(({ min: 5000, max: 10000 })));
                    checkBoxSelected(3)
                  }}
                />
                <BouncyCheckbox
                  isChecked={priceCheck[4].checked}
                  text="¥10000 - ¥15000 💴"
                  textDecoration={true}
                  onPress={() => {
                    dispatch(priceRange(({ min: 10000, max: 15000 })));
                    checkBoxSelected(4)

                  }}
                />
                <BouncyCheckbox
                  isChecked={priceCheck[5].checked}
                  text="¥15000 - ¥20000 💴"
                  textDecoration={true}
                  onPress={() => {
                    dispatch(priceRange(({ min: 15000, max: 20000 })));
                    checkBoxSelected(5)

                  }}
                />
              </Body>
            </CardItem>
          </Card>

          <Card style={styles.card}>
            <Text style={styles.title}>Location</Text>

            {/* <View style={styles.pickerContainer}>
            <Picker
              selectedValue={location.name}
              itemStyle={styles.pickerItem}
              onValueChange={(itemValue) => {
                dispatch(setLocations((location.name = itemValue)));
              }}
            >
              {data.map((elem) => (
                <Picker.Item key={elem.id} label={elem.name} value={elem.name} />
              ))}
            </Picker>
        </View> */}

            <InputAutoSuggest
              style={{
                flex: 1,
                margin: 20,
                padding: 50,
                justifyContent: "center",
              }}
              staticData={data}
              onDataSelectedChange={(loc) => {
                dispatch(setLocations(loc));
              }}
            />
          </Card>

          <Button
            success
            block
            onPress={() => getRestaurants()}
            style={styles.button}
          >
            <Text style={{ fontSize: 25 }}>Set Preferences</Text>
          </Button>
        </KeyboardAwareScrollView>
      </ScrollView>


      <Footer>
        <FooterTab style={{ backgroundColor: "#F3722C" }}>
          <Button vertical onPress={() => navigation.navigate("Home")}>
            <Icon name="home" style={{ color: "#fff" }} />
            <Text style={{ color: "#fff", fontSize: 12 }}>Home</Text>
          </Button>
          <Button vertical onPress={() => navigation.navigate("Search")}>
            <Icon name="search" style={{ color: "#fff" }} />
            <Text style={{ color: "#fff", fontSize: 12 }}>Search</Text>
          </Button>
          <Button
            active
            vertical
            onPress={() => navigation.navigate("Preferences")}
            style={{ backgroundColor: "#F8961E" }}
          >
            <Icon active name="cog" style={{ color: "#fff" }} />
            <Text style={{ color: "#fff", fontSize: 12 }}>Preference</Text>
          </Button>
          <Button vertical onPress={() => navigation.navigate("Profile")}>
            <Icon name="person" style={{ color: "#fff" }} />
            <Text style={{ color: "#fff", fontSize: 12 }}>User</Text>
          </Button>
        </FooterTab>
      </Footer>
    </Container>

  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#F9C74F",
  },
  descriptionContainer: {
    // `backgroundColor` needs to be set otherwise the
    // autocomplete input will disappear on text input.
    backgroundColor: "#F5FCFF",
    marginTop: 8,
  },
  infoText: {
    textAlign: "center",
  },
  checkboxContainer: {
    backgroundColor: "white",
    margin: 10,
    borderRadius: 12,
    padding: 10,
  },
  pickerContainer: {
    backgroundColor: "white",
    margin: 10,
    borderRadius: 12,
  },
  title: {
    textAlign: "center",
    fontFamily: "MPLUS1p-Medium",
    fontSize: 40,
    color: "#F3722C",
  },
  pickerItem: {
    color: "red",
  },
  button: {
    alignItems: "center",
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
    color: "#FFF",
  },
  card: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    borderRadius: 12,
    padding: 10,
  },
});
