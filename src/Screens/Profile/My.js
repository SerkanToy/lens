import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { stylesCss } from '../../Css'
import { useNavigation } from '@react-navigation/native'
import { HeaderShownContext } from '@react-navigation/elements'

export default function My({}) {
  const nav = useNavigation()
  nav.setOptions({
    HeaderShownContext:false
  })
  return (
    <View style={[stylesCss.container]}>
      <Text>My</Text>
    </View>
  )
}

const styles = StyleSheet.create({})