import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Button, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

const Transaction = () => {
  const navigation = useNavigation();
  
  return (
    <SafeAreaView>
      <Text>Transaction</Text>
      <Button
        title="Back"
        onPress={() => {
          navigation.goBack();
        }}
      />
    </SafeAreaView>
  )
}

export default Transaction