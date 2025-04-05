import { StyleSheet, Text, View, ImageBackground, Pressable, TextInput } from 'react-native'
import React, { useState } from 'react'
import { stylesCss } from '../../Css'
import { useNavigation } from '@react-navigation/native';

export default function ForgotPassword() {
    
  const nav = useNavigation()
  return (
    <View style={[stylesCss.container]}>
      <ImageBackground source={require('../../../assets/images/authentication/3.png')} resizeMode="cover" style={styles.image}>
        <View style={styles.substance}>
          <View style={styles.title}>
            <Text style={{ color: 'black', fontSize: 30, fontWeight: 800, marginBottom: 5 }}>Forgot Password</Text>
            <Text style={{ color: 'black', fontSize: 17, fontWeight: 500 }}>Enter the email associated with your account and we’ll send and email to reset your password</Text>
          </View>

          <View style={styles.form}>
            <Text style={{ color: 'black', fontSize: 17, fontWeight: 600, marginBottom: 10 }}>Email Address*</Text>
            <TextInput selectionColor={"#FFD081"} style={styles.textinput} />

            

            <Pressable onPress={() => { nav.navigate("SignIn") }}>
              <View style={styles.button}>
                <Text style={{ color: 'black', fontSize: 17 }}>Send Mail</Text>
              </View>
            </Pressable>
          </View>

          <Pressable onPress={() => { nav.navigate("SignIn") }}>
            <View style={styles.register}>
              <Text style={{ width: '100%', color: 'black', fontSize: 17, textAlign: 'center' }}>Already have and account? Sign In</Text>
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
    paddingHorizontal: 30,
    paddingVertical:10
  },
  button: {
    padding: 20,
    ustifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: '#FFD081',
  },
  title: {
    marginBottom: 15
  },
  form: {

  },
  textinput: {
    paddingVertical: 20,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(173, 173, 173, 0.5)',
    marginVertical: 5
  },
  buttonlogin: {
    padding: 20,
    backgroundColor: '#ffffff',
    width: '100%',
    marginVertical: 5,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(173, 173, 173, 0.5)',
    shadowColor: 'rgba(173, 173, 173, 0.5)',
    shadowOffset: { width: 5, height: 5 },
    shadowRadius: 30,
    shadowOpacity: 0.30,
    elevation: 4,
  },
  register: {
    width: '100%',
    textAlign: 'center'
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  checkbox: {
    alignSelf: 'center',
  },
})