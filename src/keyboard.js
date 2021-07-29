import React from 'react'
import { StyleSheet, View } from 'react-native'
import Button from './button'

const Keyboard = ({ updateEquation, calculate }) => {
  return (
    <View style={{ flex: 3 }}>
      <View style={styles.container}>
        {
          [1, 2, 3].map(digit => <Button key={digit} input={digit} onPress={updateEquation} />)
        }
        <Button input='+' onPress={updateEquation} secondary />
      </View>
      <View style={styles.container}>
        {
          [4, 5, 6].map(digit => <Button key={digit} input={digit} onPress={updateEquation} />)
        }
        <Button input='-' onPress={updateEquation} secondary />
      </View>
      <View style={styles.container}>
        {
          [7, 8, 9].map(digit => <Button key={digit} input={digit} onPress={updateEquation} />)
        }
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
