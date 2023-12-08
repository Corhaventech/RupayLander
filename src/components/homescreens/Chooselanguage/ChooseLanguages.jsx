import { StyleSheet, Text, View, ImageBackground, Pressable } from 'react-native'
import React from 'react'
import bgImg from '../../../assets/img/bg-gradient-linear-new.png'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const ChooseLanguages = () => {
    return (
        <ImageBackground source={bgImg} style={styles.backggroundContainer}> 
                <Pressable style={styles.ChooseLanguagesContainer}>
                    <View>
                        <Text style={styles.heading}>English</Text>
                    </View>
                    <View>
                        <FontAwesome name="dot-circle-o" size={25} color="#F89D28" />
                    </View>
                 </Pressable>   
                <Pressable style={styles.ChooseLanguagesContainer}>
                    <View>
                        <Text style={styles.heading}>Hindi</Text>
                    </View>
                    <View>
                        <FontAwesome name="circle-o" size={25} color="#F89D28" />
                    </View>
                 </Pressable>   
        </ImageBackground>
    )
}

export default ChooseLanguages

const styles = StyleSheet.create({
    backggroundContainer: {
        flex: 1,
        resizeMode: 'repeat',
        paddingHorizontal: 15,
        paddingVertical: 20
    },
    ChooseLanguagesContainer:{
        padding:15,
        backgroundColor:'#fff', 
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',  
        borderRadius:7,
        borderWidth:1,
        borderColor:'#FFE5C4',
        borderStyle:'dashed',
        marginVertical:7 
    },
    heading:{
        fontSize:17,
        color:'#3B3935',
        fontFamily:'Nexa Bold',
        fontWeight:'700', 
    },
     
})