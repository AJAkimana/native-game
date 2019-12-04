import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Header } from './components';
import { StartGame, Game, GameOver } from './screens';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guestRounds, setGuessRounds] = useState(0);
  const configureNewGame = () => {
    setGuessRounds(0);
    setUserNumber(null);
  };
  const startGame = selectedNumber => {
    setUserNumber(selectedNumber);
    setGuessRounds(0);
  };
  const gameOverHandler = numberOfRounds => {
    setGuessRounds(numberOfRounds);
  };
  let content = <StartGame onStartGame={startGame} />;
  if (userNumber && guestRounds === 0) {
    content = <Game userChoise={userNumber} onGameOver={gameOverHandler} />;
  } else if (guestRounds > 0) {
    content = (
      <GameOver
        roundsNumber={guestRounds}
        userNumber={userNumber}
        onRestart={configureNewGame}
      />
    );
  }
  return (
    <View style={styles.screen}>
      <Header title='Guess a Number' />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
