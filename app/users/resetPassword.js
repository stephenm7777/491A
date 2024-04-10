import React, { useState } from 'react';
import { Pressable, View, StyleSheet, ImageBackground, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
// import {router} from "expo-router";
import { useNavigation } from "expo-router";
// import { useRouter } from 'expo-next-react-navigation';

const backgroundImage = require('../../assets/images/png/010c80.png');


export default function ResetPassword() {
    const navigate = useNavigation();
    const [fontsLoaded] = useFonts({
        'Cabin Condensed': require('../../assets/fonts/Cabin Condensed.ttf'),
    });
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleResetPassword = () => {
        // Logic to handle reset password
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={backgroundImage} resizeMode='cover' style={styles.image}>
                <Image style={styles.tinyLogo} source={require('../../assets/images/splash1.png')} />
                <Pressable                          // THIS TEMP BRINGS YOU TO RESET PASSWORD PAGE
                        onPress={() => {navigate.navigate('index')}}>
                            <Text style ={styles.fontID}>Don't have an account?<Text style={styles.registerLink}> Register</Text></Text>
                    </Pressable>
                <Text style={styles.logoFont}>ChatterBox</Text>
                <Text style={styles.title}>Reset Password</Text>

                <View style={styles.inputSection}>
                    <Text style={styles.instructions}>
                        Please enter your new password and confirm it below:
                    </Text>
                    <TextInput
                        style={styles.input}
                        placeholder='New Password'
                        secureTextEntry={true}
                        value={newPassword}
                        onChangeText={setNewPassword}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='Confirm New Password'
                        secureTextEntry={true}
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                    />
                    <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
                        <Text style={styles.buttonText}>Reset Password</Text>
                    </TouchableOpacity>
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
        color: 'black',
        marginBottom: 10,
        //textAlign: 'center',
    },
    inputSection: {
        width: '90%',
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
    button: {
        backgroundColor: '#010C80',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 25,
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
});
