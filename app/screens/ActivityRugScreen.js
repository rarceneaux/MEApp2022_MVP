import React from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView } from 'react-native'


function ActivityRugScreen(props) {
  return (
    <SafeAreaView>
 <Text style={styles.act}>1</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  act: {
    color:'red',
    backgroundColor:'green'
  }
})

export default ActivityRugScreen;