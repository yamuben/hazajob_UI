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

const JobItem = props => {
  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
    <View style={styles.jobview}>
      <View style={styles.touchable}>
        <TouchableCmp onPress={props.onViewDetail} useForeground>
          <View style={styles.mainJobView}>
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={{ uri: props.jobPostedByPicture }} />
            </View>
            <View style={styles.details}>
            <Button color={Colors.primary}
                   title={props.jobPostedBy}
                // onPress={}
              />
              <Text style={styles.subtitle}> {props.jobTitle}</Text>
  <Text style={styles.price}> {props.jobProvince} , {props.jobDistrict}</Text>
              <Text style={styles.price}> {props.jobType}</Text>
              <Text style={styles.price}> Deadline: {props.jobDeadlineOn}</Text>
            </View>
            <View style={styles.besidecontainer}>

            {/* <Ionicons name="md-checkmark-circle" size={32} color="green" /> */}
              <Text style={styles.Date}> {props.jobPostedOn}</Text>
              <Text style={styles.price}> {props.jobAppNoOutof} / {props.jobApplicantsNo}</Text>
              <Text style={styles.price}> {props.jobTitle}</Text>
              <Text style={styles.price}> {props.jobTitle}</Text>
            <Button color={Colors.primary}
                   title='Apply'
                   fontFamily='open-sans-bold'
                // onPress={}
              />

            </View>
          </View>
        </TouchableCmp>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  jobview: {
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 0,
    elevation: 5,
    backgroundColor: 'white',
    height: 140,
    margin: 2,
    width: '99%'
  },
  touchable: {
    overflow: 'hidden'
  },
  mainJobView:{
      width:'100%',
      height:'100%',
      flexDirection:'row',
    //   backgroundColor:'blue'
  },
  imageContainer: {
      marginTop:10,
    margin:5,
    width: '15%',
    height: '40%',
    borderRadius:100,
    overflow: 'hidden'
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
    fontFamily: 'open-sans-bold',
    fontSize: 14,
    marginVertical: 0
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

//   actions: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     height: '25%',
//     paddingTop:0,
//     paddingHorizontal: 10
//   }
});

export default JobItem;
