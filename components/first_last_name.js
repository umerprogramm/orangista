import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { StyleSheet } from 'react-native'


export default function First_last_name({navigation}) {
  return (
    <View style={styles.container}>
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

<TouchableOpacity onPress={() => navigation.navigate('Other_info_for_signup')} style={styles.login_btn}>
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
 
 
 }) 