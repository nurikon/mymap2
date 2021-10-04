import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { dw, dh } from "../functions/DevFunctions";
import colors from "../res/style/colors";
import { LeftArrow, Menu, Search } from "../res/assets/icons";

const Header = ({
  menuButton,
  leftIconOnpress,
  backButton,
  centerTitle,
  searchIcon,
  rightIconOnPress,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={leftIconOnpress} style={styles.leftContainer}>
        {backButton ? (
          <LeftArrow fill={"white"} width={25} height={25} />
        ) : menuButton ? (
          <Menu fill={"white"} width={21} height={21} />
        ) : (
          <View></View>
        )}
      </TouchableOpacity>
      <View style={styles.centerTitleContainer}>
        <Text style={styles.centerTitle}>{centerTitle}</Text>
      </View>
      <TouchableOpacity
        onPress={rightIconOnPress}
        style={styles.rightContainer}
      >
        {searchIcon ? (
          <Search fill={"white"} width={21} height={21} />
        ) : (
          <View></View>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: dw(12),
    backgroundColor: colors.darkTheme,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: dw(3),
  },
  leftContainer: {
    height: "80%",
    width: dw(7),
    justifyContent: "center",
  },
  centerTitleContainer: {
    position: "absolute",
    alignSelf: "center",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    zIndex: -1,
  },
  centerTitle: {
    color: colors.white,
    alignItems: "center",
    fontSize: dw(4.5),
  },
  rightContainer: {
    height: "80%",
    width: dw(7),
    justifyContent: "center",
    alignItems: "flex-end",
  },
});
