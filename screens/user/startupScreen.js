import React, { useState, useEffect, useReducer, useCallback } from 'react';
import {
  
  View,
  KeyboardAvoidingView,
  StyleSheet,
  Button,
  ActivityIndicator,
  Alert,
  Text
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import Colors from '../../constants/Colors';
import Input from '../../components/ui/Input';
import Card from '../../components/ui/Card';
import { ScrollView } from "react-native-gesture-handler";
import {useDispatch} from 'react-redux';
import * as authActions from '../../store/actions/auth';

const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';


const formReducer = (state, action) => {
  if (action.type === FORM_INPUT_UPDATE) {
    const updatedValues = {
      ...state.inputValues,
      [action.input]: action.value
    };
    const updatedValidities = {
      ...state.inputValidities,
      [action.input]: action.isValid
    };
    let updatedFormIsValid = true;
    for (const key in updatedValidities) {
      updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
    }
    return {
      formIsValid: updatedFormIsValid,
      inputValidities: updatedValidities,
      inputValues: updatedValues
    };
  }
  return state;
};




const startupScreen = props => {

  
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError]=useState();
const [isSignup, setIsSignup] = useState(false);

  const dispatch = useDispatch();

  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      email: '',
      password: ''
    },
    inputValidities: {
      email: false,
      password: false
    },
    formIsValid: false
  });

  useEffect(()=>{
    if(error){
      Alert.alert(' Error Occured ',error, [{text:'Ok'}]);
    }
  },[error]);

  const authHandler = async()=>{

    let action;
    if(isSignup){

    action = authActions.signup(
      formState.inputValues.email,
      formState.inputValues.password);
  } else{
    action = authActions.login(
      formState.inputValues.email,
      formState.inputValues.password);
  
  }  
  setError(null);
  setIsLoading(true);
  try{
    await dispatch(action);
  
    props.navigation.navigate('account');
  }
    catch(err){
      setError(err.message);

      setIsLoading(false);
    }
  

  };

  const inputChangeHandler = useCallback(
    (inputIdentifier, inputValue, inputValidity) => {
      dispatchFormState({
        type: FORM_INPUT_UPDATE,
        value: inputValue,
        isValid: inputValidity,
        input: inputIdentifier
      });
    },
    [dispatchFormState]
  );


    return (
      <KeyboardAvoidingView 
        behavior='padding'
        keyboardVerticalOffset={50}
        style={styles.screen}
      >
      <LinearGradient colors={['#A56400', '#ffc370']} style={styles.gradient}>
        <Card style={styles.authContainer}>
          <ScrollView>
            
          <Input
              id="email"
              label="E-Mail /Phone"
              keyboardType="email-address"
              required
              email
              autoCapitalize="none"
              errorText="Please enter a valid email address."
              onInputChange={inputChangeHandler}
              initialValue=""
            />
            <Input
              id="password"
              label="Password"
              keyboardType="default"
              secureTextEntry
              required
              minLength={5}
              autoCapitalize="none"
              errorText="Please enter a valid password."
              onInputChange={inputChangeHandler}
              initialValue=""
            />
            <View style={styles.buttonContainer}>
              {isLoading ? (
                <ActivityIndicator size="small" color={Colors.primary} />
              ) : (
                <Button
                  title={isSignup ? 'Sign Up' : 'Login'}
                  color={Colors.primary}
                  onPress={authHandler}
                />
              )}
            </View>
            <View style={styles.buttonContainer}>
              <Button
                title={`Switch to ${isSignup ? 'Login' : 'Sign Up'}`}
                color={Colors.accent}
                onPress={() => {
                  setIsSignup(prevState => !prevState);
                }}
              />
            </View>

          </ScrollView>
        </Card>
        
      </LinearGradient>
      </KeyboardAvoidingView>


    );
}
export default startupScreen;

startupScreen.navigationOptions = {
  headerTitle: 'Haza Jobs '

};



const styles= StyleSheet.create({
  repass:{
    
  },
  screen: {
    flex: 1,
    backgroundColor:Colors.accent,
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
    
  },
  authContainer: {
    width: '80%',
    maxWidth: 400,
    maxHeight: 400,
    padding: 20
  },
  buttonContainer: {
    marginTop: 10
  }
});