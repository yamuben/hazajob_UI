import * as React from "react";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import mycolor from '../constants/colors';
import homeScreen from '../screens/dashboard/homeScreen';
import findScreen from '../screens/dashboard/findScreen';
import inboxScreen from '../screens/dashboard/inboxScreen';
import newpostScreen from '../screens/dashboard/newpostScreen';
import profileScreen from '../screens/dashboard/profileScreen';

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
                        backgroundColor: mycolor.btnbgcolor,
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





const Tab = createBottomTabNavigator();
// const TabTop = createMaterialTopTabNavigator();

export default function DashboardScreen() {
    return (
        <NavigationContainer independent="true">
            {/* <TabTop.Navigator>
                <TabTop.Screen name="Homex" component={} />
                <TabTop.Screen name="Searchx" component={} />
            </TabTop.Navigator> */}
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
                                    name={focused ? "ios-chatboxes" : "ios-chatboxes"}
                                    size={size}
                                    color={color}
                                />
                            );
                        } else if (route.name === "Profile") {
                            return (
                                <Ionicons
                                    name={focused ? "ios-list-box" : "ios-list"}
                                    size={size}
                                    color={color}
                                />
                            );
                        } else if (route.name === "Search") {
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
                    activeTintColor: mycolor.btnbgcolor,
                    inactiveTintColor: "gray"
                }}
            >
                <Tab.Screen name="Home" component={homeScreen} />
                <Tab.Screen name="Search" component={findScreen} />
                <Tab.Screen name="Inbox" component={inboxScreen} />
                <Tab.Screen name="NewJob" component={newpostScreen} />
                <Tab.Screen name="Profile" component={profileScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
