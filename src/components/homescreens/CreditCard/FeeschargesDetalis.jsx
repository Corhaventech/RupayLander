import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FeeschargesDetalis = () => {
    return (
        <View>
            <View>
                <Text style={styles.Title}>Fees&charges:</Text> 
                <Text style={styles.TitleDis}>Joining Fee / Renewal Membership Fee – ₹500 /- + Applicable Charges</Text>
                <Text style={styles.TitleDis}>Spend ₹2,00,000 or more in a year, before your Credit Card renewal date and get your renewal fee waived off
                Exclusions for Spends of Rs. 2,00,000 and above for eligibility of renewal year fee waiver are as follows:</Text>
                 <Text style={styles.TitleDis}>1. Cash on Call</Text>
                <Text style={styles.TitleDis}>2. Balance Transfer</Text>
                <Text style={styles.TitleDis}>3. Cash Withdrawal</Text>
                <Text style={styles.TitleDis}>Click here to view details of Fees and Charges</Text>
                <Text style={styles.TitleDis}>Click here for Card Member Agreement</Text>
            </View>
        </View>
    )
}

export default FeeschargesDetalis

const styles = StyleSheet.create({
    Title: {
        fontSize: 15,
        color: "#3B3935",
        marginVertical: 10,
        fontWeight: "600",
    },
    TitleDis: {
        lineHeight: 19,
        paddingBottom: 7,
        color: "#3B3935",
    },
})