// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Signin from './src/screens/Signin';
import InspectionList from './src/screens/InspectionList';
import InspectionIFloor from './src/screens/InspectionIFloor';
import InspectionFlat from './src/screens/InspectionFlat';
import InspectionDetail from './src/screens/InspectionDetail';
import InspectionIssue from './src/screens/InspectionIssue';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#2C5E94',
            color: '#fff',
          },
          headerTitleStyle: {
            color: '#fff',
          },
          headerTitleAlign: 'center',
          headerTintColor: '#fff',
        }}>
        <Stack.Screen name="Sign In" component={Signin} />
        <Stack.Screen name="Inspection List" component={InspectionList} />
        <Stack.Screen name="Inspection Floor" component={InspectionIFloor} />
        <Stack.Screen name="Inspection Flat" component={InspectionFlat} />
        <Stack.Screen name="Inspection Detail" component={InspectionDetail} />
        <Stack.Screen name="Inspection Issue" component={InspectionIssue} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
