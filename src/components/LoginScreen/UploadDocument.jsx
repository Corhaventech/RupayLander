import React, { useState } from 'react'
import { StyleSheet, Text, View, ImageBackground, TextInput, Pressable, ScrollView, Button } from 'react-native'
import bgImg from '../../assets/img/bg-gradient-linear-new.png'
// import DatePicker from 'react-native-date-picker'
import DropDownPicker from 'react-native-dropdown-picker';


const UploadDocument = ({navigation}) => {
 
    return (
        <ImageBackground source={bgImg} style={styles.backggroundContainer}>
            <View>
                <View>
                    <Text style={{ fontWeight: '500' }}>Aadhar card</Text>
                    <TextInput style={styles.inputNumber} placeholder='Upload aadhar card' placeholderTextColor="#12121D4D" />
                </View>
                <View>
                    <Text style={{ fontWeight: '500' }}>Pan card</Text>
                    <TextInput style={styles.inputNumber} placeholder='Upload pan card' placeholderTextColor="#12121D4D" />
                </View>
                <View>
                    <Text style={{ fontWeight: '500' }}>Photo</Text>
                    <TextInput style={styles.inputNumber} placeholder='Upload  photo' placeholderTextColor="#12121D4D" />
                </View> 
                  
                <View>
                    <Text style={{ fontWeight: '500' }}>GST No(optional)</Text>
                    <TextInput style={styles.inputNumber} keyboardType='default' placeholder='Enter GST no' placeholderTextColor="#12121D4D" />
                </View>
                <View style={{paddingVertical:20}}>
                    <Pressable style={styles.ContinusBtn} onPress={() => navigation.navigate("home")}>
                        <Text style={{color:'#fff', textAlign:'center', fontSize:16}}>Submit</Text>
                    </Pressable>
                </View>

            </View>
        </ImageBackground>
    )
}

export default UploadDocument

const styles = StyleSheet.create({
    backggroundContainer: {
        flex: 1,
        resizeMode: 'repeat',
        padding: 15
    },
    inputNumber: {
        width: '100%',
        borderRadius: 6,
        borderColor: '#C4C4C7',
        borderWidth: 1,
        paddingHorizontal: 15,
        marginVertical: 10,
        fontSize: 16,
        fontWeight: '400',
        backgroundColor: '#fff',
        position: 'relative',
        zIndex: 1
    },
    ContinusBtn:{ 
        backgroundColor:'#F89D28',
        paddingHorizontal:15,
        paddingVertical:14,
        borderRadius:50,
    }
})