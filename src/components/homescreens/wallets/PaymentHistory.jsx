import { StyleSheet, Text, View, FlatList, ImageBackground } from 'react-native'
import React from 'react'
import bgImg from "../../../assets/img/bg-gradient-linear-new.png";
import WalletList from './WalletList';
import data from '../../data/WalletListData'

const PaymentHistory = ({ navigation }) => {
    return (
        <ImageBackground source={bgImg} style={styles.backggroundContainer}>
            <View style={{flex:1}}>
                <FlatList data={data} renderItem={({ item }) => <WalletList navigation={navigation} item={item} />} showsVerticalScrollIndicator={false} />
            </View>
        </ImageBackground>
    )
}

export default PaymentHistory

const styles = StyleSheet.create({
    backggroundContainer: {
        flex: 1,
        resizeMode: "repeat",
        paddingHorizontal: 8,
        paddingTop: 10,
        paddingBottom: 15,
    },
})