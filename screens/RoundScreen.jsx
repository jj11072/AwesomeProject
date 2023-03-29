import { View, Text } from 'react-native'
import React from 'react'

const RoundScreen = ({route}) => {
  return (
    <View>
      <Text>RoundScreen{route.params.numPlayers}{route.params.playerNames[0]}</Text>
    </View>
  )
}

export default RoundScreen