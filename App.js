import React from 'react'
import { View, Text,Button, Alert,SafeAreaView } from 'react-native'

export default function App() {
  return (
    <SafeAreaView>
      <View testID="home">
      <Text>Olá Mundo</Text>
      <Button 
        title="Olá Mundo"
        onPress={()=>Alert.alert('Bu')}
      />
    </View>
    </SafeAreaView>
  )
}
