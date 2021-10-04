import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { dw } from "../../functions/DevFunctions";
import { Map, AddMarker, List } from "../../res/assets/icons";
import colors from "../../res/style/colors";

function CustomBottomTabBar({ state, descriptors, navigation }) {
  const { tabGlobal, tabItem } = styles;

  return (
    <View style={tabGlobal}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };
        return (
          <TouchableOpacity
            key={label}
            style={{
              flex: 1,
            }}
            onPress={onPress}
          >
            {label === "Home" && (
              <View style={tabItem}>
                <Map
                  height={dw(7)}
                  width={dw(7)}
                  fill={isFocused ? colors.darkTheme : colors.softGray}
                />
              </View>
            )}

            {label === "LocationDetail" && (
              <View style={[tabItem]}>
                <List
                  height={dw(6.5)}
                  width={dw(6.5)}
                  fill={isFocused ? colors.darkTheme : colors.softGray}
                />
              </View>
            )}
            {label === "MyLocations" && (
              <View style={[tabItem]}>
                <AddMarker
                  height={dw(6.7)}
                  width={dw(6.7)}
                  fill={isFocused ? colors.darkTheme : colors.softGray}
                />
              </View>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default CustomBottomTabBar;

const styles = StyleSheet.create({
  tabGlobal: {
    backgroundColor: colors.white,
    width: "100%",
    height: dw(13),
    shadowColor: colors.black,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#828282",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 7,
  },
  tabItem: {
    alignItems: "center",
    width: "100%",
  },
});
