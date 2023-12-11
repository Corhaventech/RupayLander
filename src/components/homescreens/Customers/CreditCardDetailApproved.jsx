import { ImageBackground, SafeAreaView, StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import bgImg from "../../../assets/img/bg-gradient-linear-new.png"; 
import bgImg1 from "../../../assets/img/black-gradient.png"; 
import bgImg2 from "../../../assets/img/GroupwhiteLines.png"; 
import dollIcons from '../../../assets/icons/Revenue.png'
import cardIcons from '../../../assets/icons/dones.png'

const CreditCardDetailApproved = () => {
    return (
        <SafeAreaView style={styles.SafeAreaViewContainer}>
            <ImageBackground source={bgImg} style={styles.backggroundContainer}>
                <ScrollView showsVerticalScrollIndicator={false}> 
                    <View style={[styles.flexDirection, {justifyContent:'space-between'}]}>
                        <ImageBackground source={bgImg1} resizeMode='cover' style={styles.Earnings}>
                            <Image source={dollIcons} style={{ width: 25, height: 25 }} resizeMode='contain' alt='img' />
                            <Text style={styles.amount}>₹400</Text>
                            <Text style={styles.totles}>Earnings</Text>
                        </ImageBackground>
                        <ImageBackground source={bgImg2} resizeMode='cover' style={[styles.Earnings, { backgroundColor: '#00589B' }]}>
                            <Image source={cardIcons} style={{ width: 25, height: 25 }} resizeMode='contain' alt='img' />
                            <Text style={styles.amount}>Approved</Text>
                            <Text style={styles.totles}>Status</Text>
                        </ImageBackground>
                    </View> 
                    <View>
                        <Text style={styles.title}>Card Name: <Text style={{color:'#888888'}}>HDFC Bank card</Text> </Text>
                        <Text style={styles.title}>Name: <Text style={{color:'#888888'}}>DIZI</Text> </Text>
                        <Text style={styles.title}>Mobile: <Text style={{color:'#888888'}}>258456325</Text> </Text>
                        <Text style={styles.title}>Email ID: <Text style={{color:'#888888'}}>digisevan52@gmail.com</Text> </Text>
                        <Text style={styles.title}>Age: <Text style={{color:'#888888'}}>23</Text> </Text>
                        <Text style={styles.title}>Pin code: <Text style={{color:'#888888'}}>258965</Text> </Text>
                        <Text style={styles.title}>Employment: <Text style={{color:'#888888'}}>Self employed</Text> </Text>
                        <Text style={styles.title}>Do you have Credit card: <Text style={{color:'#888888'}}>No</Text> </Text>
                    </View>
                </ScrollView>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default CreditCardDetailApproved

const styles = StyleSheet.create({ 
    SafeAreaViewContainer: {
        flex: 1
    },
    backggroundContainer: {
        flex: 1,
        resizeMode: "cover",
        paddingHorizontal: 10,
        paddingTop:5
    },
    flexDirection:{
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
    },
    Earnings: {
        width: '48%',
        backgroundColor: '#3B3935',
        padding: 10,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        overflow:'hidden',
    },
    amount: {
        color: '#fff',
        fontSize: 17,
        fontWeight: '600',
        marginVertical: 5
    },
    totles: {
        color: '#fff',
        fontWeight: '500',
        fontSize: 12
    },
    title:{
        color:'#3B3935',
        fontSize:15,
        fontWeight:'500',
        marginVertical:5,
        lineHeight:22
    },

})