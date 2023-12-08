//import liraries
import React from 'react'
import { View, Text, StyleSheet, ImageBackground, Image, Pressable, ScrollView } from "react-native";
import bgImg from "../../../assets/img/bg-gradient-linear-new.png";

// create a component
const Notification = () => {
    return (
        <ImageBackground source={bgImg} style={styles.backggroundContainer}>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
                <View>
                    <Pressable style={styles.notiContainer}>
                        <View style={[styles.DisplayList, {justifyContent:'space-between'}]}>
                            <Text style={styles.notiHeading}>Lorem ipsum dolor sit amet, </Text>
                            <Text style={{fontSize:15, fontWeight:'600'}}>10h</Text>
                        </View>
                        <View>
                            <Text style={styles.notiDisca}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                            </Text>
                        </View>
                    </Pressable>
                    <Pressable style={styles.notiContainer}>
                        <View style={[styles.DisplayList, {justifyContent:'space-between'}]}>
                            <Text style={styles.notiHeading}>Lorem ipsum dolor sit amet, </Text>
                            <Text style={{fontSize:15, fontWeight:'600'}}>10h</Text>
                        </View>
                        <View>
                            <Text style={styles.notiDisca}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                            </Text>
                        </View>
                    </Pressable>
                    <Pressable style={styles.notiContainer}>
                        <View style={[styles.DisplayList, {justifyContent:'space-between'}]}>
                            <Text style={styles.notiHeading}>Lorem ipsum dolor sit amet, </Text>
                            <Text style={{fontSize:15, fontWeight:'600'}}>10h</Text>
                        </View>
                        <View>
                            <Text style={styles.notiDisca}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                            </Text>
                        </View>
                    </Pressable>
                    <Pressable style={styles.notiContainer}>
                        <View style={[styles.DisplayList, {justifyContent:'space-between'}]}>
                            <Text style={styles.notiHeading}>Lorem ipsum dolor sit amet, </Text>
                            <Text style={{fontSize:15, fontWeight:'600'}}>10h</Text>
                        </View>
                        <View>
                            <Text style={styles.notiDisca}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                            </Text>
                        </View>
                    </Pressable>
                    <Pressable style={styles.notiContainer}>
                        <View style={[styles.DisplayList, {justifyContent:'space-between'}]}>
                            <Text style={styles.notiHeading}>Lorem ipsum dolor sit amet, </Text>
                            <Text style={{fontSize:15, fontWeight:'600'}}>10h</Text>
                        </View>
                        <View>
                            <Text style={styles.notiDisca}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                            </Text>
                        </View>
                    </Pressable>
                    <Pressable style={styles.notiContainer}>
                        <View style={[styles.DisplayList, {justifyContent:'space-between'}]}>
                            <Text style={styles.notiHeading}>Lorem ipsum dolor sit amet, </Text>
                            <Text style={{fontSize:15, fontWeight:'600'}}>10h</Text>
                        </View>
                        <View>
                            <Text style={styles.notiDisca}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                            </Text>
                        </View>
                    </Pressable>
                    <Pressable style={styles.notiContainer}>
                        <View style={[styles.DisplayList, {justifyContent:'space-between'}]}>
                            <Text style={styles.notiHeading}>Lorem ipsum dolor sit amet, </Text>
                            <Text style={{fontSize:15, fontWeight:'600'}}>10h</Text>
                        </View>
                        <View>
                            <Text style={styles.notiDisca}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                            </Text>
                        </View>
                    </Pressable>
                    <Pressable style={styles.notiContainer}>
                        <View style={[styles.DisplayList, {justifyContent:'space-between'}]}>
                            <Text style={styles.notiHeading}>Lorem ipsum dolor sit amet, </Text>
                            <Text style={{fontSize:15, fontWeight:'600'}}>10h</Text>
                        </View>
                        <View>
                            <Text style={styles.notiDisca}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                            </Text>
                        </View>
                    </Pressable>
                    <Pressable style={styles.notiContainer}>
                        <View style={[styles.DisplayList, {justifyContent:'space-between'}]}>
                            <Text style={styles.notiHeading}>Lorem ipsum dolor sit amet, </Text>
                            <Text style={{fontSize:15, fontWeight:'600'}}>10h</Text>
                        </View>
                        <View>
                            <Text style={styles.notiDisca}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                            </Text>
                        </View>
                    </Pressable>
                    <Pressable style={styles.notiContainer}>
                        <View style={[styles.DisplayList, {justifyContent:'space-between'}]}>
                            <Text style={styles.notiHeading}>Lorem ipsum dolor sit amet, </Text>
                            <Text style={{fontSize:15, fontWeight:'600'}}>10h</Text>
                        </View>
                        <View>
                            <Text style={styles.notiDisca}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                            </Text>
                        </View>
                    </Pressable>
                </View>
            </ScrollView>
        </ImageBackground>
    );
};

// define your styles
const styles = StyleSheet.create({
    backggroundContainer: {
        flex: 1,
        resizeMode: "repeat",
        paddingBottom: 15,
        paddingHorizontal: 10
    },
    container: {
        flex:1
    },
    notiContainer:{
        borderWidth:1,
        borderColor:'#D9D9D9',
        marginVertical:5,
        borderStyle:'dashed', 
        backgroundColor: "#FBFBFB",
        paddingHorizontal:13,
        paddingVertical:6,
        borderRadius:10
    },
    DisplayList:{
        flexDirection:'row',
        alignItems:'center',
        gap:15
    },
    notiHeading:{
        fontSize:15,
        fontWeight:'700',
        paddingBottom:6,
        fontFamily:'Nexa Bold'
    },
    notiDisca:{
        fontSize:12,
        lineHeight:20,
        fontFamily:'Nexa Bold'
    }
});

//make this component available to the app
export default Notification;
