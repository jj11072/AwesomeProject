import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const categories = ["Movies", "Sports", "History", "Geography", "Science"];

export default function CategoryScreen({ navigation, route }) {
  const [selectedCategory, setSelectedCategory] = useState("");
const players = route.params.players;
players.forEach((player) => {
    player.score = 0;
});
  // Function to handle the "Start Game" button press
  function handleStartGame() {  
    navigation.navigate("Play", {
      numPlayers: route.params.numPlayers,
      players: players,
      category: selectedCategory,
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select a category</Text>
      <View style={styles.grid}>
        {categories.map((category) => (
          <Button
            key={category}
            title={category}
            onPress={() => setSelectedCategory(category)}
            color={category === selectedCategory ? "gray" : "#1f1f1f"}
            style={styles.button}
          />
        ))}
      </View>
      <Button
        title='Start Game'
        onPress={handleStartGame}
        disabled={!selectedCategory}
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "violet",
    gap: 10,
    display: "flex",
    alignItems: "center",   
    justifyContent: "center",
     
    
    
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  button: {
    marginVertical: 10,
    width: "80%",
    marginBottom: 20,
    },
    grid: {
        
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: 10,
        width: "80%",
        marginBottom: 20,
    },
});
