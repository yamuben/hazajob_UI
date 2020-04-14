import * as React from "react";
import styles from '../../components/home/css'

import {
    Button,
    View,
    Text,
    TextInput,
    TouchableOpacity
} from "react-native";

function signupScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.textFields}>
                <TextInput style={styles.inputlocal}
                    placeholder="User Type"
                    returnKeyType="next"
                    keyboardType="default"
                    autoCapitalize="none"
                    autoCorrect={true}>

                </TextInput>
                <TextInput style={styles.inputlocal}
                    placeholder="First Name"
                    returnKeyType="next"
                    keyboardType="default"
                    autoCapitalize="none"
                    autoCorrect={true}>

                </TextInput>
                <TextInput style={styles.inputlocal}
                    placeholder="Last Name"
                    returnKeyType="next"
                    keyboardType="default"
                    autoCapitalize="none"
                    autoCorrect={true}>

                </TextInput>
                <TextInput style={styles.inputlocal}
                    placeholder="Phone number"
                    returnKeyType="next"
                    keyboardType="phone-pad"
                    autoCapitalize="none"
                    autoCorrect={true}>

                </TextInput>
                <TextInput style={styles.inputlocal}
                    placeholder="E-mail"
                    returnKeyType="next"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={true}>

                </TextInput>
               
                <TextInput style={styles.inputlocal}
                    placeholder="Password"
                    returnKeyType="next"
                    secureTextEntry
                >
                </TextInput>
                <TextInput style={styles.inputlocal}
                    placeholder="Re-Password"
                    returnKeyType="go"
                    secureTextEntry
                >
                </TextInput>
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText} onPress={() => navigation.navigate("Signin")}>Create Account</Text>
                </TouchableOpacity>
               

            </View>
        </View>    );
}
export default signupScreen;