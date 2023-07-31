import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import HeaderNavbar from '../components/HeaderNavbar';
import {SCREEN_WIDTH} from '../constants/Constatnts';
import Card from '../components/Card';
import ImageUpload from '../components/ImageUpload';

const InspectionDetail = ({navigation}) => {
  const [activeTab, setActiveTab] = useState('Details');
  const [showHeader, setShowHeader] = useState('Details');
  const [selectedImages, setSelectedImages] = useState([]);

  const [ImageData, setImageData] = useState([]);

  const ImagePreview = ({imagePath, onDeselect}) => {
    return (
      <View key={index} style={{margin: 10}}>
        <Image source={{uri: imagePath}} style={{width: 200, height: 200}} />
        <TouchableOpacity onPress={() => onDeselect(index)}>
          <Text style={{textAlign: 'center', color: 'red'}}>❌</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const handleSelectAndSave = async () => {
    const selectedImagePaths = [...selectedImages];
    await selectAndSaveImage();
    const imageNames = await RNFS.readdir(`${RNFS.CachesDirectoryPath}/images`);
    const newImages = imageNames.map(
      imageName => `${RNFS.CachesDirectoryPath}/images/${imageName}`,
    );
    setSelectedImages([...selectedImagePaths, ...newImages]);
  };

  const handleDeselect = index => {
    const updatedImages = [...selectedImages];
    updatedImages.splice(index, 1);
    setSelectedImages(updatedImages);
  };

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          alignSelf: 'center',
          width: SCREEN_WIDTH,
        }}>
        <HeaderNavbar
          text="Details"
          btnColor="#00b8ce"
          textColor="white"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          navigation={navigation}
          setShow={setShowHeader}
        />
        <HeaderNavbar
          text="CheckList"
          btnColor="white"
          textColor={'grey'}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          navigation={navigation}
          setShow={setShowHeader}
        />
        <HeaderNavbar
          text="Files"
          btnColor="white"
          textColor={'grey'}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          navigation={navigation}
          setShow={setShowHeader}
        />
      </View>

      {activeTab === 'Details' && (
        <View style={{gap: 10, marginTop: 15}}>
          <Card
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}>
            <View style={{paddingHorizontal: 10}}>
              <Text>Description Air cooler is</Text>
            </View>
          </Card>
          <Card
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: 5,
            }}>
            <View style={{paddingHorizontal: 10}}>
              <Text>Operating Pressure 8.5 MPa</Text>
            </View>
            <View style={{paddingHorizontal: 10}}>
              <Text>Bought on: </Text>
            </View>
            <View style={{paddingHorizontal: 10}}>
              <Text>Warranty: </Text>
            </View>
            <View style={{paddingHorizontal: 10}}>
              <Text>Installed on: </Text>
            </View>
            <View style={{paddingHorizontal: 10}}>
              <Text>Last Inspection: </Text>
            </View>
            <View style={{paddingHorizontal: 10}}>
              <Text>On: </Text>
            </View>
            <View style={{paddingHorizontal: 10}}>
              <Text>By: </Text>
            </View>
          </Card>
        </View>
      )}

      {activeTab === 'CheckList' && (
        <View style={{gap: 10, marginTop: 15}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Inspection Issue')}>
            <Card>
              <View>
                <Text>SNAGGING-WORKS</Text>
              </View>
            </Card>
          </TouchableOpacity>
          <Card>
            <View>
              <Text>BALCONY</Text>
            </View>
          </Card>
          <Card>
            <View>
              <Text>CP & Sanitary</Text>
            </View>
          </Card>
          <View style={{gap: 10}}>
            <View>
              <Text style={{paddingHorizontal: 10}}>SELECT QUESTIONS</Text>
            </View>

            <Card>
              <Text>Angle cook</Text>
            </Card>
          </View>
        </View>
      )}

      {activeTab === 'Files' && (
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <ImageUpload />
        </View>
      )}
    </View>
  );
};

export default InspectionDetail;

const styles = StyleSheet.create({});
