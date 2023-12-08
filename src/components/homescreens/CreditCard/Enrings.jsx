import { StyleSheet, Text, View, ImageBackground, Image, Pressable, SafeAreaView, } from 'react-native'
import React, { useState } from 'react'
import bgImg from "../../../assets/img/bg-gradient-linear-new.png";
import dollIcons from '../../../assets/icons/Revenue.png'
import cardIcons from '../../../assets/icons/Product.png'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { CheckBox, Slider } from "@rneui/themed";


const Enrings = ({navigation}) => { 
    const [selectedIndex, setIndex] = useState(0);
    return (
        <ImageBackground source={bgImg} style={styles.backggroundContainer}>
            <SafeAreaView style={{flex:1}}>
                <View style={{flex:1}}>
                    <View style={styles.flexDirection}>
                        <Pressable style={styles.Earnings}>
                            <Image source={dollIcons} style={{ width: 25, height: 25 }} resizeMode='contain' alt='img' />
                            <Text style={styles.amount}>₹2000</Text>
                            <Text style={styles.totles}>Total Earnings</Text>
                        </Pressable>
                        <Pressable style={[styles.Earnings, { backgroundColor: '#00589B' }]}>
                            <Image source={cardIcons} style={{ width: 25, height: 25 }} resizeMode='contain' alt='img' />
                            <Text style={styles.amount}>120</Text>
                            <Text style={styles.totles}>Total Credit card sell</Text>
                        </Pressable>
                    </View>
                    <View>
                        <Pressable style={[styles.Earnings, { backgroundColor: '#33CC66', width: '100%' }]}>
                            <Image source={dollIcons} style={{ width: 25, height: 25 }} resizeMode='contain' alt='img' />
                            <Text style={styles.amount}>₹1000</Text>
                            <Text style={styles.totles}>Earnings yet to be transferred</Text>
                        </Pressable>
                    </View>
                    <View style={styles.ShareCOntainers}>
                        <Text style={styles.ShareLinkText}>Share link with your network and start earnings</Text>
                        <View style={[styles.salesContainer,{position:'relative'}]}>
                            <Text style={{color:'#3B3935', fontWeight:'700', fontSize:14}}>https;//sales.ruepay</Text>
                            <View style={[styles.flexDirection,{position:'absolute', top:0, right: 0, bottom:0, justifyContent:'center'}]}>
                                <Pressable>
                                    <Ionicons name='copy-outline' color="#3B3935" size={25} />
                                </Pressable>
                                <Pressable style={styles.ShareBtn}>
                                    <Text style={{color:'#fff', fontWeight:'500'}}>Share</Text>
                                </Pressable>
                            </View>
                        </View>
                        <View>
                        <CheckBox
                                checked={selectedIndex === 0}
                                onPress={() => setIndex(0)}
                                iconType="material-community"
                                checkedIcon="checkbox-marked"
                                uncheckedIcon="checkbox-blank-outline"
                                checkedColor="#F89D28"
                                title="I have read and agree to all the terms and conditions mentioned for the product promotion"
                                textStyle={{ color: "#3B3935", fontWeight: "500", fontSize: 13 }}
                                containerStyle={{
                                    padding: 0,
                                    backgroundColor: "#ffffff00",
                                    margin: 0,
                                    left: -10,
                                }}
                            /> 
                        </View>
                    </View>
                </View>
                
                <View style={{ paddingVertical: 15, }}>
                    <Pressable style={styles.ContinusBtn} onPress={() => navigation.navigate("Upload Document")}>
                        <Text style={{ color: '#fff', textAlign: 'center', fontSize: 16 }}>Go to my Customer</Text>
                    </Pressable>
                </View>
            </SafeAreaView>
        </ImageBackground>
    )
}

export default Enrings

const styles = StyleSheet.create({
    backggroundContainer: {
        flex: 1,
        resizeMode: "repeat",
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    flexDirection: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
    },
    Earnings: {
        width: '49%',
        backgroundColor: '#3B3935',
        padding: 10,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10
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
    ShareCOntainers:{
        padding:15,
        borderRadius:12,
        backgroundColor:'#fff',
        margin:5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84, 
        elevation: 5,
    },
    ShareLinkText:{
        color:'#3B3935',
        fontSize:16,
        fontWeight:'700'
    },
    salesContainer:{
        backgroundColor:'#FFB557',
        paddingHorizontal:15,
        paddingVertical:12,
        borderRadius:50,
        marginVertical:15
    },
    ShareBtn:{
        backgroundColor:'#F89D28',
        paddingHorizontal:20,
        paddingVertical:12,
        borderRadius:50
    },
    ContinusBtn: {
        backgroundColor: '#F89D28',
        paddingHorizontal: 15,
        paddingVertical: 14,
        borderRadius: 50,
        width: '100%'
    }
})