import React from 'react'
import { View, Text, StyleSheet, ImageBackground, Image, Pressable, ScrollView, FlatList } from "react-native";
import bgImg from "../../../assets/img/bg-gradient-linear-new.png";

// SellIcon
import SellIcon from "../../../assets/icons/Credit-Card.png";
import SellIcon1 from "../../../assets/icons/Personal-Loan.png";
import SellIcon2 from "../../../assets/icons/Home-Loan.png";
import SellIcon3 from "../../../assets/icons/Business-Loan.png";
import SellIcon4 from "../../../assets/icons/Car-Loan.png";
import SellIcon5 from "../../../assets/icons/Motor-Insurance.png";
import SellIcon6 from "../../../assets/icons/Fastag.png";
import SellIcon7 from "../../../assets/icons/Add_Bottuns.png";

const SellServicesMore = () => {
    return (
        <ImageBackground source={bgImg} style={styles.backggroundContainer}>
            <View>
                <View style={styles.SellServicesContainer}>
                    <Pressable style={[styles.proBgImage, styles.SellIconView]}
                    // onPress={() => navigation.navigate("notification")}
                    >
                        <View>
                            <Image source={SellIcon} style={[styles.SellIconIMG]} />
                        </View>
                        <View>
                            <Text style={[styles.subHeadingSale, { color: "#3B3935", fontWeight: "500", fontSize: 11 }]}>Credit Card</Text>
                        </View>
                    </Pressable>
                    <Pressable style={[styles.proBgImage, styles.SellIconView]} onPress={() => navigation.navigate("sell services")}>
                        <View>
                            <Image source={SellIcon1} style={[styles.SellIconIMG]} />
                        </View>
                        <View>
                            <Text style={[styles.subHeadingSale, { color: "#3B3935", fontWeight: "500", fontSize: 11 }]}>Personal Loan</Text>
                        </View>
                    </Pressable>
                    <Pressable style={[styles.proBgImage, styles.SellIconView]} onPress={() => navigation.navigate("sell services")}>
                        <View>
                            <Image source={SellIcon2} style={[styles.SellIconIMG]} />
                        </View>
                        <View>
                            <Text style={[styles.subHeadingSale, { color: "#3B3935", fontWeight: "500", fontSize: 11 }]}>Home Loan</Text>
                        </View>
                    </Pressable>
                    <Pressable style={[styles.proBgImage, styles.SellIconView]} onPress={() => navigation.navigate("sell services")}>
                        <View>
                            <Image source={SellIcon3} style={[styles.SellIconIMG]} />
                        </View>
                        <View>
                            <Text style={[styles.subHeadingSale, { color: "#3B3935", fontWeight: "500", fontSize: 11 }]}>Business Loan</Text>
                        </View>
                    </Pressable>
                    <Pressable style={[styles.proBgImage, styles.SellIconView]} onPress={() => navigation.navigate("sell services")}>
                        <View>
                            <Image source={SellIcon4} style={[styles.SellIconIMG]} />
                        </View>
                        <View>
                            <Text style={[styles.subHeadingSale, { color: "#3B3935", fontWeight: "500", fontSize: 11 }]}>Car Loan</Text>
                        </View>
                    </Pressable>
                    <Pressable style={[styles.proBgImage, styles.SellIconView]} onPress={() => navigation.navigate("sell services")}>
                        <View>
                            <Image source={SellIcon5} style={[styles.SellIconIMG]} />
                        </View>
                        <View>
                            <Text style={[styles.subHeadingSale, { color: "#3B3935", fontWeight: "500", fontSize: 11 }]}>Motor Insurance</Text>
                        </View>
                    </Pressable>
                    <Pressable style={[styles.proBgImage, styles.SellIconView]} onPress={() => navigation.navigate("sell services")}>
                        <View>
                            <Image source={SellIcon6} style={[styles.SellIconIMG]} />
                        </View>
                        <View>
                            <Text style={[styles.subHeadingSale, { color: "#3B3935", fontWeight: "500", fontSize: 11 }]}>Fastag</Text>
                        </View>
                    </Pressable>
                    <Pressable style={[styles.proBgImage, styles.SellIconView]} onPress={() => navigation.navigate("sell services")}>
                        <View>
                            <Image source={SellIcon7} style={[styles.SellIconIMG]} />
                        </View> 
                    </Pressable>
                </View>
            </View>
        </ImageBackground>
    )
}

export default SellServicesMore

const styles = StyleSheet.create({
    backggroundContainer: {
        flex: 1,
        resizeMode: "repeat",
        paddingVertical: 15,
        paddingHorizontal: 10
    }, 
    SellServicesContainer: { 
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 4,
        justifyContent: "space-between",
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
})