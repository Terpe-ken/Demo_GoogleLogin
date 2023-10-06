import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  btnLogout: {
    width: '80%',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    borderWidth: 1,
    backgroundColor: 'red',
  },
  textLogout: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});
export default styles;
