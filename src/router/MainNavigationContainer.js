import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { connect } from "react-redux";
import { navigationRef } from "../functions/Router";
import AuthStackNavigation from "./AuthStackNavigation";
import AppDrawerNavigation from "./AppDrawerNavigation";
import { MyLoading } from "../components";

import * as Actions from "../redux/actions";

const MainNavigationContainer = ({ login }) => {
  const [loading, setLoading] = useState(true);

  const checkIsLogged = async () => {
    await AsyncStorage.getItem("isLogged").then((res) => {
      // console.log("dddddd", res);
      if (res != null) {
        Actions.login();
        setLoading(false);
      } else if (res == null) {
        setLoading(false);
      }
    });
  };

  useEffect(() => {
    checkIsLogged();
  }, []);
  // console.log(login, "loddsdasasd");

  return (
    <NavigationContainer ref={navigationRef}>
      {loading ? (
        <MyLoading />
      ) : login ? (
        <AppDrawerNavigation />
      ) : (
        <AuthStackNavigation />
      )}
    </NavigationContainer>
  );
};

const mapStateToProps = (state) => {
  // console.log("login", state.auth.islogged);
  return {
    login: state.auth.islogged,
  };
};

export default connect(mapStateToProps)(MainNavigationContainer);
