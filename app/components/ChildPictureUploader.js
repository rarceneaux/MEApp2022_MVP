import React, {useEffect} from 'react';
import { StyleSheet, View , Image, TouchableWithoutFeedback, Alert, Text  } from 'react-native'
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from 'expo-image-picker';
import UploadPhotoButton from '../components/UploadPhotoButton';



function ChildPictureUploader({imageUri, onChangeImage, navigation}) {

  useEffect(() => {
    requestPermission();
  }, []);

  const requestPermission = async () => {
    const {granted} = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted) alert("Please enable permission to access photo roll");
  };

  const handlePress = () => {
    if(!imageUri) selectImage();
    else Alert.alert('Delete', 'Are you sure you want to delete this image?',
    [{text: "YES", onPress: () => onChangeImage(null)},
    {text: "No"},
  ])
  };

  const selectImage = async () => {
    try { 
      const result = await  ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5
      });
      if(!result.cancelled) onChangeImage(result.uri);
    } catch (error) {
      console.log('Error Reading an Image', error)
    }
  };


  //add a button instead of icon
  return (
    <TouchableWithoutFeedback onPress={handlePress}>
    <View style={styles.container}>
    <Text>Tap camera to select a photo </Text>
    <Text>To change your photo tap it </Text>
    <>
    </>
          {!imageUri && <MaterialCommunityIcons name="camera" size={150} color={"#098731"}/>}
      {imageUri && <Image source={{uri: imageUri}} style={styles.image}/>}
      <UploadPhotoButton title="Add Photo" onPress={()=> console.log('Pix Added')}></UploadPhotoButton>
    </View>
     </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'white',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems:'center',
    height:450,
    width: 450,
    overflow: 'hidden',
  },
  image:{
    width:300,
    height:300,
    borderRadius: 400/2,
  }
})

export default ChildPictureUploader;