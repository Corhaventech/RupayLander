import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'
import bgImg from "../../assets/img/bg-gradient-linear-new.png";




const Customer = () => {
    return (
        <ImageBackground source={bgImg} style={styles.backggroundContainer}>
            <View>
                <Text>Media</Text>
            </View>
        </ImageBackground>
    )
}

export default Customer

const styles = StyleSheet.create({
    
    backggroundContainer: {
        flex: 1,
        resizeMode: "repeat",
        padding:15
    }
})