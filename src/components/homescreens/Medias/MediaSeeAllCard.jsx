import { FlatList, ImageBackground, SafeAreaView, StyleSheet} from 'react-native'
import React from 'react'
import bgImg from "../../../assets/img/bg-gradient-linear-new.png"; 
import data from '../../homescreens/Medias/MediaCardData'
import MediaCard from './MediaCard';

const MediaBrochuresShare = ({navigation}) => {
    return (
        <ImageBackground source={bgImg} style={styles.backggroundContainer}>
            <SafeAreaView style={styles.SafeAreaViewContainer}>
            <FlatList
                data={data}
                renderItem={({ item }) => <MediaCard navigation={navigation} item={item} />}
                numColumns={2}
                showsVerticalScrollIndicator={false}
            />
            </SafeAreaView> 
        </ImageBackground>
    )
}

export default MediaBrochuresShare

const styles = StyleSheet.create({
    backggroundContainer: {
        flex: 1,
        resizeMode: "cover",
        paddingHorizontal: 10, 
    },
    SafeAreaViewContainer: { 
        marginBottom:10
    },
     
})