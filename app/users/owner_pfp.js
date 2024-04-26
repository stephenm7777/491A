import React, { useState } from 'react';
import { Pressable, View, StyleSheet, ImageBackground, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import {router, useNavigation } from "expo-router";

function owner_pfp() {

    const navigation = useNavigation();

    const goToSettingsPage = () => {
        router.push({
            pathname: 'users/profileSettings',
        })
    }

    const goToEditProfilePage = () => {
        router.push({
            pathname: 'users/edit_profile',
        })
    }
    const navigate = useNavigation();
    
    

  return (
    <View style={styles.container}>

        {/*Settings and privacy Button */}
        <TouchableOpacity style={styles.SettingsIcon} onPress={goToSettingsPage}>
        <Image
            source= {require('../../assets/images/png/settings-icon.webp')}
            style={styles.SettingsIcon}
        />
        </TouchableOpacity>

        {/*Profile picture */}
        <Image
            source= {require('../../assets/images/png/profile-pic-holder.webp')}
            style={styles.profilePicture}
        /> 

        {/*Profile banner */}
        <Image
            source={require('../../assets/images/png/profile-banner-placeholder.png')}
            style={styles.profileBanner}
        />
        <Pressable style={styles.backArrowHitBox}
                onPress={() => {navigate.goBack()}}>
            <Image style={styles.backArrow} source={require('../../assets/images/png/backArrow.png')} />
        </Pressable>

        {/*Username*/}
        <Text style={styles.profileUsername}>@profile-username</Text>

 
         {/* Edit Profile button*/}
        
        <View style = {styles.buttonContainer} >
        <TouchableOpacity style={styles.editProfileButton} onPress={goToEditProfilePage}>
            <Text style={styles.editProfileButtonText}>EDIT PROFILE</Text>
          </TouchableOpacity>
        </View> 

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


    SettingsIcon: {
        position: 'absolute',
        width:40,
        height: 40,
        top: '1%',
        left:5,
        zIndex:2,
        tintColor: '#F8FAFC',
        // color: "black",
    },

    profilePicture: {
        position: 'absolute',
        width: 100, 
        height: 100,
        top: 200,
        borderRadius: 50,
        backgroundColor: 'fff',
        borderWidth: 2,
        borderColor: 'white',
        padding: 5,
        zIndex: 1,
    },

    profileBanner: {
        position: 'absolute',
        borderRadius: 10,
        width: '85%',
        height: 200,
        top: 50,
        borderWidth: 2,
        borderColor: 'white',
        zIndex: 0,
    },
    
    profileUsername: {
        color: '#F8FAFC',
        fontFamily: 'Cabin Condensed',
        fontWeight: 'bold',
        position: 'absolute',
        top: 310, 
        
    },


    editProfileButton:{
        position: 'absolute',
        backgroundColor: 'white',
        paddingVertical:8,
        paddingHorizontal: 15,
        borderRadius: 5,
        alignSelf: 'center',
        bottom: 0,
    },

    editProfileButtonText:{
        color: 'black',
        fontFamily: 'CabinCondensed-Regular',
        fontWeight: 'bold',
        fontSize: 18,

    },
    
    backArrowHitBox: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 5,
        right: 5,
    },
     
    backArrow: {
        tintColor: 'white',
        width: 35,
        height: 35,
    }

   
 })

export default owner_pfp;