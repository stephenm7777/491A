import React, { Children, useState } from 'react';
import { Pressable, ScrollView, View, StyleSheet, ImageBackground, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import {router} from "expo-router";


const backgroundImage = require('../../assets/images/png/010c80.png');

const searchContact = () => {
    // Find a contact
    alert('enta manyek')
}

const viewProfile = () => {
    // redirect to profile page
    // alert("t'aime le zizi")
    router.push({
      pathname: "/users/owner_pfp",
    })
}

const openContact = () => {
    // open messages 
    router.push({
        pathname: "/users/chatPage",
      })
}


export default function Contacts() {
  return (
    <View style={styles.container}>
        <ImageBackground source={backgroundImage} resizeMode='cover' style={styles.image}>
        <View style={styles.headerInfo}>
            <Text style={styles.title}>Messages</Text>
            <Pressable style={styles.profile} onPress={viewProfile}></Pressable>
            <Pressable style={styles.searchHitBox} onPress={searchContact}>
                <Image source={require('../../assets/images/png/search.png')} style={styles.search} />
            </Pressable>
            <Pressable style={styles.addHitBox} onPress={() => router.push({
                pathname: "/users/addContact",
              })}>
                <Image source={require('../../assets/images/png/plus.png')} style={styles.add} />
            </Pressable>
        </View>
        {/* Contacts */}
        <ScrollView style={styles.contactsCover}>
            <Pressable style={styles.contactDisplay} onPress={openContact}>
                <View style={styles.contactPhoto}></View>
                <Text style={styles.name}>John</Text>
                <Text style={styles.lastMessage}>I sent u my dick pls respond</Text>
                <Text style={styles.timestamp}>23:59 PM</Text>
            </Pressable>
            {/* More can be added, need logic for that*/}
        </ScrollView>
        </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    tinyLogo: {
      width: 150,
      height: 70,
      top: 55,
      left: -20,
      position: 'absolute',
    },
    logo: {
      fontFamily: 'Cabin Condensed',
      position: 'absolute', 
      color: 'white', 
      left: 85, 
      right: 0, 
      bottom: 10, 
    },
    logoFont: {
      fontFamily: 'Cabin Condensed',
      fontSize: 25,
      color: 'white',
      position: 'absolute',
      top: 70, 
      left: 80, 
    },
    title: {
      fontFamily: 'Cabin Condensed',
      textAlign: 'center',
      color: 'white', 
      fontSize: 35, 
      top: 25,
      width: 180,
    },
    headerInfo: {
        position: 'static',
        alignItems: 'center',
        height: '30%',
        width: '100%',
        zIndex: 2,
        borderBottomColor: 'white',
        borderBottomWidth: 1,
    },
    searchHitBox: {
        position: 'static',
        justifyContent: 'center',
        alignItems: 'center',
        right: 75,
        top: 50,
        height: 35,
        width: 35,
        zIndex: 3,
    },
    search: {
        tintColor: 'white',
        resizeMode: 'contain',
        height: 30,
        width: 30,
    },
    addHitBox: {
        position: 'static',
        justifyContent: 'center',
        alignItems: 'center',
        top: 15,
        right: 125,
        height: 35,
        width: 35,
        zIndex: 3,
    },
    add: {
        tintColor: 'white',
        height: 30,
        width: 30,
        resizeMode: 'contain',
    },
    profile: {
        bottom: 25,
        right: 135,
        height: 60,
        width: 60,
        position: 'static',
        borderRadius: 50,
        backgroundColor: 'white',
    },
    contactsCover: {
        height: '70%',
        width: '100%',
        zIndex: 0,
    },
    contactDisplay: {
        height: 100,
        width: '100%',
        zIndex: 1,
        borderBottomColor: 'white',
        borderBottomWidth: 1,
    },
    contactPhoto: {
        position: 'relative',
        top: 24,
        left: 20,
        height: 50,
        width: 50,
        backgroundColor: 'white',
        borderRadius: 50,
    },
    name: {
        position: 'relative',
        bottom: 30,
        left: 90,
        fontFamily: 'Cabin Condensed',
        fontSize: 26,
        color: 'white',
    },
    lastMessage: {
        position: 'relative',
        bottom: 30,
        left: 90,
        fontFamily: 'Cabin Condensed',
        fontSize: 16,
        color: 'grey',
    },
    timestamp: {
        position: 'relative',
        bottom: '75%',
        left: 295,
        fontFamily: 'Cabin Condensed',
        fontSize: 14,
        color: 'grey',
    },
    inputSection: {
      width: '90%',
      height: '36%',
      backgroundColor: 'white',
      padding: 20,
      borderRadius: 10,
      marginTop: 90,
    },
  
    input: {
      fontFamily: 'Cabin Condensed',
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 10,
      paddingLeft: 10,
      borderRadius: 5,
      marginTop: 10, 
      fontSize: 16, 
    },
  
    loginButton: {
      backgroundColor: '#010C80',
      padding: 10,
      borderRadius: 5,
      alignItems: 'center',
      marginTop: 25, 
      marginBottom: 5,
    },
    
    buttonText: {
      color: 'white',
      fontSize: 16,
      width: 40,
      fontFamily: 'Cabin Condensed',
    },
   
    registerLink: {
      fontFamily: 'Cabin Condensed',
      color: 'blue',
      fontSize: 16,
      marginTop: 10,
    },
  
    fontID: { 
      fontFamily: 'Cabin Condensed',
      fontSize: 16, 
    }
  });
