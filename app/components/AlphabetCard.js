import React from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView } from 'react-native';
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';


function AlphabetCard({letter, image, word}) {
  return (
    <SafeAreaView style={styles.alphabetCard}>

      <Text style={styles.text}>{letter}</Text>
    
      <Image source={image} style={styles.letterImg}/>
      <Text style={styles.word}>{word}</Text>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  alphabetCard: {
    borderRadius: 15,
    backgroundColor: '#fff',
    alignItems:'center',
  },
  text: {
    color: 'black',
    fontSize: 200,
    fontWeight:"bold",
  },
  letterImg: {
    width: '65%',
  }, 
  word:{
    color:'black',
    fontSize: 100,
    fontWeight:"bold",
    padding:50,
  }
})

export default AlphabetCard;