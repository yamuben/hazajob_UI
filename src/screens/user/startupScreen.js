import * as React from "react";
import styles from '../../components/home/css'

import {
    Button,
    View,
    Text,
    TextInput,
    TouchableOpacity
} from "react-native";

const startupScreen =({ navigation })=> {
    return (
        console.disableYellowBox = true,
        <View style={styles.container}>
            <View style={styles.homecard}>
                <Text style={styles.welcome}>Welcome</Text>
                <Text style={styles.welcometext}>To Hazajobs where you can get your dream job or hire the top talents </Text>
             

                <TouchableOpacity style={styles.buttonContainer}

                    onPress={() => navigation.navigate("Signin")}>
                    <Text style={styles.buttonText}>Get started</Text>

                </TouchableOpacity>


            </View>

        </View>
    );
}
export default startupScreen;