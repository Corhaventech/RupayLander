//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, ImageBackground, Image, Pressable, ScrollView, FlatList } from "react-native";
import bgImg from "../../assets/img/bg-gradient-linear-new.png";
import get5kExtra from "../../assets/img/get-extra-img.png";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import sliderImage from "../../assets/img/limited-time.png";
import saleIcon from "../../assets/icons/sale.png";
import IMageSale from "../../assets/icons/sale-bg.png";
import saleIcon1 from "../../assets/icons/Customer.png";
import IMageSale1 from "../../assets/icons/customer-bg.png";
import saleIcon2 from "../../assets/icons/Product.png";
import IMageSale2 from "../../assets/icons/Product-bg.png";
import saleIcon3 from "../../assets/icons/Revenue.png";
import IMageSale3 from "../../assets/icons/Revenue-bg.png";

// SellIcon
import SellIcon from "../../assets/icons/Credit-Card.png";
import SellIcon1 from "../../assets/icons/Personal-Loan.png";
import SellIcon2 from "../../assets/icons/Home-Loan.png";
import SellIcon3 from "../../assets/icons/Business-Loan.png";
import SellIcon4 from "../../assets/icons/Car-Loan.png";
import SellIcon5 from "../../assets/icons/Motor-Insurance.png";
import SellIcon6 from "../../assets/icons/Fastag.png";
import SellIcon7 from "../../assets/icons/Add_Bottuns.png";
import UpcomingServices from "./UPIScreens/UpcomingServices";
import OfferCard from "./UPIScreens/OfferCard";

import dataup from '../data/UpcomingServiceData'

// sell Services a component
 



