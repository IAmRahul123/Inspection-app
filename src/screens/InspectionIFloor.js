import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Card from '../components/Card';
import {SCREEN_WIDTH} from '../constants/Constatnts';

const InspectionIFloor = ({navigation}) => {
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
          onPress={() => navigation.navigate('Inspection Flat')}>
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
                    Air Cooler
                  </Text>
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

export default InspectionIFloor;

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
