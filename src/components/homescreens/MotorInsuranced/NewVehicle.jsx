import React, { useState } from "react";
import { StyleSheet, Text, View, ImageBackground, TextInput, Pressable, ScrollView, Modal, Image } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";
import bgImg from "../../../assets/img/bg-gradient-linear-new.png";

import carlogo from '../../../assets/ManufacturerIcons/Datsun.png'
import carlogo2 from '../../../assets/ManufacturerIcons/ford.png'
import carlogo3 from '../../../assets/ManufacturerIcons/honda.png'
import carlogo4 from '../../../assets/ManufacturerIcons/hyundai.png'
import carlogo5 from '../../../assets/ManufacturerIcons/kiv.png'
import carlogo6 from '../../../assets/ManufacturerIcons/mahindra.png'
import carlogo7 from '../../../assets/ManufacturerIcons/renault.png'
import carlogo8 from '../../../assets/ManufacturerIcons/suzuki.png'
import { SearchBar } from "@rneui/themed";


const NewVehicle = () => {

    const manufacturers = [
        {
            img:carlogo,
        },
        {
            img:carlogo2,
        },
        {
            img:carlogo3,
        },
        {
            img:carlogo4,
        },
        {
            img:carlogo5,
        },
        {
            img:carlogo6,
        },
        {
            img:carlogo7,
        },
        {
            img:carlogo8,
        }, 
    ];
    const modalscar = [
        {
            titles:'Carenes',
        },
        {
            titles:'Carnival',
        },
        {
            titles:'Seltos',
        },
        {
            titles:'Sonet',
        },
        {
            titles:'EV6',
        },
        {
            titles:'Niro',
        },
        {
            titles:'Sorento',
        },
        {
            titles:'Sportage',
        }, 
        {
            titles:'S11',
        }, 
    ];
    const Varients = [
        {
            titles:'GT LINE(77.4 KW)',
        },
        {
            titles:'GT LINE AWD(77.4 KW)',
        }
         
    ];

    const [modalVisible, setModalVisible] = useState(false);
    const [modalsVisible, setModalsVisible] = useState(false);
    const [modalVarient, setModalVarient] = useState(false);

    const [search, setSearch] = useState("");

    const updateSearch = (search) => {
      setSearch(search);
    };

    return (
        <ImageBackground source={bgImg} style={styles.backggroundContainer}>
            <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
                <View style={{ paddingBottom: 5 }}>
                    <Text style={{ fontWeight: "500", fontSize: 13, color: "#141516" }}>Vehicle Owner Name</Text>
                    <TextInput keyboardType="default" placeholder="Enter Owner Name" placeholderTextColor="#12121D4D" style={styles.inputNumber} />
                </View>
                <View style={{ paddingBottom: 5 }}>
                    <Text style={{ fontWeight: "500", fontSize: 13, color: "#141516" }}>RTO</Text>
                    <TextInput keyboardType="default" placeholder="Select rto" placeholderTextColor="#12121D4D" style={styles.inputNumber} />
                </View>
                <View style={{ paddingBottom: 5 }}>
                    <Text style={{ fontWeight: "500", fontSize: 13, color: "#141516" }}>Manufacturer</Text>
                    <Pressable onPress={() => setModalVisible(true)} style={[styles.inputNumber, { flexDirection: "row", alignItems: "center", justifyContent: "space-between" }]}>
                        <Text style={{ Color: "#12121D4D", fontSize: 14, fontWeight: "600" }}>Select manufacturer</Text>
                        <Feather name="chevron-down" size={22} color="#12121D4D" />
                    </Pressable>
                </View>
                <View style={{ paddingBottom: 5 }}>
                    <Text style={{ fontWeight: "500", fontSize: 13, color: "#141516" }}>Modal</Text>
                    <Pressable onPress={() => setModalsVisible(true)} style={[styles.inputNumber, { flexDirection: "row", alignItems: "center", justifyContent: "space-between" }]}>
                        <Text style={{ Color: "#12121D4D", fontSize: 14, fontWeight: "600" }}>Select model</Text>
                        <Feather name="chevron-down" size={22} color="#12121D4D" />
                    </Pressable>
                </View> 
                <View style={{ paddingBottom: 5 }}>
                    <Text style={{ fontWeight: "500", fontSize: 13, color: "#141516" }}>Varient</Text>
                    <Pressable onPress={() => setModalVarient(true)} style={[styles.inputNumber, { flexDirection: "row", alignItems: "center", justifyContent: "space-between" }]}>
                        <Text style={{ Color: "#12121D4D", fontSize: 14, fontWeight: "600" }}>Select Varient</Text>
                        <Feather name="chevron-down" size={22} color="#12121D4D" />
                    </Pressable>
                </View> 
                 
                {/* Manufacturer Modal*/}
                <View style={styles.centeredView}>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                            Alert.alert("Modal has been closed.");
                            setModalVisible(!modalVisible);
                        }}
                    >
                        <View style={[styles.centeredView, {backgroundColor:'#00000066'}]}> 
                            <View style={styles.modalView}>
                                <View style={styles.closeIcons}>
                                    <Pressable onPress={() => setModalVisible(!modalVisible)}>
                                        <AntDesign name="closecircleo" size={25} color="#fff" />
                                    </Pressable>
                                </View>
                                <View style={styles.containerModal}>
                                    <View style={styles.ManufacturerText}>
                                        <Text style={{color:'#3B3935', fontSize:18, fontWeight:'600'}}>Manufacturer</Text>
                                        <View style={{position:'relative', marginTop:10}}> 
                                            <SearchBar placeholder="Search Manufacturer.eg kia..." onChangeText={updateSearch} value={search}
                                            containerStyle={{
                                                padding:0,
                                                borderRadius:5,
                                                borderColor:'#dadde1'
                                            }} 
                                            inputContainerStyle={{
                                                backgroundColor:'#f7f7f7', 
                                            }}
                                            />
                                        </View>
                                    </View>
                                    <View>
                                         <View style={{flexDirection:'row', alignItems:'center', gap:6, flexWrap:'wrap', justifyContent:'space-between'}}>
                                            {manufacturers.map((items, index) => {
                                                return (
                                                    <Pressable key={index} style={styles.carbuttonContainer}>
                                                        <View style={styles.carImageContainer}>
                                                            <Image source={items.img} style={styles.carImage} alt="img" />
                                                        </View>
                                                    </Pressable> 
                                                )
                                            })}
                                        </View>
                                    </View>
                                    <View style={{paddingVertical:15}}>
                                        <Pressable>
                                            <Text style={{textAlign:'center', fontSize:16}}>See All</Text>
                                        </Pressable>
                                    </View>
                                </View> 
                            </View>
                        </View>
                    </Modal>
                </View>

                {/* Select Modal*/}
                <View style={styles.centeredView}>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalsVisible}
                        onRequestClose={() => {
                            Alert.alert("Modal has been closed.");
                            setModalsVisible(!modalsVisible);
                        }}
                    >
                        <View style={[styles.centeredView, {backgroundColor:'#00000066'}]}> 
                            <View style={styles.modalView}>
                                <View style={styles.closeIcons}>
                                    <Pressable onPress={() => setModalsVisible(!modalsVisible)}>
                                        <AntDesign name="closecircleo" size={25} color="#fff" />
                                    </Pressable>
                                </View>
                                <View style={styles.containerModal}>
                                    <View style={styles.ManufacturerText}>
                                        <Text style={{color:'#3B3935', fontSize:18, fontWeight:'600'}}>Modal</Text>
                                        <View style={{position:'relative', marginTop:10}}> 
                                            <SearchBar placeholder="Search Model..." onChangeText={updateSearch} value={search}
                                            containerStyle={{
                                                padding:0,
                                                borderRadius:5,
                                                borderColor:'#dadde1'
                                            }} 
                                            inputContainerStyle={{
                                                backgroundColor:'#f7f7f7', 
                                            }}
                                            />
                                        </View>
                                    </View>
                                    <View>
                                         <View style={{flexDirection:'row', alignItems:'center', gap:6, flexWrap:'wrap',}}>
                                            {modalscar.map((items, index) => {
                                                return (
                                                    <Pressable key={index} style={styles.carModalbuttonContainer}>
                                                         <Text>{items.titles}</Text>
                                                    </Pressable> 
                                                )
                                            })}
                                        </View>
                                    </View>
                                    <View style={{paddingVertical:15}}>
                                        <Pressable>
                                            <Text style={{textAlign:'center', fontSize:16}}>See All</Text>
                                        </Pressable>
                                    </View>
                                </View> 
                            </View>
                        </View>
                    </Modal>
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
                        <View style={[styles.centeredView, {backgroundColor:'#00000066'}]}> 
                            <View style={styles.modalView}>
                                <View style={styles.closeIcons}>
                                    <Pressable onPress={() => setModalVarient(!modalVarient)}>
                                        <AntDesign name="closecircleo" size={25} color="#fff" />
                                    </Pressable>
                                </View>
                                <View style={styles.containerModal}>
                                    <View style={styles.ManufacturerText}>
                                        <Text style={{color:'#3B3935', fontSize:18, fontWeight:'600'}}>Varient</Text>
                                        <View style={{position:'relative', marginTop:10}}> 
                                            <SearchBar placeholder="Search Model..." onChangeText={updateSearch} value={search}
                                            containerStyle={{
                                                padding:0,
                                                borderRadius:5,
                                                borderColor:'#dadde1'
                                            }} 
                                            inputContainerStyle={{
                                                backgroundColor:'#f7f7f7', 
                                            }}
                                            />
                                        </View>
                                    </View>
                                    <View>
                                         <View style={{flexDirection:'row', alignItems:'center', gap:6, flexWrap:'wrap',}}>
                                            {Varients.map((items, index) => {
                                                return (
                                                    <Pressable key={index} style={styles.VarientsbuttonContainer}>
                                                         <Text>{items.titles}</Text>
                                                    </Pressable> 
                                                )
                                            })}
                                        </View>
                                    </View>
                                    <View style={{paddingVertical:15}}>
                                        <Pressable>
                                            <Text style={{textAlign:'center', fontSize:16}}>See All</Text>
                                        </Pressable>
                                    </View>
                                </View> 
                            </View>
                        </View>
                    </Modal>
                </View>
            </ScrollView>

            <View style={{ paddingTop: 15 }}>
                <Pressable style={styles.sendOTPContainer} onPress={() => navigation.navigate("")}>
                    <Text style={{ color: "#fff", fontSize: 17, fontWeight: "600" }}>Submit</Text>
                </Pressable>
            </View>
        </ImageBackground>
    );
};

