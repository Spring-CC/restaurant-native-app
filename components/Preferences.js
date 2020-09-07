import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  CheckBox,
  ScrollView,
  Picker,
} from "react-native";
import Nav from "./Nav";
import { useSelector, useDispatch } from "react-redux";
import { category, priceRange, setLocations } from "../actions";
//import Slider from './Slider'

export default function Preferences() {
  let mockdata = [
    {
      name: "Shibuya",
    },
    {
      name: "Shinjuku",
    },
    {
      name: "Tokyo",
    },
  ];

  const [priceSelected, setSelected] = useState([
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
    {
      id: 6,
      checked: false,
    },
  ]);

  const checkBoxSelected = (id) => {
    const selection = priceSelected.map((value, i) => {
      if (value.id === id) {
        return {
          id: i + 1,
          checked: true,
        };
      } else {
        return {
          id: i + 1,
          checked: false,
        };
      }
    });
    return setSelected(selection);
  };

  const categories = useSelector((state) => state.categoryReducer);
  const price = useSelector((state) => state.priceReducer);
  const location = useSelector((state) => state.locationReducer);
  const dispatch = useDispatch();

  return (
    <ScrollView>
      <View>
        <Nav />
      </View>

      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Preferences</Text>
        </View>

        <View style={styles.checkboxContainer}>
          <CheckBox
            value={categories["居酒屋"]}
            onValueChange={() => {
              dispatch(
                category((categories["居酒屋"] = !categories["居酒屋"]))
              );
            }}
            style={styles.checkbox}
          />
          <Text style={styles.label}>Izakaya 🍺</Text>
          <CheckBox
            value={categories["日本料理"]}
            onValueChange={() => {
              dispatch(
                category((categories["日本料理"] = !categories["日本料理"]))
              );
            }}
            style={styles.checkbox}
          />
          <Text style={styles.label}>Japanese 🍙</Text>
          <CheckBox
            value={categories["寿司"]}
            onValueChange={() => {
              dispatch(
                category(
                  (categories["寿司"] = !categories[
                    "寿司"
                  ])
                )
              );
            }}
            style={styles.checkbox}
          />
          <Text style={styles.label}>Sushi / Seafood 🍣</Text>
          <CheckBox
            value={categories["鍋"]}
            onValueChange={() => {
              dispatch(category((categories["鍋"] = !categories["鍋"])));
            }}
            style={styles.checkbox}
          />
          <Text style={styles.label}>Nabe 🍲</Text>
          <CheckBox
            value={categories["焼肉"]}
            onValueChange={() => {
              dispatch(category((categories["焼肉"] = !categories["焼肉"])));
            }}
            style={styles.checkbox}
          />
          <Text style={styles.label}>Yakiniku 🥓</Text>
          <CheckBox
            value={categories["焼き鳥"]}
            onValueChange={() => {
              dispatch(
                category((categories["焼き鳥"] = !categories["焼き鳥"]))
              );
            }}
            style={styles.checkbox}
          />
          <Text style={styles.label}>Yakitori 🍢</Text>
        </View>
      </View>

      <View style={styles.container}>
        <View style={styles.checkboxContainer}>
          <CheckBox
            value={categories["焼肉・ホルモン"]}
            onValueChange={() => {
              dispatch(
                category(
                  (categories["焼肉・ホルモン"] = !categories["焼肉・ホルモン"])
                )
              );
            }}
            style={styles.checkbox}
          />
          <Text style={styles.label}>Yakiniku (Offal) 🍛</Text>
          <CheckBox
            value={categories["お好み焼き"]}
            onValueChange={() => {
              dispatch(
                category((categories["お好み焼き"] = !categories["お好み焼き"]))
              );
            }}
            style={styles.checkbox}
          />
          <Text style={styles.label}>Okonomiyaki 🍘</Text>
          <CheckBox
            value={categories["郷土料理"]}
            onValueChange={() => {
              dispatch(
                category((categories["郷土料理"] = !categories["郷土料理"]))
              );
            }}
            style={styles.checkbox}
          />
          <Text style={styles.label}>Local Cuisine 🍘</Text>
          <CheckBox
            value={categories["うどん"]}
            onValueChange={() => {
              dispatch(
                category((categories["うどん"] = !categories["うどん"]))
              );
            }}
            style={styles.checkbox}
          />
          <Text style={styles.label}>Udon 🍜</Text>
          <CheckBox
            value={categories["中華"]}
            onValueChange={() => {
              dispatch(category((categories["中華"] = !categories["中華"])));
            }}
            style={styles.checkbox}
          />
          <Text style={styles.label}>Chinese 🍖</Text>
          <CheckBox
            value={categories["イタリアン・フレンチ"]}
            onValueChange={() => {
              dispatch(
                category(
                  (categories["イタリアン・フレンチ"] = !categories[
                    "イタリアン・フレンチ"
                  ])
                )
              );
            }}
            style={styles.checkbox}
          />
          <Text style={styles.label}>Italian/French 🍝</Text>
        </View>
      </View>

      <View style={styles.container}>
        <View style={styles.checkboxContainer}>
          <CheckBox
            value={categories["フレンチ"]}
            onValueChange={() => {
              dispatch(
                category((categories["フレンチ"] = !categories["フレンチ"]))
              );
            }}
            style={styles.checkbox}
          />
          <Text style={styles.label}>French 🏳🥩</Text>
          <CheckBox
            value={categories["ラーメン"]}
            onValueChange={() => {
              dispatch(
                category(
                  (categories["ラーメン"] = !categories[
                    "ラーメン"
                  ])
                )
              );
            }}
            style={styles.checkbox}
          />
          <Text style={styles.label}>Ramen 🌭</Text>
          <CheckBox
            value={categories["カレー"]}
            onValueChange={() => {
              dispatch(
                category((categories["カレー"] = !categories["カレー"]))
              );
            }}
            style={styles.checkbox}
          />
          <Text style={styles.label}>Curry 🍛</Text>
          <CheckBox
            value={categories["カフェ"]}
            onValueChange={() => {
              dispatch(
                category(
                  (categories["カフェ"] = !categories[
                    "カフェ"
                  ])
                )
              );
            }}
            style={styles.checkbox}
          />
          <Text style={styles.label}>Cafe 🍥</Text>
          <CheckBox
            value={categories["メキシコ料理"]}
            onValueChange={() => {
              dispatch(
                category(
                  (categories["メキシコ料理"] = !categories["メキシコ料理"])
                )
              );
            }}
            style={styles.checkbox}
          />
          <Text style={styles.label}>Mexican 🥗</Text>
          <CheckBox
            value={categories["とんかつ（トンカツ）"]}
            onValueChange={() => {
              dispatch(
                category((categories["とんかつ（トンカツ）"] = !categories["とんかつ（トンカツ）"]))
              );
            }}
            style={styles.checkbox}
          />
          <Text style={styles.label}>Tonkatsu (Pork cutlet) 🍻</Text>
        </View>
      </View>

      <View style={styles.container}>
        <View style={styles.checkboxContainer}>
          <CheckBox
            value={categories["定食・食事処"]}
            onValueChange={() => {
              dispatch(
                category(
                  (categories["定食・食事処"] = !categories["定食・食事処"])
                )
              );
            }}
            style={styles.checkbox}
          />
          <Text style={styles.label}>Set menu 🍰</Text>
          <CheckBox
            value={categories["ワイン"]}
            onValueChange={() => {
              dispatch(
                category(
                  (categories["ワイン"] = !categories[
                    "ワイン"
                  ])
                )
              );
            }}
            style={styles.checkbox}
          />
          <Text style={styles.label}>Wine 🥂</Text>
          <CheckBox
            value={categories["しゃぶしゃぶ"]}
            onValueChange={() => {
              dispatch(
                category((categories["しゃぶしゃぶ"] = !categories["しゃぶしゃぶ"]))
              );
            }}
            style={styles.checkbox}
          />
          <Text style={styles.label}>Shabushabu 🌯</Text>
          <CheckBox
            value={categories["ステーキ"]}
            onValueChange={() => {
              dispatch(
                category((categories["ステーキ"] = !categories["ステーキ"]))
              );
            }}
            style={styles.checkbox}
          />
          <Text style={styles.label}>Steak 🍾</Text>
          <CheckBox
            value={categories["ハンバーグ"]}
            onValueChange={() => {
              dispatch(category((categories["ハンバーグ"] = !categories["ハンバーグ"])));
              console.log(categories);
            }}
            style={styles.checkbox}
          />
          <Text style={styles.label}>Hamburger Patty 🥙</Text>
          <CheckBox
            value={categories["洋食屋"]}
            onValueChange={() => {
              dispatch(category((categories["洋食屋"] = !categories["洋食屋"])));
              console.log(categories);
            }}
            style={styles.checkbox}
          />
          <Text style={styles.label}>Western restaurant 🥙</Text>
          <CheckBox
            value={categories["火鍋"]}
            onValueChange={() => {
              dispatch(category((categories["火鍋"] = !categories["火鍋"])));
              console.log(categories);
            }}
            style={styles.checkbox}
          />
          <Text style={styles.label}>Hot pot 🥙</Text>
          <CheckBox
            value={categories["バー"]}
            onValueChange={() => {
              dispatch(category((categories["バー"] = !categories["バー"])));
              console.log(categories);
            }}
            style={styles.checkbox}
          />
          <Text style={styles.label}>Bar 🥙</Text>
          <CheckBox
            value={categories["そば"]}
            onValueChange={() => {
              dispatch(category((categories["そば"] = !categories["そば"])));
              console.log(categories);
            }}
            style={styles.checkbox}
          />
          <Text style={styles.label}>Soba (Noodles) 🥙</Text>
        </View>
      </View>

      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Price Range</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <CheckBox
            value={priceSelected[0].checked}
            onValueChange={() => {
              dispatch(priceRange((price.min = 500)));
              dispatch(priceRange((price.max = 1000)));
              checkBoxSelected(1);
            }}
            style={styles.checkbox}
          />
          <Text style={styles.label}>¥500 - ¥1000</Text>
          <CheckBox
            value={priceSelected[1].checked}
            onValueChange={() => {
              dispatch(priceRange((price.min = 1000)));
              dispatch(priceRange((price.max = 2000)));
              checkBoxSelected(2);
            }}
            style={styles.checkbox}
          />
          <Text style={styles.label}>¥1000 - ¥2000</Text>
          <CheckBox
            value={priceSelected[2].checked}
            onValueChange={() => {
              dispatch(priceRange((price.min = 1000)));
              dispatch(priceRange((price.max = 2000)));
              checkBoxSelected(3);
            }}
            style={styles.checkbox}
          />
          <Text style={styles.label}>¥2000 - ¥5000</Text>
          <CheckBox
            value={priceSelected[3].checked}
            onValueChange={() => {
              dispatch(priceRange((price.min = 5000)));
              dispatch(priceRange((price.max = 10000)));
              checkBoxSelected(4);
            }}
            style={styles.checkbox}
          />
          <Text style={styles.label}>¥5000 - ¥10000</Text>
          <CheckBox
            value={priceSelected[4].checked}
            onValueChange={() => {
              dispatch(priceRange((price.min = 10000)));
              dispatch(priceRange((price.max = 15000)));
              checkBoxSelected(5);
            }}
            style={styles.checkbox}
          />
          <Text style={styles.label}>¥10000 - ¥15000</Text>
          <CheckBox
            value={priceSelected[5].checked}
            onValueChange={() => {
              dispatch(priceRange((price.min = 10000)));
              dispatch(priceRange((price.max = 15000)));
              console.log(price);
              checkBoxSelected(6);
            }}
            style={styles.checkbox}
          />
          <Text style={styles.label}>¥15000 - ¥20000</Text>
        </View>
      </View>

      <View style={styles.container}>
        <Text style={styles.title}>Location</Text>
        <Picker
          selectedValue={location.name}
          style={styles.onePicker}
          itemStyle={styles.pickerItem}
          onValueChange={(itemValue) => {
            console.log(location.name);
            dispatch(setLocations((location.name = itemValue)));
            console.log(location.name);
          }}
        >
          {mockdata.map((elem) => (
            <Picker.Item label={elem.name} value={elem.name} />
          ))}
        </Picker>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxContainer: {
    width: "70%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
  },
  title: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    fontFamily: "Cochin",
    fontSize: 40,
    fontWeight: "bold",
  },
  pickerItem: {
    color: "red",
  },
  onePicker: {
    width: 200,
    height: 44,
    backgroundColor: "#FFF0E0",
    borderColor: "black",
    borderWidth: 1,
  },
});
