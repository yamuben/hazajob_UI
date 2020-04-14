import * as React from "react";
import styles from '../../components/home/css';
import {
    Button,
    View,
    Text,
    TextInput,
    TouchableOpacity
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Dashboard } from '../../navigation/dashboardNavigation';







const profileScreen = ({ navigation }) => {

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>welcome profileScreen!</Text>
        </View>
    );
}
export default profileScreen;