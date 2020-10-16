import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { combineReducers,createStore,applyMiddleware } from 'redux';
import { Provider } from 'react-redux';


import ReduxThunk from 'redux-thunk';

import JobTabNavigator from './navigation/Jobnavigator';
import JobReducer from './store/reducers/Job';
import authReducer from './store/reducers/auth';





const rootReducer = combineReducers({
  jobs:JobReducer,
  auth: authReducer,

});

const store = createStore(rootReducer,applyMiddleware(ReduxThunk));

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
};
export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => {
          setFontLoaded(true);
        }}
      />
    );
  }

  return (

  <Provider store={store}>
      <JobTabNavigator/> 
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
