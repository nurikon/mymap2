import React from "react";
import { View, StyleSheet } from "react-native";
import { Header } from "../../components";
import { LeftArrow } from "../../res/assets/icons";
import { openDrawer } from "../../functions/Router";
import MapView from 'react-native-maps';

// map view çıkmadı react-native-maps kurulumuna bakılacak
// konum detay sayfası yapılacak
// konum ekleme sayfası yapılacak
// kategoriler ve liste sayfası yapılacak
const Home = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <Header
        centerTitle={"Konumlarım"}
        menuButton
        leftIconOnpress={() => openDrawer()}
        searchIcon
      />
        <MapView
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
  },
});
