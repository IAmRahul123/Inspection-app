import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  PermissionsAndroid,
  FlatList,
  StyleSheet,
} from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import RNFS from 'react-native-fs';
import Card from './Card';
import {SCREEN_WIDTH} from '../constants/Constatnts';

const options = {
  title: 'Select Image',
  mediaType: 'photo',
  quality: 1,
  storageOptions: {
    skipBackup: true,
    path: 'images', // The folder where images will be saved in the cache directory
  },
};

const ImageUpload = () => {
  const [selectedImages, setSelectedImages] = useState([]);

  const ensureDirExists = async dirPath => {
    try {
      const exists = await RNFS.exists(dirPath);
      if (!exists) {
        await RNFS.mkdir(dirPath);
      }
    } catch (error) {
      console.log('Error creating directory:', error);
    }
  };

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Cool Photo App Camera Permission',
          message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the camera');
      } else {
        console.log('Camera permission denied', granted);
      }
    } catch (err) {
      console.warn('ERROR......', err);
    }
  };
  const handleSelectAndSave = async () => {
    requestCameraPermission();
    const selectedImagePaths = [...selectedImages];
    ImagePicker.launchCamera(options, async response => {
      if (response.didCancel || response.error) {
        console.log('Image selection canceled or failed:', response.error);
      } else {
        const imagePath = response.assets[0]?.uri;
        const imageName = `image_${Date.now()}.jpg`;

        try {
          const cachePath = `${RNFS.CachesDirectoryPath}/images/${imageName}`;
          if (imagePath) {
            await RNFS.copyFile(imagePath, cachePath);
            setSelectedImages([...selectedImagePaths, cachePath]);
            console.log('Image saved to cache:', cachePath);
          }
        } catch (error) {
          console.log('Error saving image to cache:', error);
        }
      }
    });
  };

  const handleSelectFromGallery = async () => {
    await ensureDirExists(`${RNFS.CachesDirectoryPath}/images`);

    const selectedImagePaths = [...selectedImages];
    ImagePicker.launchImageLibrary(options, async response => {
      if (response.didCancel || response.error) {
        console.log('Image selection canceled or failed:', response.error);
      } else {
        console.log('RESPONSE', response);
        const imagePath = response.assets[0]?.uri;
        const imageName = `image_${Date.now()}.jpg`;

        try {
          const cachePath = `${RNFS.CachesDirectoryPath}/images/${imageName}`;
          console.log('CACHEEEEEEEEEE', {cachePath, imagePath});
          if (imagePath) {
            await RNFS.copyFile(imagePath, cachePath);
            console.log('Image saved to cache:', cachePath);
            setSelectedImages([...selectedImagePaths, cachePath]);
          }
        } catch (error) {
          console.log('Error saving image to cache:', error);
        }
      }
    });
  };

  const handleDeselect = index => {
    const updatedImages = [...selectedImages];
    updatedImages.splice(index, 1);
    setSelectedImages(updatedImages);
  };

  return (
    <Card style={{marginTop: 15, gap: 10, width: SCREEN_WIDTH - 20}}>
      <View>
        <Text style={styles.btnText}>Add Photos</Text>
      </View>
      <FlatList
        data={selectedImages}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => {
          return (
            <View key={index} style={{margin: 10, width: 100}}>
              <TouchableOpacity onPress={() => handleDeselect(index)}>
                <View
                  style={{
                    position: 'absolute',
                    right: -8,
                    zIndex: 1,
                    top: -10,
                  }}>
                  <Text
                    style={{
                      color: '#2C5E94',
                      fontWeight: 'bold',
                      fontSize: 18,
                    }}>
                    X
                  </Text>
                </View>
              </TouchableOpacity>
              <Image
                source={{uri: `file://${item}`}}
                resizeMode="contain"
                style={{width: 100, height: 100, zIndex: -1}}
              />
            </View>
          );
        }}
      />
      <View style={{flexDirection: 'row', gap: 5}}>
        <TouchableOpacity onPress={handleSelectAndSave} style={styles.btnStyle}>
          <Text style={styles.btnText}>Camera</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleSelectFromGallery}
          style={styles.btnStyle}>
          <Text style={styles.btnText}>Gallery</Text>
        </TouchableOpacity>
      </View>
    </Card>
  );
};

export default ImageUpload;

const styles = StyleSheet.create({
  btnStyle: {
    backgroundColor: '#d1d1d1',
    paddingVertical: 12,
    width: '50%',
    alignItems: 'center',
  },
  btnText: {
    color: '#2C5E94',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
