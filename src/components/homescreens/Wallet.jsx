import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'
import bgImg from "../../assets/img/bg-gradient-linear-new.png";




const Wallet = () => {
    return (
        <ImageBackground source={bgImg} style={styles.backggroundContainer}>
            <View>
                <Text>Wallet</Text>
            </View>
        </ImageBackground>
    )
}

export default Wallet

const styles = StyleSheet.create({
    
    backggroundContainer: {
        flex: 1,
        resizeMode: "repeat",
        padding:15
    }
})