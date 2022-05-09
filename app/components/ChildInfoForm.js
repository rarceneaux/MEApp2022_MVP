import React from 'react';
import { View , StyleSheet, TextInput } from 'react-native'
import { MaterialCommunityIcons} from '@expo/vector-icons';

function ChildInfoForm({icon, ...otherProps}) {
  return (
    <View style={styles.container}>
      {icon && <MaterialCommunityIcons name={icon} size={30} color='green' style={styles.icon}/>}
      <TextInput style={styles.textInput} {...otherProps}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightgray',
    borderRadius: 25,
    flexDirection: 'row',
    width: '100%',
    padding: 15,
    marginVertical: 10
  },
  textInput: {
    fontSize: 18,
    color:"black"
  },
  icon: {
    margin: 10,
    color:"#098731"
  }
})

export default ChildInfoForm;