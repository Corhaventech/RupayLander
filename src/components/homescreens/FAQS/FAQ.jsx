import { StyleSheet, Text, View, ImageBackground, ScrollView, Pressable } from 'react-native'
import React from 'react'
import bgImg from '../../../assets/img/bg-gradient-linear-new.png'
import Entypo from 'react-native-vector-icons/Entypo'

const FAQ = ({navigation}) => {
    return (
        <ImageBackground source={bgImg} style={styles.backggroundContainer}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Pressable style={styles.aboutFaqContainer} onPress={() => navigation.navigate("faq details")}>
                    <View>
                        <Text style={styles.subTextNemu}>About  Rupay Lender</Text>
                    </View>
                    <View>
                        <Entypo name="chevron-thin-right" color="#3B3935" size={18} />
                    </View>
                </Pressable>
                <Pressable style={styles.aboutFaqContainer}>
                    <View>
                        <Text style={styles.subTextNemu}>About  Rupay Lender</Text>
                    </View>
                    <View>
                        <Entypo name="chevron-thin-right" color="#3B3935" size={18} />
                    </View>
                </Pressable>
                <Pressable style={styles.aboutFaqContainer}>
                    <View>
                        <Text style={styles.subTextNemu}>About  Rupay Lender</Text>
                    </View>
                    <View>
                        <Entypo name="chevron-thin-right" color="#3B3935" size={18} />
                    </View>
                </Pressable>
                <Pressable style={styles.aboutFaqContainer}>
                    <View>
                        <Text style={styles.subTextNemu}>About  Rupay Lender</Text>
                    </View>
                    <View>
                        <Entypo name="chevron-thin-right" color="#3B3935" size={18} />
                    </View>
                </Pressable>
                <Pressable style={styles.aboutFaqContainer}>
                    <View>
                        <Text style={styles.subTextNemu}>About  Rupay Lender</Text>
                    </View>
                    <View>
                        <Entypo name="chevron-thin-right" color="#3B3935" size={18} />
                    </View>
                </Pressable>
                <Pressable style={styles.aboutFaqContainer}>
                    <View>
                        <Text style={styles.subTextNemu}>About  Rupay Lender</Text>
                    </View>
                    <View>
                        <Entypo name="chevron-thin-right" color="#3B3935" size={18} />
                    </View>
                </Pressable>
                <Pressable style={styles.aboutFaqContainer}>
                    <View>
                        <Text style={styles.subTextNemu}>About  Rupay Lender</Text>
                    </View>
                    <View>
                        <Entypo name="chevron-thin-right" color="#3B3935" size={18} />
                    </View>
                </Pressable>
                <Pressable style={styles.aboutFaqContainer}>
                    <View>
                        <Text style={styles.subTextNemu}>About  Rupay Lender</Text>
                    </View>
                    <View>
                        <Entypo name="chevron-thin-right" color="#3B3935" size={18} />
                    </View>
                </Pressable>
                <Pressable style={styles.aboutFaqContainer}>
                    <View>
                        <Text style={styles.subTextNemu}>About  Rupay Lender</Text>
                    </View>
                    <View>
                        <Entypo name="chevron-thin-right" color="#3B3935" size={18} />
                    </View>
                </Pressable>
                <Pressable style={styles.aboutFaqContainer}>
                    <View>
                        <Text style={styles.subTextNemu}>About  Rupay Lender</Text>
                    </View>
                    <View>
                        <Entypo name="chevron-thin-right" color="#3B3935" size={18} />
                    </View>
                </Pressable>
                <Pressable style={styles.aboutFaqContainer}>
                    <View>
                        <Text style={styles.subTextNemu}>About  Rupay Lender</Text>
                    </View>
                    <View>
                        <Entypo name="chevron-thin-right" color="#3B3935" size={18} />
                    </View>
                </Pressable>
                <Pressable style={styles.aboutFaqContainer}>
                    <View>
                        <Text style={styles.subTextNemu}>About  Rupay Lender</Text>
                    </View>
                    <View>
                        <Entypo name="chevron-thin-right" color="#3B3935" size={18} />
                    </View>
                </Pressable>
                <Pressable style={styles.aboutFaqContainer}>
                    <View>
                        <Text style={styles.subTextNemu}>About  Rupay Lender</Text>
                    </View>
                    <View>
                        <Entypo name="chevron-thin-right" color="#3B3935" size={18} />
                    </View>
                </Pressable>
                <Pressable style={styles.aboutFaqContainer}>
                    <View>
                        <Text style={styles.subTextNemu}>About  Rupay Lender</Text>
                    </View>
                    <View>
                        <Entypo name="chevron-thin-right" color="#3B3935" size={18} />
                    </View>
                </Pressable>
            </ScrollView>
        </ImageBackground>
    )
}

export default FAQ

const styles = StyleSheet.create({
    backggroundContainer: {
        flex: 1,
        resizeMode: 'repeat',
        paddingHorizontal: 15,
        paddingBottom:20
    },
    aboutFaqContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        backgroundColor:'#fff',
        paddingHorizontal:15,
        paddingVertical:10,
        borderRadius:5,
        borderWidth:1,
        borderColor:'#FFF0DD',
        borderStyle:'dashed',
        marginVertical:7
    },
    subTextNemu:{
        color:'#3B3935',
        fontSize:14,
        fontWeight:'500',
        lineHeight:24
    },
})