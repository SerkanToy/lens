import { StyleSheet, Text, View, ImageBackground, Pressable, TextInput } from 'react-native'
import React from 'react'
import { stylesCss } from '../../Css'
import { useNavigation } from '@react-navigation/native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';

export default function SignIn() {
  const nav = useNavigation()
  return (
    <View style={[stylesCss.container]}>
      <ImageBackground source={require('../../../assets/images/authentication/1.png')} resizeMode="cover" style={styles.image}>
        <View style={styles.substance}>
          <View style={styles.title}>
            <Text style={{ color: 'black', fontSize: 30, fontWeight:800, marginBottom:5 }}>Sign in to your account</Text>
            <Text style={{ color: 'black', fontSize: 17, fontWeight:500 }}>Welcome Back You've Been Missed!</Text>
          </View>

          <View style={styles.form}>
            <Text style={{ color: 'black', fontSize: 17, fontWeight:600, marginBottom:5 }}>Email Address*</Text>
            <TextInput style={styles.textinput} />
            <Text style={{ color: 'black', fontSize: 17, fontWeight:600, marginBottom:5 }}>Password*</Text>
            <TextInput style={styles.textinput} />

            <Pressable onPress={() => { nav.navigate("ForgotPassword") }}>
              <Text style={{ width:'100%', textAlign:'right', color: 'black', fontSize: 17, fontWeight:500, marginBottom:5 }}>Forgot Password?</Text>
            </Pressable>
            
            <Pressable onPress={() => { nav.navigate("Index") }}>
              <View style={styles.button}>
                <Text style={{ color: 'black', fontSize: 17 }}>Sign In</Text>
              </View>
            </Pressable>
          </View>
          
          

          <Text style={{marginVertical:15, width:'100%', color: 'black', fontSize: 17, textAlign:'center' }}>
            --------------------------- Or Continue With ---------------------------
          </Text>

          <Pressable onPress={() => { nav.navigate("SignIn") }}>
            <View style={styles.buttonlogin}>
              <Text style={{width:'100%', color: 'black', fontSize: 17, textAlign:'center' }}>
                <AntDesign name="google" size={24} padding={20} color="black" />{'\x20'}  
                Sign In With Google
              </Text>
            </View>
          </Pressable>
          <Pressable onPress={() => { nav.navigate("SignIn") }}>
            <View style={styles.buttonlogin}>
              <Text style={{width:'100%', color: 'black', fontSize: 17, textAlign:'center' }}>
                <Entypo name="app-store" size={24} padding={5} color="black" />{'\x20'}     
                Sign In With Apple
              </Text>
            </View>
          </Pressable>
          <View style={{marginVertical:10}}></View>
          <Pressable onPress={() => { nav.navigate("SignUp") }}>
            <View style={styles.register}>
              <Text style={{width:'100%', color: 'black', fontSize: 17, textAlign:'center' }}>Not a member? Create an account</Text>
            </View>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'flex-end',
    height: '25%'
  },
  substance: {
    height: '78%',
    width: '100%',
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding:30
  },
  button: {
    padding: 20,
    ustifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: '#FFD081',
  },
  title:{
    marginBottom:40
  },
  form:{

  },
  textinput:{
    paddingVertical:20,
    backgroundColor:'#ffffff',
    borderRadius:12,
    borderWidth:1,
    borderColor:'rgba(173, 173, 173, 0.5)',
    marginVertical:15
  },
  buttonlogin:{
    padding:20,
    backgroundColor: '#ffffff',
    width:'100%',
    marginVertical:5,
    borderRadius:12,
    borderWidth:1,
    borderColor:'rgba(173, 173, 173, 0.5)',
    shadowColor: 'rgba(173, 173, 173, 0.5)',
    shadowOffset: { width:5, height:5 },
    shadowRadius: 30,
    shadowOpacity: 0.30,
    elevation:4,  
  },
  register:{
    width:'100%',
    textAlign:'center'
  }
})