import React, { useState } from "react";
import { Text, Pressable, StyleSheet, TextInput, View, ImageBackground, Image,  } from "react-native";
function Winpage({navigation}) {
    const [levelNo,setlevelNo]=useState();
   
    return (
        <>
            <View>
            <ImageBackground source={require('./img/background.jpg')} style={{height:'100%',width:'100%'}}>
                
                <Text style={style.heading}>PUZZLE {levelNo} COMPLETED</Text>

                <Image source={require('./img/trophy.png')} style={style.trophy}></Image>

                <Pressable><Text style={style.tex} onPress={() => navigation.navigate('Level')}>CONTINUIE</Text></Pressable>
                <Pressable><Text style={style.tex}  onPress={() => navigation.navigate('Home')}>MAIN MENU</Text></Pressable>
                <Pressable><Text style={style.tex}>BUY PRO</Text></Pressable>

                <Text style={style.title}>SHARE THIS PUZZLE</Text>

             <Pressable style={style.shr}>
                <Image  resizeMode="stretch" source={require('./img/shareus.png')} style={style.shar}></Image>
             </Pressable>
            </ImageBackground>
                               
            </View>
        </>
    )
}
export default Winpage;
const style = StyleSheet.create({
  
    heading: {
        textAlign: 'center',
        fontSize:20,
        color: '#3f51b5',
        fontFamily: 'serif',
        fontStyle: 'italic',
        fontWeight: 'bold',
        marginTop: '8%',
},
trophy:{
    height:300,
    width:250,
    marginHorizontal:'20%',
    marginVertical:'5%'

},
tex:{
    backgroundColor:'#7D8A93',
    marginHorizontal:'25%',
    textAlign:'center',
    margin:5,
    padding:10, 
    width:'50%',
    borderRadius:15,
    fontWeight:'bold',
    fontSize:20
    
},
shar:{
    height:25,
    width:25,
   marginVertical:'5%',
   
},
shr:{
    height:'5%',
    width:'10%',
    borderRadius:15,
    backgroundColor:'#7D8A93',
    padding: 6,
    marginHorizontal:'45%'
},
title:{
    textAlign:'center',
    fontSize:20,
    color:'#3f51b5',
    fontFamily: 'serif',
    fontWeight: 'bold',
    paddingTop:15,
    fontStyle: 'italic',
    paddingBottom:15,

}
});



