import { StyleSheet, Text, View, ImageBackground, TextInput, Pressable, ScrollView } from "react-native";
import React, { useState } from "react";
import OtpInputs from "react-native-otp-inputs";
import bgImg from "../../../assets/img/bg-gradient-linear-new.png";
import AntDesign from "react-native-vector-icons/AntDesign";

const ApplyOnlineVerificationotp = () => {
    return (
        <ImageBackground source={bgImg} style={styles.backggroundContainer}>
            <View style={styles.container}>
                <View style={{ flex: 1, }}>
                    <View style={{ alignItems: "flex-start" }}>
                        <Text style={styles.mainHeading}>OTP</Text>
                        <Text style={[styles.subTitle, { paddingTop: 10, paddingBottom: 20 }]}>
                            Enter the 4 digit <Text style={{ color: "#F89D28", fontWeight: "600",}}> OTP</Text> sent to your phone..
                        </Text>
                    </View>
                    <View style={styles.PhoneNumberContainer}>
                        <View>
                            <Text style={{ fontWeight: "500", fontSize: 14, color: "#141516" }}>OTP</Text>
                        </View>
                        <View style={{ alignItems: "center", justifyContent: "center", gap: 10, flexDirection: "row", paddingVertical: 20 }}>
                            <OtpInputs
                                // handleChange={(code) => console.log(code)}
                                numberOfInputs={4}
                                placeholder="*"
                                placeholderTextColor={"#F89D28"}
                                paddingHorizontal={15}
                                textAlign="center"
                                borderRadius={5}
                                borderWidth={1}
                                borderColor="#F89D28"
                                fontSize={20}
                                color="#F89D28"
                                fontWeight="600"
                                backgroundColor="#fff"
                            />
                        </View>

                        <View>
                            <Pressable>
                                <Text style={{ color: "#F89D28", fontSize: 16 }}>
                                    <AntDesign name="reload1" size={16} color="#F89D28" /> Resend Code
                                </Text>
                            </Pressable>
                        </View>
                    </View>
                </View>

                <View style={{ paddingVertical: 20 }}>
                    <Pressable style={styles.sendOTPContainer} onPress={() => navigation.navigate("Basic Profile Information")}>
                        <Text style={{ color: "#fff", fontSize: 17, fontWeight: "600" }}>Submit OTP</Text>
                    </Pressable>
                </View>
            </View>
        </ImageBackground>
    );
};

export default ApplyOnlineVerificationotp;

const styles = StyleSheet.create({
    backggroundContainer: {
        flex: 1,
        resizeMode: "repeat",
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    flexDirection: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
    },
    container: {
        flex: 1,
        position: "relative",
        width: "100%",
    },
    mainHeading: {
        color: "#3B3935",
        fontWeight: "700",
        fontSize: 30,
        fontFamily: "Nexa Bold",
        alignItems: "flex-start",
    },
    subTitle: {
        lineHeight: 25,
        color: "#232323",
        fontSize: 15,
        fontWeight: "400",
    },
    PhoneNumberContainer: {
        paddingVertical: 20,
        width: "100%",
    },
    inputNumber: {
        borderRadius: 12,
        borderColor: "#3B3935",
        borderWidth: 1,
        paddingHorizontal: 15,
        marginVertical: 10,
        fontSize: 18,
        fontWeight: "500",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
    },
    sendOTPContainer: {
        width: "100%",
        backgroundColor: "#F89D28",
        paddingVertical: 15,
        paddingHorizontal: 20,
        textAlign: "center",
        alignItems: "center",
        borderRadius: 100,
    },
});