const Homes = ({navigation}) => {
    return (
        <ImageBackground source={bgImg} style={styles.backggroundContainer}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <ImageBackground source={get5kExtra} style={styles.GetStartContainer}>
                        <View style={styles.DisplayFLex}>
                            <View style={{ width: "60%" }}>
                                <Text style={{ fontSize: 16, color: "#fff", fontWeight: "700", fontFamily: "Nexa Bold" }}>Get extra 5k for every credit card sales</Text>
                                <View style={[styles.DisplayFLex, { paddingVertical: 15 }]}>
                                    <AntDesign name="clockcircleo" size={20} color="#fff" />
                                    <Text style={{ color: "#fff", fontSize: 17, fontFamily: "Nexa Bold" }}>27 Oct 09:00AM</Text>
                                </View>
                                <View style={styles.DisplayFLex}>
                                    <View>
                                        <Pressable style={styles.Pressablebutton}>
                                            <Text style={{ color: "#fff", fontSize: 16, fontFamily: "Nexa Bold", fontWeight: "600" }}>Sell Now</Text>
                                        </Pressable>
                                    </View>
                                    <View>
                                        <Pressable>
                                            <Text style={{ color: "#fff", fontSize: 16, fontFamily: "Nexa Bold", fontWeight: "600" }}>View Details</Text>
                                        </Pressable>
                                    </View>
                                </View>
                            </View>
                            <View style={{ width: "40%" }}>
                                <Image source={sliderImage} style={styles.SliderImages} alt="img" />
                            </View>
                        </View>
                    </ImageBackground>

                    <View style={{ top: "-3%", paddingHorizontal: 12 }}>
                        <View>
                            <View style={[styles.DisplayFLex, { justifyContent: "space-between", gap: 0 }]}>
                                <Pressable>
                                    <ImageBackground source={IMageSale} style={styles.proBgImage}>
                                        <View>
                                            <Image source={saleIcon} style={{ width: 20, height: 20, resizeMode: "contain" }} />
                                        </View>
                                        <View>
                                            <Text style={styles.headingSales}>125K</Text>
                                            <Text style={styles.subHeadingSale}>Sale</Text>
                                        </View>
                                    </ImageBackground>
                                </Pressable>
                                <Pressable>
                                    <ImageBackground source={IMageSale1} style={styles.proBgImage}>
                                        <View>
                                            <Image source={saleIcon1} style={{ width: 20, height: 20, resizeMode: "contain" }} />
                                        </View>
                                        <View>
                                            <Text style={styles.headingSales}>125K</Text>
                                            <Text style={styles.subHeadingSale}>Customer</Text>
                                        </View>
                                    </ImageBackground>
                                </Pressable>
                                <Pressable>
                                    <ImageBackground source={IMageSale2} style={styles.proBgImage}>
                                        <View>
                                            <Image source={saleIcon2} style={{ width: 20, height: 20, resizeMode: "contain" }} />
                                        </View>
                                        <View>
                                            <Text style={styles.headingSales}>12</Text>
                                            <Text style={styles.subHeadingSale}>Product</Text>
                                        </View>
                                    </ImageBackground>
                                </Pressable>
                                <Pressable>
                                    <ImageBackground source={IMageSale3} style={styles.proBgImage}>
                                        <View>
                                            <Image source={saleIcon3} style={{ width: 20, height: 20, resizeMode: "contain" }} />
                                        </View>
                                        <View>
                                            <Text style={styles.headingSales}>2356K</Text>
                                            <Text style={styles.subHeadingSale}>Revenue</Text>
                                        </View>
                                    </ImageBackground>
                                </Pressable>
                            </View>
                        </View>
                    </View>
                    {/*Product Items */}

                    <View style={{ paddingHorizontal: 10 }}>
                        <View style={styles.sellContainer}>
                            <View style={styles.SellHeading}>
                                <Text style={{ color: "#3B3935", fontSize: 20, fontWeight: "700", fontFamily: "Nexa Bold" }}>Sell Services</Text>
                            </View>
                            <View style={styles.SellServicesContainer}> 
                                <Pressable style={[styles.proBgImage, styles.SellIconView]} onPress={() => navigation.navigate("credit card")}>
                                    <View>
                                        <Image source={SellIcon} style={[styles.SellIconIMG]} />
                                    </View>
                                    <View>
                                        <Text style={[styles.subHeadingSale, { color: "#3B3935", fontWeight: "500", fontSize: 11 }]}>Create Card</Text>
                                    </View>
                                </Pressable> 
                                <Pressable style={[styles.proBgImage, styles.SellIconView]} onPress={() => navigation.navigate("personal loan")}>
                                    <View>
                                        <Image source={SellIcon1} style={[styles.SellIconIMG]} />
                                    </View>
                                    <View>
                                        <Text style={[styles.subHeadingSale, { color: "#3B3935", fontWeight: "500", fontSize: 11 }]}>
                                        Personal Loan
                                        </Text>
                                    </View>
                                </Pressable> 
                                <Pressable style={[styles.proBgImage, styles.SellIconView]} onPress={() => navigation.navigate("Home loan")}>
                                    <View>
                                        <Image source={SellIcon2} style={[styles.SellIconIMG]} />
                                    </View>
                                    <View>
                                        <Text style={[styles.subHeadingSale, { color: "#3B3935", fontWeight: "500", fontSize: 11 }]}>
                                            Home Loan
                                        </Text>
                                    </View>
                                </Pressable> 
                                <Pressable style={[styles.proBgImage, styles.SellIconView]} onPress={() => navigation.navigate("business loan")}>
                                    <View>
                                        <Image source={SellIcon3} style={[styles.SellIconIMG]} />
                                    </View>
                                    <View>
                                        <Text style={[styles.subHeadingSale, { color: "#3B3935", fontWeight: "500", fontSize: 11 }]}>
                                            Business Loan
                                        </Text>
                                    </View>
                                </Pressable> 
                                <Pressable style={[styles.proBgImage, styles.SellIconView]} onPress={() => navigation.navigate("car loan")}>
                                    <View>
                                        <Image source={SellIcon4} style={[styles.SellIconIMG]} />
                                    </View>
                                    <View>
                                        <Text style={[styles.subHeadingSale, { color: "#3B3935", fontWeight: "500", fontSize: 11 }]}>
                                            Car Loan
                                        </Text>
                                    </View>
                                </Pressable> 
                                <Pressable style={[styles.proBgImage, styles.SellIconView]} onPress={() => navigation.navigate("motorinsurance")}>
                                    <View>
                                        <Image source={SellIcon5} style={[styles.SellIconIMG]} />
                                    </View>
                                    <View>
                                        <Text style={[styles.subHeadingSale, { color: "#3B3935", fontWeight: "500", fontSize: 11 }]}>
                                            Motor Insurance
                                        </Text>
                                    </View>
                                </Pressable> 
                                <Pressable style={[styles.proBgImage, styles.SellIconView]} onPress={() => navigation.navigate("FASTags")}>
                                    <View>
                                        <Image source={SellIcon6} style={[styles.SellIconIMG]} />
                                    </View>
                                    <View>
                                        <Text style={[styles.subHeadingSale, { color: "#3B3935", fontWeight: "500", fontSize: 11 }]}>
                                            Fastag
                                        </Text>
                                    </View>
                                </Pressable> 
                                <Pressable style={[styles.proBgImage, styles.SellIconView]} onPress={() => navigation.navigate("sell services")}>
                                    <View>
                                        <Image source={SellIcon7} style={[styles.SellIconIMG]} />
                                    </View> 
                                </Pressable> 
                            </View>
                        </View>

                        {/* Upcoming Services */}

                        <View style={styles.UpcomingContainer}>
                            <View style={styles.UpcomingHeading}>
                                <Text style={{ color: "#3B3935", fontSize: 20, fontWeight: "700", fontFamily: "Nexa Bold" }}>Upcoming Services</Text>
                                <Pressable onPress={() => navigation.navigate("Upcoming Service card")}>
                                    <Text style={{color:'#F89D28', fontWeight:'500'}}>See All</Text>
                                </Pressable>
                            </View>
                            <View style={{paddingVertical:15}}>
                                <FlatList 
                                    data={dataup}
                                    renderItem={({item}) => <UpcomingServices navigation={navigation} item={item} />}
                                    horizontal
                                    showsHorizontalScrollIndicator={false}
                                />
                            </View>
                        </View>

                        {/* Offer Services */}

                        <View style={styles.UpcomingContainer}>
                            <View style={styles.UpcomingHeading}>
                                <Text style={{ color: "#3B3935", fontSize: 20, fontWeight: "700", fontFamily: "Nexa Bold" }}>Offer</Text>
                                <Pressable onPress={() => navigation.navigate("OfferCardAll")}>
                                    <Text style={{color:'#F89D28', fontWeight:'500'}}>See All</Text>
                                </Pressable>
                            </View>
                            <View>
                            <FlatList 
                                    data={dataup}
                                    renderItem={({item}) => <OfferCard navigation={navigation} item={item} />}
                                    horizontal
                                    showsHorizontalScrollIndicator={false}
                                /> 
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <View style={{position:'absolute', bottom:10, right:10}}>
                <Pressable style={styles.circleAddIcons}>
                    <Ionicons name="add-circle-outline" style={{ fontSize: 35 }} color="#fff" />
                </Pressable>
            </View>
        </ImageBackground>
    );
};

