import { ImageBackground, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react' 

const MediaCard = ({item, navigation}) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('MediaBrochuresShare')} style={styles.CardContainer}>
        <ImageBackground resizeMode='cover' style={styles.ImageBackgroundImage} source={item.bgIMage}>
            <View style={styles.imgesContainer}>
                <Image source={item.logo} style={styles.imges} alt='img' />
            </View>
        </ImageBackground>
        <View style={{paddingHorizontal:2, marginBottom:3}}>
            <Text style={styles.title}>{item.title}</Text>
        </View> 
    </TouchableOpacity>
  )
}

export default MediaCard;

const styles = StyleSheet.create({
  CardContainer:{
    flex:1,
      backgroundColor: "#fff", 
      borderRadius: 12,
      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 5,
      },
      shadowOpacity: 0.36,
      shadowRadius: 6.68,
      elevation: 2,
      margin:5,
      overflow:'hidden', 
      width:'auto', 
  },
  ImageBackgroundImage:{
      width:'100%',
      height:undefined,
      aspectRatio:1
  },
  imgesContainer:{
      backgroundColor:'#fff',
      position:'absolute',
      right:5,
      top:5,
      padding:5,
      borderRadius:5
  },
  imges:{
      width:22,
      height:22,
      resizeMode:'contain'
  },
  title:{
      fontSize:14,
      textAlign:'center',
      color:'#3B3935',
      fontWeight:'500'
  }
})