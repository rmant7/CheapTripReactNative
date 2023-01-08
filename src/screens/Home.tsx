import React, { useState, useEffect, FC } from "react";
import { View, StyleSheet, Image } from "react-native";
import { Text, useTheme, TextInput, Button } from "react-native-paper";

import Autocomplete from "react-native-autocomplete-input";

import { FontAwesome5 } from "@expo/vector-icons";

export interface Item {
  name: string;
}

export const Home: FC = () => {
  const [forCity, setForCity] = useState("");
  const [toCity, setToCity] = useState("");
  const [cities, setCities] = useState([]);
  const [hideForCity, setHideForCity] = useState(false);
  const [hideToCity, setHideToCity] = useState(false);
  const theme = useTheme();

  const filtredCities = (forCity: string) => {
    if (forCity) {
      const cityFor = cities.slice(1).filter((item: { name: string }) => {
        const name = item.name;
        if (name === undefined) return;
        return name.toLowerCase().indexOf(forCity.toLowerCase()) === 0;
      });
      return cityFor;
    }
    return [];
  };

  const dataForCity = filtredCities(forCity);
  const dataToCity = filtredCities(toCity);

  useEffect(() => {
    (async () => {
      try {
        const getCities = await fetch(
          "https://graphproject-482d9-default-rtdb.europe-west1.firebasedatabase.app/locations.json"
        );
        const responseData = await getCities.json();

        await setCities(responseData);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  // const renderItems = ({ item }: { item: Item }) => <Text>{item.name}</Text>;
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text
          style={{
            ...styles.title,
            color: theme.colors.secondary,
          }}
          variant="titleMedium"
        >
          Find most beneficial and unusual routes between cities with airports,
          combining flight, train, bus, ferry and rideshare.
        </Text>
      </View>
      <View style={styles.mainContainer}>
        {/* <TextInput
          style={styles.input}
          label="From"
          value={forCity}
          onChangeText={(text) => setForCity(text)}
          mode={"outlined"}
        /> */}

        <Autocomplete
          containerStyle={{
            width: "100%",
            backgroundColor: "tomato",
          }}
          listContainerStyle={{}}
          listStyle={{}}
          hideResults={hideForCity}
          data={dataForCity}
          value={forCity}
          onChangeText={(text: string) => {
            setForCity(text), setHideForCity(false);
          }}
          flatListProps={{
            keyExtractor: (_: any, idx: any) => idx,
            renderItem: ({ item }: { item: Item }) => (
              <Text
                onPress={() => {
                  setForCity(item.name);
                  setHideForCity(true);
                }}
                style={styles.autocompleteText}
              >
                {item.name}
              </Text>
            ),
          }}
        />

        <FontAwesome5
          style={styles.iconArrow}
          name="angle-double-down"
          size={24}
          color={`${theme.colors.primary}`}
        />
        <Autocomplete
          containerStyle={{
            width: "100%",
            backgroundColor: "tomato",
          }}
          listContainerStyle={{}}
          listStyle={{}}
          hideResults={hideToCity}
          data={dataToCity}
          value={toCity}
          onChangeText={(text: string) => {
            setToCity(text), setHideToCity(false);
          }}
          flatListProps={{
            keyExtractor: (_: any, idx: any) => idx,
            renderItem: ({ item }: { item: Item }) => (
              <Text
                onPress={() => {
                  setToCity(item.name);
                  setHideToCity(true);
                }}
                style={styles.autocompleteText}
              >
                {item.name}
              </Text>
            ),
          }}
        />
        {/* <TextInput
          style={styles.input}
          label="To"
          value={toCity}
          onChangeText={(text) => setToCity(text)}
          mode={"outlined"}
        /> */}
      </View>
      <View style={styles.buttonContainer}>
        <Button
          icon="delete"
          mode="elevated"
          onPress={() => console.log("Pressed")}
        >
          Clear
        </Button>
        <Button
          icon="car"
          mode="contained"
          onPress={() => console.log("Pressed")}
        >
          Let`s go
        </Button>
      </View>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../../assets/image/Logo_ChT_2.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  titleContainer: {
    marginBottom: 10,
  },
  title: {
    padding: 0,
    margin: 0,
    textAlign: "center",
  },
  mainContainer: {
    marginBottom: 16,
    alignItems: "center",
  },
  input: {
    width: "100%",
  },
  iconArrow: {
    marginTop: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: "100%",

    resizeMode: "contain",
  },
  autocompleteContainer: {
    // flex: 1,
    // left: 0,
    // position: "absolute",
    // right: 0,
    // top: 0,
    // zIndex: 1,
  },
  autocompleteText: {
    fontSize: 26,
  },
});
