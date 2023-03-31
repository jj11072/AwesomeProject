import React from "react";
import { View, Text, FlatList, StyleSheet, Button } from "react-native";

export default function RoundScreen({ route, navigation }) {
  const players = route.params.players;
  const numPlayers = route.params.numPlayers;
  function handleNext() {
    // create an array of player objects with the entered names
    const playerObjects = route.params.players.map((player, index) => ({
      id: index,
      name: player.name,
      score: 0,
    }));

    // navigate to the category screen and pass the number of players and player objects as route params
    navigation.navigate("Category", {
      numPlayers: parseInt(numPlayers, 10),
      players: playerObjects,
    });
  }

  

  return (
    <View >
      <FlatList
        data={players}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View >
            <Text >{item.name}</Text>
            <Text >{item.score}</Text>
          </View>
        )}
      />
      <Button title='Confirm' onPress={handleNext} />
    </View>
  );
}
