import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const CreditCardApproved = ({ item, navigation }) => {
    return (
        <View>
            <TouchableOpacity style={styles.TouchableOpacityContainer} onPress={() => navigation.navigate('Credit Card Detail Approved')}>
                <View style={styles.flexDirection}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={[styles.Approved, {color:item.ApprovedColor}]}>{item.Approved}</Text>
                </View>
                <View style={styles.flexDirection}>
                    <Text style={styles.bank}>{item.bank}</Text>
                    <Text style={styles.title}>{item.earn}</Text>
                </View>
                <View>
                    <Text style={styles.numbers}>{item.numbers}</Text>
                </View>
            </TouchableOpacity>
            <View>
                <Text style={{textAlign:'right', color:'#888888', fontSize:12}}>{item.dates}</Text>
            </View>
        </View>
    )
}

export default CreditCardApproved

const styles = StyleSheet.create({
    TouchableOpacityContainer:{
        backgroundColor: "#fff",
        padding: 15,
        borderRadius: 12,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        elevation: 2,
        margin:5, 
    },
    flexDirection:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    title:{
        color:'#3B3935',
        fontSize:15,
        fontWeight:'500',
        marginBottom:5
    },
    Approved:{ 
        fontSize:15,
        fontWeight:'500',
        marginBottom:5
    },
    bank:{
        color:'#888888',
        fontSize:15,
        fontWeight:'500',
        marginBottom:5
    },
    numbers:{
        color:'#888888',
        fontSize:15,
        fontWeight:'400', 
    }
})