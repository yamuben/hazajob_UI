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

          <View style={styles.mainJobView}>
            
            <View style={styles.imageContainer}>
               <Image style={styles.image} source={{ uri: props.jobPostedByPicture }} />
            </View>
            
            <View style={styles.details}>
            <TouchableCmp onPress={()=>{}} useForeground>
              <View style={styles.detailsProfile} >
              <Text style={styles.postedBy} > {props.jobPostedBy}</Text>
              </View>
          </TouchableCmp>
              
        <TouchableCmp onPress={props.onViewDetail} useForeground>
<View>
<Text style={styles.subtitle}> {props.jobTitle}</Text>

              
<Text style={styles.price}> {props.jobProvince} , {props.jobDistrict}</Text>
            <Text style={styles.price}> {props.jobType}</Text>
            <Text style={styles.price}> Deadline: {props.jobDeadlineOn}</Text>

</View>

</TouchableCmp>
           </View>
            <View style={styles.besidecontainer}>

            {/* <Ionicons name="md-checkmark-circle" size={32} color="green" /> */}
              <Text style={styles.Date}> {props.jobPostedOn}</Text>
              <Text style={styles.price}> {props.jobAppNoOutof} / {props.jobApplicantsNo}</Text>
              {/* <Text style={styles.price}> {props.jobTitle}</Text>
              <Text style={styles.price}> {props.jobTitle}</Text> */}
            <Button color={Colors.primary}
                   title='Apply'
                   fontFamily='open-sans-bold'
                onPress={props.onViewDetail}
              />

            </View>
          </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  jobview: {
    shadowColor: '#888',
    shadowOpacity: 0.16,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 0,
    elevation: 2,
    backgroundColor: 'white',
    height: 120,
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
      // backgroundColor:'blue'
  },
  imageContainer: {
      marginTop:10,
    margin:5,
    width: '12%',
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
    height: '95%',
    padding:0,
    // backgroundColor:'red',
    width:'60%'



  },
  detailsProfile: {
    alignItems: 'flex-start',
  width:'102%',
    // backgroundColor:'yellow',
    



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
  postedBy: {
    fontFamily: 'open-sans-bold',
    fontSize: 18,
    marginVertical: 0,
    color:Colors.primary },
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

export default JobItem;
