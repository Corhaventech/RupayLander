//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';


// create a component
const UpcomingServices = ({ item, navigation }) => {
    return (
        <View style={[styles.UPICOntainer, {backgroundColor:item.bgColor}]}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <View>
                    <Image source={item.image} style={styles.upiIconsWidth} />
                </View>
                <View>
                    <Pressable style={styles.LearnNow} onPress={() => navigation.navigate("Upcoming Service Details")}>
                        <Text style={{ color: '#F89D28', fontSize: 16 }}>Learn Now</Text>
                    </Pressable>
                </View>
            </View>
            <View style={{ paddingVertical: 15 }}>
                <Text style={styles.upiHeading}>{item.title}</Text>
                <Text style={styles.uipdiscariptions}>{item.discration}</Text>
            </View>
        </View>


    );
};

// define your styles
const styles = StyleSheet.create({
    UPICOntainer: { 
        borderRadius: 12,
        padding: 20,
        width: 310,
        marginRight: 10
    },
    upiIconsWidth: {
        width: 68,
        height: 41,
        resizeMode: 'contain'
    },
    upiHeading: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '700',
        paddingBottom: 5
    },
    uipdiscariptions: {
        color: '#fff',
        fontSize: 14
    },
    LearnNow: {
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 8,
        borderRadius: 50
    }
});

//make this component available to the app
export default UpcomingServices;
