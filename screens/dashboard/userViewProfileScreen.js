import React, { useState, useEffect } from 'react';
import {    
  Button,
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet, Image,
  ScrollView
  } from 'react-native';
  import HeaderButton from '../../components/ui/HeadderButton';
  import {HeaderButtons,Item} from 'react-navigation-header-buttons';
  import { SearchBar } from 'react-native-elements';
  import filter from 'lodash.filter';
import UserItem from '../../components/user/useritem';
// const API_ENDPOINT = `https://hazajob.herokuapp.com/api/v1/users`;
const API_ENDPOINT = `https://hazajob.herokuapp.com/api/v1/users/user-data`;

import userDetailScreen from '../user/userDetailScreen';
import { useSelector, useDispatch } from 'react-redux';
import { LinearGradient } from 'expo-linear-gradient';

import * as authActions from '../../store/actions/auth';
import Colors from '../../constants/Colors';
import Card from '../../components/ui/Card';


const  UserOverviewScreen = props => {
  
    const userToken = useSelector(state=> state.auth.token);
    const userId = useSelector(state=> state.auth.userId);

    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
  const [query, setQuery] = useState('');
const [fullData, setFullData] = useState([]);

const dispatch = useDispatch();
    useEffect(async() => {
        setIsLoading(true);
    
       await fetch(API_ENDPOINT,{
          method:'GET',
          headers:{
              'Content-Type':'application/json',
              'x_auth_token':userToken
          }})
          .then(response => response.json())
          .then(response => {
          console.log(response);
            setData(response.data.user);
            setFullData(response.data.user);
            setIsLoading(false);
          })
          .catch(err => {
            setIsLoading(false);
            setError(err);
          });
      }, []);

      if (isLoading) {
        return (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size="large" color="#5500dc" />
          </View>
        );
      }
    
      if (error) {
        return (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 18}}>
              Error fetching data... Check your network connection!
            </Text>
          </View>
        );
      }

const selectedUser=  data;

console.log(data.loginInfos);
      return (
        
        <KeyboardAvoidingView 
        behavior='padding'
        keyboardVerticalOffset={50}
        style={styles.screen}
      >
      <LinearGradient colors={['#A56400', '#ffc370']} style={styles.gradient}>
        <Card style={styles.authContainer}>
          <ScrollView>
  
          <View style={styles.container}>
          <View style={styles.imageContainer}>
              <Image
              style={styles.image}
              source={{
              uri:'https://images.pexels.com/photos/235994/pexels-photo-235994.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
              }}
          />
          </View>
          <View style={styles.profileContainer}>
              <Image
                  style={styles.profile}
                  source={{
                      uri:selectedUser.profilePicture
                  }}
              />
          </View>
          <View style={styles.address}>
              <Text style={styles.addressText}>  {selectedUser.lastName} {selectedUser.firstName}</Text>
              <Text style={styles.addressTextTitle}> {selectedUser.title} </Text>
              {/* <Text style={styles.addressTextInside}> {selectedUser.loginInfos.email}</Text> */}
             {/* <Text style={styles.addressTextInside}> {selectedUser.phone}</Text>
              <Text style={styles.addressTextInside}> {selectedUser.location.country} , {selectedUser.location.province} , {selectedUser.location.district} , {selectedUser.location.sector} </Text>  */}
                  
      <View style={styles.action}>
          <Button
            color={Colors.primary}
            title="Message"
            onPress={() => { }}
          /> 
          <Button
            color={Colors.primary}
            title="Logout"
            onPress={() => {
            
              dispatch(authActions.logout());
              props.navigation.navigate('startup');
            }}
          />  
      </View>
          </View>
          
          <View style={styles.motorView}>
                  {/* <Text style={styles.motor}> " {selectedUser.motor} " </Text> */}
              </View>
  
          <View style={styles.allDetails}>
{/*               
              <Text style={styles.addressTitle}> Skills: </Text>
              <Text style={styles.addressBody}> {selectedUser.skill.categoryId} </Text>
              
              <Text style={styles.addressTitle}> Description: </Text>
              <Text style={styles.addressBody}> {selectedUser.description} </Text>
              
              <Text style={styles.addressTitle}> Portfolio: </Text>
              <Text style={styles.addressBody}> {selectedUser.portfolio} </Text> */}
              
          </View>
  
          </View>
          
          
          </ScrollView>
          </Card>
          
        </LinearGradient>
        </KeyboardAvoidingView>
  

      );
      

  }
  export default UserOverviewScreen;




  UserOverviewScreen.navigationOptions =navData => {
    return {
    headerTitle: 'Find users ',
        };
  };

  
const styles= StyleSheet.create({

  allDetails:{
      alignItems:'flex-start',
      width:'100%',
      paddingLeft:10
  },
  container:{
      flex: 1, alignItems: "center"
  },
  image:{
      width:'100%',
      height:'100%',
      opacity:0.6
  },
  profile:{
      borderRadius:100,
      height:'100%',
      width:'100%',
      
  },

  imageContainer:{
      height:80,
      width:'100%',
      borderBottomColor:Colors.primary,
      borderBottomWidth:2
      
            
  },
  action:{
      flexDirection:'row',
      justifyContent:'space-around',
      backgroundColor:'#fafafa',
      width:'100%',
      
      borderBottomWidth:2,
      borderBottomColor:'#888',
      borderBottomEndRadius:10,
      borderBottomStartRadius:10
  
    },
  profileContainer:{
      marginTop:-40,
      height:100,
      backgroundColor:Colors.primary,
      width:100,
      borderRadius:100,
      paddingTop:3,
      alignItems:'center',
      

  },
  addressText:{
      fontFamily: 'open-sans-bold',
      fontSize: 16,
  },
  addressTitle:{
      fontFamily: 'open-sans-bold',
      fontSize: 16,
      paddingTop:5
  },
  addressBody:{
      paddingLeft:30,
      paddingTop:10
  },
  addressTextTitle:{
      fontFamily: 'open-sans',
      fontSize: 16,
  },
  addressTextInside:{
      marginTop:3,
      fontFamily: 'open-sans',
      fontSize: 14,
      color:'#888'
  },
  motor:{
      paddingTop: 5,
      fontFamily: 'open-sans-bold',
      fontSize: 12,
      color: Colors.primary,
  },
  address:{
      alignItems:'center',
      height:150,
      width:'100%',
  },
  motorView:{
      alignItems:'center',
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
    width: '95%',
    height:'95%',
    maxWidth: 500,
    maxHeight: 500,
    padding: 5,
    margin:5
  },

});