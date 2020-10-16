import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { Platform, TouchableNativeFeedbackComponent } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import JobsOverviewScreen from '../screens/jobs/JobsOverviewScreen';
import JobDetailScreen from '../screens/jobs/JobDetailScreen';
import startupScreen from '../screens/user/startupScreen';
import Colors from '../constants/Colors';
import {Ionicons} from '@expo/vector-icons';
import UserOverviewScreen from '../screens/user/userOverviewScreen';
import chatScreen from '../screens/chats/chatScreen';
import notificationScreen from '../screens/jobs/notificationScreen';
import newpostScreen from '../screens/jobs/newpostScreen';
import userDetailScreen from '../screens/user/userDetailScreen';
import userChatDetailScreen from '../screens/chats/userChatDetailScreen';
import welcomeScreen from '../screens/welcomeScreen';

import userViewProfileScreen from '../screens/dashboard/userViewProfileScreen';
import userUpdateProfileScreen from '../screens/dashboard/userUpdateProfileScreen';


const defaultNavOptions = {
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
};

const JobsNavigator = createStackNavigator(
  {
    // startup: startupScreen,
    JobsOverview: JobsOverviewScreen,
    JobDetail: JobDetailScreen,
    Profile:userViewProfileScreen,
 
  },
  {
    
    defaultNavigationOptions:defaultNavOptions,
  }
);
const FindNavigator = createStackNavigator(
  {
    // startup: startupScreen,
    UsersOverview: UserOverviewScreen,
    UserDetail: userDetailScreen,
 
  },
  {
    
    defaultNavigationOptions: defaultNavOptions
  }
);

const ChatNavigator = createStackNavigator(
  {
    // startup: startupScreen,
    UsersChatOverview: chatScreen,
    UserChatDetail: userChatDetailScreen,
 
  },
  {
    
    defaultNavigationOptions: defaultNavOptions
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
    screen:ChatNavigator,
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

const UserAuthNavigator = createStackNavigator(
  {
    startup: startupScreen,
 
  },
  {
    
    defaultNavigationOptions: defaultNavOptions
  }
);


const UserViewNavigator = createStackNavigator(
  {
    Profiles: userViewProfileScreen
  },
  {
    navigationOptions: {
      drawerIcon: drawerConfig => (
        <Ionicons
          name={Platform.OS === 'android' ? 'md-list' : 'ios-list'}
          size={23}
          color={drawerConfig.tintColor}
        />
      )
    },
    defaultNavigationOptions: defaultNavOptions
  }
); 
const UserUpdateNavigator = createStackNavigator(
  {
    Update: userUpdateProfileScreen
  },
  {
    navigationOptions: {
      drawerIcon: drawerConfig => (
        <Ionicons
          name={Platform.OS === 'android' ? 'md-list' : 'ios-list'}
          size={23}
          color={drawerConfig.tintColor}
        />
      )
    },
    defaultNavigationOptions: defaultNavOptions
  }
); 


// const userProfileNavigator = createDrawerNavigator({
//   Profile:UserViewNavigator,
//   Edit:UserUpdateNavigator

// },{
//   contentOptions: {
//     activeTintColor: Colors.primary
//   }

// });

const MainNavigator = createSwitchNavigator({
  welcome: welcomeScreen,
  startup: UserAuthNavigator,
    account:JobTabNavigator,


});

export default createAppContainer(MainNavigator);
