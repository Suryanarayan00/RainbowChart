import { View, Text, SafeAreaView , StyleSheet} from 'react-native'
import React from 'react'

import ChartScreen from './src/Component/ChartScreen'
import Rainbow from './src/Rainbow'
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Rainbow/>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})