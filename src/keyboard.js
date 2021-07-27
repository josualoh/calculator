import React from 'react'
import { StyleSheet, View } from 'react-native'
import Button from './button'

const Keyboard = () => {
  return (
    <View style={{ flex: 3 }}>
      <View style={styles.container}>
        <Button title={1} />
        <Button title={2} />
        <Button title={3} />
        <Button title='+' secondary />
      </View>
      <View style={styles.container}>
        <Button title={4} />
        <Button title={5} />
        <Button title={6} />
        <Button title='-' secondary />
      </View>
      <View style={styles.container}>
        <Button title={7} />
        <Button title={8} />
        <Button title={9} />
        <Button title='=' secondary />
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
