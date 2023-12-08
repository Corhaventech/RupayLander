import React from 'react'
import { StyleSheet, Text, View, ImageBackground, FlatList, ScrollView, Pressable } from 'react-native'
import bgImg from '../../../assets/img/bg-gradient-linear-new.png'
import CompareSelectedCardDetails from './CompareSelectedCardDetails'
import Data from '../../data/CompareSelectedCardData'

const CompareSelectedCard = () => {
  return (
    <ImageBackground source={bgImg} style={styles.backggroundContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{flex:1}}>
          <FlatList
            data={Data}
            renderItem={({ item }) => <CompareSelectedCardDetails item={item} />}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Pressable style={styles.Download}>
            <Text>Download</Text>
          </Pressable>
          <Pressable style={styles.shreCustomer}>
            <Text>Share with Customer</Text>
          </Pressable>
        </View>
      </ScrollView>
    </ImageBackground>
  )
}

export default CompareSelectedCard;

const styles = StyleSheet.create({
  backggroundContainer: {
    flex: 1,
    resizeMode: 'repeat',
    paddingHorizontal: 5,
    paddingVertical: 10
  },
  buttonContainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingVertical:5,
    paddingHorizontal:8
  },
  Download:{
    borderColor:'#F89D28',
    borderWidth:1,
    borderRadius:50,
    paddingHorizontal:15,
    paddingVertical:10,
    width:'48%',
    alignItems:'center',
    justifyContent:'center'
  },
  shreCustomer:{
    backgroundColor:'#F89D28',
    borderRadius:50,
    paddingHorizontal:15,
    paddingVertical:10,
    width:'48%',
    alignItems:'center',
    justifyContent:'center'
  },
})