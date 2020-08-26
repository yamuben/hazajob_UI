import React from 'react';
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

const JobDetailScreen = props => {
  const jobId = props.navigation.getParam('jobId');
  const selectedJob = useSelector(state =>
    state.jobs.availableJobs.find(job => job.id === jobId)
  );
  const dispatch = useDispatch();

  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: selectedJob.jobPostedByPicture }} />
      <View style={styles.actions}>
        <Button
          color={Colors.primary}
          title="Add to Cart"
        //   onPress={() => {
        //     dispatch(cartActions.addToCart(selectedProduct));
        //   }}
        />
      </View>
      <Text style={styles.price}>Company{selectedJob.jobPostedBy}</Text>
      <Text style={styles.description}>{selectedJob.jobTitle}</Text>
    </ScrollView>
  );
};

JobDetailScreen.navigationOptions = navData => {
  return {
    headerTitle: navData.navigation.getParam('postedBy')
  };
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300
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
    textAlign: 'center',
    marginHorizontal: 20
  }
});

export default JobDetailScreen;
