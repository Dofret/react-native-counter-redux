import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Button = ({text, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} >
    <View style={styles.cont}>
      <Text style={{color:"white"}}>{text}</Text>
    </View>
    </TouchableOpacity>

  )
}

export default Button

const styles = StyleSheet.create({
    cont:{
        backgroundColor:"black",
        margin:5,
        width:80,
        height:35,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:10
    }
})