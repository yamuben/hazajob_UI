import React, { useEffect } from 'react';
import {
  View,
  ActivityIndicator,
  StyleSheet,
  AsyncStorage
} from 'react-native';
import { useDispatch } from 'react-redux';
import * as authActions from '../store/actions/auth';
import Colors from '../constants/Colors';
import * as userProfile from '../store/actions/profile';

const WelcomeScreen = props =>{

    const dispatch = useDispatch();

    useEffect(() => {
      const tryLogin = async () => {
        const userData = await AsyncStorage.getItem('userData');
        if (!userData) {
          props.navigation.navigate('startup');
          return;
        }
        const transformedData = JSON.parse(userData);
        const { token, userId, expiryDate } = transformedData;
        // const expirationDate = new Date(expiryDate);

        
  
        if ( !token || !userId || new Date(parseInt(expiryDate)*1000)< new Date()) {
          props.navigation.navigate('startup');
          return;
        }
  console.log('Exp date: ' +new Date(parseInt(expiryDate)*1000));
  console.log('to Day: ' + new Date());

  // userProfile.getUserProfile(token);
  dispatch(userProfile.getUserProfile(token))
        props.navigation.navigate('account');
        dispatch(authActions.authenticate(userId, token, expiryDate));
      };
  
      tryLogin();
    }, [dispatch]);

    return(
        <View style={styles.screen}>
          <ActivityIndicator size="large" color={Colors.primary} />
        </View>
      );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }
});

export default WelcomeScreen;

