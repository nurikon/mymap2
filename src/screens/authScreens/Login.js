import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { navigate } from "../../functions/Router";
import { dw, dh } from "../../functions/DevFunctions";
import * as Actions from "../../redux/actions";
import { Facebook, Google } from "../../res/assets/icons";
import colors from "../../res/style/colors";

const Login = () => {
  const [selectInput1, setSelectInput1] = useState(false);
  const [selectInput2, setSelectInput2] = useState(false);

  function loginOnPress() {
    Actions.login();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeTitle}>Hoş geldiniz,</Text>
      <Text style={styles.welcomeSubTitle}>
        Yerlerinizi kolayca kaydedin ve kontrol edin.
      </Text>
      <TextInput
        onEndEditing={() => setSelectInput1(false)}
        onFocus={() => setSelectInput1(true)}
        style={[
          styles.textInput,
          { borderColor: selectInput1 ? colors.darkTheme : "#BEBEBE" },
        ]}
        placeholder={"E-posta adresi"}
      />
      <TextInput
        onEndEditing={() => setSelectInput2(false)}
        onFocus={() => setSelectInput2(true)}
        style={[
          styles.textInput,
          { borderColor: selectInput2 ? colors.darkTheme : "#BEBEBE" },
        ]}
        placeholder={"Şifre"}
      />

      <TouchableOpacity
        onPress={loginOnPress}
        activeOpacity={0.8}
        style={styles.loginButton}
      >
        <Text style={styles.loginButtonTitle}>Oturum Aç</Text>
      </TouchableOpacity>

      <View style={styles.socialButtonWrapper}>
        <TouchableOpacity activeOpacity={0.8} style={styles.socialButton}>
          <Facebook width={35} height={35} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8} style={styles.socialButton}>
          <Google width={35} height={35} />
        </TouchableOpacity>
      </View>
      <Text style={styles.socialbuttonTitle}> ile oturum açın</Text>
      <View style={styles.joinUsContainer}>
        <Text style={styles.newUserTitle}>
          Üye değil misin?{" "} deneme
          <Text onPress={() => navigate("SignUp")} style={styles.boldTitle}>
            {" "}
            Bize katıl.
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: dh(8),
  },
  welcomeTitle: {
    fontSize: dw(9),
    fontWeight: "bold",
    marginLeft: dw(15),
    marginBottom: dh(0.5),
    color: colors.darkTheme,
  },
  welcomeSubTitle: {
    color: "#83929B",
    fontSize: dw(4),
    marginLeft: dw(15),
    width: dw(45),
    marginBottom: dh(7),
  },
  textInput: {
    height: dw(10),
    borderWidth: 1.5,
    marginBottom: dh(2),
    width: dw(70),
    alignSelf: "center",
    fontSize: dw(4),
    borderRadius: 7,
    paddingLeft: 10,
    color: colors.darkTheme,
  },
  loginButton: {
    backgroundColor: colors.darkTheme,
    width: dw(70),
    alignSelf: "center",
    height: dw(10),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 7,
    marginTop: dh(7),
    marginBottom: dh(7),
  },
  loginButtonTitle: {
    fontSize: dw(4),
    fontWeight: "bold",
    color: "white",
  },
  socialButtonWrapper: {
    flexDirection: "row",
    width: dw(22),
    justifyContent: "space-between",
    alignSelf: "center",
    marginBottom: dh(1),
  },
  socialbuttonTitle: {
    fontSize: dw(3),
    alignSelf: "center",
    color: colors.darkTheme,
  },
  joinUsContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  newUserTitle: {
    alignSelf: "center",
    fontSize: dw(3.5),
    color: colors.darkTheme,
    marginBottom: dh(10),
  },
  boldTitle: {
    fontWeight: "bold",
    lineHeight: 30,
  },
});
