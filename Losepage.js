import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, View ,Pressable } from 'react-native'

export default function Losepage({route,navigation}) {

    const{levelNo}=route.params;
  return (
   
        <>
        <View>
            <ImageBackground source={require('./img/background.jpg')} style={{height:'100%',width:'100%'}}>

                <Text style={style.head}>PUZZLES {levelNo} ARE LOSE</Text>
            
            <View style={{flex:3}}>
                <Image source={require('./img/loss.png')} style={style.sad}></Image>
            </View>
           
           <View style={{flex:2}}>
                <Pressable><Text style={style.tex} onPress={() => navigation.navigate('Level',{'levelNo':levelNo})}>CONTINUIE</Text></Pressable>
                <Pressable><Text style={style.tex}  onPress={() => navigation.navigate('Home')}>MAIN MENU</Text></Pressable>
                <Pressable><Text style={style.tex}>BUY PRO</Text></Pressable>
            </View>
                
            </ImageBackground>
        </View>
        
        </>
  )
}
const style=StyleSheet.create({

    head:{
        textAlign: 'center',
        fontSize: 25,
        color: '#3f51b5',
        fontFamily: 'serif',
        fontStyle: 'italic',
        fontWeight: 'bold',
        marginTop:50
    },
    sad:{
        height:300,
        width:300,
        marginHorizontal:'10%',
        marginVertical:'10%'
    
    },
    tex:{
        backgroundColor:'#7D8A93',
        marginHorizontal:'25%',
        textAlign:'center',
        padding:10, 
        width:'50%',
        borderRadius:15,
        fontWeight:'bold',
        fontSize:20,
        marginBottom:25,
        
    },
})