// define your styles
const styles = StyleSheet.create({
    backggroundContainer: {
        flex: 1,
        resizeMode: "repeat",
        position:'relative'
    },
    container: {
        width: "100%",
    },
    GetStartContainer: {
        resizeMode: "contain",
        paddingHorizontal: 10,
        paddingTop: 20,
        paddingBottom: 40,
    },
    DisplayFLex: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },
    SliderImages: {
        width: 150,
        height: 140,
        resizeMode: "contain",
        alignItems: "center",
        justifyContent: "center",
        margin: "auto",
    },
    Pressablebutton: {
        backgroundColor: "#F89D28",
        paddingHorizontal: 10,
        paddingVertical: 7,
        borderRadius: 5,
    },
    proBgImage: {
        paddingVertical: 15,
        paddingHorizontal: 5,
        borderRadius: 12,
        resizeMode: "contain",
        width: 82,
        height: 82,
        alignItems: "center",
        justifyContent: "center",
    },
    headingSales: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "700",
        paddingTop: 3,
        textAlign: "center",
        fontFamily: "Nexa Bold",
    },
    subHeadingSale: {
        color: "#fff",
        fontSize: 14,
        fontWeight: "500",
        textAlign: "center",
        fontFamily: "Nexa Bold",
    },
    sellContainer: {
        paddingVertical: 10,
    },
    SellHeading: {},

    SellServicesContainer: {
        paddingVertical: 15,
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 4,
        justifyContent: "space-between",
    },
    SellIconView: {
        borderWidth: 1,
        borderColor: "#F0EDED",
        backgroundColor: "#FBFBFB",
        alignItems: "center",
        justifyContent: "center",
    },
    SellIconIMG: {
        width: 30,
        height: 30,
        resizeMode: "contain",
    },
    UpcomingContainer: {},
    UpcomingHeading: {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    circleAddIcons:{
        backgroundColor:'#F89D28',
        borderRadius:50,
        width:40,
        height:40,
        alignItems:'center',
        justifyContent:'center',
        borderWidth:1,
        borderColor:'#F0EDED'
    }
});

//make this component available to the app
export default Homes;
