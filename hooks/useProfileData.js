import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import * as React from 'react';
import { AsyncStorage } from 'react-native';

export default function useProfileData() {
  const [profileData, setProfileData] = React.useState(undefined);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function getProfile() {
      try {
        const retrievedProfile =  await AsyncStorage.getItem('mpUser');
        setProfileData(JSON.parse(retrievedProfile));
      } catch (error) {
        console.log(error.message);
      } finally {
      }
    }

    getProfile();
  }, []);

  return profileData;
}
