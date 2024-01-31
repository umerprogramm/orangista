import { View, Image  , StyleSheet} from 'react-native'
import React from 'react'

export default function Loader() {
  return (
    <View style={styles.container}>
    <Image style={styles.logo} source={require("../assets/orangista.png")} />
    </View>
  )
}



const styles = StyleSheet.create({
    logo : {
        width : 150 , 
        height : 150,
      },
      container: {
        backgroundColor : "#10182e" ,
         height : "100%" ,
          display : 'flex',
          alignItems : 'center' ,
           justifyContent : 'center'
      },
}) 