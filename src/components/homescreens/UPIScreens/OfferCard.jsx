//import liraries
import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';


// create a component
const OfferCard = ({ item, navigation }) => {
    return (
        <View style={styles.container}>
            <View style={[styles.UPICOntainer, { backgroundColor: item.bgColor }]}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 15 }}>
                    <View style={{ paddingVertical: 7, width: '60%' }}>
                        <Text style={styles.upiHeading}>{item.ofrtitle}</Text>
                        <Text style={styles.uipdiscariptions}>{item.ofrtitlediscration}</Text>
                        <View>
                            <Pressable style={styles.LearnNow}>
                                <Text style={{ color: '#F89D28', fontSize: 16, textAlign: 'center' }}>Sell Now</Text>
                            </Pressable>
                        </View>
                    </View>
                    <View>
                        <Image source={item.ofrcrdimage} style={styles.upiIconsWidth} />
                    </View>
                </View>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 15
    },
    UPICOntainer: {
        borderRadius: 12,
        padding: 15,
        width: 310,
        marginRight: 10
    },
    upiIconsWidth: {
        width: 100,
        height: 120,
        resizeMode: 'contain'
    },
    upiHeading: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '700',
        paddingBottom: 5
    },
    uipdiscariptions: {
        color: '#fff',
        fontSize: 11
    },
    LearnNow: {
        backgroundColor: '#fff',
        paddingVertical: 8,
        borderRadius: 50,
        width: 120,
        top: 12
    }
});

//make this component available to the app
export default OfferCard;
