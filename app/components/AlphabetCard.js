import React from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, TouchableHighlight } from 'react-native';
import AlphabetLetter from '../components/AlphabetLetter';
import { MaterialCommunityIcons} from '@expo/vector-icons';


function AlphabetCard({letter, image, word, icon}) {
  return (
    <SafeAreaView style={styles.alphabetCard}>
      {/* <Text style={styles.text}>{letter}</Text>
      <Image source={image} style={styles.letterImg}/>
      <Text style={styles.word}>{word}</Text> */}
      <AlphabetLetter style={styles.text}>A</AlphabetLetter>
 <Image source={require('../assets/apple.jpg')}/>
 <Text style={styles.word}>APPLE</Text>

<TouchableHighlight>
 <View style={styles.navPages}>

 <MaterialCommunityIcons name={'arrow-right-bold'} size={150} color='#098731' style={styles.icon}/>

 <MaterialCommunityIcons name={'arrow-left-bold'} size={150} color='#098731' style={styles.icon}/>
 </View>
</TouchableHighlight>
</SafeAreaView>

  );
}

const styles = StyleSheet.create({
  alphabetCard: {
  flex: 1,
  justifyContent:'center',
  alignItems:'center',
  borderRadius:15,
  elevation:3,
   backgroundColor:"#fff",
   shadowOffset: {width: 1, height: 1},
   shadowColor: '#333',
   shadowOpacity:0.9,
   shadowRadius:5,
   width: '100%',
   height:'100%'
  },
  // text: {
  //   color: 'black',
  //   fontSize: 200,
  //   fontWeight:"bold",
  // },
  letterImg: {
    width: '65%',
  }, 
  word:{
    color:'black',
    fontSize: 100,
    fontWeight:"bold",
    padding:30,
  },
  navPages: {
    flexDirection: 'row-reverse',
  }
})

export default AlphabetCard;