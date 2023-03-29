import { View, Text } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, Image } from 'react-native';

import React from 'react'

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        Lets Play Charades!
      </Text>
      <StatusBar style='auto' />
      <Image
        style={{width: 200, height: 200}}
        source={require('../assets/splash.png')}
      />
      <Button
        title='Start Game'
        onPress={() => navigation.navigate("PlayerSelect")}
        style={styles.button}
      />
    </View>
  );
}

export default HomeScreen


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6A1B9a",
    alignItems: "center",
    justifyContent: "center",
  },
  heading:{
    color: "white",
    fontSize: 30,
    textAlign: "center",
    marginTop: -250,
    marginBottom: 10,
  },
  button: {
    color: "white",
    fontSize: 30,
    textAlign: "center",
  },
});
