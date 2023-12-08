import React from 'react'
import { StyleSheet, Text, View, ImageBackground, TextInput, Pressable } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import bgImg from '../../../assets/img/bg-gradient-linear-new.png'

const MotorInsurance = ({navigation}) => {
  return (
    <ImageBackground source={bgImg} style={styles.backggroundContainer}>
        <View style={{flex:1}}>
            <View style={{paddingBottom:20}}>
                <View>
                    <Text style={{fontWeight:'500', fontSize:16, color:'#141516'}}>Vehicle number</Text>
                </View>
                <View>
                    <TextInput keyboardType="default" placeholder='Enter Registration vehicle number' placeholderTextColor="#12121D4D" style={styles.inputNumber} />
                </View>
            </View>
            <View>
                <Pressable onPress={() => navigation.navigate("new vehicle")} style={{flexDirection:'row', alignItems:'center', justifyContent:'center', gap:5}}>
                    <Text style={{color:"#3B3935", fontSize:17, fontWeight:'500'}}>New Vehicle </Text>
                    <Feather name='arrow-right' size={22} color="#3B3935" />
                </Pressable>
            </View>
        </View>

        <View style={{paddingVertical:15,}}>
            <Pressable style={styles.sendOTPContainer}
            //  onPress={() => navigation.navigate("")}
             >
                <Text style={{color:'#fff', fontSize:17, fontWeight:'600'}}>Submit</Text>
            </Pressable>
        </View>
    </ImageBackground>
  )
}

export default MotorInsurance;

const styles = StyleSheet.create({
    backggroundContainer: {
        flex: 1,
        resizeMode: 'repeat',
        paddingHorizontal: 15,
        paddingTop:20
    },
    
    inputNumber:{
        width:'100%',
        borderRadius:12,
        borderColor:'#C4C4C7',
        borderWidth:1,
        paddingHorizontal:15,
        marginVertical:10,
        fontSize:15,
        fontWeight:'500',
        backgroundColor:'#fff'
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
})