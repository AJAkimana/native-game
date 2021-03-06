import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export const GameOver = ({ roundsNumber, userNumber, onRestart }) => {
  return (
    <View style={styles.screen}>
      <Text>The Game is Over!</Text>
      <Text>Number of rounds {roundsNumber}</Text>
      <Text>Number was: {userNumber}</Text>
      <Button title='New game' onPress={onRestart} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
