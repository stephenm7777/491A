import React, { useState } from 'react';
import { Pressable, View, StyleSheet, ImageBackground, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import {router} from "expo-router";

const backgroundImage = require('../assets/images/png/010c80.png');

export default function Page() {
  const [fontsLoaded] = useFonts({
    'Cabin Condensed': require('../assets/fonts/Cabin Condensed.ttf'),
  });
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => { 
    // Implement your login logic here
    // TEMPORARY TEMPORARY TEMPORARY
    router.push({
      pathname: "/users/chatPage",
    })
    // TEMPORARY TEMPORARY TEMPORARY
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} resizeMode='cover' style={styles.image}>
        {/* Logo */}
        <Image style={styles.tinyLogo} source={require('../assets/images/splash1.png')} />
        {/* Text next to logo */}
        <Text style={styles.logoFont}>Chatterbox</Text>
        <Text style={styles.account}>Login into your account</Text>

        {/* This section is for user input*/}
        <View style={styles.inputSection}>
          <TextInput 
            style={styles.input}
            placeholder='Email'
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          {/* Link for registration with added margin */}
          <Pressable 
            onPress={() => 
              router.push({
                pathname: "/users/register",
              })}>
                <Text style ={styles.fontID}>Don't have an account?<Text style={styles.registerLink}> Register</Text></Text>
          </Pressable>

          <Pressable 
            onPress={() => 
              router.push({
                pathname: "/users/forgotPassword",
              })}>
                <Text style={styles.registerLink}>Forgot Password?</Text>
          </Pressable>

        </View>
      </ImageBackground>
      <Text style={styles.logo}>© 2024 ChatterBox. All Rights Reserved.</Text>
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
  account: {
    fontFamily: 'Cabin Condensed', 
    position: 'absolute', 
    color: 'white', 
    fontSize: 35, 
    top: 150,
    left: 30, 
    width: 180,
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
