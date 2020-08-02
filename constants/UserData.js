import { AsyncStorage } from 'react-native';

export default async function UserData() {
  try {
    const retrievedProfile =  await AsyncStorage.getItem('mpUser');
    const savedProfile = JSON.parse(retrievedProfile);
    return savedProfile
  } catch (error) {
    console.log(error.message);
  }
  return
}
