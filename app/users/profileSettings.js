import React, { useState } from 'react';
import { Pressable, View, StyleSheet, ImageBackground, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import {router, useNavigation } from "expo-router";

function profileSettings() {

  const tempViewVisitor = () => {
    router.push({
      pathname: 'users/visiter_pfp',
    })
  }
  
  const navigate = useNavigation();
   

  return (
    <View style={styles.container}> 
      <Pressable style={styles.backArrowHitBox}
                onPress={() => {navigate.goBack()}}>
        <Image style={styles.backArrow} source={require('../../assets/images/png/backArrow.png')} />
      </Pressable>


       {/*Settings text*/}
      <Text style={styles.Stext}>Settings</Text>

      <View style={styles.options}>
        <Pressable onPress={tempViewVisitor}>
          <Text style={styles.optionsItem}>Account (links to visitor_pfp)</Text>
        </Pressable>

        {/*Privacy*/}
        <Text style={styles.optionsItem}>Privacy</Text>

        {/*Notifications*/}
        <Text style={styles.optionsItem}>Notifications</Text>
      </View>
      {/*Account*/}
        


  


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
      fontFamily: 'Cabin Condensed',
      fontWeight: 'bold',
      position: 'absolute',
      top: '2%', 
      // left: 160,
      fontSize: 22,
      borderBottomColor: 'white',
      borderBottomWidth: 2,
      width: '100%',
      height: '6%',
      textAlign: 'center',
      // paddingTop: '2%',
  },

  // line: {
  //   width: '100%', 
  //   borderBottomColor: '#FFF', 
  //   borderBottomWidth: 2, 
  //   top: -320, 
  //   marginTop: '10%',
  // },

  options: {
    marginTop: '10%',
    height: '90%',
    width: '100%',
  },


  optionsItem: {
    color: '#F8FAFC',
    fontFamily: 'Cabin Condensed',
    fontWeight: 'bold',
    position: 'relative',
    paddingTop: '3%',
    // top: 70, 
    // left:30,
    fontSize: 22,
    paddingBottom: '3%',
    paddingLeft: '10%',
    borderBottomColor: 'white',
    borderBottomWidth: 3,
    width: '100%',
},   

Privacy: {
  color: '#F8FAFC',
  fontFamily: 'Cabin Condensed',
  fontWeight: 'bold',
  position: 'absolute',
  top: 120, 
  left: 30,
  fontSize: 22,
  
},

Notifications: {
  color: '#F8FAFC',
  fontFamily: 'Cabin Condensed',
  fontWeight: 'bold',
  position: 'absolute',
  top: 170, 
  left: 30,
  fontSize: 22,
},

backArrowHitBox: {
  width: 50,
  height: 50,
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  top: 5,
  right: 5,
  zIndex: 1,
},

backArrow: {
  tintColor: 'white',
  width: 35,
  height: 35,
}

    

   
 });

export default profileSettings;