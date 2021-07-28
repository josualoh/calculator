import React from 'react'
import { StyleSheet, View } from 'react-native'
import Button from './button'

const Keyboard = ({ updateEquation, calculate }) => {
  return (
    <View style={{ flex: 3 }}>
      <View style={styles.container}>
        <Button input={1} onPress={updateEquation} />
        <Button input={2} onPress={updateEquation} />
        <Button input={3} onPress={updateEquation} />
        <Button input='+' onPress={updateEquation} secondary />

      </View>
      <View style={styles.container}>
        <Button input={4} onPress={updateEquation} />
        <Button input={5} onPress={updateEquation} />
        <Button input={6} onPress={updateEquation} />
        <Button input='-' onPress={updateEquation} secondary />
      </View>
      <View style={styles.container}>
        <Button input={7} onPress={updateEquation} />
        <Button input={8} onPress={updateEquation} />
        <Button input={9} onPress={updateEquation} />
        <Button input='=' onPress={calculate} secondary />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Keyboard
