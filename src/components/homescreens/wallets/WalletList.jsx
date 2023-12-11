import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

const WalletList = ({ item, navigation }) => {
    return (
        <Pressable style={styles.container}>
            <View style={[styles.flexDirection, { justifyContent: "space-between",}]}>
                <View>
                    <Text style={styles.Total}>{item.title}</Text>
                    <Text style={[styles.price, {color:'#888888'}]}>{item.date}</Text>
                </View>
                <View>
                    <Text style={[styles.Total, {color:item.statusColor, textAlign:'right'}]}>{item.amount}</Text>
                    <Text style={[styles.price, {color:'#3B3935',textAlign:'right'}]}>{item.bankstatus}</Text>
                </View>
            </View>
        </Pressable>
    )
}

export default WalletList

const styles = StyleSheet.create({
    container:{
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
        alignItems:'center'
    },
    Total: {
        fontSize: 15,
        fontWeight: "600",
        color: "#3B3935",
        marginBottom:15
    },
    price: {
        fontSize: 14,
        fontWeight: "600", 
    },
})