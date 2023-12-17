import React, { useState } from 'react'
import { StyleSheet, Text, View, ImageBackground, Modal, Pressable, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import bgImg from '../../../assets/img/bg-gradient-linear-new.png'
import carIcon from '../../../assets/ManufacturerIcons/kiv.png'
import { Divider, SearchBar } from "@rneui/themed";

const CityofRegistrationCar = ({ navigation }) => {
    const [modalVarient, setModalVarient] = useState(false);
    const [search, setSearch] = useState("");

    const updateSearch = (search) => {
        setSearch(search);
    };

    return (
        <ImageBackground source={bgImg} style={styles.backggroundContainer}>
            <View style={{ flex: 1 }}>
                <View style={{ paddingBottom: 10 }}>
                    <View style={[styles.flexRow, { justifyContent: 'space-between', marginBottom: 15 }]}>
                        <View style={styles.flexRow}>
                            <View>
                                <Image source={carIcon} resizeMode='contain' style={{ width: 40, height: 40 }} />
                            </View>
                            <View>
                                <Text style={{ fontWeight: '600', fontSize: 14, color: '#141516' }}>KIA EV6</Text>
                                <Text style={{ fontWeight: '600', fontSize: 15, color: '#141516' }}>GT LINE(77.4 KW)</Text>
                            </View>
                        </View>
                        <TouchableOpacity onPress={() => setModalVarient(true)}>
                            <Text style={{ fontSize: 16, color: '#3B3935', fontWeight: '500' }}>Edit</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.flexRow, { justifyContent: 'space-between', marginBottom: 15 }]}>
                        <View>
                            <Text style={{ fontWeight: '600', fontSize: 14, color: '#141516' }}>Registration Year</Text>
                            <Text style={{ fontWeight: '600', fontSize: 15, color: '#141516' }}>2023</Text>
                        </View>
                        <TouchableOpacity>
                            <Text style={{ fontSize: 16, color: '#3B3935', fontWeight: '500' }}>Edit</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.flexRow, { justifyContent: 'space-between' }]}>
                        <View>
                            <Text style={{ fontWeight: '600', fontSize: 14, color: '#141516' }}>RTO</Text>
                            <Text style={{ fontWeight: '600', fontSize: 15, color: '#141516' }}>OD-33</Text>
                        </View>
                        <TouchableOpacity>
                            <Text style={{ fontSize: 16, color: '#3B3935', fontWeight: '500' }}>Edit</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginVertical: 15 }}>
                        <Divider style={{ borderStyle: 'dashed', }} />
                    </View>
                    <View>
                        <SearchBar placeholder="Search Model..." onChangeText={updateSearch} value={search}
                            containerStyle={{
                                padding: 0,
                                borderRadius: 5,
                                borderColor: '#dadde1',
                                borderWidth: 1,
                            }}
                            inputContainerStyle={{
                                backgroundColor: '#f7f7f7',
                            }}
                        />
                    </View>
                    {/* Varient Modal*/}
                    <View style={styles.centeredView}>
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={modalVarient}
                            onRequestClose={() => {
                                Alert.alert("Modal has been closed.");
                                setModalVarient(!modalVarient);
                            }}
                        >
                            <View style={[styles.centeredView, { backgroundColor: '#00000066' }]}>
                                <View style={styles.modalView}>
                                    <View style={styles.closeIcons}>
                                        <Pressable onPress={() => setModalVarient(!modalVarient)}>
                                            <AntDesign name="closecircleo" size={25} color="#fff" />
                                        </Pressable>
                                    </View>
                                    <View style={styles.containerModal}>
                                        <View style={styles.ManufacturerText}>
                                            <Text style={{ color: '#3B3935', fontSize: 18, fontWeight: '600', textAlign:'center' }}>Fill Your Detail</Text>
                                             
                                        </View>
                                        <View> 
                                            <View style={{ paddingBottom: 5 }}>
                                                <Text style={{ fontWeight: "500", fontSize: 13, color: "#141516" }}>Name(as mention in PAN)</Text>
                                                <TextInput keyboardType="default" placeholder="Enter loan amount" placeholderTextColor="#12121D4D" style={styles.inputNumber} />
                                            </View>
                                            <View style={{ paddingBottom: 5 }}>
                                                <Text style={{ fontWeight: "500", fontSize: 13, color: "#141516" }}>Phone</Text>
                                                <TextInput keyboardType="default" placeholder="Enter Phone Number" placeholderTextColor="#12121D4D" style={styles.inputNumber} />
                                            </View> 
                                            <View style={{ paddingBottom: 5 }}>
                                                <Text style={{ fontWeight: "500", fontSize: 13, color: "#141516" }}>Email</Text>
                                                <TextInput keyboardType="default" placeholder="Enter email" placeholderTextColor="#12121D4D" style={styles.inputNumber} />
                                            </View> 
                                        </View>
                                        <View style={{ paddingVertical: 15 }}>  
                                                <TouchableOpacity style={styles.BtnSeries}>
                                                    <Text style={{ color: '#fff', fontWeight: '500', fontSize: 16 }}>Submit</Text>
                                                </TouchableOpacity>  
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </Modal>
                    </View>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <TouchableOpacity style={styles.searchbtns}>
                        <Text>OD-33-BHUVNESHWER ||</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.searchbtns}>
                        <Text>OD-33-BHUVNESHWER ||</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.searchbtns}>
                        <Text>OD-33-BHUVNESHWER ||</Text>
                    </TouchableOpacity>

                </ScrollView>
            </View>

            <View style={{ paddingVertical: 15, }}>
                <Pressable style={styles.sendOTPContainer}
                //  onPress={() => navigation.navigate("")}
                >
                    <Text style={{ color: '#fff', fontSize: 17, fontWeight: '600' }}>Submit</Text>
                </Pressable>
            </View>
        </ImageBackground>
    )
}

