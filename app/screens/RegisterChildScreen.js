import React, {useState, useRef} from 'react';
import { StyleSheet, Image, ScrollView, Text, KeyboardAvoidingView } from 'react-native';
import AppButton from '../components/AppButton';
import ChildInfoForm from '../components/ChildInfoForm';
// import ChildPictureUploader from '../components/ChildPictureUploader';

import { Formik } from 'formik';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import SubmitButton from '../components/SubmitButton';
import ActivityRugScreen from './ActivityRugScreen';



// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

// const Stack = createStackNavigator();

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Child First Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().min(7, 'Password must be at least 7 characters ').label("Password").required()
  // images: Yup.array().min(1,"Please select at least one image.")
});

function LoginScreen({navigation}) {
//  const [email, setEmail ] = useState();
//  const [password, setPassword] = useState();

// const [imageUri, setImageUri] = useState();

/////////////////////////////////////////////////////////////////////////
// const selectImage = async () => {
//   try { 
//     const result = await  ImagePicker.launchImageLibraryAsync();
//     if(!result.cancelled)
//     setImageUri(result.uri);
//   } catch (error) {
//     console.log('Error Reading an Image', error)
//   }
// };
//////////////////////////////////////////////////////////////////////////
///useref hook

const scrollView = useRef();
const keyboardVerticalOffset = Platform.OS === 'ios' ? 0 : 0

  return (
    <ScrollView  ref={scrollView}vertical onContentSizeChange={()=> scrollView.current.scrollToEnd() }> 
    <KeyboardAvoidingView behavior='position' keyboardVerticalOffset={keyboardVerticalOffset}>
   <Screen style={styles.container}>
<Formik
initialValues={{name:'',email: '', password:''}}
onSubmit={values => console.log(values)}
validationSchema={validationSchema}
>

{ ({handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
<>
<Image style={styles.logo} source={require("../assets/MEAPP.png")}/>

<ChildInfoForm
icon="account-child"
  placeholder="Child First Name"
  autoCapitalize="words"
  autoCorrect={false}
  keyboardType="default"
  onBlur={()=> setFieldTouched("name") }
  onChangeText={handleChange("name")}
  textContentType="name"
  placeholderTextColor="white"
/>
{touched.name && <Text style={{color: 'red'}}>{errors.name}</Text>}
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
/>
{touched.password && <Text style={{color: 'red'}}>{errors.password}</Text>}
{/* <ChildPictureUploader imageUri={imageUri} onChangeImage={uri => setImageUri(uri)}/> */}
{/* {touched.images && <Text style={{color: 'red'}}>{errors.images}</Text>} */}
<AppButton  title="Submit" onPress={() => navigation.navigate('Photo Upload')}  />
</>
)}
</Formik>
</Screen>
</KeyboardAvoidingView>
</ScrollView>
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