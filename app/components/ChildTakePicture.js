import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';

function ChildTakePicture() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

 let snap = snap;

  <Camera
  ref={ref => {
    this.camera = ref;
  }}
/>;
// ...
snap = async () => {
  if (this.camera) {
    let photo = await this.camera.takePictureAsync();
  }
};


  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            <Text style={styles.text}> Flip </Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width:'100%'
  },
  camera: {
    width:'100%',
    height:'75%'
  },
  buttonContainer: {
    width:"50%"
  },
  text: {
    color:'red'
  },
  button: {
    color:'red',
    width:'50%',
    height:'50%',
    backgroundColor:'green'
  }

})
export default ChildTakePicture;