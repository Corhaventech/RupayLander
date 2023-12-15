import {ImageBackground, SafeAreaView, StyleSheet, Text} from 'react-native'
import React from 'react'
import bgImg from "../../../assets/img/bg-gradient-linear-new.png"; 

const ShortVideo = ({navigation}) => {
    return (
        <ImageBackground source={bgImg} style={styles.backggroundContainer}>
            <SafeAreaView style={styles.SafeAreaViewContainer}>
             <Text>Short Video</Text>
            </SafeAreaView> 
        </ImageBackground>
    )
}

export default ShortVideo

const styles = StyleSheet.create({
    backggroundContainer: {
        flex: 1,
        resizeMode: "cover",
        paddingHorizontal: 10, 
    },
    SafeAreaViewContainer: { 
        marginBottom:10
    },
     
})