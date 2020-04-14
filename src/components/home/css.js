import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import color from '../../constants/colors'
const styles = StyleSheet.create({
  container: {
      padding:20,
      flex: 1,
      backgroundColor: color.primary,
      alignItems: "center",
      justifyContent: "center"
  },
  input:{
      paddingLeft:20,
      borderRadius:50,
      height: 40,
      fontSize:25,
      backgroundColor:'white',
      borderWidth:1,
      marginBottom: 20,
      color:'#34495e'
       
  },
  inputlocal: {
    paddingLeft: 20,
    height: 35,
    fontSize: 25,
    backgroundColor: 'white',
    marginBottom: 15,
    color: '#34495e',
    paddingHorizontal: 2,
    paddingVertical: 5,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    borderRadius:20

  },
    buttonContainer:{
        height:50,
        marginTop:20,
        marginBottom:20,
        borderRadius:50,
        backgroundColor:color.btnbgcolor,
        paddingVertical:10,
        justifyContent:'center',
        width:250
    },
    buttonText:{
        textAlign:'center',
        color:'#ecf0f1',
        fontSize:20
  },
  welcome:{
    fontSize:40,
    color:color.secondary,
    marginBottom:10,
    
  },
  welcometext: {
    fontSize: 20,
    color: color.secondary,
    textAlign:"center"
  },
  card: {
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    flex: 1,
    backgroundColor: color.primary,
    alignItems: "center",
    justifyContent: "center",
    width: '90%',
    padding: 10
  },
  homecard: {
    flex: 1,
    backgroundColor: color.homeback,
    alignItems: "center",
    justifyContent: "center",
    width: '99%',
    padding: 10
  },
  btnStart:{
    backgroundColor: color.primary,
    borderRadius:18,
    padding: 4,
    shadowRadius:20,
    shadowOpacity:0.5,
    marginTop:20,
    color:color.btnbgcolor


  }
});
export default styles;