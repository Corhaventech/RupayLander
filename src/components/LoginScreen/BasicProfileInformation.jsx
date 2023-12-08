import React, { useState } from 'react'
import { StyleSheet, Text, View, ImageBackground, TextInput, Pressable, ScrollView, Button } from 'react-native'
import bgImg from '../../assets/img/bg-gradient-linear-new.png'
// import DatePicker from 'react-native-date-picker'
import DropDownPicker from 'react-native-dropdown-picker';


const BasicProfileInformation = ({navigation}) => {

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Occupation', value: 'occupation' },
        { label: 'Banana', value: 'banana' }
    ]);

    const [open1, setOpen1] = useState(false);
    const [value1, setValue1] = useState(null);
    const [items1, setItems1] = useState([
        { label: 'Occupation', value: 'occupation' },
        { label: 'Banana', value: 'banana' }
    ]);

    const [open2, setOpen2] = useState(false);
    const [value2, setValue2] = useState(null);
    const [items2, setItems2] = useState([
        { label: 'Occupation', value: 'occupation' },
        { label: 'Banana', value: 'banana' }
    ]);

    // const [date, setDate] = useState(new Date())
    // const [open, setOpen] = useState(false)
    // <Button title="Open" onPress={() => setOpen(true)} />
    //             <DatePicker
    //                 modal
    //                 open={open}
    //                 date={date}
    //                 onConfirm={(date) => {
    //                 setOpen(false)
    //                 setDate(date)
    //                 }}
    //                 onCancel={() => {
    //                 setOpen(false)
    //                 }}
    //             />

    return (
        <ImageBackground source={bgImg} style={styles.backggroundContainer}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                    <Text style={{ fontWeight: '500' }}>Name</Text>
                    <TextInput style={styles.inputNumber} keyboardType='default' placeholder='Enter Full Name' placeholderTextColor="#12121D4D" />
                </View>
                <View>
                    <Text style={{ fontWeight: '500' }}>Mail Id</Text>
                    <TextInput style={styles.inputNumber} keyboardType='email-address' placeholder='Enter Mail' placeholderTextColor="#12121D4D" />
                </View>
                <View>
                    <Text style={{ fontWeight: '500' }}>Date of Birth</Text>
                    <TextInput style={styles.inputNumber} keyboardType='default' placeholder='00/00/0000' placeholderTextColor="#12121D4D" />
                </View>
                <View>
                    <Text style={{ fontWeight: '500' }}>Occupation</Text>
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
                    <Text style={{ fontWeight: '500' }}>Qualification</Text>
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
                    <Text style={{ fontWeight: '500' }}>Annual Income</Text>
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
                    <Text style={{ fontWeight: '500' }}>Pin Code</Text>
                    <TextInput style={styles.inputNumber} keyboardType='numeric' placeholder='Enter Pin Code' placeholderTextColor="#12121D4D" />
                </View>
                <View style={{paddingVertical:20}}>
                    <Pressable style={styles.ContinusBtn} onPress={() => navigation.navigate("Upload Document")}>
                        <Text style={{color:'#fff', textAlign:'center', fontSize:16}}>Continue</Text>
                    </Pressable>
                </View>

            </ScrollView>
        </ImageBackground>
    )
}

export default BasicProfileInformation

const styles = StyleSheet.create({
    backggroundContainer: {
        flex: 1,
        resizeMode: 'repeat',
        padding: 15
    },
    inputNumber: {
        width: '100%',
        borderRadius: 6,
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
    ContinusBtn:{ 
        backgroundColor:'#F89D28',
        paddingHorizontal:15,
        paddingVertical:14,
        borderRadius:50,
    }
})