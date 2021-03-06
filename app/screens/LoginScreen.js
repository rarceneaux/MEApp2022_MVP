import React  from 'react';
import { StyleSheet, Image, Text, KeyboardAvoidingView } from 'react-native';
import AppButton from '../components/AppButton';
import ChildInfoForm from '../components/ChildInfoForm';

import { Formik } from 'formik';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import SubmitButton from '../components/SubmitButton';


const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password")
}); 

function LoginScreen({ navigation}) {
//  const [email, setEmail ] = useState();
//  const [password, setPassword] = useState();
const keyboardVerticalOffset = Platform.OS === 'ios' ? 0 : 0

  return (
    
   <Screen style={styles.container}><Image style={styles.logo} source={require("../assets/MEAPP.png")}/>
    <KeyboardAvoidingView behavior='position' keyboardVerticalOffset={keyboardVerticalOffset}>

<Formik
initialValues={{email: '', password:''}}
onSubmit={values => console.log(values)}
validationSchema={validationSchema}
>

{ ({handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
<>

<ChildInfoForm
icon="email"
  placeholder="Parent Email"
  autoCapitalize="none"
  autoCorrect={false}
  keyboardType="email-address"
  onBlur={()=> setFieldTouched("email") }
  onChangeText={handleChange("email")}
  textContentType="emailAddress"
  placeholderTextColor="white"
/>
{touched.email && <Text style={{color: 'red'}}>{errors.email}</Text>}
<ChildInfoForm
  autoCapitalize="none"
  autoCorrect={false}
  onChangeText={handleChange("password")}
  icon="lock"
  placeholder="Password"
  textContentType="password"
  secureTextEntry
  placeholderTextColor="white"
  font
/>
{touched.password && <Text style={{color: 'red'}}>{errors.password}</Text>}
<AppButton title="Submit" onPress={() => navigation.navigate('Activity Rug')} />
</>
)}
</Formik>
</KeyboardAvoidingView>
</Screen>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 20,
  },
  container:{
    padding:10
  }
})

export default LoginScreen;