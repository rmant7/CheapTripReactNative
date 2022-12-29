import "react-native-gesture-handler";
import React, { FC } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { useTheme } from "react-native-paper";

const Stack = createStackNavigator();

import { CustomNavigationBar } from "./AppBar";
import { Home } from "../screens/Home";
import { Contacts } from "../screens/Contacts";

export const Main: FC = () => {
  const theme = useTheme();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          header: CustomNavigationBar,
          headerStyle: {
            height: 120,
            backgroundColor: theme.colors.primary,
            flexDirection: "column",
          },
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Contacts" component={Contacts} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
