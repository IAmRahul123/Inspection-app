import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Card = ({children, style}) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
  },
});
