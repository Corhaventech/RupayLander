import React, { useState } from "react";
import { StyleSheet, Text, View, ImageBackground, SafeAreaView, Pressable } from "react-native";
import bgImg from "../../../assets/img/bg-gradient-linear-new.png";
import { CheckBox, Slider } from "@rneui/themed";

const SuggestBestCard = ({navigation}) => {
    const [selectedIndex, setIndex] = React.useState(0);
    return (
        <ImageBackground source={bgImg} style={styles.backggroundContainer}>
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <View>
                        <Text style={styles.OccupationTitle}>Occupation</Text>
                        <View style={{ paddingTop: 15 }}>
                            <View style={styles.salarirdView}>
                                <CheckBox
                                    checked={selectedIndex === 0}
                                    onPress={() => setIndex(0)}
                                    checkedIcon="dot-circle-o"
                                    uncheckedIcon="circle-o"
                                    checkedColor="#F89D28"
                                    title="Salaried"
                                    textStyle={{ color: "#3B3935", fontWeight: "700", fontSize: 16 }}
                                    containerStyle={{
                                        padding: 0,
                                        backgroundColor: "#ffffff00",
                                        margin: 0,
                                        left: -10,
                                    }}
                                />
                            </View>
                            <View style={styles.salarirdView}>
                                <CheckBox
                                    checked={selectedIndex === 1}
                                    onPress={() => setIndex(1)}
                                    checkedIcon="dot-circle-o"
                                    uncheckedIcon="circle-o"
                                    checkedColor="#F89D28"
                                    title="Self employed"
                                    textStyle={{ color: "#3B3935", fontWeight: "700", fontSize: 16 }}
                                    containerStyle={{
                                        padding: 0,
                                        backgroundColor: "#ffffff00",
                                        margin: 0,
                                        left: -10,
                                    }}
                                />
                            </View>
                        </View>
                    </View>
                    <View style={{ paddingVertical: 15 }}>
                        <Text style={styles.OccupationTitle}>Annual Income</Text>
                        <View style={{ paddingVertical: 15 }}>
                            <View style={{ flexDirection: 'row', }}>
                                <Text style={styles.IncomePrice}>Rs.100000.00</Text>
                            </View>
                        </View>
                        <View >
                            <View style={{ paddingVertical: 10 }}>
                                <Slider
                                    thumbTintColor="#F89D28"
                                    minimumValue={0}
                                    maximumValue={1000}
                                    allowTouchTrack
                                    thumbStyle={{ height: 20, width: 20, backgroundColor: '#F89D28' }}
                                />
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Text style={styles.IncomePrice}>Rs.100000.00</Text>
                                <Text style={styles.IncomePrice}>Rs.200000.00</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ paddingTop: 15 }}>
                        <Text style={styles.OccupationTitle}>Interest</Text>
                        <View style={{ paddingTop: 15 }}>
                            <View style={styles.salarirdView}>
                                <CheckBox
                                    checked={selectedIndex === 3}
                                    onPress={() => setIndex(3)}
                                    iconType="material-community"
                                    checkedIcon="checkbox-marked"
                                    uncheckedIcon="checkbox-blank-outline"
                                    checkedColor="#F89D28"
                                    title="Lifestyle"
                                    textStyle={{ color: "#3B3935", fontWeight: "500", fontSize: 16 }}
                                    containerStyle={{
                                        padding: 0,
                                        backgroundColor: "#ffffff00",
                                        margin: 0,
                                        left: -10,
                                    }}
                                />
                            </View>
                            <View style={styles.salarirdView}>
                                <CheckBox
                                    checked={selectedIndex === 4}
                                    onPress={() => setIndex(4)}
                                    iconType="material-community"
                                    checkedIcon="checkbox-marked"
                                    uncheckedIcon="checkbox-blank-outline"
                                    checkedColor="#F89D28"
                                    title="Travel"
                                    textStyle={{ color: "#3B3935", fontWeight: "500", fontSize: 16 }}
                                    containerStyle={{
                                        padding: 0,
                                        backgroundColor: "#ffffff00",
                                        margin: 0,
                                        left: -10,
                                    }}
                                />
                            </View>
                            <View style={styles.salarirdView}>
                                <CheckBox
                                    checked={selectedIndex === 5}
                                    onPress={() => setIndex(5)}
                                    iconType="material-community"
                                    checkedIcon="checkbox-marked"
                                    uncheckedIcon="checkbox-blank-outline"
                                    checkedColor="#F89D28"
                                    title="Fuel"
                                    textStyle={{ color: "#3B3935", fontWeight: "500", fontSize: 16 }}
                                    containerStyle={{
                                        padding: 0,
                                        backgroundColor: "#ffffff00",
                                        margin: 0,
                                        left: -10,
                                    }}
                                />
                            </View>
                        </View>
                    </View>
                </View>

                
                <View style={{ paddingVertical: 15, }}>
                    <Pressable style={styles.ContinusBtn} onPress={() => navigation.navigate("SuggestedFiveCard")}>
                        <Text style={{ color: '#fff', textAlign: 'center', fontSize: 16 }}>Suggest card</Text>
                    </Pressable>
                </View>
            </SafeAreaView>
        </ImageBackground>
    );
};

export default SuggestBestCard;

const styles = StyleSheet.create({
    backggroundContainer: {
        flex: 1,
        resizeMode: "repeat",
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    OccupationTitle: {
        fontSize: 16,
        color: "#3B3935",
        fontWeight: "600",
    },
    salarirdView: {
        paddingVertical: 12
    },
    IncomePrice: {
        backgroundColor: '#fff',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderWidth: 1,
        borderColor: '#C4C4C7',
        borderRadius: 5,
        fontSize: 14,
        fontWeight: '500'
    },
    ContinusBtn: {
        backgroundColor: '#F89D28',
        paddingHorizontal: 15,
        paddingVertical: 14,
        borderRadius: 50,
        width: '100%'
    }
});
