import React from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  View,
} from 'react-native';

const Button = ({ style, onPress, Context, Contextstyle }) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <Text style={[styles.text, Contextstyle]}>{Context}</Text>
    </TouchableOpacity>
  );
};

export default Button;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#bef4a6',
    width: 160,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#008037',
    borderRadius: 10,
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#008037',
  },
});
