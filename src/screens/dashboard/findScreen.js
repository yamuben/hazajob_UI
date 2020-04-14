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







const findScreen = ({ navigation }) => {

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>welcome findScreen!</Text>
        </View>
    );
}
export default findScreen;