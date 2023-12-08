import React from 'react'
import { StyleSheet, Text, View, ImageBackground, ScrollView, Pressable, Image } from 'react-native'
import bgImg from "../../../assets/img/bg-gradient-linear-new.png"; 
import userImage from '../../../assets/img/Ellipse.png'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Entypo from 'react-native-vector-icons/Entypo' 
import AntDesign from 'react-native-vector-icons/AntDesign' 
import MaterialIcons from 'react-native-vector-icons/MaterialIcons' 
import Ionicons from 'react-native-vector-icons/Ionicons' 
import EvilIcons from 'react-native-vector-icons/EvilIcons' 

const Profile = ({navigation}) => {
    return ( 
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
            <ImageBackground source={bgImg} style={styles.backggroundContainer}>
                <View style={{}}>
                    <View style={styles.profileIMageContainer}>
                        <View style={styles.bgouterContainer}>
                            <Image source={userImage} alt='img' style={styles.IMgeUser} />
                            <View>
                                <Pressable style={styles.cameraIcons}>
                                    <Ionicons name="camera" size={22} color="#fff" />
                                </Pressable>
                            </View>
                        </View>
                        <View style={styles.paddingVertical}>
                            <Text style={styles.numberText}>+91-0125222020</Text>
                        </View>
                    </View>
                    <View style={styles.MenuContainer}>
                        <View style={{paddingBottom:12}}> 
                            <Text style={styles.ProfilenemuText}>Profile</Text>
                            <Pressable style={[styles.DisplayList, styles.promenus]} onPress={() => navigation.navigate("basic profile info")}>
                                <View style={styles.DisplayList}>
                                    <FontAwesome name="user-circle-o" color="#fff" size={22} />
                                    <Text style={styles.subTextNemu}>Basic profile info</Text>
                                </View>
                                <View>
                                    <Entypo name="chevron-thin-right" color="#fff" size={18} />
                                </View>
                            </Pressable>
                        </View>
                        <View style={{paddingBottom:12}}> 
                            <Text style={styles.ProfilenemuText}>Bank Details</Text>
                            <Pressable style={[styles.DisplayList, styles.promenus]} onPress={() => navigation.navigate("")}>
                                <View style={styles.DisplayList}>
                                    <FontAwesome name="bank" color="#fff" size={22} /> 
                                    <Text style={styles.subTextNemu}>Bank Details</Text>
                                </View>
                                <View>
                                    <Entypo name="chevron-thin-right" color="#fff" size={18} />
                                </View>
                            </Pressable>
                        </View>
                        <View style={{paddingBottom:12}}> 
                            <Text style={styles.ProfilenemuText}>Wallet</Text>
                            <Pressable style={[styles.DisplayList, styles.promenus]} onPress={() => navigation.navigate("")}>
                                <View style={styles.DisplayList}>
                                    <Ionicons name="wallet" color="#fff" size={22} /> 
                                    <Text style={styles.subTextNemu}>Wallet</Text>
                                </View>
                                <View>
                                    <Entypo name="chevron-thin-right" color="#fff" size={18} />
                                </View>
                            </Pressable>
                        </View>
                        <View style={{paddingBottom:12}}> 
                            <Text style={styles.ProfilenemuText}>FAQs</Text>
                            <Pressable style={[styles.DisplayList, styles.promenus]} onPress={() => navigation.navigate("faq")}>
                                <View style={styles.DisplayList}>
                                    <AntDesign name="questioncircleo" color="#fff" size={22} /> 
                                    <Text style={styles.subTextNemu}>FAQs</Text>
                                </View>
                                <View>
                                    <Entypo name="chevron-thin-right" color="#fff" size={18} />
                                </View>
                            </Pressable>
                        </View>
                        <View style={{paddingBottom:12}}> 
                            <Text style={styles.ProfilenemuText}>Language</Text>
                            <Pressable style={[styles.DisplayList, styles.promenus]} onPress={() => navigation.navigate("choose languages")}>
                                <View style={styles.DisplayList}>
                                    <FontAwesome name="language" color="#fff" size={22} /> 
                                    <Text style={styles.subTextNemu}>Language</Text>
                                </View>
                                <View>
                                    <Entypo name="chevron-thin-right" color="#fff" size={18} />
                                </View>
                            </Pressable>
                        </View>
                        <View style={{paddingBottom:12}}> 
                            <Text style={styles.ProfilenemuText}>Terms  & Condition</Text>
                            <Pressable style={[styles.DisplayList, styles.promenus]} onPress={() => navigation.navigate("Terms Conditions")}>
                                <View style={styles.DisplayList}>
                                    <FontAwesome name="book" color="#fff" size={22} /> 
                                    <Text style={styles.subTextNemu}>Terms  & Condition</Text>
                                </View>
                                <View>
                                    <Entypo name="chevron-thin-right" color="#fff" size={18} />
                                </View>
                            </Pressable>
                        </View>
                        <View style={{paddingBottom:12}}> 
                            <Text style={styles.ProfilenemuText}>Privacy policy</Text>
                            <Pressable style={[styles.DisplayList, styles.promenus]} onPress={() => navigation.navigate("Privacy Policy")}>
                                <View style={styles.DisplayList}>
                                    <MaterialIcons name="policy" color="#fff" size={22} /> 
                                    <Text style={styles.subTextNemu}>Privacy policy</Text>
                                </View>
                                <View>
                                    <Entypo name="chevron-thin-right" color="#fff" size={18} />
                                </View>
                            </Pressable>
                        </View>
                    </View>

                    <View style={styles.socialMediaIcons}>
                         <View style={{paddingBottom:10}}>
                            <Text style={{fontSize:16, color:'#3B3935', fontWeight:'600'}}>Follow us</Text>
                         </View>
                        <View style={styles.DisplayList}>
                            <Pressable style={styles.IConsSocial}>
                                <SimpleLineIcons name="social-youtube" size={22} color="#F89D28" />
                            </Pressable>
                            <Pressable style={styles.IConsSocial}>
                                <SimpleLineIcons name="social-facebook" size={22} color="#F89D28" />
                            </Pressable>
                            <Pressable style={styles.IConsSocial}>
                                <SimpleLineIcons name="social-twitter" size={22} color="#F89D28" />
                            </Pressable>
                            <Pressable style={styles.IConsSocial}>
                                <SimpleLineIcons name="social-instagram" size={22} color="#F89D28" />
                            </Pressable>
                            <Pressable style={styles.IConsSocial}>
                                <EvilIcons name="sc-telegram" size={30} color="#F89D28" style={{top: -4,}} />
                            </Pressable>
                        </View>
                    </View>

                    <View style={styles.LogoutContainer}>
                        <Pressable style={[styles.promenus, styles.DisplayList, {justifyContent:'center', borderRadius:50}]}>
                            <MaterialIcons name="logout" size={22} color="#fff" />
                            <Text style={{color:'#fff', fontSize:16, fontWeight:'500'}}>Logout</Text>
                        </Pressable>
                    </View>

                </View>
            </ImageBackground>
        </ScrollView>
    )
}

