import { StackScreenProps } from '@react-navigation/stack';
import React, { useState, useEffect, useRef } from "react";
import useCart from '../hooks/useCart';
import { AsyncStorage, SafeAreaView, ImageBackground, StyleSheet, StatusBar, ScrollView, Animated, useWindowDimensions, Platform, Text, TouchableOpacity, View, Image } from 'react-native';
import { Content, Icon, Button, Item, Input } from 'native-base';
import { Icon as RNEIcon, SearchBar } from 'react-native-elements'
import FontAwesome, { SolidIcons, RegularIcons, BrandIcons } from 'react-native-fontawesome';
import { Header, Tooltip, SocialIcon} from 'react-native-elements';
import { FlatGrid, SectionGrid } from 'react-native-super-grid';
import Colors from '../constants/Colors';
import * as Animatable from 'react-native-animatable';
export default function ForgotPwdScreen({
  navigation,
}) {

  useEffect(() => {
    navigation.addListener('focus', () => {
      
    });


  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle='light-content' />
      <ImageBackground source={require('../assets/images/login-bg.jpg')} style={styles.body}>
        <Animatable.Image animation="fadeInUpBig" delay={1000} source={require('../assets/images/icon.png')} style={styles.logo}/>
        <View style={{flex: 1, paddingVertical: 20,}}>
          <Animatable.View animation="zoomInUp" duration={3000} style={{alignItems: 'center'}} >
            <Item rounded style={styles.itemStyle}>
              <Input 
                placeholder='Email'
                style={styles.inputStyle}
                keyboardType="default"
              />
            </Item>
            <Button block rounded style={[styles.btnStyle, {backgroundColor: Colors.appColorTwo}]}>
              <Text style={{color: Colors.colorWhite}}>Submit</Text>
            </Button>
            <TouchableOpacity style={{marginVertical: 20}} onPress={ ()=> navigation.navigate('Login') }>
              <Text style={{color: Colors.colorDark, fontSize: 13}}>Back to Login</Text>
            </TouchableOpacity>
          </Animatable.View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bgColor
  },
  body: {
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 100
  },
  welcomeText: {
    fontFamily: 'opensans-extra-bold',
    fontSize: 40,
    fontWeight: 'bold',
    color: Colors.appColorOne
  },
  logo: {
    height: 120,
    width: 120,
    marginBottom: 50
  },
  btnStyle: {
    elevation: 15,
    marginVertical: 5,
  },
  inputStyle: {
    color: Colors.colorDark,
    fontSize: 13
  },
  itemStyle: {
    backgroundColor: Colors.colorWhiteDull,
    marginVertical: 10,
    paddingHorizontal: 15,
  },
});
