import React, { useState, useEffect, FC, useMemo, useCallback, useContext } from "react";
import { View, StyleSheet, Image, Platform } from "react-native";
import { Text, useTheme, TextInput, Button } from "react-native-paper";
import Autocomplete from "react-native-autocomplete-input";
import { FontAwesome5 } from "@expo/vector-icons";
import { FlatList } from "react-native-gesture-handler";

import { SortRoutes } from "../components/SortRoutes";
import ListComponent from "../components/ListComponent/ListComponent";
import { Context } from "../../App";

// export interface Item {
//   name: string;
// }

export interface Location {
  id: number
  name: string
  country_name: string
  latitude: number
  longitude: number
}

export interface Route {
  id: number
  from: number
  to: number
  euro_price: number
  trip_duration: number
  travel_data: number[]
}

export const Home: FC = () => {

  const [fromLocation, setFromLocation] = useState<Location>({} as Location);
  const [toLocation, setToLocation] = useState<Location>({} as Location);

  const [inputFromData, setInputFromData] = useState<string>("");
  const [inputToData, setInputToData] = useState<string>("");

  const [locations, setLocations] = useState<Location[]>((useContext(Context) as any).locations);
  const [routes, setRoutes] = useState<Route[]>([]); // all routes from the file
  const [filteredRoutes, setFilteredRoutes] = useState<Route[]>([]);

  const [hideFromAutocomplete, setHideFromAutocomplete] = useState(false);
  const [hideToAutocomplete, setHideToAutocomplete] = useState(false);

  const [onSubmit, setOnSubmit] = useState(false)

  const [dataFromLocation, setDataFromLocation] = useState<Location[]>([]);
  const [dataToLocation, setDataToLocation] = useState<Location[]>([])

  const theme = useTheme();

  const onSubmitAction = () => {
    console.log("Pressed")
    setOnSubmit(true)
  }

  // get similar locations for autocomplete 
  const getSimilarLocations = (locationName: string) => {
    if (locationName) {
      const similarLocatoins = locations.filter((location: Location) => {
        if (location.name === undefined) return;
        return location.name.toLowerCase().indexOf(locationName.toLowerCase()) === 0;
      });
      return similarLocatoins;
    }
    return [];
  };

  const contextData: any = useContext(Context);
  
  const getRoutes = (from: Location, to: Location) => {
    const filteredRoutes = routes.filter((route: Route) => route.from === from.id && route.to === to.id)
    return filteredRoutes;
  }

  useEffect(()=>{
    setRoutes(contextData.routes);

  },[])

  // get similar locations for autocomplete on input change
  useEffect(() => {
    setDataFromLocation(getSimilarLocations(inputFromData));
    setDataToLocation(getSimilarLocations(inputToData))
  }, [inputFromData, inputToData]);

  // find routes for trip
  useEffect(() => {
    setFilteredRoutes(getRoutes(fromLocation, toLocation))
  }, [fromLocation, toLocation]);


  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const getCities = await fetch(
  //         "https://graphproject-482d9-default-rtdb.europe-west1.firebasedatabase.app/locations.json"
  //       );
  //       const responseData = await getCities.json();

  //       await setCities(responseData);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   })();
  // }, []);


  // const locations = Object.values(location);

  // console.log(locations.find((item: { id: number }) => item.id === "Bucharest"))

  // const directions: directionsProps[] = useMemo(

  //   // new data will be fetched as an alternative to this array

  //   () => [
  //     { id: "1", from: "Bucharest", to: "Iasi", price: "19.38" },
  //     { id: "2", from: "Bucharest", to: "Iasi", price: "100" },
  //     { id: "3", from: "Bucharest", to: "Iasi", price: "100" },
  //     { id: "4", from: "Bucharest", to: "Iasi", price: "100" },
  //     { id: "5", from: "Bucharest", to: "Iasi", price: "100" },
  //     { id: "6", from: "Bucharest", to: "Iasi", price: "100" },
  //     { id: "7", from: "Bucharest", to: "Iasi", price: "100" },
  //     { id: "8", from: "Bucharest", to: "Iasi", price: "100" },
  //     { id: "9", from: "Bucharest", to: "Iasi", price: "100" },
  //   ],
  //   []
  // );

  // const renderRoute = useCallback((route: Route) => {
  //   return <ListComponent route={route} />;
  // }, []);

  // const renderItems = ({ item }: { item: Item }) => <Text>{item.name}</Text>;
  return (
    <View style={{ flex: 1 }}>
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
              hideResults={hideFromAutocomplete}
              data={dataFromLocation}
              value={inputFromData}
              placeholder="From"
              onChangeText={(text: string) => {
                setInputFromData(text), setHideFromAutocomplete(false);
              }}
              flatListProps={{
                keyExtractor: (_: any, idx: any) => idx,
                renderItem: ({ item }) => (
                  <Text
                    onPress={() => {
                      setFromLocation(locations.find((location: Location) => location.name === item.name) as Location);
                      setHideFromAutocomplete(true);
                      setInputFromData(item.name);
                    }}
                    style={styles.autocompleteText}
                  >
                    {item.name}
                  </Text>
                )
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
              placeholder="To"
              listContainerStyle={{}}
              listStyle={{}}
              hideResults={hideToAutocomplete}
              data={dataToLocation}
              value={inputToData}
              onChangeText={(text: string) => {
                setInputToData(text), setHideToAutocomplete(false);
              }}
              flatListProps={{
                keyExtractor: (_: any, idx: any) => idx,
                renderItem: ({ item }) => (
                  <Text
                    onPress={() => {
                      setToLocation(locations.find((location: Location) => location.name === item.name) as Location);
                      setHideToAutocomplete(true);
                      setInputToData(item.name);
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
        <SortRoutes setRoutes={setRoutes} routes={routes} />
        <View style={styles.buttonContainer}>
          <Button icon="delete" mode="elevated"
            onPress={() => {
              setFromLocation({} as Location), setToLocation({} as Location)
              setOnSubmit(false);
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
            data={filteredRoutes}
            renderItem={({ item }) => <ListComponent fromLocation={fromLocation} toLocation={toLocation} route={item} />}
            keyExtractor={(item) => String(item.id)}
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
