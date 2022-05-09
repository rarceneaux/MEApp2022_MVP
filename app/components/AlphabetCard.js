import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, TouchableHighlight, Button } from 'react-native';
// import AlphabetLetter from '../components/AlphabetLetter';
// import { MaterialCommunityIcons} from '@expo/vector-icons';
// import { useImageDimensions } from '@react-native-community/hooks';
// import alphabetsData from '../helpers/data/alphabetsData';


const abcArray = ["A","B","C"];

const abcWordArray = ["Apple", "Ball", "Cat"];


let abcWordImgArray = ['https://firebasestorage.googleapis.com/v0/b/meapp2022-38855.appspot.com/o/apple.jpg?alt=media&token=8d4186ac-739e-4b2c-8d4e-623da1597923',
'https://firebasestorage.googleapis.com/v0/b/meapp2022-38855.appspot.com/o/ball.jpeg?alt=media&token=15030e24-75f7-4093-954f-160181f7d7d5',
'https://firebasestorage.googleapis.com/v0/b/meapp2022-38855.appspot.com/o/cat.jpg?alt=media&token=83d27579-9d2f-47c6-b340-eb79be8964d2'
];



function AlphabetCard() {
  const [alphabets, setAlphabets ] = useState(0);
  

  return (
    <SafeAreaView style={styles.alphabetCard}>
 
      <Text style={styles.text}>{abcArray[alphabets]}</Text>

 
  

      <Image  source={{
        uri: abcWordImgArray[alphabets],
        width: 250,
        height: 250,
      }}
        />

       <Text style={styles.word}>{abcWordArray[alphabets]}</Text>
      {/* <AlphabetLetter style={styles.text}></AlphabetLetter> */}


<View flexDirection="row">
 <Button onPress={() => {setAlphabets(alphabets -1)}} title='Previous'></Button>
 <Button onPress={() => {setAlphabets(alphabets +1)}} title='Next'></Button>
</View>
</SafeAreaView>

  );
}

const styles = StyleSheet.create({
  alphabetCard: {
  flex: 1,
  justifyContent:'center',
  alignItems:'center',
  borderRadius:45,
  elevation:3,
  //  backgroundColor:"lightblue",
  //  shadowOffset: {width: 1, height: 1},
  //  shadowColor: '#333',
  //  shadowOpacity:0.9,
  //  shadowRadius:5,
   width: '100%',
   height:'100%'
  },
  text: {
    color: 'black',
    fontSize: 200,
    fontWeight:"bold",
  },
  // letterImg: {
  //   width: '65%',
  // }, 
  word:{
    color:'black',
    fontSize: 80,
    fontWeight:"bold",
    padding:30,
  }
})




export default AlphabetCard;