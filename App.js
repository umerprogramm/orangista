import { useEffect, useState } from "react";
import Loader  from "./components/loader";
import Login from "./components/Login";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import First_last_name from "./components/first_last_name";
import Other_info_for_signup from "./components/Other_info_for_signup";

export default function App() {
  const Stack = createStackNavigator();


  const [state , setstate ] = useState(false)

  useEffect(()=>{

    setTimeout(()=>{
      setstate(true)
    },2000)

    
  },[])
  return (
    state ?  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen 
       options={{ headerShown: false }} name="login" component={Login} />
      <Stack.Screen options={{ headerShown: false }} name="sign_up" component={First_last_name} />
      <Stack.Screen options={{ headerShown: false }} name="Other_info_for_signup" component={Other_info_for_signup} />

    </Stack.Navigator>
  </NavigationContainer>  :
    <Loader/>
  )


}


