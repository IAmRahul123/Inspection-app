import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Card from '../components/Card';
import {SCREEN_WIDTH} from '../constants/Constatnts';
const InspectionFlat = ({navigation}) => {
  return (
    <View>
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {/* Pending List */}
        <TouchableOpacity
          onPress={() => navigation.navigate('Inspection Detail')}>
          <Card
            style={{
              marginTop: 15,
              width: SCREEN_WIDTH - 30,
              height: 100,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <View style={{flex: 0.5, gap: 5}}>
                <View>
                  <Text
                    style={{fontSize: 20, fontWeight: 'bold', color: '#000'}}>
                    AVG 85MG-1
                  </Text>
                </View>
              </View>
              <View style={{flex: 0.5, alignItems: 'flex-end'}}>
                <TouchableOpacity>
                  {/* <Image
                    src=
                    style={{width: 500, height: 500}}
                  /> */}

                  <Image
                    style={{width: 30, height: 30}}
                    source={require('../assets/call-report-icon-3.png')}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </Card>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default InspectionFlat;

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
