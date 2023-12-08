//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar, Image, ImageBackground, Pressable } from 'react-native';
import logo from '../../assets/logo/Rupay-Lender-logo.png'
import bgImg from '../../assets/img/bg-gradient-linear-new.png'

// create a component
const GetStarted = ({ navigation }) => {
    return ( 
        <ImageBackground source={bgImg} style={styles.backggroundContainer}>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />
            <View style={styles.container}>
                <Pressable style={styles.lenderLogo} onPress={() => navigation.navigate("onbording first")}>
                    <Image source={logo} style={styles.logo}  />
                </Pressable>
                <View>
                    <Text style={styles.mainHeading}>Rupay Lender</Text>
                </View>
            </View>
        </ImageBackground>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#fff',
        position: 'relative',
    },
    backggroundContainer: {
        flex: 1,
        resizeMode: 'repeat',
        justifyContent: 'center',
        alignItems: 'center',
    },
    lenderLogo:{
        paddingVertical:20
    },
    logo: {
        width: 150,
        height: 150,
        resizeMode: 'contain'
    },
    mainHeading: {
        color: '#3B3935',
        fontWeight: '700',
        fontSize: 24,
        fontFamily: 'Nexa Bold'
    },
});

//make this component available to the app
export default GetStarted;
