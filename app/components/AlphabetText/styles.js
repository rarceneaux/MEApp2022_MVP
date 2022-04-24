import { StyleSheet, Platform } from 'react-native'

const styles = StyleSheet.create({
  text: {
    fontSize:150,
    fontFamily: Platform.OS == "android" ? "Roboto" : "Avenir"

  }
})

export default styles;