import "react-native-gesture-handler";
import React, { FC } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import { CustomNavigationBar } from "./AppBar";
import { Home } from "../screens/Home";
import { Contacts } from "../screens/Contacts";

export const Main: FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          header: CustomNavigationBar,
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Contacts" component={Contacts} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
