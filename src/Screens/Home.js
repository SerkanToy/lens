import { StyleSheet, View, Button, TextInput, Text, ImageBackground, TouchableOpacity } from 'react-native'
import { stylesCss } from '../Css'
import React from 'react'
import ToggleDrawerButton from '../ToggleDrawerButton';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const nav = useNavigation()
  return (
    <View style={[stylesCss.container]}>
      <ToggleDrawerButton />
      <View style={[styles.shadow,{marginHorizontal:15}]}>
        <TextInput label="Ara" style={styles.textinput} placeholder='Ara...'/>
      </View>
      <View style={{width:'100%',height:'30%',marginVertical:15}}>
        <ImageBackground source={require('../../assets/images/banner/bnr1.png')} resizeMode="cover" style={styles.image}>
          <Text style={{fontSize:25,paddingLeft:10}}>
            Find your perfect {'\n'}eyewear look
          </Text>
          <TouchableOpacity onPress={() => { (nav?.getParent('LeftDrawer').openDrawer()) }}
               style={{width:120,marginHorizontal:10,marginVertical:20, backgroundColor:'white',padding:10,borderRadius:20}}
            >
            <Text style={{width:'100%',fontSize:15,textAlign:'center'}}>
              Explore More
            </Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>

      



      <Button title="Go to Product" onPress={() => nav.navigate('ProductTab')} />

      <Button
        onPress={() => nav.getParent('LeftDrawer').openDrawer()}
        title="Open left drawer"
      />
      <Button
        onPress={() => nav.getParent('RightDrawer').openDrawer()}
        title="Open right drawer"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  shadow:{
    borderRadius:12,
    borderWidth:1,
    borderColor:'rgba(173, 173, 173, 0.5)',
    shadowColor: 'rgba(173, 173, 173, 0.5)',
    shadowOffset: { width:5, height:5 },
    shadowRadius: 30,
    shadowOpacity: 0.30,
    elevation:4, 
  },
  textinput:{
    paddingVertical:15,
    paddingHorizontal:10,
    backgroundColor:'#ffffff',
    borderRadius:12,
    borderWidth:0,
    borderColor:'rgba(173, 173, 173, 0.5)'
  },
  image: {
    width:'100%',
    justifyContent: 'center',
    height: '100%'
  },  
})