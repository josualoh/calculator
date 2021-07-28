import React from 'react'
import { Text, StyleSheet, Pressable } from 'react-native'
import { colors, text } from './globals'

const Button = ({ onPress, input, secondary }) => {
  return (
    <Pressable
      style={
        [
          styles.button,
          secondary && styles.secondaryButton
        ]
      }
      onPress={() => onPress(input)}
    >
      <Text style={styles.text}>{input}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    width: 64,
    height: 64,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 32,
    backgroundColor: colors.orange,
    margin: 4
  },
  secondaryButton: {
    backgroundColor: colors.blue
  },
  text: {
    ...text.big
  }
})

export default Button
