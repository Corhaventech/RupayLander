//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar, Image, ImageBackground, Pressable, TextInput } from 'react-native';
import logo from '../../assets/logo/Rupay-Lender-logo.png'
import bgImg from '../../assets/img/bg-gradient-linear-new.png'


// create a component 
const Login = ({ navigation }) => {
    return (
        <ImageBackground source={bgImg} style={styles.backggroundContainer}>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />
            <View style={styles.container}>
                <View style={{ flex: 1, alignItems:'center', justifyContent:'center' }}>
                    <Pressable style={styles.lenderLogo}>
                        <Image source={logo} style={styles.logo} />
                    </Pressable>
                    <View style={{ alignItems: 'flex-start' }}>
                        <Text style={styles.mainHeading}>Verify your Mobile</Text>
                        <Text style={[styles.subTitle, {paddingTop:10, paddingBottom:20}]}>Enter your <Text style={{color:'#F89D28', fontWeight:'600', fontSize:20}}>phone number</Text> below.</Text>
                        <Text style={styles.subTitle}>We will send a 4 digit verification code to verify your phone number.</Text>
                    </View>
                    <View style={styles.PhoneNumberContainer}>
                        <View>
                            <Text style={{fontWeight:'500', fontSize:16, color:'#141516'}}>Phone Number</Text>
                        </View>
                        <View>
                            <TextInput keyboardType={'phone-pad'} placeholder='+91-' style={styles.inputNumber} />
                        </View>
                        <View style={{paddingVertical:15}}>
                             {/*<Pressable style={styles.sendOTPContainer} onPress={() => navigation.navigate("verification otp")}>
                                <Text style={{color:'#fff', fontSize:17, fontWeight:'600'}}>Send OTP</Text>
                            </Pressable> */}
                            <Pressable style={styles.sendOTPContainer} onPress={() => navigation.navigate("homes")}>
                                <Text style={{color:'#fff', fontSize:17, fontWeight:'600'}}>Send OTP</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>

            </View>
        </ImageBackground>
    );
};

// define your styles
const styles = StyleSheet.create({
    backggroundContainer: {
        flex: 1,
        resizeMode: 'repeat',
        alignItems: 'center',
        justifyContent: 'center'
    },
    container: {
        flex: 1, 
        position: 'relative',
        paddingHorizontal: 15,
        width: '100%'
    },
    lenderLogo: {
        paddingVertical: 20
    },
    logo: {
        width: 150,
        height: 150,
        resizeMode: 'contain'
    },
    mainHeading: {
        color: '#3B3935',
        fontWeight: '700',
        fontSize: 30,
        fontFamily: 'Nexa Bold', 
        alignItems: 'flex-start'
    },
    subTitle:{
        lineHeight:25,
        color:"#232323",
        fontSize:15,
        fontWeight:"400"
    },
    PhoneNumberContainer:{
        paddingVertical:20,
        width:'100%'
    },
    inputNumber:{
        width:'100%',
        borderRadius:12,
        borderColor:'#3B3935',
        borderWidth:1,
        paddingHorizontal:15,
        marginVertical:10,
        fontSize:15,
        fontWeight:'500'
    },
    sendOTPContainer:{
        width:'100%',
        backgroundColor:'#F89D28',
        paddingVertical:15,
        paddingHorizontal:20,
        textAlign:'center',
        alignItems:'center',
        borderRadius:100,
    }
});

//make this component available to the app
export default Login;
