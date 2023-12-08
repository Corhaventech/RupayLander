import { ScrollView, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import bgImg from '../../../assets/img/bg-gradient-linear-new.png'

const UpcomingServiceDetails = () => {
  return (
    <ImageBackground source={bgImg} style={styles.backggroundContainer}>
      <ScrollView showsVerticalScrollIndicator={false} style={{ paddingTop: 10 }}>
        <View style={styles.landerDetailTextContainer}>
          <Text style={styles.heading}>Unified Payments Interface (UPI)</Text>
          <Text style={styles.discHeading}>Unified Payments Interface (UPI) is a system that powers multiple bank accounts into a single mobile application (of any participating bank), merging several banking features, seamless fund routing & merchant payments into one hood. It also caters to the “Peer to Peer” collect request which can be scheduled and paid as per requirement and convenience.</Text>
          <Text style={styles.discHeading}>With the above context in mind, NPCI conducted a pilot launch with 21 member banks. The pilot launch was on 11th April 2016 by Dr. Raghuram G Rajan, Governor, RBI at Mumbai. Banks have started to upload their UPI enabled Apps on Google Play store from 25th August, 2016 onwards.</Text>
        </View>
        <View style={styles.landerDetailTextContainer}>
          <Text style={styles.heading}>How is it unique?</Text>
          <Text style={styles.discHeading}>Immediate money transfer through mobile device round the clock 24*7 and 365 days.</Text>
          <Text style={styles.discHeading}>Single mobile application for accessing different bank accounts.</Text>
          <Text style={styles.discHeading}>Single Click 2 Factor Authentication Aligned with the Regulatory guidelines, yet provides for a very strong feature of seamless single click payment.</Text>
          <Text style={styles.discHeading}>Virtual address of the customer for Pull & Push provides for incremental security with the customer not required to enter the details such as Card no, Account number; IFSC etc.</Text>
          <Text style={styles.discHeading}>QR Code</Text>
          <Text style={styles.discHeading}>Best answer to Cash on Delivery hassle, running to an ATM or rendering exact amount.</Text>
          <Text style={styles.discHeading}>Merchant Payment with Single Application or In-App Payments.</Text>
          <Text style={styles.discHeading}>Utility Bill Payments, Over the Counter Payments, QR Code (Scan and Pay) based payments.</Text>
          <Text style={styles.discHeading}>Donations, Collections, Disbursements Scalable.</Text>
          <Text style={styles.discHeading}>Raising Complaint from Mobile App directly.</Text>
        </View>

      </ScrollView>
    </ImageBackground>
  )
}

export default UpcomingServiceDetails

const styles = StyleSheet.create({
  backggroundContainer: {
    flex: 1,
    resizeMode: 'repeat',
    paddingHorizontal: 15,
    paddingBottom: 20
  },
  landerDetailTextContainer: {
    paddingBottom: 15
  },
  heading: {
    fontSize: 14,
    color: '#3B3935',
    fontFamily: 'Nexa Bold',
    fontWeight: '700',
    lineHeight: 24,
    marginBottom:10
  },
  discHeading: {
    fontSize: 12,
    color: '#888888',
    lineHeight: 20,
    fontFamily: 'Nexa Bold',
    paddingBottom: 10,
  }
})