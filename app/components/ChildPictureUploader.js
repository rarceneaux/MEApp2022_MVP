import React, {useEffect} from 'react';
import { StyleSheet, View , Image, TouchableWithoutFeedback, Alert } from 'react-native'
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from 'expo-image-picker';


function ChildPictureUploader({imageUri, onChangeImage}) {

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
      {!imageUri && <MaterialCommunityIcons name="camera" size={40} color={"black"}/>}
      {imageUri && <Image source={{uri: imageUri}} style={styles.image}/>}
    </View>
     </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightgray',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems:'center',
    height: 100,
    width: 100,
    overflow: 'hidden',
  },
  image:{
    width:'100%',
    height:'100%'
  }
})

export default ChildPictureUploader;