import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform
} from 'react-native';
import Ionicons from '@expo/vector-icons';

import Colors from '../../constants/Colors';
import { colors } from 'react-native-elements';

const UserChatItem = props => {
  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
    <View style={styles.userView}>
      <View style={styles.touchable}>
        <TouchableCmp onPress={props.onViewDetail} useForeground>
          <View style={styles.mainuserView}>
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={{ uri: props.profilePicture }} />
            </View>
            <View style={styles.details}>
              <Text style={styles.title}> {props.lastName + ' ' + props.firstName}</Text>
              <Text style={styles.subtitle}> {props.motor}</Text>
  <Text style={styles.locsubtitle}> {props.country}, {props.province}, {props.district}</Text>
            </View>
            <View style={styles.besidecontainer}>
            <Button color={Colors.primary}
                   title='Chat'
                   fontFamily='open-sans-bold'
                onPress={props.onViewDetail}
              />

            </View>
          </View>
        </TouchableCmp>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  userView: {
    shadowColor: '#888',
    shadowOpacity: 0.16,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 0,
    elevation: 2,
    backgroundColor: 'white',
    height: 80,
    margin: 2,
    width: '99%'
  },
  touchable: {
    overflow: 'hidden'
  },
  mainuserView:{
      width:'100%',
      height:'100%',
      flexDirection:'row',
    //   backgroundColor:'blue'
  },
  imageContainer: {
      marginTop:10,
    margin:5,
    width: '15%',
    height: '70%',
    borderRadius:100,
    overflow: 'hidden',
    padding:0.5,
    backgroundColor:Colors.primary
    
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius:50
  },
  details: {
    alignItems: 'flex-start',
    height: '100%',
    padding:2,
    // backgroundColor:'red',
    width:'60%'



  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 16,
    marginVertical: 1
  },
  subtitle: {
    fontFamily: 'open-sans',
    fontSize: 14,
    marginVertical: 0
  },
  locsubtitle: {
    fontFamily: 'open-sans',
    fontSize: 12,
    marginVertical: 0,
    color:'#888'

  },
  price: {
    fontFamily: 'open-sans',
    fontSize: 14,
    color: '#888'
  },
  Date:{
      
    fontFamily: 'open-sans',
    fontSize: 12,
    // color: ''
  },
  besidecontainer:{
    alignItems:'flex-start',
    marginTop:15
  }

//   actions: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     height: '25%',
//     paddingTop:0,
//     paddingHorizontal: 10
//   }
});

export default UserChatItem;
