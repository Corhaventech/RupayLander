import { StyleSheet,  Text, View, ImageBackground, Image, Pressable } from 'react-native'
import React, {useState} from 'react' 
import bgImage1 from '../../../assets/img/FrameGreen.png' 
import { CheckBox } from '@rneui/themed';



const CreditCardBox = ({item, navigation}) => {
    const [checked, setChecked] = React.useState(true);
     const toggleCheckbox = () => setChecked(!checked);
    return ( 
        <View key={item}>
            <ImageBackground source={item.bgImage} style={[styles.CardContainer, {backgroundColor:item.bgColor}]}>
                <View style={styles.flexRow}>
                    <View>  
                        <CheckBox
                            containerStyle={{
                                padding:0,
                                backgroundColor:'#ffffff00',
                                margin:0,
                                left:-10
                            }}
                            checked={checked}
                            onPress={toggleCheckbox}
                            // Use ThemeProvider to make change for all checkbox
                            iconType="material-community"
                            checkedIcon="checkbox-marked"
                            uncheckedIcon="checkbox-blank-outline"
                            checkedColor="#fff"
                            title="Add to compare"
                            textStyle={{color:'#fff', fontWeight:'500'}}
                        /> 
                    </View>
                    <Pressable style={styles.EarnTetx} onPress={() => navigation.navigate("enrings")}>
                        <Text style={styles.compareText}>{item.earn}</Text>
                    </Pressable>
                </View>
                <View style={[styles.flexRow, {justifyContent:'flex-start', gap:15, paddingVertical:8}]}>
                    <View>
                        <Image source={item.img} style={styles.IconImage} alt='img' />
                    </View>
                    <View>
                        <Text style={styles.HdfcTextTitles}>{item.bankname}</Text>
                    </View>
                </View>
                <View style={{paddingBottom:5}}>
                    <Text style={styles.VouchersMonthText}>{item.title}</Text>
                    <Text style={styles.VouchersMonthText}>{item.title2}</Text>
                </View>
                <View style={{paddingBottom:10}}>
                    <View style={styles.flexRow}>
                        <View>
                            <Text style={styles.JoineeText}>{item.joinfee}</Text>
                        </View>
                        <Text style={{color:'#fff'}}>|</Text>
                        <View>
                            <Text style={styles.JoineeText}>{item.Anual}</Text>
                        </View>
                        <Text style={{color:'#fff'}}>|</Text>
                        <View style={[styles.flexRow, {justifyContent:'flex-start', gap:7,}]}>
                            <Text style={styles.JoineeText}>{item.Approval}</Text>
                            <Text style={styles.JoineeText}>Good</Text>
                        </View>
                    </View> 
                </View>
                <View style={styles.flexRow}>
                    <Pressable style={styles.ViewButtons} onPress={() => navigation.navigate('CreditCardDetail')}>
                        <Text style={styles.btnTitle}>View Detail</Text>
                    </Pressable>
                    <Pressable style={styles.ViewButtons} onPress={() => navigation.navigate('AddCustomerCreate')}>
                        <Text style={styles.btnTitle}>Add Customer</Text>
                    </Pressable>
                    <Pressable style={[styles.ViewButtons, {backgroundColor:'#fff'}]}>
                        <Text style={[styles.btnTitle, {color:'#00589B'}]}>Share with Customer</Text>
                    </Pressable>
                </View>
            </ImageBackground> 
        </View> 
    )
}

export default CreditCardBox;

const styles = StyleSheet.create({
    CardContainer: {
        borderRadius: 12,
        padding: 12,
        overflow: 'hidden',
        width:'100%',
        resizeMode:'cover', 
        backgroundColor:'#00589B',
        marginBottom:10
    },
    flexRow:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    checkText:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start',
        gap:5
    }, 
    EarnTetx:{
        backgroundColor:'#fff',
        padding:6,
        borderRadius:5
    },
    IconImage:{
        width:40,
        height:40,
        borderRadius:5
    },
    HdfcTextTitles:{
        fontSize:18,
        fontWeight:'600',
        color:'#fff'
    },
    VouchersMonthText:{
        lineHeight:20,
        color:'#fff',
        fontWeight:'500',
        paddingBottom:5,
        fontSize:12
    },
    JoineeText:{
        lineHeight:20,
        color:'#fff',
        fontWeight:'500', 
        fontSize:11
    },
    ViewButtons:{
        borderWidth:1,
        paddingHorizontal:10,
        paddingVertical:5,
        borderColor:'#fff',
        borderRadius:50,
    },
    btnTitle:{
        fontSize:11,
        color:'#fff',
        fontWeight:'500'
    }
})