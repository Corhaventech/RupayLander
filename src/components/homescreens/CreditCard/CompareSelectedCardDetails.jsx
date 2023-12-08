import { StyleSheet, Text, View, SafeAreaView, Pressable } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'

const CompareSelectedCardDetails = ({ item }) => {
  return (
    <SafeAreaView style={styles.SafeAreaViewContainer}>
      <Pressable style={styles.closeButton}>
        <AntDesign name="close" color="#3B3935" size={22} />
      </Pressable>
      <View style={{ paddingVertical: 15 }}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.title}>{item.earn}</Text>
        <View>
          <Text style={styles.feature}>{item.feature}</Text>
        </View>
        <View>
          <Text style={styles.Description}>1. {item.dis1}</Text>
          <Text style={styles.Description}>2. {item.dis1}</Text>
          <Text style={styles.Description}>3. {item.dis1}</Text>
        </View>
        <View>
          <Text style={styles.feature}>{item.benefit}</Text>
          <Text style={styles.Description}>1. {item.benefit1}</Text>
          <Text style={styles.Description}>2. {item.benefit2}</Text>
          <Text style={styles.Description}>3. {item.benefit3}</Text>
        </View>
        <View style={{ paddingVertical: 10 }}>
          <Text style={styles.benefitdis}>{item.benefitdis}</Text>
          <Text style={styles.benefitdis}>{item.benefitdis2}</Text>
          <Text style={styles.benefitdis}>{item.benefitdis3}</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default CompareSelectedCardDetails

const styles = StyleSheet.create({
  SafeAreaViewContainer: {
    backgroundColor: '#fff',
    margin: 6,
    padding: 10,
    borderRadius: 12,
    position: 'relative',
    width: 250,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,

  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: '600',
    color: '#3B3935',
    marginBottom: 6
  },
  feature: {
    color: '#F89D28',
    fontSize: 14,
    fontWeight: '600',
    marginVertical: 5
  },
  Description: {
    fontSize: 11,
    lineHeight: 19,
    paddingBottom: 5,
    fontWeight: '400'
  },
  benefitdis: {
    fontWeight: "600",
    fontSize: 14,
    color: '#3B3935',
    paddingBottom: 5
  },
})