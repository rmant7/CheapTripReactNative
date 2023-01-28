import React, { useState, useEffect, FC, useMemo, useCallback } from "react";
import { View, StyleSheet, Image, Platform } from "react-native";
import { Text, useTheme, TextInput, Button } from "react-native-paper";
import ListComponent from "../components/ListComponent/ListComponent";

import Autocomplete from "react-native-autocomplete-input";

import { FontAwesome5 } from "@expo/vector-icons";
import { FlatList } from "react-native-gesture-handler";

export interface Item {
  name: string;
}

interface directionsProps {
  id: string;
  from: string;
  to: string;
  price: string;
}

export const Home: FC = () => {
  const [forCity, setForCity] = useState("");
  const [toCity, setToCity] = useState("");
  const [cities, setCities] = useState([]);
  const [hideForCity, setHideForCity] = useState(false);
  const [hideToCity, setHideToCity] = useState(false);
  const theme = useTheme();

 const [onSubmit,setOnSubmit] = useState(false)

 const onSubmitAction = () => {
  console.log("Pressed")
  setOnSubmit(true)
 }

 

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

  const directions: directionsProps[] = useMemo(

  // new data will be fetched as an alternative to this array
    
    () => [
      { id: "1", from: "Bucharest", to: "Iasi", price: "19.38" },
      { id: "2", from: "Bucharest", to: "Iasi", price: "100" },
      { id: "3", from: "Bucharest", to: "Iasi", price: "100" },
      { id: "4", from: "Bucharest", to: "Iasi", price: "100" },
      { id: "5", from: "Bucharest", to: "Iasi", price: "100" },
      { id: "6", from: "Bucharest", to: "Iasi", price: "100" },
      { id: "7", from: "Bucharest", to: "Iasi", price: "100" },
      { id: "8", from: "Bucharest", to: "Iasi", price: "100" },
      { id: "9", from: "Bucharest", to: "Iasi", price: "100" },
    ],
    []
  );

  const renderItem = useCallback(({ item }) => {
    return <ListComponent toCity={toCity} forCity={forCity} item={item} />;
  }, []);
  // const renderItems = ({ item }: { item: Item }) => <Text>{item.name}</Text>;
  return (
    <View style={{ flex: 1}}>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text
            style={{
              ...styles.title,
              color: theme.colors.secondary,
            }}
            variant="titleMedium"
          >
            Find most beneficial and unusual routes between cities with
            airports, combining flight, train, bus, ferry and rideshare.
          </Text>
        </View>
        <View style={styles.mainContainer}>
          <View style={styles.autocompleteContainer}>
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
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            icon="delete"
            mode="elevated"
            onPress={() => {
              setForCity(""), setToCity("")
              setOnSubmit(false)
              ;
            }}
          >
            Clear
          </Button>
          <Button
            icon="car"
            mode="contained"
            onPress={onSubmitAction}
          >
            Let`s go
          </Button>
        </View>
      </View>
      {onSubmit ? 
      <View style={styles.flatList}>
        <FlatList
          data={directions}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  titleContainer: {
    marginBottom: 10,
  },
  flatList: {
    flex: 1,
    width: "100%",
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
    ...Platform.select({
      android: {
        marginTop: 130,
      },
    }),
  },
  
  autocompleteContainer: {
    width: "100%",
    alignItems: "center",
    ...Platform.select({
      android: {
        flex: 1,
        left: 0,
        position: "absolute",
        right: 0,
        top: 0,
        zIndex: 1,
      },
    }),
  },
  autocompleteText: {
    fontSize: 26,
  },
});
