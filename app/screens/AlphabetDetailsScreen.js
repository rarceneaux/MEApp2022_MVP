import React, { useEffect, useState} from 'react';
import { View, StyleSheet, Image, Text, SafeAreaView } from 'react-native'
import AlphabetCard from '../components/AlphabetCard';
import AlphabetLetter from '../components/AlphabetLetter';
import { MaterialCommunityIcons} from '@expo/vector-icons';
// import  alphabetsData  from '../helpers/data/alphabetsData';



//I will bring the Alphabet Card into this component
//I will bring ABC Lesson info into this component 

function AlphabetDetailsScreen({letter, image, word , icon}) {
 const [alphabets, setAlphabets] = useState([]);

 useEffect(() => {
   loadAlphabets();
 }, []);

 const loadAlphabets = async () => {
   const response = await  alphabetsData.getAlphabetsData();
   setAlphabets(response.data);
 }

  return (
 <SafeAreaView style={styles.wordPicture}>
 <AlphabetLetter style={styles.text}>A</AlphabetLetter>
 <Image source={require('../assets/apple.jpg')}/>
 <Text style={styles.word}>APPLE</Text>
 <MaterialCommunityIcons name={icon} size={80} color='green'/>
 {/* <AlphabetCard/> */}
 </SafeAreaView> 

  );
}

const styles = StyleSheet.create({
  wordPicture: {
   flex: 1,
   justifyContent:'center',
   alignItems:'center',
   borderRadius:35,
   elevation:3,
   backgroundColor:"#fff",
   shadowOffset: {width: 1, height: 1},
   shadowColor: '#333',
   shadowOpacity:0.9,
   shadowRadius:3,
  //  height:500,
  },
  text: {
    color:'black',
    fontWeight:"bold",
    fontSize: 100,
  },
  word: {
    color:'black',
    fontWeight:"bold",
    padding:25,
    fontSize: 100,
  }
})


export default AlphabetDetailsScreen;