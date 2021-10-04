import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, LocationDetail, MyLocations } from "../screens";
import {CustomBottomTabBar} from "../components"
import colors from "../res/style/colors";

const BottomTab = createBottomTabNavigator();

const AppStackNavigation = () => {
  return (
    <BottomTab.Navigator
      initialRouteName={"Home"}
      tabBar={(props) => <CustomBottomTabBar {...props} />}
      tabBarOptions={{
        activeTintColor: colors.darkTheme,
        inactiveTintColor: colors.gray,
      }}
    >
      <BottomTab.Screen
        options={{ headerShown: false }}
        name="Home"
        component={Home}
      />
      <BottomTab.Screen
        options={{ headerShown: false }}
        name="LocationDetail"
        component={LocationDetail}
      />
      <BottomTab.Screen
        options={{ headerShown: false }}
        name="MyLocations"
        component={MyLocations}
      />
    </BottomTab.Navigator>
  );
};

export default AppStackNavigation;
