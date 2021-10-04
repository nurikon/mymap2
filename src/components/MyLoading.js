import React from "react";
import { View } from "react-native";
import { DotIndicator, SkypeIndicator } from "react-native-indicators";
import colors from "../res/style/colors";

const MyLoading = ({ size = 40, color = colors.darkTheme, type }) => {
  return (
    <View style={{ flex: 1 }}>
      {type === "dots" ? (
        <DotIndicator size={size} color={color} />
      ) : (
        <SkypeIndicator size={size} color={color} />
      )}
    </View>
  );
};

export default MyLoading;