export default NewVehicle;

const styles = StyleSheet.create({
    backggroundContainer: {
        flex: 1,
        resizeMode: "repeat",
        paddingHorizontal: 15,
        paddingVertical: 20,
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
        width: "100%",
        backgroundColor: "#F89D28",
        paddingVertical: 15,
        paddingHorizontal: 20,
        textAlign: "center",
        alignItems: "center",
        borderRadius: 100,
    },
    // Modal Css

    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        position:'relative'
    },
    modalView: {
        position:'absolute',
        bottom:0,
        // margin: 20,
        backgroundColor: "white",
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        paddingHorizontal: 15,
        paddingVertical: 20, 
        shadowColor: "#000",
        width:'100%',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    closeIcons:{
        position:'absolute',
        top:-40,
        left:0,
        right:0,
        alignItems:'center',
        justifyContent:'center'
    },
    containerModal:{},
    ManufacturerText:{
        paddingBottom:20
    },
     
    carbuttonContainer:{
        width:78,
        height:78,
        borderWidth:1,
        borderColor:'#C4C4C7',
        borderRadius:12,
        overflow:'hidden',
        padding:4
    },
     
    carModalbuttonContainer:{
        width:'32%', 
        borderWidth:1,
        borderColor:'#C4C4C7',
        borderRadius:6,
        overflow:'hidden',
        paddingHorizontal:15,
        paddingVertical:10
    },
    VarientsbuttonContainer:{
        width:'100%', 
        borderWidth:1,
        borderColor:'#C4C4C7',
        borderRadius:6,
        overflow:'hidden',
        paddingHorizontal:15,
        paddingVertical:15
    },
    carImageContainer:{},
    carImage:{
        width:'100%',
        height:'default',
        aspectRatio:1
    },
});
