import { StyleSheet, Text, View, ImageBackground, SafeAreaView, Pressable, TextInput } from "react-native";
import React from "react";
import bgImg from "../../../assets/img/bg-gradient-linear-new.png";

const FASTag = ({navigation}) => {
    return (
        <ImageBackground source={bgImg} style={styles.backggroundContainer}>
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <View>
                        <Text style={styles.lablename}>Name</Text>
                        <TextInput style={styles.inputNumber} keyboardType="default" placeholder="Enter Owner Name" placeholderTextColor="#12121D4D" />
                    </View>
                    <View>
                        <Text style={styles.lablename}>Mobile Number</Text>
                        <TextInput style={styles.inputNumber} keyboardType="numbers-and-punctuation" placeholder="Select rto" placeholderTextColor="#12121D4D" />
                    </View>
                    <View>
                        <Text style={styles.lablename}>PAN  Number</Text>
                        <TextInput style={styles.inputNumber} keyboardType="default" placeholder="Select manufacturer" placeholderTextColor="#12121D4D" />
                    </View>
                    <View>
                        <Text style={styles.lablename}>Vehicle Number</Text>
                        <TextInput style={styles.inputNumber} keyboardType="default" placeholder="Select manufacturer" placeholderTextColor="#12121D4D" />
                    </View>
                </View>
                <View style={{ paddingVertical: 15 }}>
                    <Pressable style={styles.ContinusBtn} onPress={() => navigation.navigate("Verification OTP")}>
                        <Text style={{ color: "#fff", textAlign: "center", fontSize: 16, fontWeight:'600' }}>Submit Now</Text>
                    </Pressable>
                </View>
            </SafeAreaView>
        </ImageBackground>
    );
};

export default FASTag;

const styles = StyleSheet.create({
    backggroundContainer: {
        flex: 1,
        resizeMode: "repeat",
        paddingHorizontal: 15,
        paddingTop: 10,
    },
    lablename:{ 
        fontWeight: "500",
        color: "#3B3935"
    },
    inputNumber: {
        width: "100%",
        borderRadius: 12,
        borderColor: "#C4C4C7",
        borderWidth: 1,
        paddingHorizontal: 15,
        marginVertical: 10,
        fontSize: 16,
        fontWeight: "400",
        backgroundColor: "#fff",
        position: "relative",
        zIndex: 1,
    },
    ContinusBtn: {
        backgroundColor: "#F89D28",
        paddingHorizontal: 15,
        paddingVertical: 14,
        borderRadius: 50,
        width: "100%",
    },
});
