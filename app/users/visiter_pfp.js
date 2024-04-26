import React, { useState } from 'react';
import { Pressable, View, StyleSheet, ImageBackground, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';

function Visitor_pfp() {
  return (
    <View style={styles.container}>


        {/*Profile picture */}
        <Image
            source= {require('/Users/danielpalacio/Downloads/School/491A/assets/images/profile/profile-pic-holder.webp')}
            style={styles.profilePicture}
        />

        {/*Profile banner */}
        <Image
            source={require('/Users/danielpalacio/Downloads/School/491A/assets/images/profile/profile-banner-placeholder.png')}
            style={styles.profileBanner}
        />

        {/*Username*/}
        <Text style={styles.profileUsername}>@profile-username</Text>


         {/* Add Contact button*/}
        <View style = {styles.buttonContainer}>
        <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonText}>+ ADD CONTACT</Text>
          </TouchableOpacity>
        </View>

        {/* Request Message button*/}
        <View style = {styles.buttonContainer}>
        <TouchableOpacity style={styles.requestButton}>
            <Text style={styles.requestButtonText}>REQUEST MESSAGE</Text>
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
        fontFamily: '/Users/danielpalacio/Downloads/School/491A/assets/fonts/Cabin Condensed.ttf',
        fontWeight: 'bold',
        position: 'absolute',
        top: 310, 
        
    },


    addButton:{
        position: 'absolute',
        backgroundColor: 'white',
        paddingVertical:10,
        paddingHorizontal: 10,
        borderRadius: 5,
        right: 20,
        bottom: 0,
    },

    addButtonText:{
        color: 'black',
        fontFamily: 'CabinCondensed-Regular',
        fontWeight: 'bold',
        fontSize: 18,

    },

    requestButton:{
        position: 'absolute',
        backgroundColor: 'white',
        paddingVertical:10,
        paddingHorizontal: 10,
        borderRadius: 5,
        left: -7,
        bottom: 0,
    },

    requestButtonText:{
        color: 'black',
        fontFamily: 'CabinCondensed-Regular',
        fontWeight: 'bold',
        fontSize: 18,

    },

    

   
 })

export default Visitor_pfp;