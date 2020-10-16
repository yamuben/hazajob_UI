import React, { useState, useEffect } from 'react';
import {
    Button,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet, Image,
    ScrollView
} from "react-native";
import Colors from '../../constants/Colors';





const userChatDetailScreen = (props) => {

    const userId = props.navigation.getParam('userId');
    const selectedUser = props.navigation.state.params.data.find(user=> user._id===userId);
   


    return (
        <ScrollView>
        <View style={styles.container}>
        <View style={styles.imageContainer}>
            <Image
            style={styles.image}
            source={{
            uri:'https://images.pexels.com/photos/235994/pexels-photo-235994.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            }}
        />
        </View>
        <View style={styles.profileContainer}>
            <Image
                style={styles.profile}
                source={{
                    uri:selectedUser.profilePicture
                }}
            />
        </View>
        <View style={styles.address}>
            <Text style={styles.addressText}>  {selectedUser.lastName} {selectedUser.firstName}</Text>
            <Text style={styles.addressTextTitle}> {selectedUser.portfolio} </Text>
            <Text style={styles.addressTextInside}> yamubbenjamin@gmail.com</Text>
            <Text style={styles.addressTextInside}> {selectedUser.phone}</Text>
            <Text style={styles.addressTextInside}> {selectedUser.location.country} , {selectedUser.location.province} , {selectedUser.location.district} , {selectedUser.location.sector} </Text>
                
    <View style={styles.action}>
        <Button
          color={Colors.primary}
          title="Message"
        //   onPress={() => {
        //     dispatch(cartActions.addToCart(selectedProduct));
        //   }}
        /> 
        <Button
          color={Colors.primary}
          title="Posts"
        //   onPress={() => {
        //     dispatch(cartActions.addToCart(selectedProduct));
        //   }}
        />  
    </View>
        </View>
        
        <View style={styles.motorView}>
                <Text style={styles.motor}> " {selectedUser.motor} " </Text>
            </View>

        <View style={styles.allDetails}>
            
            <Text style={styles.addressTitle}> Skills: </Text>
            <Text style={styles.addressBody}> {selectedUser.skill.categoryId} </Text>
            
            <Text style={styles.addressTitle}> Description: </Text>
            <Text style={styles.addressBody}> {selectedUser.description} </Text>
            
            <Text style={styles.addressTitle}> Portfolio: </Text>
            <Text style={styles.addressBody}> {selectedUser.portfolio} </Text>
            
        </View>

        </View>
    </ScrollView>

   
    );
}
export default userChatDetailScreen;


const styles= StyleSheet.create({

    allDetails:{
        alignItems:'flex-start',
        width:'100%',
        height:300,
        paddingLeft:10
    },
    container:{
        flex: 1, alignItems: "center"
    },
    image:{
        width:'100%',
        height:'100%',
        opacity:0.6
    },
    profile:{
        borderRadius:100,
        height:'100%',
        width:'100%',
        
    },

    imageContainer:{
        height:80,
        width:'100%',
        borderBottomColor:Colors.primary,
        borderBottomWidth:2
        
              
    },
    action:{
        flexDirection:'row',
        justifyContent:'space-around',
        backgroundColor:'#fafafa',
        width:'100%',
        
        borderBottomWidth:2,
        borderBottomColor:'#888',
        borderBottomEndRadius:10,
        borderBottomStartRadius:10
    
      },
    profileContainer:{
        marginTop:-40,
        height:100,
        backgroundColor:Colors.primary,
        width:100,
        borderRadius:100,
        paddingTop:3,
        alignItems:'center',
        

    },
    addressText:{
        fontFamily: 'open-sans-bold',
        fontSize: 16,
    },
    addressTitle:{
        fontFamily: 'open-sans-bold',
        fontSize: 16,
        paddingTop:5
    },
    addressBody:{
        paddingLeft:30,
        paddingTop:10
    },
    addressTextTitle:{
        fontFamily: 'open-sans',
        fontSize: 16,
    },
    addressTextInside:{
        marginTop:3,
        fontFamily: 'open-sans',
        fontSize: 14,
        color:'#888'
    },
    motor:{
        paddingTop: 5,
        fontFamily: 'open-sans-bold',
        fontSize: 12,
        color: Colors.primary,
    },
    address:{
        alignItems:'center',
        height:150,
        width:'100%',
    },
    motorView:{
        alignItems:'center',
    }

});