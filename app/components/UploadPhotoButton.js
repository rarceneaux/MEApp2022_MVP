import React from 'react';
import { View, StyleSheet, Text, TouchableHighlight } from 'react-native';



function UploadPhotoButton({title, onPress, navagation}) {
  return (
    <TouchableHighlight style={styles.button} onPress={onPress}>
    <Text style={styles.text}>{title}</Text>
   </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#098731',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    padding:15,
    width:'60%',
    height:100,
    marginVertical: 50,
  },
  text: {
    color: 'white',
    fontSize: 35,
    textTransform: 'uppercase',
    fontWeight: "bold"
  }
})

export default UploadPhotoButton;