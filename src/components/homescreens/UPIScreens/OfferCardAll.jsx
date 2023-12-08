import { StyleSheet, ImageBackground, View, FlatList } from 'react-native'
import React from 'react'
import bgImg from '../../../assets/img/bg-gradient-linear-new.png'
import dataup from '../../data/UpcomingServiceData'
import OfferCardSell from './OfferCardSell'

const OfferCardAll = ({ navigation }) => {
    return (
        <ImageBackground source={bgImg} style={styles.backggroundContainer}>
            <FlatList
                data={dataup}
                renderItem={({ item }) => <OfferCardSell navigation={navigation} item={item} />}
                showsVerticalScrollIndicator={false}
            />
        </ImageBackground>
    )
}

export default OfferCardAll

const styles = StyleSheet.create({

    backggroundContainer: {
        flex: 1,
        resizeMode: 'repeat',
        paddingHorizontal: 15,
    },
})