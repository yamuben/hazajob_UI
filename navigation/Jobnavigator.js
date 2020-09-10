import React from 'react';
import { createAppContainer } from 'react-navigation';
import { Platform, TouchableNativeFeedbackComponent } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import JobsOverviewScreen from '../screens/jobs/JobsOverviewScreen';
import JobDetailScreen from '../screens/jobs/JobDetailScreen';
import startupScreen from '../screens/user/startupScreen';
import Colors from '../constants/Colors';
import {Ionicons} from '@expo/vector-icons';
import UserOverviewScreen from '../screens/jobs/findUser';
import chatScreen from '../screens/jobs/chatScreen';
import notificationScreen from '../screens/jobs/notificationScreen';
import newpostScreen from '../screens/jobs/newpostScreen';

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
const FindNavigator = createStackNavigator(
  {
    // startup: startupScreen,
    UsersOverview: UserOverviewScreen,
    // UserDetail: JobDetailScreen,
 
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
  JobsOverview: {screen:JobsNavigator,navigationOptions:{
    tabBarLabel:'Home',
    tabBarIcon:(tabInfo)=>{
      return <Ionicons name='ios-home' size={24} color={tabInfo.tintColor}/>;
    }}},

  FindScreen:{screen:FindNavigator, navigationOptions:{
    
    tabBarLabel:'Find User',
    tabBarIcon:(tabInfo)=>{
      return <Ionicons name='ios-search' size={24} color={tabInfo.tintColor}/>;
    }
  }},

  chatsScreen:{
    screen:chatScreen,
    navigationOptions:{
      tabBarLabel:'Chats',
      tabBarIcon:(tabInfo)=>{
        return <Ionicons name='ios-chatboxes' size={24} color={tabInfo.tintColor}/>;
      }
    }

  },
  newpostsScreen:{
    screen:newpostScreen,
    navigationOptions:{
      tabBarLabel:'Post Job',
      tabBarIcon:(tabInfo)=>{
        return <Ionicons name='ios-add-circle' size={24} color={tabInfo.tintColor}/>;
      }
    }

  },
  notificationsScreen:{

    tabBarLabel:'Notifications',
    screen:notificationScreen,
    navigationOptions:{
    
      tabBarIcon:(tabInfo)=>{
        return <Ionicons name='ios-notifications' size={24} color={tabInfo.tintColor}/>;
      }
    }
  }


},
{
  tabBarOptions:{
    activeTintColor:Colors.accent,
  }
});


export default createAppContainer(JobTabNavigator);
