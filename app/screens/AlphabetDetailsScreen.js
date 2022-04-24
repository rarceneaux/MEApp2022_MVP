import React from 'react';
import { View, StyleSheet, Image, Text, SafeAreaView } from 'react-native'
import AlphabetText from '../components/AlphabetText';
import { Swipeable } from 'react-native-gesture-handler';

function AlphabetDetailsScreen({text, letter, renderRightActions}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
 {/* <SafeAreaView style={styles.wordPicture}> */}
 

 <AlphabetText style={styles.text}>A</AlphabetText>
 <Image source={require('../assets/apple.jpg')}/>
 <Text style={styles.word}>APPLE</Text>


 {/* </SafeAreaView> */}
 </Swipeable>
  );
}

const styles = StyleSheet.create({
  wordPicture: {
    width:'65%',
    height:250,
  },
  text: {
    color: 'black',
    fontSize: 200,
    fontWeight:"bold",
  },
  word: {
    color:'black',
    fontWeight:"bold",
    padding:25,
    fontSize: 80,
  }
})


export default AlphabetDetailsScreen;