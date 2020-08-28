import React from 'react';
import { FlatList , Platform} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import {HeaderButtons,Item} from 'react-navigation-header-buttons';

import JobItem from '../../components/Job/JobItem';
import HeaderButton from '../../components/ui/HeadderButton';

const JobsOverviewScreen = props => {
  const jobs = useSelector(state => state.jobs.availableJobs);
  const dispatch = useDispatch();

  return (
    <FlatList
      data={jobs}
      keyExtractor={item => item.id}
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
              postedBy: itemData.item.jobPostedBy
            });
          }}
          onAddToCart={() => { }}
        />
      )}
    />
  );
};

JobsOverviewScreen.navigationOptions =navData => {
  return {
  headerTitle: 'All Jobs ',
  headerRight: (<HeaderButtons HeaderButtonComponent={HeaderButton}>
    <Item title='profile' iconName={Platform.OS==='android'?'md-person':'ios-person'}
      onPress={()=>{ }}
    />
  </HeaderButtons>)};
};

export default JobsOverviewScreen;
