import * as React from "react";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

function IconWithBadge({ name, badgeCount, color, size }) {
  return (
    <View style={{ width: 24, height: 24, margin: 5 }}>
      <Ionicons name={name} size={size} color={color} />
      {badgeCount > 0 && (
        <View
          style={{
            // On React Native < 0.57 overflow outside of parent will not work on Android, see https://git.io/fhLJ8
            position: "absolute",
            right: -6,
            top: -3,
            backgroundColor: "blue",
            borderRadius: 6,
            width: 12,
            height: 12,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text style={{ color: "white", fontSize: 10, fontWeight: "bold" }}>
            {badgeCount}
          </Text>
        </View>
      )}
    </View>
  );
}

function HomeIconWithBadge(props) {
  // You should pass down the badgeCount in some other ways like React Context API, Redux, MobX or event emitters.
  return <IconWithBadge {...props} badgeCount={3} />;
} 

function InboxIconWithBadge(props) {
  // You should pass down the badgeCount in some other ways like React Context API, Redux, MobX or event emitters.
  return <IconWithBadge {...props} badgeCount={7} />;
}

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home!</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Profile!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();


export default function DashboardScreen() {
                 return (
                   <NavigationContainer independent="true">
                     <Tab.Navigator
                       screenOptions={({ route }) => ({
                         tabBarIcon: ({ focused, color, size }) => {
                           if (route.name === "Home") {
                             return (
                               <HomeIconWithBadge
                                 name={focused ? "ios-home" : "ios-home"}
                                 size={size}
                                 color={color}
                               />
                             );
                           } else if (route.name === "Inbox") {
                             return (
                               <InboxIconWithBadge
                                 name={ focused ? "ios-chatboxes" : "ios-chatboxes"}
                                 size={size}
                                 color={color}
                               />
                             );
                           }else if (route.name === "Profile") {
                             return (
                               <Ionicons
                                 name={focused ? "ios-list-box" : "ios-list"}
                                 size={size}
                                 color={color}
                               />
                             );
                           }  else if (route.name === "Search") {
                             return (
                               <Ionicons
                                 name={focused ? "ios-search" : "ios-search"}
                                 size={size}
                                 color={color}
                               />
                             );
                           } else if (route.name === "NewJob") {
                             return (
                               <Ionicons
                                 name={focused ? "ios-add-circle" : "ios-add-circle"}
                                 size={size}
                                 color={color}
                               />
                             );
                           }
                         }
                       })}
                       tabBarOptions={{
                         activeTintColor: "tomato",
                         inactiveTintColor: "gray"
                       }}
                     >
                       <Tab.Screen name="Home" component={HomeScreen} />
                       <Tab.Screen name="Search" component={ProfileScreen} />
                       <Tab.Screen name="Inbox" component={HomeScreen} />
                       <Tab.Screen name="NewJob" component={HomeScreen} />
                       <Tab.Screen name="Profile" component={ProfileScreen} />
                     </Tab.Navigator>
                   </NavigationContainer>
                 );
               }
