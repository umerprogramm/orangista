import { Button, Text, TextInput, TouchableOpacity, View , Image} from 'react-native';
import { StyleSheet } from 'react-native'
import * as ImagePicker from 'expo-image-picker';
import { useState, useEffect } from 'react';



import React from 'react'

export default function Other_info_for_signup() {
  const [image, setImage] = useState(null);


  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  return (

      <View style={styles.container}>
        <TouchableOpacity onPress={pickImage}>
<View style={styles.avator}>
<Image style={styles.logo} source={require("../assets/camera-50.png")} />

</View>

</TouchableOpacity>
      <TextInput
              style={styles.input}
              placeholder='Enter your First Name'
              placeholderTextColor="white" 
  
  
  />
  <TextInput
              style={styles.input}
              placeholder='Enter your Last Name'
              placeholderTextColor="white" 
  
  
  />


  
  <TouchableOpacity  style={styles.login_btn}>
    <Text style={{ textAlign : 'center' , marginTop : 10 , fontWeight : 800 , color : 'white'}}> Next -></Text>
    </TouchableOpacity>
  
  
  
  
  
  
  </View>
  )
}



const styles = StyleSheet.create({
  container : { 
   flex : 1,
   display : 'flex' ,
   justifyContent : 'center' ,
   alignItems : 'center',
   backgroundColor : "#10182e" ,
   
 }
 ,

 
 input: {
   height: 50,
   padding: 10,
   width : '80%',
   borderColor: '#0a2d7a', 
   borderWidth: 2,     
   borderRadius: 10,
   marginTop : 10,
   color : 'white'
 },
 login_btn : {
   backgroundColor : '#e68e29',
   height: 40,
   width : '80%',
 textAlign : 'center',
 borderRadius : 10,
 marginTop : 10
 
 }, 
 create_account_btn : {
   backgroundColor : 'transparent',
   height: 40,
   width : '80%',
 textAlign : 'center',
 borderRadius : 10,
 marginTop : 10,
 borderColor: '#e68e29', 
 borderWidth: 2,     
 
 
 
 }, 

 avator : {
  width : 150,
  height : 150,
  borderRadius : 100,
  display : 'flex',
  justifyContent : "center",
  alignItems : "center",
  borderColor : '#e68e29',
  borderWidth: 2,   
  marginBottom : 50  

 },

 
 
 }) 