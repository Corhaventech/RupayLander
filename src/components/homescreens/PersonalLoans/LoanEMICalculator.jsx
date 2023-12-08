import { StyleSheet, Text, View, Pressable, ImageBackground, TextInput } from 'react-native'
import React, {useState} from 'react'
import bgImg from "../../../assets/img/bg-gradient-linear-new.png";
import DropDownPicker from 'react-native-dropdown-picker';



const LoanEMICalculator = () => {

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
      {label: '12 Month', value: '12 month'},
      {label: '2 Year', value: '2 year'}
    ]);

  return (
    <ImageBackground source={bgImg} style={styles.backggroundContainer}>
        <View style={styles.LoanEMICalculatorContainer}>
            <View style={{paddingBottom:10}}>
                <Text style={styles.TextInputTitle}>Loan Amount(₹)</Text>
                <View>
                    <TextInput placeholder='₹400000' style={styles.InputType} />
                </View>
            </View>
            <View style={{paddingBottom:10}}>
                <Text style={styles.TextInputTitle}>Interest Rate(%)</Text>
                <View>
                    <TextInput placeholder='8%' style={styles.InputType} />
                </View>
            </View>
            <View style={{paddingBottom:10}}>
                <Text style={styles.TextInputTitle}>Tenure</Text>
                <View>
                    <DropDownPicker
                        style={styles.InputType}
                        open={open}
                        value={value}
                        items={items}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItems}
                    />
                </View>
            </View>
            <View style={styles.MontContainer}>
                <View style={styles.loanMontContainer}>
                    <Text style={styles.subTitle}>Loan EMI month</Text>
                    <Text style={styles.priceTitle}>₹34,795</Text>
                </View>
                <View style={styles.loanMontContainer}>
                    <Text style={styles.subTitle}>Total Interest</Text>
                    <Text style={styles.priceTitle}>₹17,544</Text>
                </View>
            </View>
            <View style={{paddingVertical:10}}> 
                <View style={[styles.loanMontContainer, {width:'100%'}]}>
                    <Text style={styles.subTitle}>Total Payment(Principle + Interest)</Text>
                    <Text style={styles.priceTitle}>₹4,17,544</Text>
                </View>
            </View>
            <View>
                <Pressable style={styles.CalculateButton}>
                    <Text style={{color:'#fff', textAlign:'center', fontSize:16, fontWeight:'500'}}>Calculate</Text>
                </Pressable>
            </View>
        </View>
    </ImageBackground>
  )
}

export default LoanEMICalculator

const styles = StyleSheet.create({
    backggroundContainer: {
        flex: 1,
        resizeMode: "repeat",
        paddingHorizontal: 15,
        paddingTop: 10,
    },
    LoanEMICalculatorContainer:{},
    TextInputTitle:{
        fontSize:14,
        fontWeight:'500',
        color:'#3B3935',
        lineHeight:24,
        paddingBottom:7
    },
    InputType:{
        backgroundColor:'#fff',
        borderWidth:1,
        borderColor:'#C4C4C7',
        paddingHorizontal:15,
        borderRadius:6,
        fontWeight:'500',
        color:'#3B3935'
    },
    MontContainer:{
        flexDirection:'row',
        alignItems:'center',
        gap:10
    },
    loanMontContainer:{
        width:'48%',
        backgroundColor:'#fff',
        borderWidth:1,
        borderColor:'#C4C4C7',
        padding:10,
        borderRadius:10,
        height:100,
        alignItems:'center',
        justifyContent:'center'
    },
    subTitle:{
        color:'#3B3935',
        paddingBottom:10,
        fontSize:12,
        fontWeight:'500'
    },
    priceTitle:{
        color:'#3B3935', 
        fontSize:19,
        fontWeight:'600'
    },
    CalculateButton:{
        backgroundColor:'#F89D28',
        padding:12,
        borderRadius:100,
        marginVertical:10
    }
})