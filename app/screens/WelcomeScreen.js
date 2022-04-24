import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native'
import AppButton from '../components/AppButton';

function WelcomeScreen({navigation}) {
  return (

<ImageBackground
resizeMode='stretch'
style={styles.background}
source={require('../assets/appandpagebackgroundimg.png')}
>
<Image source={require('../assets/MEAPP.png')} style={styles.logo}/>

<View style={styles.buttonsContainer}>

<AppButton title="Login" onPress={() => navigation.navigate("Login")}      />
<AppButton title="Register"  onPress={() => navigation.navigate("Register")}   />

</View>



</ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
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

export default WelcomeScreen;