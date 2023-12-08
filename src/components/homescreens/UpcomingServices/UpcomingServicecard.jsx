import { StyleSheet, ImageBackground, View, FlatList } from 'react-native'
import React from 'react'
import bgImg from '../../../assets/img/bg-gradient-linear-new.png'
import dataup from '../../data/UpcomingServiceData'
import UpcomingServicesAll from './UpcomingServicesAll'

const UpcomingServicecard = ({ navigation }) => {
    return (
        <ImageBackground source={bgImg} style={styles.backggroundContainer}>
            <View>
                <FlatList
                    data={dataup}
                    renderItem={({ item }) => <UpcomingServicesAll navigation={navigation} item={item} />}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </ImageBackground>
    )
}

export default UpcomingServicecard

const styles = StyleSheet.create({

    backggroundContainer: {
        flex: 1,
        resizeMode: 'repeat',
        paddingHorizontal: 15, 
    },
})