import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Card from '../components/Card';
import ICON from 'react-native-vector-icons/Entypo';
const InspectionIssue = () => {
  return (
    <View style={{margin: 10, gap: 10}}>
      <Card>
        <Text style={{fontSize: 14}}>SNAGGING-APARTMENT</Text>
      </Card>
      <Card>
        <Text style={{fontSize: 14}}>OBSERVATIONS</Text>
      </Card>

      <View style={{flexDirection: 'row', gap: 10}}>
        <TouchableOpacity
          style={{
            flex: 0.5,
            backgroundColor: '#0CCAF0',
            paddingVertical: 15,
            elevation: 10,
          }}>
          <Text style={{color: '#fff', textAlign: 'center'}}>PREVIOUS</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flex: 0.5,

            backgroundColor: '#fff',
            paddingVertical: 15,
            elevation: 10,
          }}>
          <Text style={{color: '#000', textAlign: 'center'}}>NEW</Text>
        </TouchableOpacity>
      </View>

      <Card>
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 0.2}}>
            <View>
              <ICON name="message" size={18} color={'#0CCAF0'} />
            </View>
            <View>
              <Text style={{fontSize: 10, marginTop: 15}}>OPEN</Text>
            </View>
          </View>
          <View style={{flex: 0.8}}></View>
        </View>
        <View>
          <View></View>
        </View>
      </Card>
    </View>
  );
};

export default InspectionIssue;

const styles = StyleSheet.create({});
