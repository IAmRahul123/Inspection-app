import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const HeaderNavbar = props => {
  const headerChange = props => {
    props.setActiveTab(props.text);
    console.log(props);
    props.setShow(props.text);
  };
  return (
    <View style={{flex: 1}}>
      <TouchableOpacity
        style={{
          borderBottomColor:
            props.activeTab != props.text ? 'white' : '#2C5E94',
          borderBottomWidth: 5,
          backgroundColor: 'white',
          paddingVertical: 15,
          paddingHorizontal: 6,
          justifyContent: 'center',
          alignItems: 'center',
          elevation: 10,
        }}
        onPress={() => headerChange(props)}>
        <Text
          style={{
            color: props.activeTab != props.text ? '#d6d6d6' : 'black',
            fontSize: 15,
            fontWeight: '600',
          }}>
          {props.text}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default HeaderNavbar;
