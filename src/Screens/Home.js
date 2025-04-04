import { StyleSheet, Text, View, Button } from 'react-native'
import { stylesCss } from '../Css'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const nav = useNavigation()
  return (
    <View style={[stylesCss.container]}>
      <Text>Serkan TOY</Text>
      <AntDesign name="home" padding={12} color="blue" />
      <Button title="Go to Product" onPress={() => nav.navigate('ProductTab')} />
    </View>
  )
}

const styles = StyleSheet.create({})