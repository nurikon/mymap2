import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { Login, SignUp } from "../screens";

const Stack = createStackNavigator();

const AuthStackNavigation = () => {
  const TransitionScreenOptions = {
    ...TransitionPresets.SlideFromRightIOS,
  };

  return (
    <Stack.Navigator
      screenOptions={TransitionScreenOptions}
      initialRouteName={"Login"}
    >
      <Stack.Screen
        options={{ headerShown: false }}
        name="Login"
        component={Login}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="SignUp"
        component={SignUp}
      />
    </Stack.Navigator>
  );
};

export default AuthStackNavigation;
