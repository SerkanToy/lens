import { StyleSheet, Text, View } from 'react-native'
import { stylesCss } from '../Css'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';

export default function Home() {
  return (
    <View style={[stylesCss.container]}>
      <Text>Serkan TOY</Text>
      <AntDesign name="home" padding={12} color="blue" />
    </View>
  )
}

const styles = StyleSheet.create({})