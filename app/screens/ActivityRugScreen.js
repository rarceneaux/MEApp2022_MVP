import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native'
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import ActivityRugButtons from '../components/ActivityRugButtons';

function ActivityRugScreen({navigation}) {
  return (

<ImageBackground
resizeMode='stretch'
style={styles.background}
source={require('../assets/appandpagebackgroundimg.png')}
>
{/* <Image source={require('../assets/MEAPP.png')} style={styles.logo}/> */}

<View style={styles.buttonsContainer}>

<ActivityRugButtons title="Alphabets" onPress={() => navigation.navigate("Alphabet Lesson")}      />
<ActivityRugButtons title="Numbers" onPress={() => navigation.navigate("Alphabet Lesson")}      />
<ActivityRugButtons title="Shapes & Colors" onPress={() => navigation.navigate("Alphabet Lesson")}      />
{/* <AppButton title="Numbers" onPress={() => navigation.navigate("Welcome To The ME APP")}   />
<AppButton title="Shapes & Colors" onPress={() => navigation.navigate("Welcome To The ME APP")}      /> */}
</View>



</ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems:'flex-end',
    backgroundColor:'#098731'
  },
  logo: {
    height:190,
    width:175,
    position:'absolute',
    top: 80,
  },
  buttonsContainer: {
    padding: 20,
    width: '100%'
  }
})

export default ActivityRugScreen;
