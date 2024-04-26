import React, { useState } from 'react';
import { Pressable, View, StyleSheet, ImageBackground, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import {router} from "expo-router";
import { useNavigation } from "expo-router";


const backgroundImage = require('../../assets/images/png/010c80.png');

export default function ForgotPassword() {
    const navigate = useNavigation();
    const [fontsLoaded] = useFonts({
        'Cabin Condensed': require('../../assets/fonts/Cabin Condensed.ttf'),
    });
    const [email, setEmail] = useState('');

    const handleForgotPassword = () => {
        // Logic to handle forgot password
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={backgroundImage} resizeMode='cover' style={styles.image}>
                <Image style={styles.tinyLogo} source={require('../../assets/images/splash1.png')} />
                <Text style={styles.logoFont}>ChatterBox</Text>
                <Pressable style={styles.backArrowHitBox}
                    onPress={() => {navigate.goBack()}}>
                    <Image style={styles.backArrow} source={require('../../assets/images/png/backArrow.png')} />
                </Pressable>

                <Text style={styles.title}>Forgot Password</Text>


                <View style={styles.inputSection}>
                    <Text style={styles.instructions}>
                        Please enter the email associated with your account below:
                    </Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Email'
                        value={email}
                        onChangeText={setEmail}
                    />
                    <TouchableOpacity style={styles.button} onPress={handleForgotPassword}>
                        <Text style={styles.buttonText}>Reset Password</Text>
                    </TouchableOpacity>
                    <Pressable                          // THIS TEMP BRINGS YOU TO RESET PASSWORD PAGE
                        onPress={() => 
                        router.push({
                            pathname: "/users/resetPassword",
                        })}>
                            <Text style={styles.fontID}>Don't have an account?<Text style={styles.registerLink}> Register</Text></Text>
                    </Pressable>
                </View>
            </ImageBackground>
            <Text style={styles.footer}>© 2024 ChatterBox. All Rights Reserved.</Text>
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
        top: 35,
        left: -20,
        position: 'absolute',
    },
    logoFont: {
        fontFamily: 'Cabin Condensed',
        fontSize: 25,
        color: 'white',
        position: 'absolute',
        top: 50,
        left: 80,
    },
    title: {
        fontFamily: 'Cabin Condensed',
        fontSize: 35,
        color: 'white',
        position: 'absolute',
        top: 100,
        left: 30,
        width: 250,        
    },
    instructions: {
        fontFamily: 'Cabin Condensed',
        fontSize: 16,
    },
    inputSection: {
        fontFamily: 'Cabin Condensed',
        width: '90%',
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
    },
    input: {
        fontFamily: 'Cabin Condensed',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 0,
        paddingLeft: 10,
        borderRadius: 5,
        marginTop: 15,
        fontSize: 16,
    },
    button: {
        backgroundColor: '#010C80',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontFamily: 'Cabin Condensed',
    },
    footer: {
        fontFamily: 'Cabin Condensed',
        position: 'absolute',
        color: 'white',
        left: 85,
        right: 0,
        bottom: 10,
    },
    fontID: { 
        fontFamily: 'Cabin Condensed',
        fontSize: 16, 
    }, 
    registerLink: {
        fontFamily: 'Cabin Condensed',
        color: 'blue',
        fontSize: 16,
        marginTop: 10,
    },
    backArrowHitBox: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 45,
        right: 20,
      },
     
      backArrow: {
        tintColor: 'white',
        width: 35,
        height: 35,
      },
});