export default CityofRegistrationCar;

const styles = StyleSheet.create({
    backggroundContainer: {
        flex: 1,
        resizeMode: 'repeat',
        paddingHorizontal: 15,
        paddingTop: 20
    },
    flexRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15
    },
    searchbtns: {
        width: '100%',
        borderRadius: 12,
        borderColor: '#C4C4C7',
        borderWidth: 1,
        padding: 15,
        marginBottom: 10,
        backgroundColor: '#fff'
    },
    inputNumber: {
        width: "100%",
        borderRadius: 8,
        borderColor: "#C4C4C7",
        borderWidth: 1,
        paddingHorizontal: 15,
        marginVertical: 10,
        fontSize: 15,
        fontWeight: "500",
        backgroundColor: "#fff",
        paddingVertical: 15,
        height: 53,
    },
    sendOTPContainer: {
        width: '100%',
        backgroundColor: '#F89D28',
        paddingVertical: 15,
        paddingHorizontal: 20,
        textAlign: 'center',
        alignItems: 'center',
        borderRadius: 100,
    },

    BtnSeries: {
        width: '100%',
        backgroundColor: '#F89D28',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12
    },
    // Modal Css

    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        position: 'relative'
    },
    modalView: {
        position: 'absolute',
        bottom: 0,
        // margin: 20,
        backgroundColor: "white",
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        paddingHorizontal: 15,
        paddingVertical: 20,
        shadowColor: "#000",
        width: '100%',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    closeIcons: {
        position: 'absolute',
        top: -40,
        left: 0,
        right: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    containerModal: {},
    ManufacturerText: {
        paddingBottom: 20
    },

    carbuttonContainer: {
        width: 78,
        height: 78,
        borderWidth: 1,
        borderColor: '#C4C4C7',
        borderRadius: 12,
        overflow: 'hidden',
        padding: 4
    },

    carModalbuttonContainer: {
        width: '32%',
        borderWidth: 1,
        borderColor: '#C4C4C7',
        borderRadius: 6,
        overflow: 'hidden',
        paddingHorizontal: 15,
        paddingVertical: 10
    },
    VarientsbuttonContainer: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#C4C4C7',
        borderRadius: 6,
        overflow: 'hidden',
        paddingHorizontal: 15,
        paddingVertical: 15
    },
    carImageContainer: {},
    carImage: {
        width: '100%',
        height: 'default',
        aspectRatio: 1
    },
}); 