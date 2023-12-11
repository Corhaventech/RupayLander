import React from 'react'
import 'react-native-gesture-handler';
import { StatusBar, Easing, Pressable, StyleSheet, View, Text, Image  } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import doller from './src/assets/icons/dollers.png'
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStackNavigator, TransitionSpecs, HeaderStyleInterpolators, CardStyleInterpolators } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import GetStarted from './src/components/onboarding/GetStarted'
import OnboardingFirst from './src/components/onboarding/OnboardingFirst';
import Login from './src/components/LoginScreen/Login';
import VerificationOtp from './src/components/LoginScreen/VerificationOtp';
import BottomTabNavigator from './src/components/NavigatorBottomNav/BottomTabNavigator';
import SellServicesMore from './src/components/homescreens/SellServices/SellServicesMore';
import Notification from './src/components/homescreens/Notifications/Notification';
import Profile from './src/components/homescreens/Profiles/Profile';
import BasicProfileInformation from './src/components/LoginScreen/BasicProfileInformation';
import UploadDocument from './src/components/LoginScreen/UploadDocument';
import BasicProfileInfo from './src/components/homescreens/Profiles/BasicProfileInfo';
import FAQ from './src/components/homescreens/FAQS/FAQ';
import FAQsDetail from './src/components/homescreens/FAQS/FAQsDetail';
import ChooseLanguages from './src/components/homescreens/Chooselanguage/ChooseLanguages';
import TermsConditions from './src/components/homescreens/Terms&Conditions/TermsConditions';
import PrivacyPolicy from './src/components/homescreens/Terms&Conditions/PrivacyPolicy';
import CreditCards from './src/components/homescreens/CreditCard/CreditCards';
import SuggestBestCard from './src/components/homescreens/CreditCard/SuggestBestCard';
import PersonalLoan from './src/components/homescreens/PersonalLoans/PersonalLoan';
import LoanEMICalculator from './src/components/homescreens/PersonalLoans/LoanEMICalculator';
import HomeLoan from './src/components/homescreens/HomeLoans/HomeLoan';
import BusinessLoan from './src/components/homescreens/HomeLoans/BusinessLoan';
import CarLoan from './src/components/homescreens/HomeLoans/CarLoan';
import MotorInsurance from './src/components/homescreens/MotorInsuranced/MotorInsurance';
import NewVehicle from './src/components/homescreens/MotorInsuranced/NewVehicle';
import CompareSelectedCard from './src/components/homescreens/CreditCard/CompareSelectedCard';
import CreditCardDetail from './src/components/homescreens/CreditCard/CreditCardDetail';
import AddCustomerCreate from './src/components/homescreens/CreditCard/AddCustomerCreate';
import Enrings from './src/components/homescreens/CreditCard/Enrings';
import SuggestedFiveCard from './src/components/homescreens/CreditCard/SuggestedFiveCard';
import KreditBeeDetail from './src/components/homescreens/PersonalLoans/KreditBeeDetail';
import ApplyOnline from './src/components/homescreens/PersonalLoans/ApplyOnline';
import ApplyOnlineVerificationotp from './src/components/homescreens/PersonalLoans/ApplyOnlineVerificationotp';
import FASTag from './src/components/homescreens/FASTags/FASTag'; 
import UpcomingServiceDetails from './src/components/homescreens/UpcomingServices/UpcomingServiceDetails';
import UpcomingServicecard from './src/components/homescreens/UpcomingServices/UpcomingServicecard';
import OfferCardAll from './src/components/homescreens/UPIScreens/OfferCardAll';
import PaymentHistory from './src/components/homescreens/wallets/PaymentHistory';
import CreditCardDetailApproved from './src/components/homescreens/Customers/CreditCardDetailApproved';


// const Stack = createNativeStackNavigator();
const Stack = createStackNavigator();

const config = {
  animation: "spring",
  config: {
      stiffness: 1000,
      damping: 50,
      mass: 3,
      overshootClamping: false,
      restDisplacementThreshold: 0.02,
      restSpeedThreshold: 0.02,
  },
};