export default Profile

const styles = StyleSheet.create({
    backggroundContainer: {
        flex: 1,
        resizeMode: "repeat",
        paddingVertical: 15,
        paddingHorizontal: 15
    },
    container:{
        flex:1
    },
    profileIMageContainer:{
        alignItems:'center',
        justifyContent:'center',
    },
    bgouterContainer:{
        backgroundColor:'#fff',
        width:100,
        height:100,
        borderRadius:50,
        alignItems:'center',
        justifyContent:'center',
        borderWidth:1,
        borderColor:'#F89D28',
        position:'relative'
    },
    IMgeUser:{
        width:90,
        height:90,
        resizeMode:'contain'
    },
    cameraIcons:{
        position:'absolute',
        bottom:-4,
        right:-40,
        backgroundColor:'#F89D28',
        width:30,
        height:30,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:50,
        borderWidth:1,
        borderColor:'#fff',
    },
    paddingVertical:{
        paddingVertical:10
    },
    numberText:{
        color:'#3B3935',
        fontFamily:'Nexa Bold',
        fontSize:16,
        fontWeight:'700'
    },
    MenuContainer:{
        paddingTop:10
    },
    ProfilenemuText:{
        fontSize:14,
        fontWeight:'700',
        color:'#3B3935',
        paddingBottom:10,
        fontFamily:'Nexa'
    },
    DisplayList:{
        flexDirection:'row',
        alignItems:'center',
        gap:10
    },
    promenus:{
        backgroundColor:'#F89D28',
        paddingHorizontal:15,
        paddingVertical:14,
        borderRadius:7,
        justifyContent:'space-between',  
    },
    subTextNemu:{
        color:'#fff',
        fontSize:16,
        fontFamily:'Nexa',
        fontWeight:'700'
    },
    socialMediaIcons:{
        paddingVertical:20,
        alignItems:'center'
    },
    IConsSocial:{
        width:40,
        height:40,
        borderRadius:8,
        borderWidth:1,
        borderColor:'#F89D28',
        alignItems:'center',
        justifyContent:'center'
    },
    LogoutContainer:{
        paddingBottom:20
    }
})