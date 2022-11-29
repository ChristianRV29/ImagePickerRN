import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface Props {
  text: string;
  onPress: () => void;
}

export const Button: React.FC<Props> = ({ onPress, text }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.buttonWrapper}
      onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonWrapper: {
    alignItems: 'center',
    borderColor: 'white',
    borderRadius: 15,
    borderWidth: 1,
    height: 30,
    justifyContent: 'center',
    width: 150,
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
  },
});
