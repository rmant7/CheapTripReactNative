import React from "react";
import {
  MD3LightTheme as DefaultTheme,
  Provider as PaperProvider,
} from "react-native-paper";

import { Main } from "./src/components/Main";
import { generateColors } from "./src/scheme/colors";

import Locations from "./assets/files/locations.json";
import Routes from "./assets/files/routes.json";
import FixedRoutes from "./assets/files/fixed_routes.json";
import FlyingRoutes from "./assets/files/flying_routes.json";
import TravelData from "./assets/files/travel_data.json";

const theme = {
  ...DefaultTheme,
  colors: generateColors.colors,
};

export const Context = React.createContext({});

export default function App() {
  let locations = Object.values(Locations);
  let routes = Object.values(Routes);
  let fixedRoutes = Object.values(FixedRoutes);
  let flyingRoutes = Object.values(FlyingRoutes);
  let travelData = Object.values(TravelData);

  return (
    <Context.Provider value={{ locations, routes, fixedRoutes, flyingRoutes, travelData }}>
      <PaperProvider theme={theme}>
        <Main />
      </PaperProvider>
    </Context.Provider>
  );
}
