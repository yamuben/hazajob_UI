import * as React from "react";
import {
    Button,
    View,
    Text,
    TextInput,
    TouchableOpacity
} from "react-native";







const startupScreen = props => {

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>welcome on startupScreen!</Text>
            <Button onPress={()=>props.navigation.navigate('')}/>
        </View>
    );
}
export default startupScreen;