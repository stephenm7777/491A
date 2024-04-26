import React, { useState } from 'react';
import { Pressable, View, StyleSheet, ImageBackground, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';
import {router} from "expo-router";

function profileSettings() {

   

  return (
    <View style={styles.container}> 


       {/*Settings text*/}
       <Text style={styles.Stext}>Settings</Text>

       {/* Horizontal line */}
       <View style={styles.line}></View>
       <View style={styles.line}></View>
 
        {/*Account*/}
        <Text style={styles.Account}>Account</Text>
        

        {/*Privacy*/}
        <Text style={styles.Privacy}>Privacy</Text>

        {/*Notifications*/}
        <Text style={styles.Notifications}>Notifications</Text>


  


</View>
  );  
}

 {/* Styling */}

 const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center', 
        backgroundColor: '#010C80',
    },

    Stext: {
      color: '#F8FAFC',
      fontFamily: '/Users/danielpalacio/Downloads/School/491A/assets/fonts/Cabin Condensed.ttf',
      fontWeight: 'bold',
      position: 'absolute',
      top: 15, 
      left: 160,
      fontSize: 22,
      
  },

  line: {
    width: '100%', 
    borderBottomColor: '#FFF', 
    borderBottomWidth: 1, 
    top: -320, 
  },



  Account: {
    color: '#F8FAFC',
    fontFamily: '/Users/danielpalacio/Downloads/School/491A/assets/fonts/Cabin Condensed.ttf',
    fontWeight: 'bold',
    position: 'absolute',
    top: 70, 
    left:30,
    fontSize: 22,
    width: '100%',
},   

Privacy: {
  color: '#F8FAFC',
  fontFamily: '/Users/danielpalacio/Downloads/School/491A/assets/fonts/Cabin Condensed.ttf',
  fontWeight: 'bold',
  position: 'absolute',
  top: 120, 
  left: 30,
  fontSize: 22,
  
},

Notifications: {
  color: '#F8FAFC',
  fontFamily: '/Users/danielpalacio/Downloads/School/491A/assets/fonts/Cabin Condensed.ttf',
  fontWeight: 'bold',
  position: 'absolute',
  top: 170, 
  left: 30,
  fontSize: 22,
},

    

   
 });

export default profileSettings;