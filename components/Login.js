import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { StyleSheet } from 'react-native'

export default function App({navigation}) {
 

  return (
    <View style={styles.container}>
          <Image style={styles.logo} source={require("../assets/orangista.png")} />
          <TextInput
                  style={styles.input}
                  placeholder='Enter your username'
                  placeholderTextColor="white" 


      />

<TextInput
                  style={styles.input}
                  placeholder='Enter your password'
                  placeholderTextColor="white" 
                 secureTextEntry



      />
<TouchableOpacity style={styles.login_btn}>
  <Text style={{ textAlign : 'center' , marginTop : 10 , fontWeight : 800 , color : 'white'}}>Login in</Text>
  </TouchableOpacity>
  <Text style={{ color : 'white' , marginTop : 30 , fontWeight : 500 , fontSize : 15}}>Forget password?</Text>
  <TouchableOpacity  onPress={() => navigation.navigate('sign_up')} style={styles.create_account_btn}>
  <Text        
 style={{ textAlign : 'center' , marginTop : 10 , fontWeight : 800 , color : '#e68e29'}}>Create new  account</Text>
  </TouchableOpacity>
      </View>
  );
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
logo : {
  width : 100 , 
  height : 100,
},

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