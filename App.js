import React from 'react'
import { View, Text, Button, Alert, SafeAreaView } from 'react-native'

export default function App() {
  return (
    <SafeAreaView>
      <View testID="home">
        <Text style={{ fontSize: 30, color: "#000" }}>Olá Mundo</Text>
        <Button
          testID="button"
          title="Olá Mundo"
          onPress={() => Alert.alert('Hello World')}
        />
      </View>
    </SafeAreaView>
  )
}
