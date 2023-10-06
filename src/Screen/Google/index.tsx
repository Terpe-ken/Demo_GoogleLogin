import {View, Text, TouchableOpacity, Image, Alert} from 'react-native';
import React, {useEffect} from 'react';
import styles from './styles';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import {MainStackScreenProps} from '../../Navigation/Navigate';

const GoogleLogin: React.FC<MainStackScreenProps<'GoogleLogin'>> = ({
  navigation,
  route,
}) => {
  useEffect(() => {
    // Configure Google Sign-In
    GoogleSignin.configure({
      webClientId:
        '777065220165-lbvreed4uvovsdgdseetacmbnnmkgek1.apps.googleusercontent.com',
    });
  }, []);
  const signInWithGoogleAsync = async () => {
    try {
      // Check if your device supports Google Play
      await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});

      // Get the user's ID token
      const {idToken} = await GoogleSignin.signIn();

      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      // Sign-in the user with the credential
      const userSignIn = await auth().signInWithCredential(googleCredential);

      console.log('User signed in:', userSignIn.user);
      Alert.alert('Logged in successfully');
      // LSuccessful login moves to the Home screen
      navigation.navigate('Home');
    } catch (error: any) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('Google Sign-In canceled.');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('Google Sign-In already in progress.');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('Google Play Services not available.');
      } else {
        console.error('Google Sign-In Error:', error);
        Alert.alert('Login failed');
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <Image
          style={{width: 300, height: 300, borderRadius: 15}}
          source={require('../../Image/avata.jpg')}
        />
      </View>
      <View style={styles.viewbtnGoogle}>
        <TouchableOpacity
          style={styles.btnGoogle}
          onPress={signInWithGoogleAsync}>
          <Image
            style={{width: 32, height: 32}}
            source={require('../../Image/google.png')}
          />
          <Text style={styles.text}>Sign In with Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GoogleLogin;
