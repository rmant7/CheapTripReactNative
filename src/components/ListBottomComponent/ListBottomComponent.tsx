import { TouchableOpacity, StyleSheet, Text, View, Dimensions } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { FontAwesome5, Fontisto, MaterialIcons } from "@expo/vector-icons";

import { generateColors } from "../../scheme/colors";
import { Context } from "../../../App";
import { Location } from "../../screens/Home";

const colors = generateColors.colors;

const screenHeight = Dimensions.get("window").height;

interface TravelData {
  id: number,
  from: number,
  to: number,
  transportation_type: number,
  euro_price: number,
  time_in_minutes: number,
}

interface Props {
  bottom: boolean,
  travelDataId: number,
}

const ListBottomComponent: React.FC<Props> = ({ bottom, travelDataId }) => {

  const buyTicketHandler = () => {
    console.log("Buy ticket");
  }
  const [travelData, setTravelData] = useState({} as TravelData)
  const [fromLocation, setFromLocation] = useState({} as Location)
  const [toLocation, setToLocation] = useState({} as Location)
  const [transportationType, setTransportationType] = useState<"plane" | "bus" | "train" | undefined>(undefined)
  const contextData: any = useContext(Context);

  const getTravelDataById = (id: number) => contextData.travelData.find((data: TravelData) => data.id == id)
  const getLocationById = (id: number) => contextData.locations.find((loc: Location) => loc.id == id)

  useEffect(() => {
    setTravelData(getTravelDataById(travelDataId))
  }, [travelDataId])

  // you cant put it in the same useEffect cause by the time getLocationById getting called travelData is undefined

  useEffect(() => {
    setFromLocation(getLocationById(travelData.from))
    setToLocation(getLocationById(travelData.to))
    if (travelData.transportation_type == 1) {
      setTransportationType("plane")
    }
    else if (travelData.transportation_type == 2) {
      setTransportationType("train")
    }
    else if (travelData.transportation_type == 3) {
      setTransportationType("bus")
    }
  }, [travelData])


  return (
    <View
      style={[
        styles.itemContainer,
        {
          borderBottomLeftRadius: bottom ? 5 : 0,
          borderBottomRightRadius: bottom ? 5 : 0,
        },
      ]}
    >

      <View style={styles.directions}>
        <Text style={styles.boldText}>{`${fromLocation?.name} -> ${toLocation?.name}`}</Text>
      </View>
      <View style={[styles.directions, { marginTop: 10 }]}>
        <Fontisto style={styles.logo} name={transportationType} size={24} color="rgb(101,124,137)" />
        <Text>Duration: {`${Math.floor(travelData?.time_in_minutes / 60)}h ${travelData?.time_in_minutes % 60}min`}</Text>
        <TouchableOpacity onPress={buyTicketHandler}>
          <Text style={styles.buyTicket}>Buy Ticket</Text>
        </TouchableOpacity>
        <Text style={styles.price}>€{travelData?.euro_price}</Text>
      </View>
    </View>

  );
};

export default ListBottomComponent;

const styles = StyleSheet.create({
  itemContainer: {
    height: screenHeight / 10,
    width: "100%",
    backgroundColor: colors.surface,
    borderTopWidth: 0,
    borderWidth: 1,
    borderColor: "grey",
    alignItems: "center",
    justifyContent: "center",
  },
  dropped: {
    flex: 1,
    margin: 10,
  },
  logo: {
    marginHorizontal: 4,
    paddingVertical: 5,
  },
  directions: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    padding: 5,
  },
  boldText: {
    fontWeight: "bold",
  },
  buyTicket: {
    borderWidth: 1,
    borderColor: colors.primary,
  },
  price: {
    color: colors.primary,
  }
});
