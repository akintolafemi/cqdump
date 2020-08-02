import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import * as React from 'react';
import { AsyncStorage } from 'react-native';

export default function useProfileData() {
  async function getCart() {
    let cart = {};
    try {
      const retrievedCart =  await AsyncStorage.getItem('mpCart');
      let items = [];
      let total = 0;
      if (retrievedCart !== null) {
        items = [JSON.parse(retrievedCart)];
        total =[JSON.parse(retrievedCart)].length;
      }
      cart = {
        "items": items,
        "total": total
      };
    } catch (error) {
      console.log(error.message);
    } finally {
      return cart
    }
  }

  getCart().then((data) => {
    return data;
  });

}
