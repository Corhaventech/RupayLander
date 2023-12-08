import React from 'react'
import { StyleSheet, ImageBackground, SafeAreaView, FlatList } from "react-native";
import bgImg from "../../../assets/img/bg-gradient-linear-new.png";
import Data from "../../data/CreateData";
import CreditCardBox from './CreditCardBox';

const SuggestedFiveCard = ({navigation}) => {
    return (
        <ImageBackground source={bgImg} style={styles.backggroundContainer}>
            <SafeAreaView >
                <FlatList showsVerticalScrollIndicator={false} data={Data} renderItem={({ item }) => <CreditCardBox navigation={navigation} item={item} />} />
            </SafeAreaView>
        </ImageBackground>

    )
}

export default SuggestedFiveCard

const styles = StyleSheet.create({
    backggroundContainer: {
        flex: 1,
        resizeMode: "repeat",
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
})