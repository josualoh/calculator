import React from 'react'
import { StyleSheet, View } from 'react-native'
import { colors } from './src/globals'
import Keyboard from './src/keyboard'

export default function App () {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }} />

      <View style={{ flex: 0.5, backgroundColor: colors.lightBlue }} />
      <View style={{ flex: 1.5, backgroundColor: colors.blue }} />
      <View style={{ flex: 0.5, backgroundColor: colors.lightBlue }} />

      <View style={{ flex: 0.5 }} />

      <Keyboard />

      <View style={{ flex: 1 }} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
