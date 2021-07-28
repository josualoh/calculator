import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { colors, text } from './globals'

const Equation = ({ equation }) => {
  return (
    <View style={styles.display}>
      <Text style={styles.text}>{equation || ''}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  display: {
    flex: 0.5,
    backgroundColor: colors.lightBlue,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    ...text.small
  }
})

export default Equation
