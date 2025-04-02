import { StyleSheet, Text, View } from 'react-native'
import React, { useActionState } from 'react'
import { stylesCss } from '../../Css'
import { useNavigation } from '@react-navigation/native';
export default function My() {
  var nav = useNavigation()
  nav.setOptions({
    
  })
  return (
    <View style={[stylesCss.container]}>
      <Text>My</Text>
    </View>
  )
}

const styles = StyleSheet.create({})