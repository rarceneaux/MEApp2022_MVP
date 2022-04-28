import React from 'react';
import { Text } from 'react-native'
//CUSTOM COMPONENT FOR ABC CARD TEXT 

import styles from './styles';

function AlphabetLetter({children}) {
  return (
  <Text style={styles.text}>{children}</Text>
  );
}

export default AlphabetLetter;