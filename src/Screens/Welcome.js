import { StyleSheet, Text, View, ImageBackground, Pressable } from 'react-native'
import React from 'react'
import { stylesCss } from '../Css'
import { useNavigation } from '@react-navigation/native';


export default function Welcome() {
  const nav = useNavigation()
  return (
    <View style={[stylesCss.container]}>
      <ImageBackground source={require('../../assets/images/welcome/onboarding.png')} resizeMode="cover" style={styles.image}>
        <View style={[stylesCss.container,styles.title]}>
          <Text style={{fontSize:45,width:'75%'}}>Glass for eye</Text>
          <Text style={{fontSize:20,width:'75%'}}>You’re at the right place!</Text>
        </View>
        <Pressable onPress={()=> { nav.navigate("SignIn") }}>
          <View style={styles.button}>
              <Text style={{color:'white',fontSize:17}}>Get Started</Text>
          </View>
        </Pressable>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: 'center',
      },
    title:{
      justifyContent: 'flex-end',
      alignItems:'center'
    },
    button:{
      padding:20,
      margin:20,
      ustifyContent: 'center',
      alignItems:'center',
      borderRadius:50,
      backgroundColor:'black',      
    }
})