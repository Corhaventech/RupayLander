import { StyleSheet, Text, View, FlatList, ImageBackground, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import bgImg from "../../assets/img/bg-gradient-linear-new.png"; 
import CreditCardApproved from './Customers/CreditCardApproved';
import CreditCardApprovedData from './Customers/CreditCardApprovedData'



const Customer = ({navigation}) => {
    const [selectedTab, setSelectedTab] = useState(0);
    return (
        <SafeAreaView style={styles.SafeAreaViewContainer}>
            <ImageBackground source={bgImg} style={styles.backggroundContainer}>
                <View>
                    <ScrollView horizontal style={{ borderBottomWidth: 1, borderColor: '#D9D9D9', }}>
                        <View style={[styles.flexDirection, { marginBottom: 7 }]}>
                            <TouchableOpacity style={[ styles.TabPressable, { backgroundColor: selectedTab === 0 ? "#F89D28" : "#F9F9F9", },]} onPress={() => {setSelectedTab(0);}}>
                                <Text style={[styles.TabButtonFont, { color: selectedTab === 0 ? "#fff" : "#3B3935" }]}>Credit card (3)</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={[styles.TabPressable, {backgroundColor: selectedTab === 1 ? "#F89D28" : "#F9F9F9",},]} onPress={() => {setSelectedTab(1);}}>
                                <Text style={[styles.TabButtonFont, { color: selectedTab === 1 ? "#fff" : "#3B3935" }]}>Personal Loan(3)</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={[ styles.TabPressable, {backgroundColor: selectedTab === 2 ? "#F89D28" : "#F9F9F9", },]}onPress={() => {setSelectedTab(2);}}>
                                <Text style={[styles.TabButtonFont, { color: selectedTab === 2 ? "#fff" : "#3B3935" }]}>Home Loan</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={[styles.TabPressable,{backgroundColor: selectedTab === 3 ? "#F89D28" : "#F9F9F9", },]}onPress={() => { setSelectedTab(3);}}>
                                <Text style={[styles.TabButtonFont, { color: selectedTab === 3 ? "#fff" : "#3B3935" }]}>Business Loan(4)</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={[ styles.TabPressable, { backgroundColor: selectedTab === 4 ? "#F89D28" : "#F9F9F9", }, ]} onPress={() => { setSelectedTab(4); }} >
                                <Text style={[styles.TabButtonFont, { color: selectedTab === 4 ? "#fff" : "#3B3935" }]}>Car Loan</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={[styles.TabPressable,{backgroundColor: selectedTab === 5 ? "#F89D28" : "#F9F9F9", },]} onPress={() => {setSelectedTab(5); }}>
                                <Text style={[styles.TabButtonFont, { color: selectedTab === 5 ? "#fff" : "#3B3935" }]}>Motor Insurance</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={[styles.TabPressable,{backgroundColor: selectedTab === 6 ? "#F89D28" : "#F9F9F9",}, ]} onPress={() => {setSelectedTab(6);}}>
                                <Text style={[styles.TabButtonFont, { color: selectedTab === 6 ? "#fff" : "#3B3935" }]}>Fastag</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>  
                    {selectedTab === 0 ? (
                        <View style={{flex:1,}}>
                            <FlatList
                                data={CreditCardApprovedData}
                                renderItem={({item}) => <CreditCardApproved navigation={navigation} item={item} />}
                                showsVerticalScrollIndicator={false}
                            />
                        </View>
                    ) : selectedTab === 1 ?  (
                        <View style={{flex:1,}}>
                            <FlatList
                                data={CreditCardApprovedData}
                                renderItem={({item}) => <CreditCardApproved navigation={navigation} item={item} />}
                                showsVerticalScrollIndicator={false}
                            />
                        </View>
                    ) : selectedTab === 2 ?  (
                        <View style={{flex:1,}}>
                            <FlatList
                                data={CreditCardApprovedData}
                                renderItem={({item}) => <CreditCardApproved navigation={navigation} item={item} />}
                                showsVerticalScrollIndicator={false}
                            />
                        </View>
                    ) : selectedTab === 3 ?  (
                        <View style={{flex:1,}}>
                            <FlatList
                                data={CreditCardApprovedData}
                                renderItem={({item}) => <CreditCardApproved navigation={navigation} item={item} />}
                                showsVerticalScrollIndicator={false}
                            />
                        </View>
                    ) : selectedTab === 4 ?  (
                        <View style={{flex:1,}}>
                            <FlatList
                                data={CreditCardApprovedData}
                                renderItem={({item}) => <CreditCardApproved navigation={navigation} item={item} />}
                                showsVerticalScrollIndicator={false}
                            />
                        </View>
                    ) : selectedTab === 5 ?  (
                        <View style={{flex:1,}}>
                            <FlatList
                                data={CreditCardApprovedData}
                                renderItem={({item}) => <CreditCardApproved navigation={navigation} item={item} />}
                                showsVerticalScrollIndicator={false}
                            />
                        </View>
                    ) : (
                        <View style={{flex:1,}}>
                            <FlatList
                                data={CreditCardApprovedData}
                                renderItem={({item}) => <CreditCardApproved navigation={navigation} item={item} />}
                                showsVerticalScrollIndicator={false}
                            />
                        </View>
                    )
                }
            </ImageBackground>
        </SafeAreaView>
    )
}

export default Customer

const styles = StyleSheet.create({
    SafeAreaViewContainer: {
        flex: 1
    },
    backggroundContainer: {
        flex: 1,
        resizeMode: "cover",
        paddingHorizontal: 10,
        paddingTop:5
    },
    flexDirection: {
      flexDirection: "row",
      alignItems: "center",
      gap: 8,
    },
    TabPressable: {
        borderRadius: 3,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 8,
        paddingVertical: 5
      },
      TabButtonFont: {
        fontSize: 14,
        fontWeight: "500",
      },
})