import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const EligibilityDetails = () => {
    return (
        <View>
            <View>
                <Text style={styles.Title}>Eligibility:</Text>
                <Text style={styles.Title}>For Salaried Indian national</Text>
                <Text style={styles.TitleDis}>Age: Min 21 years & Max 60 Years</Text>
                <Text style={styles.TitleDis}>Net Monthly Income - ₹25,000</Text>
                <Text style={styles.Title}>For Self Employed Indian national</Text>
                <Text style={styles.TitleDis}>Age: Min 21 years & Max 65 Years</Text>
                <Text style={styles.TitleDis}>ITR - Rs 6 Lakhs per annum</Text>
            </View>
        </View>
    )
}

export default EligibilityDetails

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