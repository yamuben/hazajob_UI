import * as React from "react";
import {connect} from 'react-redux';
import styles from '../../components/home/css';
import {
    Button,
    View,
    Text,
    TextInput,
    TouchableOpacity,StyleSheet
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {signIn} from "../../redux/action/signinAction";
const LoginScreen =  ({navigation}) => {

    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const validateInput = () => {
        if (username == "") {
            alert("Please fill Username")
            return false;
        } else if (password == "") {
            alert("Please fill Password")
            return false
        } 
        return true
    }
    const checkUser = () => {

        if (validateInput()) {
            if (username == "abc" && password == "123") {

                return (
                     navigation.navigate("Dashboard")
                );
            }
            return (
                alert("user not Available please register")
            );
    // console.log(username,password);
    //     signIn(username, password);    
    }
        

    }
    return (
            <View style={styles.container}>
                <Ionicons name="md-checkmark-circle" size={32} color="green" />
                <View style={styles.textFields}>
                    <View>

                        <TextInput style={styles.input}
                            onChangeText={(value) => setUsername(value)}
                            placeholder="username"
                            returnKeyType="next"
                            keyboardType="email-address"
                            autoCapitalize="none"
                            autoCorrect={false}>
                                

                        </TextInput>
                    </View>
                    <View>
                        <TextInput style={styles.input}

                            onChangeText={(e) => setPassword(e)}
                            placeholder="password"
                            returnKeyType="go"
                            secureTextEntry
                        >
                        </TextInput>
                    </View>
                    
                   <View>
                        <TouchableOpacity style={styles.buttonContainer} onPress={()=>checkUser()} >
                            <Text style={styles.buttonText} >Login</Text>
                        </TouchableOpacity>
                        <Button title="Register Here" style={styles.btnStart} onPress={() => navigation.navigate("Signup")}></Button>


                   </View>
                    
                </View>
            </View>

        );
}
export default LoginScreen;
// const mapStateToProps = state => {
//     console.log('=-=-=-=-=-=--00-0-0-0')
//     return{
//   data: state.signInReducer.data
// }
// };
// export default connect(mapStateToProps, { signIn })(LoginScreen);


// const inlineStyles = StyleSheet.create({
//    inputIcon:{
//        position:'absolute',
//        top:10,
//        left:37
//    } 
// });