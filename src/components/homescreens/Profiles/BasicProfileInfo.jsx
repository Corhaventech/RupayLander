import React, { useState } from 'react'
import { StyleSheet, Text, View, ImageBackground, TextInput, Pressable, ScrollView, } from 'react-native'
import bgImg from '../../../assets/img/bg-gradient-linear-new.png'
// import DatePicker from 'react-native-date-picker'
import DropDownPicker from 'react-native-dropdown-picker';
import AntDesign from 'react-native-vector-icons/AntDesign'

const BasicProfileInfo = ({navigation}) => {

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
                    <TextInput style={styles.inputNumber} keyboardType='default' placeholder='Dazzi' placeholderTextColor="#3B3935" />
                </View>
                <View>
                    <Text style={{ fontWeight: '500' }}>Mail Id</Text>
                    <TextInput style={styles.inputNumber} keyboardType='email-address' placeholder='dazzi123@gmail.com' placeholderTextColor="#3B3935" />
                </View>
                <View>
                    <Text style={{ fontWeight: '500' }}>Date of Birth</Text>
                    <TextInput style={styles.inputNumber} keyboardType='default' placeholder='05/12/1998' placeholderTextColor="#3B3935" />
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
                    <TextInput style={styles.inputNumber} keyboardType='numeric' placeholder='395006' placeholderTextColor="#3B3935" />
                </View>
                <View>
                    <Text style={{ fontWeight: '500' }}>Aadhar card</Text>
                    <View style={[styles.inputNumber, {paddingVertical:10}]}>
                        <View style={{flexDirection:'row', alignItems:'center', gap:15}}>
                            <AntDesign name="jpgfile1" size={25} color="#3B3935" />
                            <Text style={{fontSize:14, fontWeight:'500', color:'#3B3935'}}>Whatsapp.jpj</Text>
                        </View>
                    </View>
                </View>
                <View>
                    <Text style={{ fontWeight: '500' }}>Pan card</Text>
                    <View style={[styles.inputNumber, {paddingVertical:10}]}>
                        <View style={{flexDirection:'row', alignItems:'center', gap:15}}>
                            <AntDesign name="jpgfile1" size={25} color="#3B3935" />
                            <Text style={{fontSize:14, fontWeight:'500', color:'#3B3935'}}>Whatsapp.jpj</Text>
                        </View>
                    </View>
                </View>
                <View>
                    <Text style={{ fontWeight: '500' }}>Photo</Text>
                    <View style={[styles.inputNumber, {paddingVertical:10}]}>
                        <View style={{flexDirection:'row', alignItems:'center', gap:15}}>
                            <AntDesign name="jpgfile1" size={25} color="#3B3935" />
                            <Text style={{fontSize:14, fontWeight:'500', color:'#3B3935'}}>Whatsapp.jpj</Text>
                        </View>
                    </View>
                </View>
                
                <View>
                    <Text style={{ fontWeight: '500' }}>GST No(optional)</Text>
                    <TextInput style={styles.inputNumber} keyboardType='numeric' placeholder='21154852155' placeholderTextColor="#3B3935" />
                </View>

                <View style={{paddingVertical:20, flexDirection:'row', alignItems:'center', gap:10}}>
                    <Pressable style={[styles.ContinusBtn, {backgroundColor:'#fff', borderWidth:1, borderColor:'#F89D28'}]} onPress={() => navigation.navigate("Upload Document")}>
                        <Text style={{color:'#F89D28', textAlign:'center', fontSize:16}}>Edit</Text>
                    </Pressable>
                    <Pressable style={styles.ContinusBtn} onPress={() => navigation.navigate("Upload Document")}>
                        <Text style={{color:'#fff', textAlign:'center', fontSize:16}}>Continue</Text>
                    </Pressable>
                </View>

            </ScrollView>
        </ImageBackground>
    )
}

export default BasicProfileInfo;

const styles = StyleSheet.create({
    backggroundContainer: {
        flex: 1,
        resizeMode: 'repeat',
        padding: 15
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
    ContinusBtn:{ 
        backgroundColor:'#F89D28',
        paddingHorizontal:15,
        paddingVertical:14,
        borderRadius:50,
        width:'48%'
    }
})