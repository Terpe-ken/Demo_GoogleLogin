import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import React from 'react';
import {Alert, Text, TouchableOpacity, View, Image} from 'react-native';
import {MainStackScreenProps} from '../../Navigation/Navigate';
import styles from './styles';

const Home: React.FC<MainStackScreenProps<'Home'>> = ({navigation, route}) => {
  const signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      await auth().signOut();
      console.log('User signed out successfully.');
      Alert.alert('Logout in successfully');
      navigation.navigate('GoogleLogin');
    } catch (error) {
      console.error('Sign out error:', error);
      Alert.alert('Logout failed');
    }
  };
  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center', paddingTop: 20}}>
        <Image
          style={{width: 300, height: 300, borderRadius: 20}}
          source={require('../../Image/avatar2.jpg')}
        />
      </View>
      <View style={{paddingHorizontal: 15, top: 30}}>
        <Text style={styles.text}>
          Congratulations on your successful login 🥰
        </Text>
      </View>

      <View style={{alignItems: 'center', paddingTop: 100}}>
        <TouchableOpacity style={styles.btnLogout} onPress={signOut}>
          <Text style={styles.textLogout}>Log out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
