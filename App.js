import React, { useState } from 'react'
import { View } from 'react-native'
import Result from './src/result'
import Equation from './src/equation'
import { colors } from './src/globals'
import Keyboard from './src/keyboard'

export default function App () {
  const [equation, setEquation] = useState('')
  const [result, setResult] = useState(null)

  const calculate = () => {
    if (
      equation.slice(-1) === '+' ||
      equation.slice(-1) === '-'
    ) return

    equation.includes('+') &&
      setResult(equation.split('+').reduce((a, b) => parseInt(a) + parseInt(b), 0))

    equation.includes('-') &&
      setResult(equation.split('-').reduce((a, b) => -parseInt(a) - parseInt(b), 0))
  }

  const updateEquation = (input) => {
    if (
      !Number.isInteger(input) &&
      (
        equation.includes('+') ||
        equation.includes('-')
      )
    ) return

    if (result) {
      setResult(null)
      setEquation(''.concat(input))
    } else {
      setEquation(equation.concat(input))
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }} />

      <Equation equation={equation} />
      <Result result={result} />
      <View style={{ flex: 0.5, backgroundColor: colors.lightBlue }} />

      <View style={{ flex: 0.5 }} />

      <Keyboard updateEquation={updateEquation} calculate={calculate} />

      <View style={{ flex: 1 }} />
    </View>
  )
}
