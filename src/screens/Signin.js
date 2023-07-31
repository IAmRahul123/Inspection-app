import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useLayoutEffect, useState} from 'react';
import Card from '../components/Card';
import {SCREEN_WIDTH} from '../constants/Constatnts';
import ICON from 'react-native-vector-icons/Ionicons';
const Signin = ({navigation}) => {
  const [data, setData] = useState({email: '', password: ''});
  const [show, setShow] = useState(false);

  const handleSubmit = () => {
    if (data?.email !== 'sumit@trisysit.com' && data?.password !== '123') {
      navigation.navigate('Inspection List');
    } else {
      Alert.alert('Invalid Email or Password');
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({});
  }, [navigation]);
  return (
    <View style={styles.mainContainer}>
      <Card
        style={{
          width: SCREEN_WIDTH - 40,
          gap: 20,
          elevation: 10,
        }}>
        <View style={{alignSelf: 'center', paddingVertical: 20}}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>Trisys</Text>
        </View>
        <View style={{gap: 15}}>
          <View style={styles.input}>
            <TextInput
              placeholder="Email"
              onChangeText={text => setData({...data, email: text})}
            />
          </View>
          <View style={styles.input}>
            <TextInput
              secureTextEntry={!show ? true : false}
              placeholder="Password"
              onChangeText={text => setData({...data, password: text})}
            />
            <View style={{position: 'absolute', right: 20, top: 12}}>
              <TouchableOpacity
                onPress={() => {
                  setShow(prev => !prev);
                }}>
                <View>
                  <ICON
                    name={show ? 'eye-off-outline' : 'eye-outline'}
                    size={20}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              backgroundColor: '#01A9DB',
              paddingVertical: 13,
              borderRadius: 5,
              marginTop: 15,
            }}>
            <TouchableOpacity onPress={handleSubmit}>
              <Text
                style={{
                  color: '#fff',
                  textAlign: 'center',
                  fontWeight: 'bold',
                  fontSize: 16,
                }}>
                SIGN IN
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={{textAlign: 'right'}}>Forgot Password?</Text>
          </View>
        </View>
      </Card>
    </View>
  );
};

export default Signin;

const styles = StyleSheet.create({
  mainContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderColor: '#d6d6d6',
    borderRadius: 5,
    borderWidth: 0.5,
    paddingHorizontal: 10,
  },
});
