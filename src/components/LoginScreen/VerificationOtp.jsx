//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar, Image, ImageBackground, Pressable, TextInput } from 'react-native';
import logo from '../../assets/logo/Rupay-Lender-logo.png'
import bgImg from '../../assets/img/bg-gradient-linear-new.png'
import OtpInputs from 'react-native-otp-inputs';
import AntDesign from 'react-native-vector-icons/AntDesign'

// create a component
const VerificationOtp = ({ navigation }) => {
    return (
        <ImageBackground source={bgImg} style={styles.backggroundContainer}>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />
            <View style={styles.container}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Pressable style={styles.lenderLogo}>
                        <Image source={logo} style={styles.logo} />
                    </Pressable>
                    <View style={{ alignItems: 'flex-start' }}>
                        <Text style={styles.mainHeading}>Detecting OTP</Text>
                        <Text style={[styles.subTitle, { paddingTop: 10, paddingBottom: 20 }]}>Enter the 4 digit <Text style={{ color: '#00589B', fontWeight: '600', fontSize: 20 }}> verification code</Text> sent to your phone..</Text>
                    </View>
                    <View style={styles.PhoneNumberContainer}>
                        <View>
                            <Text style={{ fontWeight: '500', fontSize: 16, color: '#141516' }}>Verification code </Text>
                        </View>
                        <View style={{ alignItems: 'center', justifyContent: 'center', gap: 10, flexDirection: 'row', paddingVertical: 20 }}>
                            <OtpInputs
                                // handleChange={(code) => console.log(code)}
                                numberOfInputs={4}
                                placeholder='*'
                                placeholderTextColor={"#00589B"}
                                paddingHorizontal={15}
                                textAlign='center'
                                borderRadius={5}
                                borderWidth={1}
                                borderColor="#00589B"
                                fontSize={20}
                                color="#00589B"
                                fontWeight="600"
                            />
                        </View>

                        <View>
                            <Pressable>
                                <Text style={{color:'#00589B', fontSize:18}}><AntDesign name="reload1" size={20} color="#00589B" /> Resend Code </Text>
                            </Pressable>
                        </View>

                        <View style={{ paddingVertical: 20 }}>
                            <Pressable style={styles.sendOTPContainer} onPress={() => navigation.navigate("Basic Profile Information")}>
                                <Text style={{ color: '#fff', fontSize: 17, fontWeight: '600' }}>Send OTP</Text>
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
    subTitle: {
        lineHeight: 25,
        color: "#232323",
        fontSize: 15,
        fontWeight: "400"
    },
    PhoneNumberContainer: {
        paddingVertical: 20,
        width: '100%'
    },
    inputNumber: {
        borderRadius: 12,
        borderColor: '#3B3935',
        borderWidth: 1,
        paddingHorizontal: 15,
        marginVertical: 10,
        fontSize: 18,
        fontWeight: '500',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    sendOTPContainer: {
        width: '100%',
        backgroundColor: '#F89D28',
        paddingVertical: 15,
        paddingHorizontal: 20,
        textAlign: 'center',
        alignItems: 'center',
        borderRadius: 100,
    }
});


//make this component available to the app
export default VerificationOtp;
