import React,{ useState, useEffect } from 'react';
import { FlatList , Platform, View,TextInput,StyleSheet,ActivityIndicator, Button} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import {HeaderButtons,Item} from 'react-navigation-header-buttons';
import { SearchBar } from 'react-native-elements';
import JobItem from '../../components/Job/JobItem';
import HeaderButton from '../../components/ui/HeadderButton';
// import SearchBox from '../../components/ui/searchComponent';
import { ScrollView } from 'react-native-gesture-handler';
import * as authActions from '../../store/actions/auth';
import Colors from '../../constants/Colors';

const JobsOverviewScreen = props => {
  const jobs = useSelector(state => state.jobs.availableJobs);
  const dispatch = useDispatch();
  const userToken = useSelector(state=> state.auth.token);



const [isLoading, setIsLoading] = useState(false);
  const [error, setError]=useState();

  // console.log(".........."+userToken);
  useEffect(()=>{
    if(error){
      Alert.alert(' Error Occured ',error, [{text:'Ok'}]);
    }
  },[error]);

  const profileHandler =()=>{
let profileAction = userProfile.getUserProfile(userToken);
  setError(null);
  setIsLoading(true);
  try{
    dispatch(profileAction);

  }catch(err){

    setError(err.message);
    setIsLoading(false);
  }
};

  return (

<ScrollView>
<Button title="logout" color={Colors.primary} onPress={()=>{


dispatch(authActions.logout());
props.navigation.navigate('startup');
}}/>

    <SearchBar
          round
          searchIcon={{ size: 24 }}
          
          // onChangeText={text =>{} }
          // onClear={text => this.SearchFilterFunction('')}
          placeholder="Type Here..."
          // value={this.state.search}
        />
    <FlatList
      data={jobs}
      keyExtractor={item => item.id}
      enableEmptySections={true}
      renderItem={itemData => (
        <JobItem
          jobPostedByPicture={itemData.item.jobPostedByPicture}
          jobPostedBy={itemData.item.jobPostedBy}
          jobTitle={itemData.item.jobTitle}
          jobProvince={itemData.item.jobProvince}
          jobDistrict={itemData.item.jobDistrict}
          jobType={itemData.item.jobType}
          jobDeadlineOn={itemData.item.jobDeadlineOn}
          
          jobPostedOn={itemData.item.jobPostedOn}
          jobApplicantsNo={itemData.item.jobApplicantsNo}
          jobAppNoOutof={itemData.item.jobAppNoOutof}


          onViewDetail={() => {
              props.navigation.navigate('JobDetail', { 
              jobId: itemData.item.id,
              postedBy: itemData.item.jobPostedBy }); }}
            />
      )}
    />      
  </ScrollView>
  

  );
};

export default JobsOverviewScreen;
JobsOverviewScreen.navigationOptions =navData => {
  // const dispatch = useDispatch();




  return {
  headerTitle: 'All Jobs ', 
  // headerLeft: (
  //   <HeaderButtons HeaderButtonComponent={HeaderButton}>
  //     <Item
  //       title="Menu"
  //       iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
  //       onPress={() => {
  //         navData.navigation.navigate('Profile');
  //       }}
  //     />
  //   </HeaderButtons>
  // ),
  headerRight: (<HeaderButtons HeaderButtonComponent={HeaderButton}>
    {
      
    <Item title='profile' iconName={Platform.OS==='android'?'md-person':'ios-person'}
      onPress={()=>{ 
        navData.navigation.navigate('Profile');
      }}
    />}
  </HeaderButtons>)};
};


// const styles = StyleSheet.create({
//   searchView: {
    
//     flex: 1,
//     backgroundColor: 'blue',
//     marginTop: Platform.OS == 'ios' ? 50 : 0,
//     height:500
//   }

// });
