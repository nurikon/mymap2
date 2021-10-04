import store from "../store";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function login(item) {
  AsyncStorage.setItem('isLogged', 'true');
  store.dispatch({
    type: "LOGIN",
    payload: item,
  });
}

// export function logout() {
//   AsyncStorage.removeItem('is_logged');
//   AsyncStorage.removeItem('member');
//   AsyncStorage.removeItem('OnesignalID');
//   AsyncStorage.removeItem('RefreshToken');
//   AsyncStorage.removeItem('UserToken');
//   AsyncStorage.removeItem('UserId');
//   store.dispatch({
//     type: 'LOGOUT',
//   });
// }
