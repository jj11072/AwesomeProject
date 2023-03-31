import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";

export default function PlayerSelect({ navigation }) {
  const [numPlayers, setNumPlayers] = useState("");

  function handleNext() {
    // Navigate to the next screen and pass the number of players as a parameter
    navigation.navigate("Name", { numPlayers: parseInt(numPlayers) });
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TextInput
        placeholder='Enter number of players'
        value={numPlayers}
        onChangeText={setNumPlayers}
        keyboardType='numeric'
        style={{ borderWidth: 1, padding: 10, marginBottom: 20 }}
      />
      <Button title='Next' onPress={handleNext} />
    </View>
  );
}
