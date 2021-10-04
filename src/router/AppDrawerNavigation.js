import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
//import AppStackNavigation from "./AppStackNavigation";
import AppBottomTabsNavigation from "./AppBottomTabsNavigation";
import { Settings } from "../screens";

const Drawer = createDrawerNavigator();

const AppDrawerNavigation = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="AppBottomTabsNavigation"
        component={AppBottomTabsNavigation}
      />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
};

export default AppDrawerNavigation;
