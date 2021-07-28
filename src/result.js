import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { colors, text } from './globals'

const Result = ({ result }) => {
  return (
    <View style={styles.display}>
      <Text style={styles.text}>{result || ''}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  display: {
    flex: 1.5,
    backgroundColor: colors.blue,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    ...text.big
  }
})

export default Result
