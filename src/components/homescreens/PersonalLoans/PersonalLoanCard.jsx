import { StyleSheet, Text, View, ImageBackground, Image, Pressable } from 'react-native'
import React, { useState } from 'react'    


const PersonalLoanCard = ({item, navigation}) => {
    return (
        <View>
            <ImageBackground source={item.bgImage} style={[styles.CardContainer, {backgroundColor:item.bgColor}]}>
                <View style={styles.flexRow}>
                    <View style={[styles.flexRow, { justifyContent: 'flex-start', gap: 10, }]}>
                        <View>
                            <Image source={item.img} style={styles.IconImage} alt='img' />
                        </View>
                        <View>
                            <Text style={styles.HdfcTextTitles}>{item.bankname}</Text>
                        </View>
                    </View>
                    <Pressable style={styles.EarnTetx}  onPress={() => navigation.navigate("enrings")}>
                        <Text style={styles.compareText}>{item.earn}</Text>
                    </Pressable>
                </View>

                <View style={{ paddingVertical: 10 }}>
                    <View style={[styles.flexRow, { justifyContent: 'space-between', gap: 10, }]}>
                        <Text style={styles.VouchersMonthText}>1. {item.Processing}</Text>
                        <Text style={styles.VouchersMonthText}>{item.Processing1}</Text>
                    </View>
                    <View style={[styles.flexRow, { justifyContent: 'space-between', gap: 10, }]}>
                        <Text style={styles.VouchersMonthText}>2. {item.Loan}</Text>
                        <Text style={styles.VouchersMonthText}>{item.Loan1}</Text>
                    </View>
                    <View style={[styles.flexRow, { justifyContent: 'space-between', gap: 10, }]}>
                        <Text style={styles.VouchersMonthText}>3. {item.Tenure}</Text>
                        <Text style={styles.VouchersMonthText}>{item.Tenure1}</Text>
                    </View>
                </View>
                <View style={{ paddingBottom: 10 }}>
                    <View style={styles.flexRow}>
                        <View>
                            <Text style={styles.JoineeText}>{item.Loanac}</Text>
                        </View>
                        <Text style={{ color: '#fff' }}>|</Text>
                        <View>
                            <Text style={styles.JoineeText}>{item.Loanac1}</Text>
                        </View>
                    </View>
                    <View style={[styles.flexRow, { justifyContent: 'space-between', gap: 7, }]}>
                        <Text style={styles.JoineeText}>{item.Approval}</Text>
                        <Text style={styles.JoineeText}>Good</Text>
                    </View>
                </View>
                <View style={[styles.flexRow, { justifyContent: 'flex-end', gap: 15, paddingVertical: 5 }]}>
                    <Pressable style={styles.ViewButtons} onPress={() => navigation.navigate('KreditBeeDetail')}> 
                        <Text style={styles.btnTitle}>View Detail</Text>
                    </Pressable>
                    <Pressable onPress={() => navigation.navigate('ApplyOnline')} style={[styles.ViewButtons, { backgroundColor: '#fff' }]}>
                        <Text style={[styles.btnTitle, { color: '#00589B' }]}>Sell Now</Text>
                    </Pressable>
                </View>
            </ImageBackground>
        </View>
    )
}

export default PersonalLoanCard;

const styles = StyleSheet.create({
    CardContainer: {
        borderRadius: 12,
        padding: 12,
        overflow: 'hidden',
        width: '100%',
        resizeMode: 'contain',
        height: 'auto',
        backgroundColor: '#00589B',
        marginBottom: 10
    },
    flexRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    checkText: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 5
    },
    EarnTetx: {
        backgroundColor: '#fff',
        padding: 6,
        borderRadius: 5
    },
    compareText: {
        color: '#222',
    },
    IconImage: {
        width: 40,
        height: 40,
        borderRadius: 5
    },
    HdfcTextTitles: {
        fontSize: 18,
        fontWeight: '600',
        color: '#fff'
    },
    VouchersMonthText: {
        lineHeight: 20,
        color: '#fff',
        fontWeight: '500',
        paddingBottom: 5,
        fontSize: 12
    },
    JoineeText: {
        lineHeight: 20,
        color: '#fff',
        fontWeight: '500',
        fontSize: 11
    },
    ViewButtons: {
        borderWidth: 1,
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderColor: '#fff',
        borderRadius: 50,
    },
    btnTitle: {
        fontSize: 11,
        color: '#fff',
        fontWeight: '500'
    }
})