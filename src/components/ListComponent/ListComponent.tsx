import React, { useState, useMemo } from "react";
import { Text, View, FlatList, Alert, Image, ListRenderItemInfo } from "react-native";
import styles from "./styles";
import { FontAwesome5, Fontisto, MaterialIcons } from "@expo/vector-icons";
import ListBottomComponent from "../ListBottomComponent/ListBottomComponent";
import { Route } from "../../screens/Home";

type ListComponentProps = {
  fromLocation: any;
  toLocation: any;
  route: any;
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
          <Fontisto style={styles.logo} name="plane" size={24} color="rgb(101,124,137)" />
          <FontAwesome5 style={styles.logo} name="bus" size={24} color="rgb(101,124,137)" />
          <FontAwesome5 style={styles.logo} name="train" size={24} color="rgb(101,124,137)" />
          {/* <Fontisto style={styles.logo} name="car" size={24} color="grey" /> */}
          <Image
            style={styles.car}
            source={require('../../../assets/image/asd.png')} />
        </View>
        <View style={styles.inline}>

          <Text style={styles.location}>{route.from}</Text>
          <Fontisto name="arrow-right" size={12} color="black" />
          <Text style={styles.location}>{route.to}</Text>
        </View>
        <View style={styles.bottomContainer}>
          <Text style={styles.time}>8 h 36 m</Text>
          <View style={styles.priceContainer}>
            <Text style={styles.price}>€{" " + route.euro_price}</Text>
          </View>
        </View>
        <View style={styles.detailsButton}>
          <MaterialIcons
            onPress={() => {
              setLocationsVisible((prev) => !prev);
            }}
            name={
              !locationsVisible ? "keyboard-arrow-down" : "keyboard-arrow-up"
            }
            size={30}
            color="black"
          />
        </View>
      </View>
      {locationsVisible &&
        route.travel_data.map((item: any, index: any) => {
          return (
            <ListBottomComponent
              key={index.toString()}
              bottom={index === route.travel_data.length - 1}
            />
          );
        })}
    </View>
  );
};

export default ListComponent;
