import React from 'react';
import { StyleSheet, View } from 'react-native';

export const Card = ({ children, style }) => {
  return <View style={{ ...stlyes.card, ...style }}>{children}</View>;
};

const stlyes = StyleSheet.create({
  card: {
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    backgroundColor: 'white',
    elevation: 5,
    padding: 20,
    borderRadius: 20
  }
});
