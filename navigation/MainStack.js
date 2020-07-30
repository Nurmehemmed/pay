import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { HomePage } from "../screens/HomePage";
import { SinglePage } from "../screens/SinglePage";

const { Navigator, Screen } = createStackNavigator();

export const MainStack = () => (
  <NavigationContainer>
    <Navigator headerMode="none">
      <Screen name="HomePage" component={HomePage} />
      <Screen name="SinglePage" component={SinglePage} />
    </Navigator>
  </NavigationContainer>
);
