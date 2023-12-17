import { ImageBackground, StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import bgImg from "../../../assets/img/bg-gradient-linear-new.png";
import MediaCard from './MediaCard';
import data from '../../homescreens/Medias/MediaCardData'

const SaveMedia = ({navigation}) => {
    return (
        <ImageBackground source={bgImg} style={styles.backggroundContainer}> 
            <FlatList
                data={data}
                renderItem={({ item }) => <MediaCard navigation={navigation} item={item} />}
                numColumns={2}
                showsVerticalScrollIndicator={false}
            /> 
        </ImageBackground>
    )
}

export default SaveMedia;

const styles = StyleSheet.create({
    backggroundContainer: {
        flex: 1,
        resizeMode: "cover",
        paddingHorizontal: 10,
        paddingTop: 5
    },
})