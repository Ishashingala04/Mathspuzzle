import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { View } from 'react-native'
import Homepage from './Homepage'
import Levelpage from './Levelpage';
import Winpage from './Winpage';
import Lockpage from './Lockpage';
import Losepage from './Losepage';


const Stack = createNativeStackNavigator();

function App() {
  return (
   <>
   
  


    <NavigationContainer> 
    <Stack.Navigator initialRouteName='Home'> 
          
          <Stack.Screen name="Home" component={Homepage} />
          <Stack.Screen name="Level" component={Levelpage} />
          <Stack.Screen name="Win" component={Winpage} />
          <Stack.Screen name="Lock" component={Lockpage} />
          <Stack.Screen name="loss" component={Losepage} />
    </Stack.Navigator>

    </NavigationContainer>

      {/* <Homepage></Homepage> */}
      {/* <Levelpage></Levelpage> */}
      {/* <Lockpage></Lockpage> */}
    
   </>
  )
}
export default App;

