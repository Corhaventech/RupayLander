import { StyleSheet, Text, View, ImageBackground, TextInput, Pressable, ScrollView, } from 'react-native'
import React, { useState } from 'react'
import bgImg from "../../../assets/img/bg-gradient-linear-new.png";
import DropDownPicker from 'react-native-dropdown-picker';
import AntDesign from 'react-native-vector-icons/AntDesign'

const ApplyOnline = ({navigation}) => {

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Bank Manager', value: 'Bank Manager' },
        { label: 'Banana', value: 'banana' }
    ]);

    const [open1, setOpen1] = useState(false);
    const [value1, setValue1] = useState(null);
    const [items1, setItems1] = useState([
        { label: 'Post Graduation', value: 'Post Graduation' },
        { label: 'Banana', value: 'banana' }
    ]);

    const [open2, setOpen2] = useState(false);
    const [value2, setValue2] = useState(null);
    const [items2, setItems2] = useState([
        { label: '6 lakh', value: '6 lakh' },
        { label: '10 lakh', value: '10 lakh' }
    ]);
    const [open3, setOpen3] = useState(false);
    const [value3, setValue3] = useState(null);
    const [items3, setItems3] = useState([
        { label: '6 lakh', value: '6 lakh' },
        { label: '10 lakh', value: '10 lakh' }
    ]);


    return (
        <ImageBackground source={bgImg} style={styles.backggroundContainer}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                    <Text style={{ fontWeight: '500', color: '#3B3935' }}>Name* (As per the Customers PAN card)</Text>
                    <TextInput style={styles.inputNumber} keyboardType='default' placeholder='Enter full name' placeholderTextColor="#12121D4D" />
                </View>
                <View>
                    <Text style={{ fontWeight: '500', color: '#3B3935' }}>Mobile*(Linked with ADHAR card)</Text>
                    <TextInput style={styles.inputNumber} keyboardType='numbers-and-punctuation' placeholder='Enter Customer Mobile No' placeholderTextColor="#12121D4D" />
                </View>
                <View>
                    <Text style={{ fontWeight: '500', color: '#3B3935' }}>Email ID*</Text>
                    <TextInput style={styles.inputNumber} keyboardType='email-address' placeholder='Enter Customer Email ID' placeholderTextColor="#12121D4D" />
                </View>
                <View>
                    <Text style={{ fontWeight: '500', color: '#3B3935' }}>Age*</Text>
                    <TextInput style={styles.inputNumber} keyboardType='default' placeholder='Enter Customer Age' placeholderTextColor="#12121D4D" />
                </View>
                <View>
                    <Text style={{ fontWeight: '500', color: '#3B3935' }}>Location*</Text>
                    <TextInput style={styles.inputNumber} keyboardType='numbers-and-punctuation' placeholder='Enter Your Company name' placeholderTextColor="#12121D4D" />
                </View>
                <View>
                    <Text style={{ fontWeight: '500', color: '#3B3935' }}>Pin code*</Text>
                    <TextInput style={styles.inputNumber} keyboardType='numbers-and-punctuation' placeholder='Enter Customer Pin code' placeholderTextColor="#12121D4D" />
                </View>
                <View>
                    <Text style={{ fontWeight: '500', color: '#3B3935' }}>Employment</Text>
                    <DropDownPicker
                        style={styles.inputNumber}
                        open={open}
                        value={value}
                        items={items}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItems}
                    />
                </View>
                <View>
                    <Text style={{ fontWeight: '500', color: '#3B3935' }}>Company name</Text>
                    <TextInput style={styles.inputNumber} keyboardType='numbers-and-punctuation' placeholder='Enter Your Company name' placeholderTextColor="#12121D4D" />
                </View>
                <View>
                    <Text style={{ fontWeight: '500', color: '#3B3935' }}>Monthly  Income</Text>
                    <DropDownPicker
                        style={styles.inputNumber}
                        open={open1}
                        value={value1}
                        items={items1}
                        setOpen={setOpen1}
                        setValue={setValue1}
                        setItems={setItems1}

                    />
                </View>
                <View>
                    <Text style={{ fontWeight: '500', color: '#3B3935' }}>Purpose of loan</Text>
                    <DropDownPicker
                        style={styles.inputNumber}
                        open={open2}
                        value={value2}
                        items={items2}
                        setOpen={setOpen2}
                        setValue={setValue2}
                        setItems={setItems2}
                    />
                </View>
                <View>
                    <Text style={{ fontWeight: '500', color: '#3B3935' }}>Required Amount</Text>
                    <DropDownPicker
                        style={styles.inputNumber}
                        open={open3}
                        value={value3}
                        items={items3}
                        setOpen={setOpen3}
                        setValue={setValue3}
                        setItems={setItems3}
                    />
                </View>

                <View style={{ paddingVertical: 15, }}>
                    <Pressable style={styles.ContinusBtn} onPress={() => navigation.navigate("Verification OTP")}>
                        <Text style={{ color: '#fff', textAlign: 'center', fontSize: 16 }}>Continue</Text>
                    </Pressable>
                </View>

            </ScrollView>
        </ImageBackground>
    )
}

export default ApplyOnline

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
    inputNumber: {
        width: '100%',
        borderRadius: 12,
        borderColor: '#C4C4C7',
        borderWidth: 1,
        paddingHorizontal: 15,
        marginVertical: 10,
        fontSize: 16,
        fontWeight: '400',
        backgroundColor: '#fff',
        position: 'relative',
        zIndex: 1
    },
    ContinusBtn: {
        backgroundColor: '#F89D28',
        paddingHorizontal: 15,
        paddingVertical: 14,
        borderRadius: 50,
        width: '100%'
    }
})