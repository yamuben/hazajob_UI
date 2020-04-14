import * as React from "react";
import { NavigationContainer, useFocusEffect } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from '../screens/user/signinScreen';
import startupScreen from '../screens/user/startupScreen';
import signupScreen from '../screens/user/signupSCreen';
import DashboardScreen from '../navigation/dashboardNavigation'

const UserStack = createStackNavigator();


export default function mainNavigation() { 
    return (
        <NavigationContainer independent="true"> 
            <UserStack.Navigator>
                <UserStack.Screen name="Hazajobs" component={startupScreen} />
                <UserStack.Screen name="Signin" component={LoginScreen} />
                <UserStack.Screen name="Signup" component={signupScreen} />
                <UserStack.Screen name="Dashboard" component={DashboardScreen} options={{ headerShown: false }} />
            </UserStack.Navigator>
        </NavigationContainer>
    );
}