import React, { useState } from "react";
import { Text, View, TouchableOpacity, StatusBar, Pressable, StyleSheet, Image } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Homes from "../homescreens/Homes";
import Customer from "../homescreens/Customer";
import Wallet from "../homescreens/Wallet";
import Offers from "../homescreens/Offers";
import Media from "../homescreens/Media";

import user from "../../assets/img/Ellipse.png";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = (props) => {
    const { navigation } = props;
    return (
        <>
            <StatusBar backgroundColor="#fff" barStyle="dark-content" />
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        if (route.name === "Homes") {
                            iconName = focused ? "home" : "home-outline";
                        } else if (route.name === "Lead") {
                            iconName = focused ? "cart" : "cart-outline";
                        } else if (route.name === "Wallet") {
                            iconName = focused ? "wallet" : "wallet-outline";
                        } else if (route.name === "Offers") {
                            iconName = focused ? "ticket" : "ticket-outline";
                        } else if (route.name === "Media") {
                            iconName = focused ? "person" : "person-outline";
                        }

                        // You can return any component that you like here!
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },

                    tabBarActiveTintColor: "#F89D28",
                    tabBarInactiveTintColor: "#3B3935",
                    tabBarShowLabel: true,
                    tabBarHideOnKeyboard: true,
                    headerStyle: { backgroundColor: "#fff" },
                    headerTintColor: "#000",
                    tabBarStyle: {
                        activeTinatColor: "#000",
                        inactiveTintColor: "#3B3935",
                        showLabel: true,
                        backgroundColor: "#fff",
                        height: 70,
                        paddingBottom: 15,
                        borderTopColor: "#ddd",
                    },

                    headerShown: false,
                    headerShadowVisible: false,
                    headerTitleStyle: { fontSize: 16, fontWeight: "500" },
                })}
            >
                <Tab.Screen
                    name="Homes"
                    options={({ navigation }) => ({
                        headerStyle: { backgroundColor: "#fff" },
                        headerShown: true,
                        headerTitle: false,
                        backTitle: null,
                        headerLeft: () => (
                            <View style={{ left: 10, flexDirection: "row", gap: 10, alignItems: "center" }}>
                                <View>
                                    <Pressable style={styles.userView} onPress={() => navigation.navigate("profile")}>
                                        <Image source={user} style={styles.userImage} />
                                    </Pressable>
                                </View>
                                <View>
                                    <Text style={{ color: "#3B3935", fontSize: 16, fontWeight: "600" }}>Welcome Back 👋 </Text>
                                    <Text style={{ color: "#3B3935", fontSize: 12, fontWeight: "400" }}>Nicky Johnson </Text>
                                </View>
                            </View>
                        ),
                        headerRight: () => (
                            <View style={{ position: "relative", right: 10 }}>
                                <Pressable style={styles.menubtn} onPress={() => navigation.navigate("notification")}>
                                    <Ionicons name="notifications" size={25} color="#3B3935" />
                                </Pressable>
                            </View>
                        ),
                        headerTitleStyle: {
                            display: "none",
                        },
                    })}
                >
                    {(props) => <Homes {...props} />}
                </Tab.Screen>

                <Tab.Screen
                    name="Lead"
                    options={({ navigation }) => ({
                        title: "Lead",
                        // tabBarBadge: 1,
                        headerShown: true,
                        headerRight: () => (
                            <View style={{right: 15 }}>
                                <Pressable style={styles.menubtn} onPress={() => navigation.navigate("notification")}>
                                    <Ionicons name="notifications" size={25} color="#3B3935" />
                                </Pressable>
                            </View>
                        ),
                        tabBarIcon: ({ color, size }) => <AntDesign name="customerservice" color={color} size={size} />,
                    })}
                >
                    {(props) => <Customer {...props} />}
                </Tab.Screen>

                <Tab.Screen
                    name="Wallet"
                    options={{
                        title: "Wallet",
                        headerShown: true,
                        headerRight: () => (
                            <TouchableOpacity style={styles.cartIcons} onPress={() => navigation.navigate("notification")}>
                                <Ionicons name="notifications" style={{ fontSize: 25 }} color="#000" />
                            </TouchableOpacity>
                        ),
                    }}
                >
                    {(props) => <Wallet {...props} />}
                </Tab.Screen>
                <Tab.Screen
                    name="Offers"
                    options={{
                        title: "Offer",
                        headerShown: true,
                        headerRight: () => (
                            <TouchableOpacity style={styles.cartIcons} onPress={() => navigation.navigate("notification")}>
                                <Ionicons name="notifications" style={{ fontSize: 25 }} color="#000" />
                            </TouchableOpacity>
                        ),
                        tabBarIcon: ({ color, size }) => <MaterialIcons name="local-offer" color={color} size={size} />,
                    }}
                >
                    {(props) => <Offers {...props} />}
                </Tab.Screen>

                <Tab.Screen
                    name="Media"
                    options={({ navigation }) => ({
                        title: "Media",
                        headerTitleStyle: {
                            display: "none",
                        },
                        headerShown: true,
                        headerRight: () => (
                            <Pressable style={styles.cartIcons} onPress={() => navigation.navigate("setting profile")}>
                                <Ionicons name="settings-outline" style={{ fontSize: 25 }} color="#000" />
                            </Pressable>
                        ),
                        tabBarIcon: ({ color, size }) => <MaterialIcons name="video-collection" color={color} size={size} />,
                    })}
                >
                    {(props) => <Media {...props} />}
                </Tab.Screen>
            </Tab.Navigator>
        </>
    );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({
    userImage: {
        width: 50,
        height: 50,
        resizeMode: "contain",
        borderRadius: 50,
        borderWidth: 1,
        borderColor: "#C4C4C7",
    },
    cartIcons: {
        right: 15,
        // width: 35,
        // height: 35,
        // borderRadius: 8,
        // shadowColor: "#000",
        // shadowOffset: {
        //     width: 0,
        //     height: 5,
        // },
        // shadowOpacity: 0.36,
        // shadowRadius: 6.68,
        // elevation: 11,
        // alignItems: "center",
        // justifyContent: "center",
        // backgroundColor: "#fff",
    },
});
