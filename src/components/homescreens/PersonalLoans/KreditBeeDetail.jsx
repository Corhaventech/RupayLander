import { StyleSheet, Text, View, ImageBackground, Pressable, ScrollView, FlatList } from "react-native";
import React, { useState } from "react";
import bgImg from "../../../assets/img/bg-gradient-linear-new.png";
import Feature from '../../data/FeaturesData' 
import FeaturesDetails from "../CreditCard/FeaturesDetails";
import EligibilityDetails from "../CreditCard/EligibilityDetails";
import FeeschargesDetalis from "../CreditCard/FeeschargesDetalis";
import TermsConditionsDetails from "../CreditCard/TermsConditionsDetails";
import FAQ from "../FAQS/FAQ";



const KreditBeeDetail = ({navigation}) => {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <ImageBackground source={bgImg} style={styles.backggroundContainer}>
      <View>
        <ScrollView horizontal style={{ borderBottomWidth: 1, borderColor: '#D9D9D9', }}>
          <View style={[styles.flexDirection, { marginBottom: 7 }]}>
            <Pressable
              style={[
                styles.TabPressable,
                {
                  backgroundColor: selectedTab === 0 ? "#F89D28" : "#F9F9F9",
                },
              ]}
              onPress={() => {
                setSelectedTab(0);
              }}
            >
              <Text style={[styles.TabButtonFont, { color: selectedTab === 0 ? "#fff" : "#3B3935" }]}>Feature</Text>
            </Pressable>
            <Pressable
              style={[
                styles.TabPressable,
                {
                  backgroundColor: selectedTab === 1 ? "#F89D28" : "#F9F9F9",
                },
              ]}
              onPress={() => {
                setSelectedTab(1);
              }}
            >
              <Text style={[styles.TabButtonFont, { color: selectedTab === 1 ? "#fff" : "#3B3935" }]}>Eligibility</Text>
            </Pressable>
            <Pressable
              style={[
                styles.TabPressable,
                {
                  backgroundColor: selectedTab === 2 ? "#F89D28" : "#F9F9F9",
                },
              ]}
              onPress={() => {
                setSelectedTab(2);
              }}
            >
              <Text style={[styles.TabButtonFont, { color: selectedTab === 2 ? "#fff" : "#3B3935" }]}>Fees&charges</Text>
            </Pressable>
            <Pressable
              style={[
                styles.TabPressable,
                {
                  backgroundColor: selectedTab === 3 ? "#F89D28" : "#F9F9F9",
                },
              ]}
              onPress={() => {
                setSelectedTab(3);
              }}
            >
              <Text style={[styles.TabButtonFont, { color: selectedTab === 3 ? "#fff" : "#3B3935" }]}>T&C</Text>
            </Pressable>
            <Pressable
              style={[
                styles.TabPressable,
                {
                  backgroundColor: selectedTab === 4 ? "#F89D28" : "#F9F9F9",
                },
              ]}
              onPress={() => {
                setSelectedTab(4);
              }}
            >
              <Text style={[styles.TabButtonFont, { color: selectedTab === 4 ? "#fff" : "#3B3935" }]}>FAQS</Text>
            </Pressable>
          </View>
        </ScrollView>
      </View>
      <View style={{ flex: 1, }}>
        {selectedTab === 0 ? (
          <View>
            <FlatList
              data={Feature}
              renderItem={({ item }) => <FeaturesDetails item={item} />}
              showsVerticalScrollIndicator={false}
            />
          </View>
        ) : selectedTab === 1 ? (
          <View>
            <FlatList
              data={Feature}
              renderItem={({ item }) => <EligibilityDetails item={item} />}
              showsVerticalScrollIndicator={false}
            />
          </View>
        ) : selectedTab === 2 ? (
          <View>
            <FlatList
              data={Feature}
              renderItem={({ item }) => <FeeschargesDetalis item={item} />}
              showsVerticalScrollIndicator={false}
            />
          </View>
        ) : selectedTab === 3 ? (
          <View>
            <FlatList
              data={Feature}
              renderItem={({ item }) => <TermsConditionsDetails item={item} />}
              showsVerticalScrollIndicator={false}
            />
          </View>
        ) : (
          <View>
            <FlatList
              data={Feature}
              renderItem={({ item }) => <FAQ navigation={navigation} item={item} />}
              showsVerticalScrollIndicator={false}
            />
          </View>
        )}
      </View>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.Download} onPress={() => navigation.navigate('ApplyOnline')}>
          <Text style={{ fontSize: 14, fontWeight: '500' }}>Apply Now</Text>
        </Pressable>
        <Pressable style={styles.shreCustomer}>
          <Text style={{ fontSize: 14, fontWeight: '500', color: '#fff' }}>Share with Customer</Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
};

export default KreditBeeDetail;

const styles = StyleSheet.create({
  backggroundContainer: {
    flex: 1,
    resizeMode: "repeat",
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  flexDirection: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  TabPressable: {
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 15,
    paddingVertical: 5
  },
  TabButtonFont: {
    fontSize: 16,
    fontWeight: "500",
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  Download: {
    borderColor: '#F89D28',
    borderWidth: 1,
    borderRadius: 50,
    paddingHorizontal: 15,
    paddingVertical: 10,
    width: '49%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  shreCustomer: {
    backgroundColor: '#F89D28',
    borderRadius: 50,
    paddingHorizontal: 15,
    paddingVertical: 10,
    width: '49%',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
