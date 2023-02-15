import React, { useState, useMemo, useContext } from "react";
import { Text, View, FlatList, Alert, Image, ListRenderItemInfo } from "react-native";
import styles from "./styles";
import { FontAwesome5, Fontisto, MaterialIcons } from "@expo/vector-icons";

import ListBottomComponent from "../ListBottomComponent/ListBottomComponent";
import { Route } from "../../screens/Home";

type ListComponentProps = {
  fromLocation: any;
  toLocation: any;
  route: Route;
};

const ListComponent: React.FC<ListComponentProps> = ({ fromLocation, toLocation, route }) => {

  const [locationsVisible, setLocationsVisible] = useState(false);
  console.log("item", route);


  return (
    <View style={styles.shadow}>
      <View
        style={[
          styles.box,
          {
            borderBottomLeftRadius: locationsVisible ? 0 : 5,
            borderBottomRightRadius: locationsVisible ? 0 : 5,
          },
        ]}
      >
        <View style={styles.inline}>
         
        </View>
        <View style={styles.inline}>
          <Text style={styles.location}>{fromLocation?.name}</Text>
          <Fontisto name="arrow-right" size={12} color="black" />
          <Text style={styles.location}>{toLocation?.name}</Text>
        </View>
        <View style={styles.bottomContainer}>

          <Text style={styles.time}>Duration: {`${Math.floor(route.trip_duration / 60)}h ${route.trip_duration % 60}min`}</Text>
          <View style={styles.priceContainer}>
            <Text style={styles.price}>€{" " + route?.euro_price}</Text>
          </View>

        </View>
        <View style={styles.detailsButton}>
          <MaterialIcons
            onPress={() => { setLocationsVisible((prev) => !prev); }}
            name={!locationsVisible ? "keyboard-arrow-down" : "keyboard-arrow-up"}
            size={30}
            color="black"
          />
        </View>
      </View>
      {locationsVisible &&
        route.travel_data.map((id: any, index: any) => {
          return (
            <ListBottomComponent
              key={index.toString()}
              bottom={index === route?.travel_data?.length - 1}
              travelDataId={id}
            />
          );
        })}
    </View>
  );
};

export default ListComponent;
