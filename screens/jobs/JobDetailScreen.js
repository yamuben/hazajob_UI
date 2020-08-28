import React,{useRef} from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  Button,
  StyleSheet
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import Colors from '../../constants/Colors';
import { FlatList } from 'react-native-gesture-handler';

const JobDetailScreen = props => {
  const jobId = props.navigation.getParam('jobId');
  const selectedJob = useSelector(state =>
    state.jobs.availableJobs.find(job => job.id === jobId)
  );
  const dispatch = useDispatch();

  return (
    <ScrollView >
      <View>
      <View style={styles.postercard}>
        <View style={styles.imageposter}>
          <Image style={styles.image} source={{ uri: selectedJob.jobPostedByPicture }} />
        </View>
        <View style={styles.posterheader}>
            <Text style={styles.posternameheader}> {selectedJob.jobPostedBy}</Text>
            <Text style={styles.postermotorheader}> "We are here for you"</Text>

        </View>
      </View>

      <View style={styles.postcard}>


        <View >
          <Text style={styles.headtext}> Make Application</Text>
        </View>
        <View style={styles.jobdetailcard}>
              <Text style={styles.jobtitlemodel}>Job Position:  </Text>
  <Text style={styles.jobtitleresult}>{selectedJob.jobTitle}</Text>
        </View>
        <View style={styles.jobdetailcard}>
              <Text style={styles.jobtitlemodel}>Deadline:  </Text>
  <Text style={styles.jobtitleresult}>{selectedJob.jobDeadlineOn}</Text>
        </View>
        <View style={styles.jobdetailcard}>
              <Text style={styles.jobtitlemodel}>Type:  </Text>
  <Text style={styles.jobtitleresult}>{selectedJob.jobType}</Text>
        </View>
        <View style={styles.jobdetailcard}>
              <Text style={styles.jobtitlemodel}>Location:  </Text>
         </View>
        <View style={styles.jobdetailcard}>
        <Text style={styles.jobtitleresultb}>{selectedJob.jobCountry}, {selectedJob.jobProvince}, {selectedJob.jobDistrict}, {selectedJob.jobSector}</Text>

        </View>
        <View style={styles.jobdetailcard}>
              <Text style={styles.jobtitlemodel}>Description:  </Text>
  <Text style={styles.jobtitleresultb}> </Text>
        </View>

        <View style={styles.jobdetailcard}>
              <Text style={styles.jobtitleresultb}>{selectedJob.jobDescription}, </Text>
        </View>

        <View style={styles.jobdetailcard}>
              <Text style={styles.jobtitlemodel}>Qualification:  </Text>
  <Text style={styles.jobtitleresultb}> </Text>
        </View>

        <View style={styles.jobdetailcard}>
              <Text style={styles.jobtitleresultb}>{selectedJob.jobQualification}, </Text>
        </View>


        <View style={styles.jobdetailcard}>
              <Text style={styles.jobtitlemodel}>Available seats:  </Text>
  <Text style={styles.jobtitleresult}>{selectedJob.jobPostionAvailable}</Text>
        </View>
        <View style={styles.jobdetailcard}>
              <Text style={styles.jobtitlemodel}>Working days:  </Text>
  <Text style={styles.jobtitleresult}>{selectedJob.jobDays}</Text>
        </View>
        <View style={styles.jobdetailcard}>
              <Text style={styles.jobtitlemodel}>Salary (Frw):  </Text>
  <Text style={styles.jobtitleresult}>{selectedJob.jobSalary}</Text>
        </View>
        <View style={styles.jobdetailcardsigned}>
              <Text style={styles.jobtitlemodel}>Signed By:  </Text>
  <Text style={styles.jobtitleresult}>{selectedJob.jobOwner}</Text>
        </View>
        <View style={styles.jobdetailcardsigned}>
              <Text style={styles.jobtitlemodel}>On:  </Text>
  <Text style={styles.jobtitleresult}>{selectedJob.jobPostedOn}</Text>
        </View>


<View style={styles.jobaction}>
        <Button
          color={Colors.primary}
          title="Ignore"
        //   onPress={() => {
        //     dispatch(cartActions.addToCart(selectedProduct));
        //   }}
        /> 
        <Button
          color={Colors.primary}
          title="Apply"
        //   onPress={() => {
        //     dispatch(cartActions.addToCart(selectedProduct));
        //   }}
        />  
</View>
      </View>
      
      </View>
    </ScrollView>
  );
};

JobDetailScreen.navigationOptions = navData => {
  return {
    headerTitle: navData.navigation.getParam('postedBy')
  };
};

const styles = StyleSheet.create({
  jobview:{
    // backgroundColor:'#888'
  },

  postercard:{
    marginTop:3,
    paddingTop:2,
    width:'100%',
    padding:0,
    flexDirection:'row',
    backgroundColor:'white'
  },
  imageposter:{
    width:50,
    height:50,
    backgroundColor:'white',
    marginLeft:10
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius:100
  },
  posterheader:{
    padding:0,
    width:'100%',
    shadowColor: '#888',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 0,
    elevation: 5,
    backgroundColor: 'white'
  },
  posternameheader:{
    
    fontSize: 20,
    color: Colors.primary,
    marginLeft:5,
    fontFamily: 'open-sans-bold'
  },
  postermotorheader:{
    fontSize:13,
    color:'#888',
    marginLeft:5,
    fontFamily:'open-sans',
    
  },

  postcard:{
    width:'100%',
    height:'100%',
    paddingTop:10,
    backgroundColor:'white',
    marginTop:2,
    paddingRight:10

  },

  jobdetailcard:{
    flexDirection:'row',
    width:'100%',
    paddingLeft:15,
    marginTop:5,
    
  },

  jobdetailcardsigned:{
    // flexDirection:'row',
    width:'100%',
    paddingRight:20,
    marginTop:0,
    alignItems:'flex-end'

  },
  jobtitlemodel:{
    
    fontFamily: 'open-sans-bold',
    fontSize: 15,
    textAlign: 'left',
    color:'#6e6e6e'

  },
  jobtitleresult:{
    // paddingTop:,
    fontFamily: 'open-sans-bold',
    fontSize: 15,
    textAlign: 'center',
    color:'black'
  },
  jobtitleresultb:{
    // paddingTop:,
    fontFamily: 'open-sans',
    fontSize: 15,
    textAlign: 'left',
    color:'black',
    flexWrap:'wrap',
    flex:1,
    marginLeft:30
  },


  jobaction:{
    flexDirection:'row',
    justifyContent:'space-around',
    backgroundColor:'#fafafa',
    width:'105%',
    marginTop:30

  },
headtext:{
  fontSize:20,
  fontFamily:'open-sans-bold',
  color:Colors.primary,
  textAlign:'center'
},



  actions: {
    marginVertical: 10,
    alignItems: 'center'
  },
  price: {
    fontSize: 20,
    color: '#888',
    textAlign: 'center',
    marginVertical: 20,
    fontFamily: 'open-sans-bold'
  },
  description: {
    fontFamily: 'open-sans',
    fontSize: 14,
    textAlign: 'center'
  }
});

export default JobDetailScreen;
