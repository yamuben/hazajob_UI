import { createAppContainer } from 'react-navigation';
import { Platform } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import JobsOverviewScreen from '../screens/jobs/JobsOverviewScreen';
import JobDetailScreen from '../screens/jobs/JobDetailScreen';
import startupScreen from '../screens/user/startupScreen';
import Colors from '../constants/Colors';
import findScreen from '../screens/jobs/findScreen';

const JobsNavigator = createStackNavigator(
  {
    // startup: startupScreen,
    JobsOverview: JobsOverviewScreen,
    JobDetail: JobDetailScreen,
 
  },
  {
    
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
      },
      headerTitleStyle: {
        fontFamily: 'open-sans-bold'
      },
      headerBackTitleStyle: {
        fontFamily: 'open-sans'
      },
      headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
    }
  }
);


const JobTabNavigator = createBottomTabNavigator({
  JobsOverview: JobsOverviewScreen,
  FindScreen:findScreen
});


export default createAppContainer(JobsNavigator);
