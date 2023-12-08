import { StyleSheet, Text, View, ImageBackground, ScrollView } from 'react-native'
import React from 'react'
import bgImg from '../../../assets/img/bg-gradient-linear-new.png'
import Entypo from 'react-native-vector-icons/Entypo'

const FAQsDetail = () => {
    return (
        <ImageBackground source={bgImg} style={styles.backggroundContainer}>
            <ScrollView showsVerticalScrollIndicator={false} style={{paddingTop:10}}>
                <View style={styles.landerDetailTextContainer}>
                    <Text style={styles.heading}>Q. What is  Rupay  Lender?</Text>
                    <Text style={styles.discHeading}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</Text>
                </View> 
                <View style={styles.landerDetailTextContainer}>
                    <Text style={styles.heading}>Q. What is  Rupay  Lender?</Text>
                    <Text style={styles.discHeading}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</Text>
                </View> 
                <View style={styles.landerDetailTextContainer}>
                    <Text style={styles.heading}>Q. What is  Rupay  Lender?</Text>
                    <Text style={styles.discHeading}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</Text>
                </View> 
                <View style={styles.landerDetailTextContainer}>
                    <Text style={styles.heading}>Q. What is  Rupay  Lender?</Text>
                    <Text style={styles.discHeading}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</Text>
                </View> 
                <View style={styles.landerDetailTextContainer}>
                    <Text style={styles.heading}>Q. What is  Rupay  Lender?</Text>
                    <Text style={styles.discHeading}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</Text>
                </View> 
                <View style={styles.landerDetailTextContainer}>
                    <Text style={styles.heading}>Q. What is  Rupay  Lender?</Text>
                    <Text style={styles.discHeading}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</Text>
                </View> 
            </ScrollView>
        </ImageBackground>
    )
}

export default FAQsDetail

const styles = StyleSheet.create({
    backggroundContainer: {
        flex: 1,
        resizeMode: 'repeat',
        paddingHorizontal: 15,
        paddingBottom: 20
    },
    landerDetailTextContainer:{
        paddingBottom:15
    },
    heading:{
        fontSize:14,
        color:'#F89D28',
        fontFamily:'Nexa Bold',
        fontWeight:'700',
        lineHeight:24
    },
    discHeading:{
        fontSize:12,
        color:'#888888',
        lineHeight:18,
        fontFamily:'Nexa Bold',
    }
})