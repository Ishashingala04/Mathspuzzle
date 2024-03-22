import React from 'react'
import {Image, ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native'

export default function Homepage({navigation}) {
  return (
   <>
        <View>
                <ImageBackground source={require('./img/background.jpg')} style={{ height: '100%', width: '100%' }}>
                    <Text style={style.head}>Math puzzles</Text>
                    <View style={{flex:6}}>
                        <ImageBackground resizeMode="stretch" source={require('./img/blackboard_main_menu.png')} style={style.blackbord}>
                            <View style={{flex:2}}></View>
                                <Pressable><Text style={style.btn}  onPress={() => navigation.navigate('Level')}>Continue</Text></Pressable>
                                <Pressable><Text style={style.btn}  onPress={() => navigation.navigate('Lock')}>Puzzles</Text></Pressable>
                                <Pressable><Text style={style.btn}>Buy Pro</Text></Pressable>
                            <View style={{flex:2}}></View>
                        </ImageBackground>
                    </View> 
                    <View style={style.icons}>
                        <Pressable style={style.share_icons}><Image resizeMode='stretch' source={require('./img/shareus.png')} style={style.shareus}></Image></Pressable>
                        <Pressable style={style.email_icons}><Image resizeMode='stretch' source={require('./img/emailus.png')} style={style.emailus}></Image></Pressable>
                    </View>
                    
                    <View style={{flex:1}}>
                        <Pressable style={{height:150,width:100,marginLeft:270}}><Text style={style.private}>Privacy police</Text></Pressable>
                    </View>

                </ImageBackground>
        </View>
   
   </>
  )
}
const style=StyleSheet.create({

    head: {
        textAlign: 'center',
        fontSize: 25,
        color: '#3f51b5',
        marginTop: '5%',
        fontFamily: 'serif',
        fontStyle: 'italic',
        fontWeight: 'bold',
        marginBottom: '5%'
    },
    blackbord: {
        height:'100%',
        width:'97%',
        marginHorizontal: 10,
    },
    btn:{
        color:'white',
        fontSize:30,
        textAlign:'center',
        marginHorizontal:'25%',
        margin:15,  
    },
    icons: {
        flexDirection: 'row',
        gap: 5,
        justifyContent: 'center'
    },
    shareus: {
        height: 20,
        width: 20,
        margin:10,
    },
    emailus: {
        height: 20,
        width: 20,
        margin:10,
    },
    share_icons: {
        height: 40, 
        width: 40, 
        backgroundColor: '#4d4d4d',
        borderWidth: 1,
        borderColor: '#999966',
        borderRadius: 10,
        marginLeft:250,
        marginTop:20,   
    },
    email_icons: {
        height: 40, 
        width: 40, 
        backgroundColor: '#4d4d4d',
        borderWidth: 1,
        borderColor: '#999966',
        borderRadius: 10,
        marginTop:20,
       
    },
    private:{
        color:'black',
        borderWidth:2,
        textAlign:'center',
        marginTop:10,
        
    }

})
