import { Image, ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import bgImg from "../../../assets/img/bg-gradient-linear-new.png";
import cardShare from '../../../assets/img/guruNanakJayanti.png'

const MediaBrochuresShare = () => {
    return (
        <ImageBackground source={bgImg} style={styles.backggroundContainer}>
            <SafeAreaView style={styles.SafeAreaViewContainer}>
                <View>
                    <Image source={cardShare} style={styles.Image} resizeMode='contain' alt='img' />
                </View>
            </SafeAreaView>
            <View>
                <View style={[styles.flexDirection, {justifyContent:'space-between'}]}>
                    <TouchableOpacity style={[styles.shareBtns, styles.borderRS]}>
                        <Text style={[styles.btnText, {color:'#F89D28'}]}>WhatsApp</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.shareBtns}>
                        <Text style={styles.btnText}>Share with Friend</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    )
}

export default MediaBrochuresShare

const styles = StyleSheet.create({
    backggroundContainer: {
        flex: 1,
        resizeMode: "cover",
        padding: 15, 
    },
    SafeAreaViewContainer: {
        flex: 1,
        alignItems:'center',
        justifyContent:'center'
    },
    Image:{
        width:'100%',
        height:undefined,
        aspectRatio:1,
        borderRadius:12,
    },
    flexDirection: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },
    shareBtns:{
        width:'49%',
        backgroundColor:'#F89D28',
        height:44,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:50,
    },
    borderRS:{ 
        borderColor:'#F89D28',
        backgroundColor:'#fff',
        borderWidth:1
    },
    btnText:{
        fontWeight:'500',
        color:'#fff'
    }
})