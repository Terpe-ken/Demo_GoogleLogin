import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  btnGoogle: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    gap: 20,
    borderWidth: 1,
  },
  viewbtnGoogle: {
    paddingTop: 150,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  btnLogout: {
    width: '99%',
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
