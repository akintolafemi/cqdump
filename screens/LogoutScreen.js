import { StackScreenProps } from '@react-navigation/stack';
import { StackActions, NavigationActions } from '@react-navigation/native';
import React, { useState, useEffect } from "react";
import { AsyncStorage, StatusBar, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { Content, Icon, Button } from 'native-base';
import FontAwesome, { SolidIcons, RegularIcons, BrandIcons } from 'react-native-fontawesome';
import { Header, Tooltip} from 'react-native-elements';
import { FlatGrid } from 'react-native-super-grid';
import Colors from '../constants/Colors';
import { RootStackParamList } from '../types';


export default function LogoutScreen({
  navigation, route
}) {

  const appClear = () => {
    AsyncStorage.removeItem('mpUser');
    navigation.navigate('Market')
    //RNExitApp.exitApp;
  //  console.log(RNExitApp.exitApp)
  //  console.log(navigation)
    //navigation.dispatch(StackActions.push('Drawer'));
//    navigation.dispatch(StackActions.popToTop());
//    navigation.navigate('Market')
    //exitApp()
    // const resetAction = StackActions.reset({
    //   index: 0,
    //   actions: [NavigationActions.navigate({ routeName: 'Market' })],
    // });
    // navigation.dispatch(resetAction)
  }

  return (
    <View style={styles.container}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
        <StatusBar barStyle='dark-content' />
        <Button 
          transparent
          onPress={() => navigation.goBack()}
          >
            <Text>Go back</Text>
        </Button>
        <Button 
          transparent
          onPress={() => appClear()}
          >
            <Text>Confirm Logout</Text>
        </Button>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bgColor,
  },
 
});
