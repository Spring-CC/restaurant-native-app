import React, { useState } from "react";
import { StyleSheet, Text, View, CheckBox, ScrollView, Picker } from "react-native";
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
  const location = useSelector((state) => state.locationReducer)
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
            value={categories["Izakaya"]}
            onValueChange={() => {
              dispatch(category((categories.Izakaya = !categories.Izakaya)));
            }}
            style={styles.checkbox}
          />
          <Text style={styles.label}>Izakaya 🍺</Text>
          <CheckBox
            value={categories["Tradional Japanase"]}
            onValueChange={() => {
              dispatch(
                category(
                  (categories["Tradional Japanase"] = !categories[
                    "Tradional Japanase"
                  ])
                )
              );
            }}
            style={styles.checkbox}
          />
          <Text style={styles.label}>Traditional Japanese 🍙</Text>
          <CheckBox
            value={categories["Sushi"]}
            onValueChange={() => {
              dispatch(category((categories["Sushi"] = !categories["Sushi"])));
            }}
            style={styles.checkbox}
          />
          <Text style={styles.label}>Sushi / Seafood 🍣</Text>
          <CheckBox
            value={categories["Nabe"]}
            onValueChange={() => {
              dispatch(category((categories["Nabe"] = !categories["Nabe"])));
            }}
            style={styles.checkbox}
          />
          <Text style={styles.label}>Nabe 🍲</Text>
          <CheckBox
            value={categories["Yakiniku"]}
            onValueChange={() => {
              dispatch(
                category((categories["Yakiniku"] = !categories["Yakiniku"]))
              );
            }}
            style={styles.checkbox}
          />
          <Text style={styles.label}>Yakiniku 🥓</Text>
          <CheckBox
            value={categories["Yakitori"]}
            onValueChange={() => {
              dispatch(
                category((categories["Yakitori"] = !categories["Yakitori"]))
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
            value={categories["Modern Japanese"]}
            onValueChange={() => {
              dispatch(
                category(
                  (categories["Modern Japanese"] = !categories[
                    "Modern Japanese"
                  ])
                )
              );
            }}
            style={styles.checkbox}
          />
          <Text style={styles.label}>Modern Japanese 🍛</Text>
          <CheckBox
            value={categories["Okonomiyaki"]}
            onValueChange={() => {
              dispatch(
                category(
                  (categories["Okonomiyaki"] = !categories["Okonomiyaki"])
                )
              );
            }}
            style={styles.checkbox}
          />
          <Text style={styles.label}>Okonomiyaki 🍘</Text>
          <CheckBox
            value={categories["Takoyaki"]}
            onValueChange={() => {
              dispatch(
                category((categories["Takoyaki"] = !categories["Takoyaki"]))
              );
            }}
            style={styles.checkbox}
          />
          <Text style={styles.label}>Takoyaki 🍘</Text>
          <CheckBox
            value={categories["Noodles"]}
            onValueChange={() => {
              dispatch(
                category((categories["Noodles"] = !categories["Noodles"]))
              );
            }}
            style={styles.checkbox}
          />
          <Text style={styles.label}>Noodles 🍜</Text>
          <CheckBox
            value={categories["Chinese"]}
            onValueChange={() => {
              dispatch(
                category((categories["Chinese"] = !categories["Chinese"]))
              );
            }}
            style={styles.checkbox}
          />
          <Text style={styles.label}>Chinese 🍖</Text>
          <CheckBox
            value={categories["Italian/French"]}
            onValueChange={() => {
              dispatch(
                category(
                  (categories["Italian/French"] = !categories["Italian/French"])
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
            value={categories["Western/European"]}
            onValueChange={() => {
              dispatch(
                category(
                  (categories["Western/European"] = !categories[
                    "Western/European"
                  ])
                )
              );
            }}
            style={styles.checkbox}
          />
          <Text style={styles.label}>Western/European 🥩</Text>
          <CheckBox
            value={categories["Western/Various"]}
            onValueChange={() => {
              dispatch(
                category(
                  (categories["Western/Various"] = !categories[
                    "Western/Various"
                  ])
                )
              );
            }}
            style={styles.checkbox}
          />
          <Text style={styles.label}>Western/Various 🌭</Text>
          <CheckBox
            value={categories["Curry"]}
            onValueChange={() => {
              dispatch(category((categories["Curry"] = !categories["Curry"])));
            }}
            style={styles.checkbox}
          />
          <Text style={styles.label}>Curry 🍛</Text>
          <CheckBox
            value={categories["Southeast Asian"]}
            onValueChange={() => {
              dispatch(
                category(
                  (categories["Southeast Asian"] = !categories[
                    "Southeast Asian"
                  ])
                )
              );
            }}
            style={styles.checkbox}
          />
          <Text style={styles.label}>SouthEast Asian 🍥</Text>
          <CheckBox
            value={categories["Organic/Fusion"]}
            onValueChange={() => {
              dispatch(
                category(
                  (categories["Organic/Fusion"] = !categories["Organic/Fusion"])
                )
              );
            }}
            style={styles.checkbox}
          />
          <Text style={styles.label}>Organic/Fusion 🥗</Text>
          <CheckBox
            value={categories["DiningBars"]}
            onValueChange={() => {
              dispatch(
                category((categories["DiningBars"] = !categories["DiningBars"]))
              );
            }}
            style={styles.checkbox}
          />
          <Text style={styles.label}>Dining Bars 🍻</Text>
        </View>
      </View>

      <View style={styles.container}>
        <View style={styles.checkboxContainer}>
          <CheckBox
            value={categories["Bread/Desserts"]}
            onValueChange={() => {
              dispatch(
                category(
                  (categories["Bread/Desserts"] = !categories["Bread/Desserts"])
                )
              );
            }}
            style={styles.checkbox}
          />
          <Text style={styles.label}>Bread/Desserts/Pastries 🍰</Text>
          <CheckBox
            value={categories["PartyHalls/Karaoke"]}
            onValueChange={() => {
              dispatch(
                category(
                  (categories["PartyHalls/Karaoke"] = !categories[
                    "PartyHalls/Karaoke"
                  ])
                )
              );
            }}
            style={styles.checkbox}
          />
          <Text style={styles.label}>Party Halls/Karaoke/Entertainment 🥂</Text>
          <CheckBox
            value={categories["FastFood"]}
            onValueChange={() => {
              dispatch(
                category((categories["FastFood"] = !categories["FastFood"]))
              );
            }}
            style={styles.checkbox}
          />
          <Text style={styles.label}>Casual Dining / Fast Food 🌯</Text>
          <CheckBox
            value={categories["Alcohol"]}
            onValueChange={() => {
              dispatch(
                category((categories["Alcohol"] = !categories["Alcohol"]))
              );
            }}
            style={styles.checkbox}
          />
          <Text style={styles.label}>Alcohol 🍾</Text>
          <CheckBox
            value={categories["other"]}
            onValueChange={() => {
              dispatch(category((categories["other"] = !categories["other"])));
              console.log(categories)
            }}
            style={styles.checkbox}
          />
          <Text style={styles.label}>Other Cuisine 🥙</Text>
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
              console.log(price)
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
            console.log(location.name)
            dispatch(setLocations(location.name=itemValue))
            console.log(location.name)
          }}
          >
          {mockdata.map(elem=> (
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
    color: 'red'
  },
  onePicker: {
    width: 200,
    height: 44,
    backgroundColor: '#FFF0E0',
    borderColor: 'black',
    borderWidth: 1,
  },
});
