import { StyleSheet, Platform } from 'react-native'

const styles = StyleSheet.create({
  text: {
    fontSize:120,
    // fontFamily: Platform.OS == "android" ? "Roboto" : "Avenir",
    color:'black',
    fontWeight:"bold",
  }
});

export default styles;