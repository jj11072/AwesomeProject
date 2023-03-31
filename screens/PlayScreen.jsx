import React, { useState, useEffect } from "react";
import { View, Text, Button } from "react-native";

export default function PlayScreen({ navigation, route }) {
  const { numPlayers, players, category } = route.params;
  const [playerIndex, setPlayerIndex] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const [correctPlayer, setCorrectPlayer] = useState();
  const [selected, setSelected] = useState(false);

  // add a timer to the game

  const currentPlayer = players[playerIndex];
  playerName = currentPlayer.name;

  //list players that arent current player
  const otherPlayers = players.filter((player) => player.name !== playerName);

  const [timer, setTimer] = useState(30); // Set the initial timer to 30 seconds

  // Dummy list of words for the selected category
  const wordList = [
    "apple",
    "banana",
    "cherry",
    "dragonfruit",
    "elderberry",
    "fig",
    "grape",
    "honeydew",
    "kiwi",
    "lemon",
  ];

  useEffect(() => {
    // Start the timer when the component is mounted
    const interval = setInterval(() => {
        setTimer((timer) => timer - 1);
        }, 1000);
  }, []);


  function getNextPlayerIndex() {
    // Get the index of the next player in the list
    let nextIndex = playerIndex + 1;
    if (nextIndex >= numPlayers) {
      nextIndex = 0;
    }
    return nextIndex;
  }

  function getNextWordIndex() {
    // Get the index of the next word in the list
    let nextIndex = wordIndex + 1;
    if (nextIndex >= wordList.length) {
      nextIndex = 0;
    }
    return nextIndex;
  }

  function handleCorrect() {
    // Increment the score of the current player object
    correctPlayer.score += 1;
    correctPlayer.score >= 10
      ? navigation.navigate("Winner", {
          winner: correctPlayer,
          players: players,
          numPlayers: numPlayers,
        })
      : null;

    // Set the index of the next player and word
    setPlayerIndex(getNextPlayerIndex());
    setWordIndex(getNextWordIndex());
    // Reset the selected player
    setCorrectPlayer();
    setSelected(false);
    setTimer(30); // Reset the timer
  }
  // order players by score
   let newPlayers = players.sort((a, b) => b.score - a.score);

  function handleSkip() {
    // Set the index of the next player and word
    setPlayerIndex(getNextPlayerIndex());
    setWordIndex(getNextWordIndex());
    setTimer(30); // Reset the timer
  }

  if (timer === 0) {
    // If the timer is 0, skip the current player
    handleSkip();
  }
  
  return (
    <View>
      <Text>Current Player: {players[playerIndex].name}</Text>
      <Text>Current Word: {wordList[wordIndex]}</Text>
      <Text>Current Score: {currentPlayer.score}</Text>
      {otherPlayers.map((player) => (
        <Button
          key={player.name}
          title={player.name}
          onPress={() => {
            setCorrectPlayer(player), setSelected(true);
          }}
          color={correctPlayer === player ? "gray" : "#1f1f1f"}
        />
      ))}
      <Button title='Next' onPress={handleCorrect} disabled={!selected} />
      <Button title='Skip' onPress={handleSkip} />
      <Text>Time Remaining: {timer}</Text>

      <Button
        title='Reset Timer'
        onPress={() => {
          setTimer(30);
        }}
      />

      <Button
        title='Reset Scores'
        onPress={() =>
          players.forEach((player) => {
            player.score = 0;
          })
        }
      />
      <Button
        title='End Game'
        onPress={() => navigation.navigate("Winner", {
                winner: newPlayers[0],
                players: players,
                numPlayers: numPlayers,
                })
        }
      />
    </View>
  );
}
