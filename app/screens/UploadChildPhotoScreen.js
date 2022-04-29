import React, { useState } from 'react';
import { StyleSheet, Image, ScrollView, Text, View, SafeAreaView } from 'react-native';
import ChildPictureUploader from '../components/ChildPictureUploader';
import ChildTakePicture from '../components/ChildTakePicture';

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
    <SafeAreaView>
   <View>
     <ChildPictureUploader imageUri={imageUri} onChangeImage={uri => setImageUri(uri)}/>
     <ChildTakePicture/>
   </View>
   </SafeAreaView>
  );
}

export default UploadChildPhotoScreen;