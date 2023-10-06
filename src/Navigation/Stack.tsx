import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {MainStackParamList} from '../Navigation/Navigate';
import GoogleLogin from '../Screen/Google';
import Home from '../Screen/Home';

const Stack = createNativeStackNavigator<MainStackParamList>();

const HomeStack: React.FC = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="GoogleLogin" component={GoogleLogin} />
    <Stack.Screen name="Home" component={Home} />
  </Stack.Navigator>
);

export {HomeStack};
