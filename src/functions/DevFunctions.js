
import { Dimensions, Platform, NativeModules } from "react-native";

const { width, height } = Dimensions.get("window");

export function dw(x) {
  return (width / 100) * x;
}
export function dh(x) {
  return (height / 100) * x;
}

export function dwh(x) {
  return ((width + height) / 200) * x;
}

export function ios() {
  const ios = Platform.OS === "ios" ? true : false;
  return ios;
}

export function android() {
  const android = Platform.OS === "android" ? true : false;
  return android;
}

export function statusbarHeight() {
  return NativeModules.StatusBarManager.HEIGHT;
}