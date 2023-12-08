import React from 'react';
import { SafeAreaView, StyleSheet, FlatList, ImageBackground } from 'react-native';
import bgImg from "../../assets/img/bg-gradient-linear-new.png";

import Data from "../data/CreateData";
import OfferCardAll from './UPIScreens/OfferCardAll';

// create a component
const Offers = ({ navigation }) => {
    return (
        <ImageBackground source={bgImg} style={styles.backggroundContainer}>
            <SafeAreaView style={{ flex: 1, }}>
                <FlatList showsVerticalScrollIndicator={false} data={Data} renderItem={({ item }) => <OfferCardAll navigation={navigation} item={item} />}

                />
            </SafeAreaView>
        </ImageBackground>
    );
};

// define your styles
const styles = StyleSheet.create({
    backggroundContainer: {
        flex: 1,
        resizeMode: "repeat",
        // paddingHorizontal: 10, 
        // paddingVertical: 10, 
    },
});

//make this component available to the app
export default Offers;
