import { StyleSheet, Text, View, ImageBackground, Pressable, SafeAreaView, FlatList } from "react-native";
import React from "react";
import bgImg from "../../assets/img/bg-gradient-linear-new.png";
import { Divider } from "@rneui/themed";
import WalletList from "./wallets/WalletList";
import data from "../data/WalletListData";

const Wallet = ({ navigation }) => {
    return (
        <ImageBackground source={bgImg} style={styles.backggroundContainer}>
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.earningsMainContainer}>
                    <View style={[styles.flexDirection, { justifyContent: "space-between", marginBottom: 20 }]}>
                        <View style={styles.flexDirection}>
                            <Text style={styles.Total}>Total earnings</Text>
                            <Text style={styles.price}>₹0</Text>
                        </View>
                        <View style={styles.flexDirection}>
                            <Text style={styles.Total}>Sent to Bank</Text>
                            <Text style={styles.price}>₹0</Text>
                        </View>
                    </View>
                    <View style={[styles.flexDirection, { justifyContent: "space-between", marginBottom: 15 }]}>
                        <View>
                            <Text style={styles.Total}>Wallet</Text>
                            <Text style={styles.price}>₹0</Text>
                        </View>
                        <View>
                            <Pressable style={styles.TransferBtn}>
                                <Text style={{ color: "#fff", fontWeight: "500" }}>Transfer to Bank</Text>
                            </Pressable>
                        </View>
                    </View>
                    <Divider />
                    <View style={{ paddingVertical: 10 }}>
                        <Text style={styles.transferText}>Last transfer date: 08 Dec 2023</Text>
                    </View>
                </View>
                <View style={{marginTop:20, flex:1}}>
                    <View style={[styles.flexDirection, { justifyContent: "space-between", marginBottom:10 }]}>
                        <Text style={{ color: "#3B3935", fontSize: 16, fontWeight: "700", fontFamily: "Nexa Bold" }}>Payment history</Text>
                        <Pressable onPress={() => navigation.navigate("PaymentHistory")}>
                            <Text style={{ color: "#F89D28", fontWeight: "500" }}>See All</Text>
                        </Pressable>
                    </View>
                    <FlatList data={data} renderItem={({ item }) => <WalletList navigation={navigation} item={item} />} showsVerticalScrollIndicator={false} />
                </View>
            </SafeAreaView>
        </ImageBackground>
    );
};

export default Wallet;

const styles = StyleSheet.create({
    backggroundContainer: {
        flex: 1,
        resizeMode: "repeat",
        paddingHorizontal: 15,
        paddingTop:10
    },
    earningsMainContainer: {
        backgroundColor: "#fff",
        padding: 15,
        borderRadius: 12,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        elevation: 11,
    },
    flexDirection: {
        flexDirection: "row",
        alignItems: "center",
        gap: 15,
    },
    Total: {
        fontSize: 15,
        fontWeight: "600",
        color: "#3B3935",
    },
    price: {
        fontSize: 14,
        fontWeight: "500",
        color: "#33CC66",
    },
    TransferBtn: {
        paddingHorizontal: 15,
        paddingVertical: 8,
        borderRadius: 50,
        backgroundColor: "#F89D28",
    },
    transferText: {
        color: "#3B3935",
        textAlign: "center",
        fontWeight: "600",
    },
});
