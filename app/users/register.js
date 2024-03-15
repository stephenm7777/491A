import React, { useState } from 'react';
import { Pressable, View, StyleSheet, ImageBackground, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import { useNavigation } from "expo-router";


const backgroundImage = require('../../assets/images/png/010c80.png');


export default function Register() {
    const navigate = useNavigation();
    const [fontsLoaded] = useFonts({
      'Cabin Condensed': require('../../assets/fonts/Cabin Condensed.ttf'),
    });
    const [first_name, setFName] = useState('');
    const [last_name, setLName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [password, setPassword] = useState('');
    const [c_password, setCPassword] = useState('');
  
    const handleRegister = () => { 
      // Create account logic
    }

    const validatePassword = () => {
        // Check password logic
        if(password === c_password) {
          console.log("Kis ekht al manyake b ayre")
        }
    }

    return (
        <View style={styles.container}> 
            <ImageBackground source={backgroundImage} resizeMode='cover' style={styles.image}>
              {/* Logo */}
              <Image style={styles.tinyLogo} source={require('../../assets/images/splash1.png')} />
              { /* Text */}
              <Text style={styles.logoFont}>ChatterBox</Text>
              <Text style={styles.account}>Register</Text>
              <Pressable style={styles.backArrowHitBox}
                onPress={() => {navigate.goBack()}}>
                <Image style={styles.backArrow} source={require('../../assets/images/png/backArrow.png')} />
              </Pressable>
              
              
              

              {/* User Input */}
              <View style={styles.inputSection}>
                <TextInput
                  style={styles.input}
                  placeholder='First Name'
                  value={first_name}
                  onChangeText={setFName}
                />
                <TextInput
                  style={styles.input}
                  placeholder='Last Name'
                  value={last_name}
                  onChangeText={setLName}
                />
                <TextInput
                  style={styles.input}
                  placeholder='Email'
                  value={email}
                  onChangeText={setEmail}
                />
                <TextInput
                  style={styles.input}
                  placeholder='Phone Number'
                  value={number}
                  onChangeText={setNumber}
                />
                <TextInput
                  style={styles.input}
                  placeholder='Password'
                  secureTextEntry
                  value={password}
                  onChangeText={setPassword}
                />
                <TextInput
                style={styles.input}
                placeholder='Confirm Password'
                secureTextEntry
                value={c_password}
                onChangeText={setCPassword}
                />
                <TouchableOpacity style={styles.loginButton} onPress={handleRegister}>
                  <Text style={styles.buttonText}>Register</Text>
                </TouchableOpacity>
                
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
    top: 35,
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
    top: 50, 
    left: 80, 
  },
  account: {
    fontFamily: 'Cabin Condensed', 
    position: 'absolute', 
    color: 'white', 
    fontSize: 35, 
    top: 100,
    left: 30, 
    width: 180,
  },

  inputSection: {
    width: '90%',
    height: '646',
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
    width: 35,
    height: 35,
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
    width: 50,
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