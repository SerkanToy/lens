import { StyleSheet, Text, View, ImageBackground, Pressable, TextInput } from 'react-native'
import React from 'react'
import { stylesCss } from '../../Css'
import { useNavigation } from '@react-navigation/native';

export default function SignIn() {
  const nav = useNavigation()
  return (
    <View style={[stylesCss.container]}>
      <ImageBackground source={require('../../../assets/images/authentication/1.png')} resizeMode="cover" style={styles.image}>
        <View style={styles.substance}>
          <Text>Sign in to your account</Text>
          <Text>Welcome Back You've Been Missed!</Text>
          <Text>Email Address</Text>
          <TextInput />
          <Text>Password</Text>
          <TextInput />
          <Text>Forgot Password?</Text>
          <Pressable onPress={() => { nav.navigate("SignIn") }}>
            <View style={styles.button}>
              <Text style={{ color: 'black', fontSize: 17 }}>Sign In</Text>
            </View>
          </Pressable>

          <Text>Or Continue With</Text>

          <Pressable onPress={() => { nav.navigate("SignIn") }}>
            <View style={styles.button}>
              <Text style={{ color: 'black', fontSize: 17 }}>Sign In With Google</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => { nav.navigate("SignIn") }}>
            <View style={styles.button}>
              <Text style={{ color: 'black', fontSize: 17 }}>Sign In With Apple</Text>
            </View>
          </Pressable>

          <Pressable onPress={() => { nav.navigate("SignUp") }}>
            <View style={styles.button}>
              <Text style={{ color: 'black', fontSize: 17 }}>Not a member? Create an account</Text>
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
    borderTopRightRadius: 30
  },
  button: {
    padding: 20,
    margin: 20,
    ustifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: '#FFD081',
  }
})