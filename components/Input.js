import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

export const Input = props => {
  return (
    <TextInput {...props} style={{ ...styles.input, ...props.customStyle }} />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 30,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    marginVertical: 10
  }
});