const closeConfig = {
  animation: "timing",
  config: {
      duration: 500,
      easing: Easing.linear,
  },
};

const customTransition = {
  gestureEnabled: true,
  gestureDirection: "horizontal",
  transitionSpec: {
      open: TransitionSpecs.TransitionIOSSpec,
      close: TransitionSpecs.TransitionIOSSpec,
  },
  cardStyleInterpolator: ({ current, next, layouts }) => {
      return {
          cardStyle: {
              transform: [
                  {
                      translateX: current.progress.interpolate({
                          inputRange: [0, 1],
                          outputRange: [layouts.screen.width, 0],
                      }),
                  },
                  {
                      rotate: current.progress.interpolate({
                          inputRange: [0, 1],
                          outputRange: ["180deg", "0deg"],
                      }),
                  },
                  {
                      scale: next
                          ? next.progress.interpolate({
                              inputRange: [0, 1],
                              outputRange: [1, 0.6],
                          })
                          : 1,
                  },
              ],
          },
          opacity: current.opacity,
      };
  },
};


const App =  (props) => {
  const { navigation } = props;

  return (
    <NavigationContainer> 
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ 
          gestureEnabled: false,
          gestureDirection: "horizontal",
          transitionSpec: {
              open: config,
              close: closeConfig,
          },
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            headerShown: false,
            headerStyle: { backgroundColor: "#fff" },
            headerTintColor: "#000",
            headerBackTitleVisible: false,
            headerTitleAlign: "center",
            headerShadowVisible: false,
            headerTitleStyle: { fontSize: 16 },
        }}
      >
        {/*<Stack.Screen name="Get Started" options={{ headerShown: false }}>
          {(props) => <GetStarted {...props} />}
        </Stack.Screen>*/}
        <Stack.Screen name='onbording first' options={{headerShown:false}}>
            {(props)=><OnboardingFirst {...props} />}
        </Stack.Screen>
        <Stack.Screen name='login screen' options={{headerShown:false}}>
            {(props)=><Login {...props} />}
        </Stack.Screen>
         <Stack.Screen name='verification otp' options={{headerShown:false}}>
            {(props)=><VerificationOtp {...props} />}
          </Stack.Screen> 
         <Stack.Screen name='Basic Profile Information' options={{headerShown:true}}>
            {(props)=><BasicProfileInformation {...props} />}
          </Stack.Screen> 
         <Stack.Screen name='Upload Document' options={{headerShown:true}}>
            {(props)=><UploadDocument {...props} />}
          </Stack.Screen> 

        {/* MAIN HOME SCREEN AREA */}

        <Stack.Screen name="homes" options={{ headerShown: false }}>
            {(props) => <BottomTabNavigator {...props} />}
        </Stack.Screen>
        <Stack.Screen name="sell services" options={{  headerShown: true, title:"Sell Services"}}>
            {(props) => <SellServicesMore {...props} />}
        </Stack.Screen>
        
        <Stack.Screen name="credit card" options={{ headerShown: true, title:"Credit Card" }}>
            {(props) => <CreditCards {...props} />}
        </Stack.Screen>

        <Stack.Screen name="Compare Credit Card" options={{ headerShown: true, title:"Compare Credit Card" }}>
            {(props) => <CompareSelectedCard {...props} />}
        </Stack.Screen>

        <Stack.Screen name="CreditCardDetail"
        options={({ navigation }) => ({
            headerShown: true,
            title:"Swiggy HDFC Bank Credit Card",
            headerRight: () => (
              <View style={{right:15}}>
                <Pressable onPress={() => navigation.navigate('CreditCardDetail')}>
                  <Image source={doller} style={{width:30, height:30, resizeMode:'contain'}} alt='img' />
              </Pressable>
              </View>
            )
          })}>
            {(props) => <CreditCardDetail {...props} />}
        </Stack.Screen>

        <Stack.Screen name="AddCustomerCreate"
        options={({ navigation }) => ({
            headerShown: true,
            title:"Enter Customer Details",
            headerRight: () => (
              <View style={{right:15}}>
                <Pressable onPress={() => navigation.navigate('CreditCardDetail')}>
                  <Image source={doller} style={{width:30, height:30, resizeMode:'contain'}} alt='img' />
              </Pressable>
              </View>
            )
          })}>
            {(props) => <AddCustomerCreate {...props} />}
        </Stack.Screen>

        <Stack.Screen name="enrings"
        options={({ navigation }) => ({
            headerShown: true,
            title:"Enrings",
            headerRight: () => (
              <View style={{right:15}}>
                <Pressable onPress={() => navigation.navigate('CreditCardDetail')}>
                  <Image source={doller} style={{width:30, height:30, resizeMode:'contain'}} alt='img' />
              </Pressable>
              </View>
            )
          })}>
            {(props) => <Enrings {...props} />}
        </Stack.Screen>

        <Stack.Screen name="KreditBeeDetail"
        options={({ navigation }) => ({
            headerShown: true,
            title:"Kredit Bee",
            headerRight: () => (
              <View style={{right:15}}>
                <Pressable onPress={() => navigation.navigate('CreditCardDetail')}>
                  <Image source={doller} style={{width:30, height:30, resizeMode:'contain'}} alt='img' />
              </Pressable>
              </View>
            )
          })}>
            {(props) => <KreditBeeDetail {...props} />}
        </Stack.Screen>

        <Stack.Screen name="ApplyOnline"
        options={({ navigation }) => ({
            headerShown: true,
            title:"Apply Online",
            headerRight: () => (
              <View style={{right:15}}>
                <Pressable onPress={() => navigation.navigate('CreditCardDetail')}>
                  <Image source={doller} style={{width:30, height:30, resizeMode:'contain'}} alt='img' />
              </Pressable>
              </View>
            )
          })}>
            {(props) => <ApplyOnline {...props} />}
        </Stack.Screen>

        <Stack.Screen name="Verification OTP"
        options={({ navigation }) => ({
            headerShown: true,
            title:"Enter OTP", 
          })}>
            {(props) => <ApplyOnlineVerificationotp {...props} />}
        </Stack.Screen>

        <Stack.Screen name="SuggestedFiveCard" options={{ 
          headerShown: true,
          title:"Suggested 5 Card"
        }}>
            {(props) => <SuggestedFiveCard {...props} />}
        </Stack.Screen>

        <Stack.Screen name="SuggestBestCard" options={{ 
          headerShown: true,
          title:"Suggest Best Card"
        }}>
            {(props) => <SuggestBestCard {...props} />}
        </Stack.Screen>

        <Stack.Screen name="personal loan" 
        options={({ navigation }) => ({
          headerShown: true,
          title:"Personal Loan",
          headerRight: () => (
              <View style={{right:15}}>
                <Pressable onPress={() => navigation.navigate('LoanEMICalculator')}>
                  <AntDesign name="calculator" size={22} color="#3B3935" />
              </Pressable>
              </View>
            )
          })}>
            {(props) => <PersonalLoan {...props} />}
        </Stack.Screen>

        <Stack.Screen name="LoanEMICalculator" options={{ 
          headerShown: true,
          title:"Loan EMI Calculator"
        }}>
            {(props) => <LoanEMICalculator {...props} />}
        </Stack.Screen>

        
        <Stack.Screen name="Home loan" 
        options={({ navigation }) => ({
          headerShown: true,
          title:"Home Loan",
          headerRight: () => (
              <View style={{right:15}}>
                <Pressable onPress={() => navigation.navigate('LoanEMICalculator')}>
                  <AntDesign name="calculator" size={22} color="#3B3935" />
              </Pressable>
              </View>
            )
          })}>
            {(props) => <HomeLoan {...props} />}
        </Stack.Screen>
        

        
        <Stack.Screen name="business loan" 
        options={({ navigation }) => ({
          headerShown: true,
          title:"Business Loan",
          headerRight: () => (
              <View style={{right:15}}>
                <Pressable onPress={() => navigation.navigate('LoanEMICalculator')}>
                  <AntDesign name="calculator" size={22} color="#3B3935" />
              </Pressable>
              </View>
            )
          })}>
            {(props) => <BusinessLoan {...props} />}
        </Stack.Screen>


        
        <Stack.Screen name="car loan" 
        options={({ navigation }) => ({
          headerShown: true,
          title:"Car Loan",
          headerRight: () => (
              <View style={{right:15}}>
                <Pressable onPress={() => navigation.navigate('LoanEMICalculator')}>
                  <AntDesign name="calculator" size={22} color="#3B3935" />
              </Pressable>
              </View>
            )
          })}>
            {(props) => <CarLoan {...props} />}
        </Stack.Screen>


        <Stack.Screen name="Credit Card Detail Approved" options={{ 
          headerShown: true,
          title:"Dizi"
        }}>
            {(props) => <CreditCardDetailApproved {...props} />}
        </Stack.Screen>

        <Stack.Screen name="notification" options={{ 
          headerShown: true,
          title:"Notification"
        }}>
            {(props) => <Notification {...props} />}
        </Stack.Screen>

        <Stack.Screen name="motorinsurance" options={{ 
          headerShown: true,
          title:"Motor Insurance"
        }}>
            {(props) => <MotorInsurance {...props} />}
        </Stack.Screen>

        <Stack.Screen name="FASTags" options={{ 
          headerShown: true,
          title:"FASTag"
        }}>
            {(props) => <FASTag {...props} />}
        </Stack.Screen>

        <Stack.Screen name="new vehicle" options={{ 
          headerShown: true,
          title:"New Vehicle"
        }}>
            {(props) => <NewVehicle {...props} />}
        </Stack.Screen>

        <Stack.Screen name="profile" options={{ 
          headerShown: true,
          title:"Your Profile"
        }}>
            {(props) => <Profile {...props} />}
        </Stack.Screen>

        <Stack.Screen name="basic profile info" options={{ 
          headerShown: true,
          title:"Basic Profile Info"
        }}>
            {(props) => <BasicProfileInfo {...props} />}
        </Stack.Screen>

        <Stack.Screen name="faq" options={{ 
          headerShown: true,
          title:"FAQs"
        }}>
            {(props) => <FAQ {...props} />}
        </Stack.Screen>

        <Stack.Screen name="faq details" options={{ 
          headerShown: true,
          title:"About Rupay Lender"
        }}>
            {(props) => <FAQsDetail {...props} />}
        </Stack.Screen>

        <Stack.Screen name="choose languages" options={{ 
          headerShown: true,
          title:"Choose Language"
        }}>
            {(props) => <ChooseLanguages {...props} />}
        </Stack.Screen>

        <Stack.Screen name="Terms Conditions" options={{ 
          headerShown: true,
          title:"Terms & Conditions"
        }}>
            {(props) => <TermsConditions {...props} />}
        </Stack.Screen>

        <Stack.Screen name="Privacy Policy" options={{ 
          headerShown: true,
          title:"Privacy Policy"
        }}>
            {(props) => <PrivacyPolicy {...props} />}
        </Stack.Screen>

        <Stack.Screen name="Upcoming Service card" options={{ 
          headerShown: true,
          title:"Upcoming  Services"
        }}>
            {(props) => <UpcomingServicecard {...props} />}
        </Stack.Screen>

        <Stack.Screen name="Upcoming Service Details" options={{ 
          headerShown: true,
          title:"UPI Pay"
        }}>
            {(props) => <UpcomingServiceDetails {...props} />}
        </Stack.Screen>

        <Stack.Screen name="OfferCardAll" options={{ 
          headerShown: true,
          title:"Offer Card"
        }}>
            {(props) => <OfferCardAll {...props} />}
        </Stack.Screen>
        <Stack.Screen name="PaymentHistory" options={{ 
          headerShown: true,
          title:"Payment History"
        }}>
            {(props) => <PaymentHistory {...props} />}
        </Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})