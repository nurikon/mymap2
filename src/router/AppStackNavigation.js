import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { LocationDetail, MyLocations } from "../screens";

const Stack = createStackNavigator();

const AppStackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName={"HomeStackNavigator"}>
      <Stack.Screen
        options={{ headerShown: false }}
        name="HomeStackNavigator"
        component={HomeStackNavigator}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="LocationDetail"
        component={LocationDetail}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="MyLocations"
        component={MyLocations}
      />
    </Stack.Navigator>
  );
};

export default AppStackNavigation;
