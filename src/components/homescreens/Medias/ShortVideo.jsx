import { Dimensions, FlatList, SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import bgImg from "../../../assets/img/bg-gradient-linear-new.png";
import Video from 'react-native-video'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Fontisto from 'react-native-vector-icons/Fontisto'
import userImage from '../../../assets/logo/Rupay-Lender-logo.png'

const { width, height } = Dimensions.get('screen');

const ShortVideo = ({ navigation }) => {

    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <SafeAreaView style={styles.SafeAreaViewContainer}>
            <FlatList
                data={[
                    require('../../../assets/video/ladka-khatu-K-jai-shree-shyam.mp4'),
                    require('../../../assets/video/ladka-khatu-K-jai-shree-shyam.mp4'),
                    require('../../../assets/video/ladka-khatu-K-jai-shree-shyam.mp4'),
                ]}
                onScroll={e => {
                    setSelectedIndex(
                        e.nativeEvent.contentOffset.y.toFixed(0) / Dimensions.get('window').height,
                    );
                }}
                pagingEnabled
                showsVerticalScrollIndicator={false}
                renderItem={({ item, index }) => {
                    return (
                        <View style={{
                            width: Dimensions.get('window').width,
                            height: Dimensions.get('window').height,
                        }}>
                            <Video
                                paused={selectedIndex == index ? false : true}
                                style={{
                                    width: Dimensions.get('window').width,
                                    height: Dimensions.get('window').height,
                                }}
                                resizeMode='cover'
                                source={item}
                            />
                            <TouchableOpacity
                                style={{
                                    width: Dimensions.get('window').width,
                                    height: Dimensions.get('window').height,
                                    position: 'absolute',
                                    top: '0',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    backgroundColor: 'rgba(0,0,0,.1)',
                                }}
                                onPress={() => {
                                    if (selectedIndex == -1) {
                                        setSelectedIndex(index);
                                    } else {
                                        setSelectedIndex(-1)
                                    }
                                }}
                            >
                                {selectedIndex == -1 ? (
                                    <Ionicons name='pause-circle' size={50} color='#fff' />
                                ) : null}
                                <View style={styles.VideoDetails}>
                                    <View style={{ marginBottom: 15 }}>
                                        <Text style={styles.TExtVideos}>@Jaishrishyam</Text>
                                        <Text style={styles.TExtVideos}>#Jaishrishyam</Text>
                                    </View>
                                    <View style={styles.flexDirection}>
                                        <Image source={userImage} resizeMode='contain' style={{ width: 30, height: 30, backgroundColor: '#fff', borderRadius: 50 }} />
                                        <Text style={styles.TExtVideos}>ladla_khatu_k</Text>
                                    </View>
                                </View>
                                <View style={{ right: 10, position:'absolute', bottom:20 }}>
                                    <View style={{marginBottom:10}}>
                                        <AntDesign name='like1' size={25} color='#fff' />
                                        <Text style={[styles.TExtVideos, {fontSize:14}]}>2.4k</Text>
                                    </View> 
                                    <View style={{marginBottom:10}}>
                                        <AntDesign name='dislike1' size={25} color='#fff' />
                                        <Text style={[styles.TExtVideos, {fontSize:14}]}>100</Text>
                                    </View> 
                                    <View style={{marginBottom:10}}>
                                        <Fontisto name='share-a' size={25} color='#fff' />
                                        <Text style={[styles.TExtVideos, {fontSize:14}]}>2k</Text>
                                    </View> 
                                </View>
                            </TouchableOpacity>
                        </View>
                    )
                }}
            />
        </SafeAreaView>
    )
}

export default ShortVideo

const styles = StyleSheet.create({
    SafeAreaViewContainer: {
        flex: 1,
        aspectRatio: 1
    },
    VideoDetails: {
        width: '100%',
        position: 'absolute',
        bottom: 20,
        marginHorizontal: 10,
        left: 10
    },
    TExtVideos: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
        marginVertical: 2
    },
    flexDirection: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 7
    },
})