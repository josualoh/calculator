import React from 'react'
import { Text, StyleSheet, Pressable } from 'react-native'
import { colors } from './globals'

const Button = ({ onPress, title, secondary }) => {
  // onPress={() => console.log('button clicked!')}
  
  return (
    <Pressable
      style={[styles.button, secondary && styles.secondaryButton]}
      onPress={onPress}
    >
      <Text style={[styles.text, secondary && styles.secondaryText]}>{title}</Text>
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
    fontSize: 40,
    lineHeight: 21,
    fontWeight: 'bold',
    color: 'white',
    paddingBottom: 4
  },
  secondaryText: {
    paddingBottom: 8
  }
})

export default Button
