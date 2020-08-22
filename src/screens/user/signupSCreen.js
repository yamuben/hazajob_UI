import * as React from "react";
import styles from '../../components/home/css'
import DropDownPicker from 'react-native-dropdown-picker';
import {
    Button,
    View,
    Text,
    TextInput,
    TouchableOpacity,ScrollView
} from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import colors from "../../constants/colors";

function signupScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.textFields}>
<ScrollView> 
                    <DropDownPicker 
                    items={[
                        {label: 'Individual', value: 'individual'},
                        {label: 'Company', value: 'company'},
                        {label: 'Goverment', value: 'goverment'},
                    ]}
                    placeholder="Please select acount Type"
                    containerStyle={{height: 40}}
                    style={styles.inputDrop}
                    dropDownStyle={{backgroundColor: colors.accent}}
                    onChangeItem={item => console.log(item.label, item.value)}/>

 
                <TextInput style={styles.input}
                    placeholder="First Name"
                    returnKeyType="next"
                    keyboardType="default"
                    autoCapitalize="none"
                    autoCorrect={true}>

                </TextInput>
                <TextInput style={styles.input}
                    placeholder="Last Name"
                    returnKeyType="next"
                    keyboardType="default"
                    autoCapitalize="none"
                    autoCorrect={true}>

                </TextInput>
                <TextInput style={styles.input}
                    placeholder="Phone number eg:+25078....."
                    returnKeyType="next"
                    keyboardType="phone-pad"
                    autoCapitalize="none"
                    autoCorrect={true}>

                </TextInput>
                <TextInput style={styles.input}
                    placeholder="E-mail"
                    returnKeyType="next"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={true}>

                </TextInput>
               
                <TextInput style={styles.input}
                    placeholder="Password"
                    returnKeyType="next"
                    secureTextEntry
                >
                </TextInput>
                <TextInput style={styles.input}
                    placeholder="Re-Password"
                    returnKeyType="go"
                    secureTextEntry
                >
                </TextInput>
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText} onPress={() => navigation.navigate("Signin")}>Create Account</Text>
                </TouchableOpacity>
               
</ScrollView>

            </View>
        </View>    );
}
export default signupScreen;