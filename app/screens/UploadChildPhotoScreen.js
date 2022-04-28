import React, { useState } from 'react';
import { StyleSheet, Image, ScrollView, Text, View } from 'react-native';
import ChildPictureUploader from '../components/ChildPictureUploader';


function UploadChildPhotoScreen(props) {

  
const [imageUri, setImageUri] = useState();

const selectImage = async () => {
  try { 
    const result = await  ImagePicker.launchImageLibraryAsync();
    if(!result.cancelled)
    setImageUri(result.uri);
  } catch (error) {
    console.log('Error Reading an Image', error)
  }
};

  return (
   <View>
     <ChildPictureUploader imageUri={imageUri} onChangeImage={uri => setImageUri(uri)}/>
   </View>
  );
}

export default UploadChildPhotoScreen;