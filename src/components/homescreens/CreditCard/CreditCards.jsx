import { StyleSheet, Text, View, ImageBackground, ScrollView, TextInput, Pressable, FlatList } from "react-native";
import React from "react";
import bgImg from "../../../assets/img/bg-gradient-linear-new.png";
import Feather from "react-native-vector-icons/Feather";
import Entypo from "react-native-vector-icons/Entypo";
import CreditCardBox from "./CreditCardBox";
import Data from "../../data/CreateData";
import CompareSelectedCard from "./CompareSelectedCard";

const CreditCards = ({ navigation }) => {
    const allbankdata = [
        {
            name: "All",
            textColor: "#fff",
            bgColor: "#F89D28",
            borderColor: "#F89D28",
        },
        {
            name: "ICICI",
            textColor: "#3B3935",
        },
        {
            name: "HDFC",
            textColor: "#3B3935",
        },
        {
            name: "SBI",
            textColor: "#3B3935",
        },
        {
            name: "Standard Charted",
            textColor: "#3B3935",
        },
        {
            name: "IDFC",
            textColor: "#3B3935",
        },
        {
            name: "Induslnd",
            textColor: "#3B3935",
        },
        {
            name: "Axis",
            textColor: "#3B3935",
        },
        {
            name: "DBS",
            textColor: "#3B3935",
        },
    ];

    return (
        <ImageBackground source={bgImg} style={styles.backggroundContainer}>
            <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
                <View style={styles.SearchContainer}>
                    <View style={{ position: "relative" }}>
                        <TextInput keyboardType="web-search" placeholder="Search Credit card..." placeholderTextColor="#12121D4D" style={styles.TextInputContainer} />
                        <Pressable style={styles.SearchIcon}>
                            <Feather name="search" size={25} color="#fff" />
                        </Pressable>
                    </View>
                </View>
                <View style={{ paddingVertical: 15 }}>
                    <Pressable style={styles.suggestContainer} onPress={() => navigation.navigate("SuggestBestCard")}>
                        <View>
                            <Text style={{ fontSize: 16, color: "#fff", fontWeight: "500" }}>Let suggest best card</Text>
                        </View>
                        <View>
                            <Entypo name="chevron-thin-right" color="#fff" size={18} />
                        </View>
                    </Pressable>
                </View>
                <View>
                    <FlatList
                        data={allbankdata}
                        renderItem={({ item }) => (
                            <Pressable style={[styles.AllHeadingContainer, styles.AllHeadingContainerSelect, { backgroundColor: item.bgColor, borderColor: item.borderColor }]}>
                                <Text style={[styles.AllHeading, { color: item.textColor }]}>{item.name}</Text>
                            </Pressable>
                        )}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
                <View>
                    <FlatList
                        // data={data}
                        renderItem={({ Items }) => <CompareSelectedCard navigation={navigation} item={Items} />}
                    />
                </View>
                <View style={{ paddingVertical: 10 }}>
                    <FlatList showsVerticalScrollIndicator={false} data={Data} renderItem={({ item }) => <CreditCardBox navigation={navigation} item={item} />} />
                </View>
            </ScrollView>
            <View style={{ paddingTop: 8 }}>
                <Pressable style={styles.PressableCompare} onPress={() => navigation.navigate("Compare Credit Card")}>
                    <Text style={styles.TextCompare}>Compare selected card</Text>
                </Pressable>
            </View>
        </ImageBackground>
    );
};

export default CreditCards;

const styles = StyleSheet.create({
    backggroundContainer: {
        flex: 1,
        resizeMode: "repeat",
        paddingHorizontal: 15,
        paddingBottom: 10,
    },
    SearchContainer: {
        marginTop: 10,
    },
    TextInputContainer: {
        borderWidth: 1,
        borderColor: "#C4C4C7",
        backgroundColor: "#fff",
        paddingHorizontal: 15,
        borderRadius: 12,
        fontWeight: "500",
    },
    SearchIcon: {
        backgroundColor: "#F89D28",
        position: "absolute",
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 13,
        borderTopRightRadius: 12,
        borderBottomRightRadius: 12,
    },
    suggestContainer: {
        backgroundColor: "#F89D28",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 15,
        borderRadius: 12,
    },
    AllHeadingContainer: {
        backgroundColor: "#F89D28",
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 10,
    },
    AllHeadingContainerSelect: {
        backgroundColor: "#fff",
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 10,
        borderWidth: 1,
        borderColor: "#C4C4C7",
    },
    AllHeading: {
        fontSize: 14,
        color: "#fff",
        fontWeight: "600",
    },
    PressableCompare: {
        backgroundColor: "#F89D28",
        padding: 13,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        // position:'absolute',
        // bottom:10,
        width: "100%",
    },
    TextCompare: {
        color: "#fff",
        fontWeight: "500",
        fontSize: 16,
    },
});
