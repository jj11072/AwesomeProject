import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function EndGameScreen({ navigation, route }) {
  const { winner, players, numPlayers } = route.params;

  // put the player scores in descending order
    const sortedPlayers = players.sort((a, b) => b.score - a.score);
    const restart = () => {
        players.forEach(player => {
            player.score = 0;
        });
        navigation.navigate("Play", {
        players:players,
        numPlayers:numPlayers,
        });
    }

    const changeCategory = () => {
         players.forEach((player) => {
           player.score = 0;
         });
        navigation.navigate("Category", {
        players:players,
        numPlayers:numPlayers,
    });
    }
 

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Game Over!</Text>
      <Text style={styles.sub}>
        The winner is {winner.name} with a score of {winner.score}!
      </Text>
      {sortedPlayers.map((player, index) => (
        <View key={player.id} style={styles.container2}>
          <Text style={styles.text1}>
            {index === 0
              ? "1st"
              : index === 1
              ? "2nd"
              : index === 2
              ? "3rd"
              : ""}
          </Text>
          <Text style={styles.text}>{player.name}&nbsp;</Text>
          <Text style={styles.text}>Score:{player.score}</Text>
        </View>
      ))}
      <View style={styles.container3}>
      <Button title="Restart" onPress={restart}></Button>
      <Button title="categories" onPress={changeCategory}></Button>
      <Button title="Home"></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    color: "white",
    fontSize: 60,
    textAlign: "center",
    marginTop: -200,
    marginBottom: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "#6A1B9a",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    
  },
  container2: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",

    
  },
    text1: {
    color: "white",
    fontSize: 30,
    textAlign: "center",
    marginLeft: -50,
    
    },
  text: {
    color: "white",
    fontSize: 30,
    textAlign: "center",
    },
    sub: {
    color: "white",
    fontSize: 30,
    textAlign: "center",
    marginTop: 10,
    marginBottom: 60,
    },
    container3: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
 
    height: 50,
    gap: 50,
    marginTop: 50,
    
    },
});
