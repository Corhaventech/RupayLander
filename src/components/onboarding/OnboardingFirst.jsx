//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Image, ImageBackground, Pressable } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider'; 
import bgImg from '../../assets/img/bg-gradient-linear-new.png'
import AntDesign from "react-native-vector-icons/AntDesign"


// create a component
const OnboardingFirst = ({ navigation }) => {

    
const slides = [
    {
        key: 1, 
        title: 'Who can earn with us!',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. it to make a type specimen book.',
        image: require('../../assets/onboarding-image/bsach-image.png'),  
    },
    {
        key: 2, 
        title: 'Work any where! ',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. it to make a type specimen book.',
        image: require('../../assets/onboarding-image/Work-any-where.png'), 
    },
    {
        key: 3, 
        title: 'Earn Money with sell finance product! ',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. it to make a type specimen book.',
        image: require('../../assets/onboarding-image/Earn-Money-finance.png'), 
    },
];


    // this.state = {
    //     showRealApp: false,
    // };

    _renderItem = ({ item }) => {
        return (
            <ImageBackground source={bgImg} style={styles.backggroundContainer}>
                <View style={styles.container}>
                    <View style={styles.bgcolor} >
                        <View style={{position:'relative', top:'-10%'}}> 
                            <Image source={item.image} style={styles.cryptoimage} /> 
                        </View>
                    </View>
                    <View style={styles.viewrow}>
                        <View> 
                            <Text style={styles.cryptoname}>{item.title}</Text>
                        </View>
                        <View>
                            <Text style={styles.discaptext}>{item.text}</Text>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        );
    };
    _onDone = () => {
        // User finished the introduction. Show real app through
        // navigation or simply by controlling state
        navigation.navigate('choose')
      };

    // _renderPrevButton = () => {
    //     return (
    //         <Pressable style={styles.preButton}>
    //             <Text style={styles.preText}>PRE</Text>
    //         </Pressable>
    //     );
    // };
    
    _renderNextButton = () => {
        return (
            <View style={[styles.nextButton, {width:'100%', height:'auto', flex:1, alignItems:'center', justifyContent:'center'}]}>
                <AntDesign name="arrowright" size={25} color="#fff" />
            </View>
        );
    };

    _renderDoneButton = () => {
        return (
            <Pressable style={styles.nextButton} onPress={() => navigation.navigate("login screen")}>
                <Text style={styles.preText}>Continue</Text>
            </Pressable>
        );
    };

    return (
        <AppIntroSlider
            renderItem={_renderItem}
            data={slides}
            onDone={_onDone}
            renderDoneButton={_renderDoneButton}
            renderNextButton={_renderNextButton}
            // renderPrevButton={_renderPrevButton}
            // renderSkipButton={_renderSkipButton}
            // showPrevButton
            // showSkipButton
            showNextButton
            showDoneButton
            dotStyle={{ position: 'relative',left:-120, top: '-8%', backgroundColor: '#3B3935' }}
            activeDotStyle={{
                position: 'relative',
                top: '-8%',
                left:-120,
                backgroundColor: '#F89D28',
                width: 35,
                height: 10,
                borderRadius: 100,
            }}
        />
    );
};

// define your styles

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //   backgroundColor: '#1A1532', 
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        position:'relative'
    },
    backggroundContainer: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
        position:'relative',
        width:'100%'
        
    },
    cryptoimage: {
        width: 500,
        height: 400,
        resizeMode: 'contain'
    }, 
    viewrow: {
        padding: 15,
        position:'relative',
        top:'-5%'
    }, 
    cryptoname: {
        textAlign: 'center',
        fontSize: 20,
        color: '#3B3935',
        fontWeight: '700',
        letterSpacing: 0.5,
        paddingVertical: 25
    },
    discaptext: {
        textAlign: 'center',
        fontSize: 15,
        color: '#888888',
        fontWeight: '400',
        lineHeight: 25
    },
    // preButton: {
    //     backgroundColor: '#00589B',
    //     paddingHorizontal: 20,
    //     paddingVertical: 15,
    //     borderRadius: 100, 
    //     width: 160,
    // },
    nextButton: {
        backgroundColor: '#F89D28',
        paddingHorizontal: 20,
        paddingVertical: 12,
        borderRadius: 100, 
        width: 160,
        position:'relative',
        top:-30
    },
    preText: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: '400',
        fontSize: 18,
    },
     
});

//make this component available to the app
export default OnboardingFirst;
