import { ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View, FlatList, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import bgImg from "../../../assets/img/bg-gradient-linear-new.png"; 
import MediaCardList from './MediaCardList';
import data from '../../homescreens/Medias/MediaCardData'
import MediaCard from './MediaCard';

const BrochuresList = ({ navigation }) => {
    const [selectedTab, setSelectedTab] = useState(0);
    return (
        <SafeAreaView style={styles.SafeAreaViewContainer}>
            <ImageBackground source={bgImg} style={styles.backggroundContainer}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={[styles.flexDirection, { marginBottom: 5,}]}>
                        <TouchableOpacity style={[styles.TabPressable, { backgroundColor: selectedTab === 0 ? "#F89D28" : "#F9F9F9", borderColor: selectedTab === 0 ? "#F89D28" : "#D9D9D9", }]} onPress={() => { setSelectedTab(0); }}>
                            <Text style={[styles.TabButtonFont, { color: selectedTab === 0 ? "#fff" : "#3B3935" }]}>All</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.TabPressable, { backgroundColor: selectedTab === 1 ? "#F89D28" : "#F9F9F9", borderColor: selectedTab === 1 ? "#F89D28" : "#D9D9D9", }]} onPress={() => { setSelectedTab(1); }}>
                            <Text style={[styles.TabButtonFont, { color: selectedTab === 1 ? "#fff" : "#3B3935" }]}>Latest</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.TabPressable, { backgroundColor: selectedTab === 2 ? "#F89D28" : "#F9F9F9", borderColor: selectedTab === 2 ? "#F89D28" : "#D9D9D9", }]} onPress={() => { setSelectedTab(2); }}>
                            <Text style={[styles.TabButtonFont, { color: selectedTab === 2 ? "#fff" : "#3B3935" }]}>Festival</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.TabPressable, { backgroundColor: selectedTab === 3 ? "#F89D28" : "#F9F9F9", borderColor: selectedTab === 3 ? "#F89D28" : "#D9D9D9", }]} onPress={() => { setSelectedTab(3); }}>
                            <Text style={[styles.TabButtonFont, { color: selectedTab === 3 ? "#fff" : "#3B3935" }]}>Credit Card</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.TabPressable, { backgroundColor: selectedTab === 4 ? "#F89D28" : "#F9F9F9", borderColor: selectedTab === 4 ? "#F89D28" : "#D9D9D9", }]} onPress={() => { setSelectedTab(4); }} >
                            <Text style={[styles.TabButtonFont, { color: selectedTab === 4 ? "#fff" : "#3B3935" }]}>Personal Loan</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.TabPressable, { backgroundColor: selectedTab === 5 ? "#F89D28" : "#F9F9F9", borderColor: selectedTab === 5 ? "#F89D28" : "#D9D9D9", }]} onPress={() => { setSelectedTab(5); }}>
                            <Text style={[styles.TabButtonFont, { color: selectedTab === 5 ? "#fff" : "#3B3935" }]}>Home Loan</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.TabPressable, { backgroundColor: selectedTab === 6 ? "#F89D28" : "#F9F9F9", borderColor: selectedTab === 6 ? "#F89D28" : "#D9D9D9", }]} onPress={() => { setSelectedTab(6); }}>
                            <Text style={[styles.TabButtonFont, { color: selectedTab === 6 ? "#fff" : "#3B3935" }]}>Business  Loan</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.TabPressable, { backgroundColor: selectedTab === 7 ? "#F89D28" : "#F9F9F9", borderColor: selectedTab === 7 ? "#F89D28" : "#D9D9D9", }]} onPress={() => { setSelectedTab(7); }}>
                            <Text style={[styles.TabButtonFont, { color: selectedTab === 7 ? "#fff" : "#3B3935" }]}>Car  Loan</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.TabPressable, { backgroundColor: selectedTab === 8 ? "#F89D28" : "#F9F9F9", borderColor: selectedTab === 8 ? "#F89D28" : "#D9D9D9", }]} onPress={() => { setSelectedTab(8); }}>
                            <Text style={[styles.TabButtonFont, { color: selectedTab === 8 ? "#fff" : "#3B3935" }]}>Motor Insurance</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.TabPressable, { backgroundColor: selectedTab === 9 ? "#F89D28" : "#F9F9F9", borderColor: selectedTab === 9 ? "#F89D28" : "#D9D9D9", }]} onPress={() => { setSelectedTab(9); }}>
                            <Text style={[styles.TabButtonFont, { color: selectedTab === 9 ? "#fff" : "#3B3935" }]}>Fastag</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView> 
                {selectedTab === 0 ? (
                    <ScrollView  showsVerticalScrollIndicator={false}>
                        <View style={{ marginBottom: 5,}}>
                            <View style={[styles.flexDirection, { justifyContent: 'space-between' }]}>
                                <Text style={styles.titleLatest}>Aditiya Birla</Text>
                                <TouchableOpacity onPress={() => navigation.navigate('MediaSeeAllCard')}>
                                    <Text style={styles.SeeAllTExt}>See All</Text>
                                </TouchableOpacity>
                            </View>
                            <FlatList
                                data={data}
                                renderItem={({ item }) => <MediaCardList navigation={navigation} item={item} />}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                centerContent
                            />
                        </View>
                        <View style={{ marginBottom: 5 }}>
                            <View style={[styles.flexDirection, { justifyContent: 'space-between' }]}>
                                <Text style={styles.titleLatest}>Bajaj Allianz</Text>
                                <TouchableOpacity onPress={() => navigation.navigate('MediaSeeAllCard')}>
                                    <Text style={styles.SeeAllTExt}>See All</Text>
                                </TouchableOpacity>
                            </View>
                            <FlatList
                                data={data}
                                renderItem={({ item }) => <MediaCardList navigation={navigation} item={item} />}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                centerContent
                            />
                        </View>
                        <View style={{ marginBottom: 5 }}>
                            <View style={[styles.flexDirection, { justifyContent: 'space-between' }]}>
                                <Text style={styles.titleLatest}>Care</Text>
                                <TouchableOpacity onPress={() => navigation.navigate('MediaSeeAllCard')}>
                                    <Text style={styles.SeeAllTExt}>See All</Text>
                                </TouchableOpacity>
                            </View>
                            <FlatList
                                data={data}
                                renderItem={({ item }) => <MediaCardList navigation={navigation} item={item} />}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                centerContent
                            />
                        </View>
                        <View style={{ marginBottom: 5 }}>
                            <View style={[styles.flexDirection, { justifyContent: 'space-between' }]}>
                                <Text style={styles.titleLatest}>Kotak</Text>
                                <TouchableOpacity onPress={() => navigation.navigate('MediaSeeAllCard')}>
                                    <Text style={styles.SeeAllTExt}>See All</Text>
                                </TouchableOpacity>
                            </View>
                            <FlatList
                                data={data}
                                renderItem={({ item }) => <MediaCardList navigation={navigation} item={item} />}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                centerContent
                            />
                        </View>
                        <View style={{ marginBottom: 5 }}>
                            <View style={[styles.flexDirection, { justifyContent: 'space-between' }]}>
                                <Text style={styles.titleLatest}>HDFC Egro</Text>
                                <TouchableOpacity onPress={() => navigation.navigate('MediaSeeAllCard')}>
                                    <Text style={styles.SeeAllTExt}>See All</Text>
                                </TouchableOpacity>
                            </View>
                            <FlatList
                                data={data}
                                renderItem={({ item }) => <MediaCardList navigation={navigation} item={item} />}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                centerContent
                            />
                        </View>
                        <View style={{ marginBottom: 5 }}>
                            <View style={[styles.flexDirection, { justifyContent: 'space-between' }]}>
                                <Text style={styles.titleLatest}>Digit</Text>
                                <TouchableOpacity onPress={() => navigation.navigate('MediaSeeAllCard')}>
                                    <Text style={styles.SeeAllTExt}>See All</Text>
                                </TouchableOpacity>
                            </View>
                            <FlatList
                                data={data}
                                renderItem={({ item }) => <MediaCardList navigation={navigation} item={item} />}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                centerContent
                            />
                        </View>
                        <View style={{ marginBottom: 5 }}>
                            <View style={[styles.flexDirection, { justifyContent: 'space-between' }]}>
                                <Text style={styles.titleLatest}>Bharti AXA</Text>
                                <TouchableOpacity onPress={() => navigation.navigate('MediaSeeAllCard')}>
                                    <Text style={styles.SeeAllTExt}>See All</Text>
                                </TouchableOpacity>
                            </View>
                            <FlatList
                                data={data}
                                renderItem={({ item }) => <MediaCardList navigation={navigation} item={item} />}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                centerContent
                            />
                        </View>
                        <View style={{ marginBottom: 5 }}>
                            <View style={[styles.flexDirection, { justifyContent: 'space-between' }]}>
                                <Text style={styles.titleLatest}>Edelwesiss</Text>
                                <TouchableOpacity onPress={() => navigation.navigate('MediaSeeAllCard')}>
                                    <Text style={styles.SeeAllTExt}>See All</Text>
                                </TouchableOpacity>
                            </View>
                            <FlatList
                                data={data}
                                renderItem={({ item }) => <MediaCardList navigation={navigation} item={item} />}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                centerContent
                            />
                        </View>
                        <View style={{ marginBottom: 5 }}>
                            <View style={[styles.flexDirection, { justifyContent: 'space-between' }]}>
                                <Text style={styles.titleLatest}>Future General</Text>
                                <TouchableOpacity onPress={() => navigation.navigate('MediaSeeAllCard')}>
                                    <Text style={styles.SeeAllTExt}>See All</Text>
                                </TouchableOpacity>
                            </View>
                            <FlatList
                                data={data}
                                renderItem={({ item }) => <MediaCardList navigation={navigation} item={item} />}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                centerContent
                            />
                        </View>
                    </ScrollView>
                ) : selectedTab === 1 ? (
                    <ScrollView showsVerticalScrollIndicator={false} style={{marginBottom:15}}>
                        <FlatList
                            data={data}
                            renderItem={({ item }) => <MediaCard navigation={navigation} item={item} />}
                            numColumns={2}
                            showsVerticalScrollIndicator={false}
                        />
                    </ScrollView>
                ) : selectedTab === 2 ? (
                    <ScrollView showsVerticalScrollIndicator={false} style={{marginBottom:15}}>
                        <FlatList
                            data={data}
                            renderItem={({ item }) => <MediaCard navigation={navigation} item={item} />}
                            numColumns={2}
                            showsVerticalScrollIndicator={false}
                        />
                    </ScrollView>
                ) : selectedTab === 3 ? (
                    <ScrollView showsVerticalScrollIndicator={false} style={{marginBottom:15}}>
                        <FlatList
                            data={data}
                            renderItem={({ item }) => <MediaCard navigation={navigation} item={item} />}
                            numColumns={2}
                            showsVerticalScrollIndicator={false}
                        />
                    </ScrollView>
                ) : selectedTab === 4 ? (
                    <ScrollView showsVerticalScrollIndicator={false} style={{marginBottom:15}}>
                        <FlatList
                            data={data}
                            renderItem={({ item }) => <MediaCard navigation={navigation} item={item} />}
                            numColumns={2}
                            showsVerticalScrollIndicator={false}
                        />
                    </ScrollView>
                ) : selectedTab === 5 ? (
                    <ScrollView showsVerticalScrollIndicator={false} style={{marginBottom:15}}>
                        <FlatList
                            data={data}
                            renderItem={({ item }) => <MediaCard navigation={navigation} item={item} />}
                            numColumns={2}
                            showsVerticalScrollIndicator={false}
                        />
                    </ScrollView>
                ) : selectedTab === 6 ? (
                    <ScrollView showsVerticalScrollIndicator={false} style={{marginBottom:15}}>
                        <FlatList
                            data={data}
                            renderItem={({ item }) => <MediaCard navigation={navigation} item={item} />}
                            numColumns={2}
                            showsVerticalScrollIndicator={false}
                        />
                    </ScrollView>
                ) : selectedTab === 7 ? (
                    <ScrollView showsVerticalScrollIndicator={false} style={{marginBottom:15}}>
                        <FlatList
                            data={data}
                            renderItem={({ item }) => <MediaCard navigation={navigation} item={item} />}
                            numColumns={2}
                            showsVerticalScrollIndicator={false}
                        />
                    </ScrollView>
                ) : (
                    <ScrollView showsVerticalScrollIndicator={false} style={{marginBottom:15}}>
                        <FlatList
                            data={data}
                            renderItem={({ item }) => <MediaCard navigation={navigation} item={item} />}
                            numColumns={2}
                            showsVerticalScrollIndicator={false}
                        />
                    </ScrollView>
                )
                }
            </ImageBackground>
        </SafeAreaView>
    )
}

export default BrochuresList

const styles = StyleSheet.create({
    SafeAreaViewContainer: {
        flex: 1, 
    },
    backggroundContainer: {
        flex: 1, 
        resizeMode: "cover",
        paddingHorizontal: 10,
        paddingTop:5
    },
    flexDirection: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
    },
    TabPressable: {
        borderRadius: 3,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 8,
        paddingVertical: 5,
        borderWidth: 1
    },
    TabButtonFont: {
        fontSize: 14,
        fontWeight: "500",
    },
    titleLatest: {
        fontWeight: '600',
        fontSize: 15,
        color: '#3B3935'
    },
    SeeAllTExt: {
        color: '#F89D28',
        fontWeight: '500'
    }
})