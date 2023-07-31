import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {SCREEN_WIDTH} from '../constants/Constatnts';
import HeaderNavbar from '../components/HeaderNavbar';
import Card from '../components/Card';

const InspectionList = ({navigation}) => {
  const [activeTab, setActiveTab] = useState('Pending');
  const [show, setShow] = useState(false);
  const [showHeader, setShowHeader] = useState('Pending');
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          alignSelf: 'center',
          width: SCREEN_WIDTH,
        }}>
        <HeaderNavbar
          text="Pending"
          btnColor="#00b8ce"
          textColor="white"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          navigation={navigation}
          setShow={setShowHeader}
        />
        <HeaderNavbar
          text="Completed"
          btnColor="white"
          textColor={'grey'}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          navigation={navigation}
          setShow={setShowHeader}
        />
      </View>

      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: 100,
          marginTop: 15,
        }}>
        {/* Pending List */}
        <TouchableOpacity
          onPress={() => navigation.navigate('Inspection Floor')}>
          <Card style={{marginTop: 15, width: SCREEN_WIDTH - 30}}>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <View style={{flex: 0.5, gap: 5}}>
                <View>
                  <Text
                    style={{fontSize: 20, fontWeight: 'bold', color: '#000'}}>
                    Compressor Station -1
                  </Text>
                </View>
                <View>
                  <Text style={{color: '#01A9DB'}}>Plant -1</Text>
                </View>
                <View>
                  <Text>Assigned to: </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View>
                    <Text>From Date</Text>
                  </View>
                  <View>
                    <Text>To Date</Text>
                  </View>
                </View>
              </View>
              <View style={{flex: 0.5, alignItems: 'flex-end'}}>
                <View style={{flexDirection: 'row'}}>
                  <View
                    style={[styles.container, {backgroundColor: '#B6D7A8'}]}>
                    <Text style={styles.text}>Pass</Text>
                  </View>
                  <View
                    style={[styles.container, {backgroundColor: '#E79797'}]}>
                    <Text style={styles.text}>Fail</Text>
                  </View>
                  <View
                    style={[styles.container, {backgroundColor: '#C9DAF8'}]}>
                    <Text style={styles.text}>Pending</Text>
                  </View>
                </View>
                <View>
                  <TouchableOpacity></TouchableOpacity>
                </View>
              </View>
            </View>
          </Card>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default InspectionList;

const styles = StyleSheet.create({
  container: {
    borderWidth: 0.5,
    borderColor: '#000',
    padding: 2,
    paddingHorizontal: 10,
  },
  text: {
    color: '#000',
  },
});
