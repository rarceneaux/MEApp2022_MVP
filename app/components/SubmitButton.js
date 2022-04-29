import React  from 'react';
import AppButton from './AppButton';


import { useFormikContext } from 'formik';
import { useNavigation } from '@react-navigation/native';


// const Link = ({}) => {
//   const navigation = useNavigation();
//   return (
//   <Button 
//   title="Register"
//   onPress={() => navigation.navigate('Activity Rug') } />
//   )
// }
 


function SubmitButton({title, navigation }) {
const {handleSubmit} = useFormikContext();
  return (
    <AppButton title={title} onPress={handleSubmit}/>
  );
}

export default SubmitButton;