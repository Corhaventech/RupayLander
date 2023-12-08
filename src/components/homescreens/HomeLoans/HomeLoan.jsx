import React, { useState } from "react";
import { StyleSheet, Text, View, ImageBackground, Modal, Pressable, FlatList } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import bgImg from "../../../assets/img/bg-gradient-linear-new.png";
import { CheckBox, Slider } from "@rneui/themed";
import PersonalLoanCard from "../PersonalLoans/PersonalLoanCard";
import data from "../../data/PersonalLoanCardData";

const HomeLoan = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisible0, setModalVisible0] = useState(false);
    const [selectedIndex, setIndex] = React.useState(0);

    return (
        <ImageBackground source={bgImg} style={styles.backggroundContainer}>
            <View style={styles.filterContainers}>
                <View style={[styles.FlexRow, { justifyContent: "flex-end" }]}>
                    <Pressable style={styles.SortButtons} onPress={() => setModalVisible(true)}>
                        <Text style={styles.SortTExt}>Sort by</Text>
                        <Entypo name="chevron-thin-down" size={17} color="#3B3935" />
                    </Pressable>
                    <Pressable style={styles.SortButtons} onPress={() => setModalVisible0(true)}>
                        <Text style={styles.SortTExt}>Filter</Text>
                        <Entypo name="chevron-thin-down" size={17} color="#3B3935" />
                    </Pressable>
                </View>

                <View style={[styles.centeredView]}>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                            Alert.alert("Modal has been closed.");
                            setModalVisible(!modalVisible);
                        }}
                    >
                        <View style={[styles.centeredView, { backgroundColor: "#00000066" }]}>
                            <View style={styles.modalView}>
                                <View style={[styles.FlexRow, { justifyContent: "space-between", paddingBottom: 15 }]}>
                                    <View>
                                        <Text style={styles.SortmodalText}>Sort By</Text>
                                    </View>
                                    <Pressable onPress={() => setModalVisible(!modalVisible)}>
                                        <MaterialCommunityIcons name="reload" size={25} color="#3B3935" />
                                    </Pressable>
                                </View>
                                <View>
                                    <View style={styles.salarirdView}>
                                        <CheckBox
                                            checked={selectedIndex === 0}
                                            onPress={() => setIndex(0)}
                                            checkedIcon="dot-circle-o"
                                            uncheckedIcon="circle-o"
                                            checkedColor="#F89D28"
                                            title="Interest rate"
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
                                            checked={selectedIndex === 1}
                                            onPress={() => setIndex(1)}
                                            checkedIcon="dot-circle-o"
                                            uncheckedIcon="circle-o"
                                            checkedColor="#F89D28"
                                            title="Disbursal Amount"
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
                                            checked={selectedIndex === 2}
                                            onPress={() => setIndex(2)}
                                            checkedIcon="dot-circle-o"
                                            uncheckedIcon="circle-o"
                                            checkedColor="#F89D28"
                                            title="Processing Time"
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
                                            checked={selectedIndex === 3}
                                            onPress={() => setIndex(3)}
                                            checkedIcon="dot-circle-o"
                                            uncheckedIcon="circle-o"
                                            checkedColor="#F89D28"
                                            title="Approval Rate"
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
                    </Modal>
                </View>
                <View style={[styles.centeredView]}>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible0}
                        onRequestClose={() => {
                            Alert.alert("Modal has been closed.");
                            setModalVisible0(!modalVisible0);
                        }}
                    >
                        <View style={[styles.centeredView, { backgroundColor: "#00000066" }]}>
                            <View style={styles.modalView}>
                                <View style={[styles.FlexRow, { justifyContent: "space-between", paddingBottom: 15 }]}>
                                    <View>
                                        <Text style={styles.SortmodalText}>Filter</Text>
                                    </View>
                                    <Pressable onPress={() => setModalVisible0(!modalVisible0)}>
                                        <MaterialCommunityIcons name="reload" size={25} color="#3B3935" />
                                    </Pressable>
                                </View>
                                <View>
                                    <View style={{ paddingVertical: 10 }}>
                                        <Text style={styles.SortmodalText}>Employment Type</Text>
                                    </View>
                                    <View style={styles.salarirdView}>
                                        <CheckBox
                                            checked={selectedIndex === 0}
                                            onPress={() => setIndex(0)}
                                            checkedIcon="dot-circle-o"
                                            uncheckedIcon="circle-o"
                                            checkedColor="#F89D28"
                                            title="Salaried"
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
                                            checked={selectedIndex === 1}
                                            onPress={() => setIndex(1)}
                                            checkedIcon="dot-circle-o"
                                            uncheckedIcon="circle-o"
                                            checkedColor="#F89D28"
                                            title="Self-Employed"
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
                                            checked={selectedIndex === 2}
                                            onPress={() => setIndex(2)}
                                            checkedIcon="dot-circle-o"
                                            uncheckedIcon="circle-o"
                                            checkedColor="#F89D28"
                                            title="Student"
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
                                <View>
                                    <View style={{ paddingVertical: 10 }}>
                                        <Text style={styles.SortmodalText}>Disbursal Time</Text>
                                    </View>
                                    <View style={styles.salarirdView}>
                                        <CheckBox
                                            checked={selectedIndex === 3}
                                            onPress={() => setIndex(3)}
                                            checkedIcon="dot-circle-o"
                                            uncheckedIcon="circle-o"
                                            checkedColor="#F89D28"
                                            title="Instant"
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
                                            checkedIcon="dot-circle-o"
                                            uncheckedIcon="circle-o"
                                            checkedColor="#F89D28"
                                            title="Upto 3days"
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
                                <View>
                                    <View style={{ paddingVertical: 10 }}>
                                        <Text style={styles.SortmodalText}>Loan Type</Text>
                                    </View>
                                    <View style={styles.salarirdView}>
                                        <CheckBox
                                            checked={selectedIndex === 3}
                                            onPress={() => setIndex(3)}
                                            checkedIcon="dot-circle-o"
                                            uncheckedIcon="circle-o"
                                            checkedColor="#F89D28"
                                            title="Secured Loan"
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
                                            checkedIcon="dot-circle-o"
                                            uncheckedIcon="circle-o"
                                            checkedColor="#F89D28"
                                            title="Unsecured Loan"
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
                    </Modal>
                </View>
            </View>

            <View style={{ flex: 1 }}>
                <FlatList data={data} renderItem={({ item }) => <PersonalLoanCard navigation={navigation} item={item} />} showsVerticalScrollIndicator={false} />
            </View>
        </ImageBackground>
    );
};

export default HomeLoan;

const styles = StyleSheet.create({
    backggroundContainer: {
        flex: 1,
        resizeMode: "repeat",
        paddingHorizontal: 15,
        paddingTop: 10,
    },
    filterContainers: {
        paddingBottom: 15,
    },
    FlexRow: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },
    SortButtons: {
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#C4C4C7",
        paddingHorizontal: 10,
        paddingVertical: 10,
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
        borderRadius: 4,
    },
    SortTExt: {
        color: "#3B3935",
        fontSize: 13,
        fontWeight: "500",
    },

    // MOdal
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modalView: {
        width: "100%",
        backgroundColor: "white",
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        padding: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        bottom: 0,
        position: "absolute",
    },
    SortmodalText: {
        color: "#3B3935",
        fontSize: 18,
        fontWeight: "500",
    },
    salarirdView: {
        paddingVertical: 6,
    },
});
