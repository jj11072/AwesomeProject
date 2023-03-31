import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";

//create dynamic input component
 const PlayerInput = ({ player, index, onChange }) => {
   const handlePlayerNameChange = (name) => {
     onChange((playerNames) => {
       const newPlayerNames = [...playerNames];
       newPlayerNames[index] = name;
       return newPlayerNames;
     });
   };
   return (
     <View key={index} style={styles.playerRow}>
       <Text style={styles.playerName}>{`Player ${index + 1}`}</Text>
       <TextInput
         style={styles.input}
         onChangeText={handlePlayerNameChange}
         value={player}
       />
     </View>
   );
 };

export default function PlayerSelection({ navigation, route }) {
  const [numPlayers, setNumPlayers] = useState(route.params.numPlayers);
  const [playerNames, setPlayerNames] = useState([]);
  const players = Array.from({ length: parseInt(numPlayers, 10) });

 
  // Function to handle the "Next" button press
  function handleNext() {
  const updatedPlayerList = playerNames.map((name, index) => ({
    id: index,
    name,
    score: 0,
  }));
  navigation.navigate("Round", {
    players: updatedPlayerList,
    numPlayers: parseInt(numPlayers, 10),
   
  });
}
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter the player names</Text>
        {players.map((name, index) => (
           
            <View key={index} style={styles.playerRow}>
                
                <Text>emoji</Text>
               <PlayerInput player={playerNames[index]} index={index} onChange={setPlayerNames} />
                {/* <Text style={styles.playerScore}>0</Text> */}
            </View>
            
        ))}
      <Button title='Next' onPress={handleNext} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  playerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: "#ccc",
    width: "100%",
  },
  playerName: {
    fontSize: 18,
  },
  playerScore: {
    fontSize: 18,
    fontWeight: "bold",
  },
  input: {
    height: 40,
    width: 100,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    },
});
