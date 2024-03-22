import { useFocusEffect } from '@react-navigation/native';
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert, Image, ImageBackground, Pressable, StyleSheet, Text, View  } from 'react-native'


export default function Levelpage({route,navigation}) {

    const [txt,settxt]=useState('');
    const [levelNo,setlevelNo] = useState(1);
    const [isUpdate,setUpdate] = useState(0);
    const [coin,getcoindata] = useState(10);
    const[skippedLevels,setskipped]=useState([]);
  
   
    // const [num,setnum]=useState

    const image=[require('./img/p1.png'),require('./img/p2.png'),
    require('./img/p3.png'),require('./img/p4.png'),require('./img/p5.png'),require('./img/p6.png'),require('./img/p7.png'),require('./img/p8.png'),require("./img/p9.png"),require("./img/p10.png"),require("./img/p11.png"),
    require("./img/p12.png"),require("./img/p13.png"),require("./img/p14.png"),
    require("./img/p15.png"),require("./img/p16.png"),require("./img/p17.png"),
    require("./img/p18.png"),require("./img/p19.png"),require("./img/p20.png"),
    require("./img/p21.png"),require("./img/p22.png"),require("./img/p23.png"),
    require("./img/p24.png"),require("./img/p25.png"),require("./img/p26.png"),
    require("./img/p27.png"),require("./img/p28.png"),require('./img/p29.png'),
    require('./img/p30.png'),require('./img/p31.png'),require('./img/p32.png'),
    require('./img/p33.png'),require('./img/p34.png'),require('./img/p35.png'),
    require('./img/p36.png'),require('./img/p37.png'),require('./img/p38.png'),
    require('./img/p39.png'),require('./img/p40.png'),require('./img/p41.png'),
    require('./img/p42.png'),require('./img/p43.png'),require('./img/p44.png'),
    require('./img/p45.png'),require('./img/p46.png'),require('./img/p47.png'),
    require('./img/p48.png'),require('./img/p49.png'),require('./img/p50.png'),
    require('./img/p51.png'),require('./img/p52.png'),require('./img/p53.png'),
    require('./img/p54.png'),require('./img/p55.png'),require('./img/p56.png'),
    require('./img/p57.png'),require('./img/p58.png'),require('./img/p59.png'),
    require('./img/p60.png'),require('./img/p61.png'),require('./img/p62.png'),
    require('./img/p63.png'),require('./img/p64.png'),require('./img/p65.png'),
    require('./img/p66.png'),require('./img/p67.png'),require('./img/p68.png'),
    require('./img/p69.png'),require('./img/p70.png'),require('./img/p71.png'),
    require('./img/p72.png'),require('./img/p73.png'),require('./img/p74.png'),
    require('./img/p75.png')]


    const trueAns = [ 10, 25, 6, 14, 128, 7, 50, 1025, 100, 3, 212, 3011, 14, 16, 1, 2, 44, 45, 625, 1, 13, 47, 50, 34, 6, 41, 16, 126, 82, 14, 7, 132, 34, 48, 42, 288, 45, 4, 111, 47, 27, 87, 22, 253, 12, 48, 178, 1, 6, 10, 2, 20, 7, 5, 143547, 84, 11, 27, 3, 5, 39, 31, 10, 130, 22, 3, 14, 42, 164045, 11, 481, 86, 84, 13, 8 ]

   const btnclick = (num) =>{
    settxt(txt + num)
   } 
   const deletetxt = ()=>{
    temp = txt.slice(0,txt.length-1);
    settxt(temp);
   }
   function check(){

    if(txt == trueAns[levelNo-1]){
        storecoin((coin+10).toString())
        temparr = [...skippedLevels]
        if(temparr.includes(levelNo)) {
            for(var i = 0; i < temparr.length; i++)  {
                if(temparr[i] == levelNo) {
                    temparr[i]="";
                }
            }
            setSkipLevelsFun(temparr);
        }
        settxt('');
          navigation.navigate('Win')
       
        storeData((levelNo + 1).toString());  
        console.log(levelNo +1);  
    }
    else{
        navigation.navigate('loss',{'levelNo' : levelNo});
        storecoin(String(coin-10))
        settxt('');
    }   
}

function skip(){
    setUpdate(1)
    console.log('skip',levelNo)
    setskipped([...skippedLevels,levelNo])
    storeData2((levelNo + 1).toString());
    navigation.push("Level")
    
}
const getSkipLevelsFun  = async () => {
    try {
        const value = await AsyncStorage.getItem('skipped');
         var temp = value != null ? JSON.parse(value) : [];
         setskipped(temp);
    //     const jsonValue = JSON.stringify(value);
    //   const value = await AsyncStorage.getItem('LevelNum');
    } catch (e) {
      // error reading value
    }
  };
  useEffect(()=>{
    // console.log(skippedLevels)
    if(isUpdate==1){
        setSkipLevelsFun(skippedLevels)
    }
    // 
    
  },[skippedLevels])

  const setSkipLevelsFun = async(value) =>{
    try{
        if(value.length>0){
            const jsonValue = JSON.stringify(value);
            console.log("Hello",value)
            await AsyncStorage.setItem('skipped',jsonValue);
        }
    }  catch (e){

    }
  }
  const storeData2 = async (value) => {
    try {
      await AsyncStorage.setItem('levelNo', value);
      
    } catch (e) {
      // saving error
    }
  };








function hint(){
    Alert.alert('Hint', gethint[levelNo - 1], [
        {text: 'OK'},
      ]);
  }
const gethint = [
    'Sum',
    'Multiply',
    'Multiply with next Number',
    'Count the boxes',
    'Check the difference of two numbers and Multiply it.',
    'Check the difference',
    'Sum',
    'Multiply',
    'Multiply with next Number',
    'Count the boxes',
    'Check the difference of two numbers and Multiply it.',
    'Check the difference',
    'Sum',
    'Multiply',
    'Multiply with next Number',
    'Count the boxes',
    'Check the difference of two numbers and Multiply it.',
    'Check the difference',
  ];



  const storecoin = async (value) => {
    try {
      await AsyncStorage.setItem('coin', value);
      // navigation.navigate('Level')
    } catch (e) {
      // saving error
    }
     };
     const getcoin = async () => {
        try {
          const value = await AsyncStorage.getItem('coin');
          if (value !== null) {
            getcoindata(parseInt(value));
            console.log(value)
            // value previously stored
          }
        } catch (e) {
          // error reading value
        }
      };




const storeData = async (value) => {
    try {
      await AsyncStorage.setItem('levelNo', value);
      navigation.navigate('Win')

    } catch (e) {
      // saving error
    }
     };

     const getData = async () => {
        try {
          const value = await AsyncStorage.getItem('levelNo');
          if (value !== null) {
            setlevelNo(parseInt( value));
            // value previously stored
          }
        } catch (e) {
          // error reading value
        }
      };

useFocusEffect(
    React.useCallback(()=>{
        getData();
        getSkipLevelsFun();
    },[])
)

useEffect(
  React.useCallback(()=>{
    getcoin();

  },[])
)


   

  return (
    <>
    {/* <Text>Hello</Text> */}
    <View style={style.main}>
            <ImageBackground source={require("./img/gameplaybackground.jpg")} resizeMode="stretch" style={style.main}>

                <View style={style.header}>
                    <Pressable style={style.skipperent} onPress={()=>skip()}> 
                        <Image source={require("./img/skip.png")} style={style.skip}></Image>
                    </Pressable>
                    <View style={style.nameboard__}> 
                        <ImageBackground source={require("./img/level_board.png")} style={style.nameboard} resizeMode="stretch" >
                            <Text style={style.leveltxt}>Puzzle {levelNo }</Text>
                        </ImageBackground>
                        
                    </View>
                    <Pressable style={style.skipperent} onPress={()=>hint()}> 
                        <Image source={require("./img/hint.png")} style={style.skip}></Image>
                    </Pressable>
                </View>
                <View style={{flexDirection: 'row', alignSelf: 'flex-end'}}>
                        <Text style={style.coins_}>🪙</Text>
                        <Text style={style.coins_}>{coin}</Text>
                  </View>

             <View style={style.boardperent}>
                    <Image source={image[levelNo-1 ]} style={style.boardimg} resizeMode="stretch"></Image>
                </View>

                <View style={style.footer}>
                    <View style={style.firstline}>
                        <Text style={style.txtdisplay}>{txt}</Text>
                        <Pressable style={style.delete} onPress={deletetxt}>
                            <Image source={require("./img/delete.png")} style={style.deletetxt}></Image>
                        </Pressable>
                        <Pressable style={style.submit} onPress={check}>
                            <Text style={style.submittxt}>SUBMIT</Text>
                        </Pressable>
                    </View>
                    <View style={style.secondline}>
                        <Pressable style={style.button} onPress={()=>{btnclick(1)}} ><Text style={style.buttontxt}>1</Text></Pressable>
                        <Pressable style={style.button} onPress={()=>{btnclick(2)}} ><Text style={style.buttontxt}>2</Text></Pressable>
                        <Pressable style={style.button} onPress={()=>{btnclick(3)}} ><Text style={style.buttontxt}>3</Text></Pressable>
                        <Pressable style={style.button} onPress={()=>{btnclick(4)}} ><Text style={style.buttontxt}>4</Text></Pressable>
                        <Pressable style={style.button} onPress={()=>{btnclick(5)}} ><Text style={style.buttontxt}>5</Text></Pressable>
                        <Pressable style={style.button} onPress={()=>{btnclick(6)}} ><Text style={style.buttontxt}>6</Text></Pressable>
                        <Pressable style={style.button} onPress={()=>{btnclick(7)}} ><Text style={style.buttontxt}>7</Text></Pressable>
                        <Pressable style={style.button} onPress={()=>{btnclick(8)}} ><Text style={style.buttontxt}>8</Text></Pressable>
                        <Pressable style={style.button} onPress={()=>{btnclick(9)}} ><Text style={style.buttontxt}>9</Text></Pressable>
                        <Pressable style={style.button} onPress={()=>{btnclick(0)}} ><Text style={style.buttontxt}>0</Text></Pressable>
                    </View>
                </View>

            </ImageBackground>
        </View>


    </>
  )
}
const style=StyleSheet.create({

    main:{
        height:"100%",
        justifyContent:"space-around",
    },
    header:{
        height:"10%",
        flexDirection:"row",
        justifyContent:"space-around",
    },
    skipperent:{
       height:"60%",
       width:"12%" ,
       alignSelf:"center",
    },
    skip:{
        height:"100%",
        width:"100%"
    },
    nameboard__:{
        height:"80%",
        width:"55%",
        alignSelf:"center",
    },
    nameboard:{
        height:"100%",
        width:"100%",
    },
    leveltxt:{
        height:"100%",
        fontSize:35,
        fontWeight:"900",
        textAlignVertical:"center",
        textAlign:"center",
        color:"black",
    },
    boardperent:{
        height:"50%",
        width:"90%",
        alignSelf:"center",
    },
    boardimg:{
        height:"100%",
        width:"100%"
    },
    footer:{
        height:"13%",
        backgroundColor:"black"
    },
    firstline:{
        height:"50%",
        flexDirection:"row",
        justifyContent:"space-around"
    },
    txtdisplay:{
        height:"70%",
        width:"60%",
        borderWidth:1,
        alignSelf:"center",
        backgroundColor:"white",
        fontSize:20,
        fontWeight:"600",
        color:"black",
        borderRadius:9,
        textAlignVertical:"center"
    },
    delete:{
        height:"100%",
        width:"13%",
    },
    deletetxt:{
        height:"100%",
        width:"100%"
    },
    submit:{
        height:"75%",
        width:"20%",
        alignSelf:"center",
    },
    submittxt:{
        height:"100%",
        fontSize:20,
        fontWeight:"700",
        color:"white",
        textAlign:"center",
        textAlignVertical:"center"
    },
    secondline:{
        height:"50%",
        flexDirection:"row",
        justifyContent:"space-evenly"
    },
    button:{
        height:"90%",
        width:"9%",
        alignSelf:"center",
        borderRadius:10,
        borderWidth:1,
        borderColor:"white"
    },
    buttontxt:{
        height:"100%",
        backgroundColor:"rgba(105,105,105,0.5)",
        fontSize:20,
        textAlign:"center",
        textAlignVertical:"center",
        color:"white",
        borderRadius:10
    },
    coins_: {
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
      },

})
