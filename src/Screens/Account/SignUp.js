import { StyleSheet, Text, View, ImageBackground, Pressable, TextInput } from 'react-native'
import Checkbox from 'expo-checkbox';
import React, { useState } from 'react'
import { stylesCss } from '../../Css'
import { useNavigation } from '@react-navigation/native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';

export default function SignUp() {

  var [isSucsess, setIsSucsess] = useState(false)
  const nav = useNavigation()
  return (
    <View style={[stylesCss.container]}>
      <ImageBackground source={require('../../../assets/images/authentication/2.png')} resizeMode="cover" style={styles.image}>
        <View style={styles.substance}>
          <View style={styles.title}>
            <Text style={{ color: 'black', fontSize: 30, fontWeight: 800, marginBottom: 5 }}>Create your account</Text>
            <Text style={{ color: 'black', fontSize: 17, fontWeight: 500 }}>Welcome back! Please enter your details</Text>
          </View>

          <View style={styles.form}>
            <Text style={{ color: 'black', fontSize: 17, fontWeight: 600, marginBottom: 5 }}>Full Name*</Text>
            <TextInput selectionColor={"#FFD081"} style={styles.textinput} />
            <Text style={{ color: 'black', fontSize: 17, fontWeight: 600, marginBottom: 5 }}>Email Address*</Text>
            <TextInput selectionColor={"#FFD081"} style={styles.textinput} />
            <Text style={{ color: 'black', fontSize: 17, fontWeight: 600, marginBottom: 5 }}>Password*</Text>
            <TextInput selectionColor={"#FFD081"} style={styles.textinput} />

            <View style={styles.checkboxContainer}>
              <Checkbox
                value={isSucsess}
                onValueChange={() => {
                  setIsSucsess((isSucsess === false? true:false))
                }}
                style={{marginVertical:2}}
                color={'#FFD081'}
              />              
              <Text style={{color: 'black', fontSize: 17}}>{'\x20'}I agree to all Term, Privacy and Fees</Text>
            </View>

            <Pressable onPress={() => { nav.navigate("SignIn") }}>
              <View style={styles.button}>
                <Text style={{ color: 'black', fontSize: 17 }}>Sign Up</Text>
              </View>
            </Pressable>
          </View>



          <Text style={{ marginVertical: 10, width: '100%', color: 'black', fontSize: 17, textAlign: 'center' }}>
            --------------------------- Or Continue With ---------------------------
          </Text>

          <Pressable onPress={() => { nav.navigate("SignIn") }}>
            <View style={styles.buttonlogin}>
              <Text style={{ width: '100%', color: 'black', fontSize: 17, textAlign: 'center' }}>
                <AntDesign name="google" size={24} padding={20} color="black" />{'\x20'}
                Sign In With Google
              </Text>
            </View>
          </Pressable>
          <Pressable onPress={() => { nav.navigate("SignIn") }}>
            <View style={styles.buttonlogin}>
              <Text style={{ width: '100%', color: 'black', fontSize: 17, textAlign: 'center' }}>
                <Entypo name="app-store" size={24} padding={5} color="black" />{'\x20'}
                Sign In With Apple
              </Text>
            </View>
          </Pressable>
          <View style={{ marginVertical: 5 }}></View>
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