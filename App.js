import React from 'react';
import { Provider } from 'react-redux';
import { SafeAreaView} from 'react-native';
import MainNavigationContainer from './src/router/MainNavigationContainer';
import store from './src/redux/store';

//bu bir deneme
const App = () => {
  return (
    <Provider store={store}>
      
      <SafeAreaView style={{flex: 1}}>
        <MainNavigationContainer />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
