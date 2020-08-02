import { StackScreenProps } from '@react-navigation/stack';
import React, { useState, useEffect, useRef } from "react";
import useCart from '../hooks/useCart';
import { AsyncStorage, SafeAreaView, ImageBackground, StyleSheet, StatusBar, ScrollView, Animated, useWindowDimensions, Platform, Text, TouchableOpacity, View, Image } from 'react-native';
import { Content, Icon, Button } from 'native-base';
import { Icon as RNEIcon, SearchBar } from 'react-native-elements'
import FontAwesome, { SolidIcons, RegularIcons, BrandIcons } from 'react-native-fontawesome';
import { Header, Tooltip, SocialIcon} from 'react-native-elements';
import { FlatGrid, SectionGrid } from 'react-native-super-grid';
import Colors from '../constants/Colors';
import * as Animatable from 'react-native-animatable';
export default function WelcomeScreen({
  navigation,
}) {

  useEffect(() => {
    navigation.addListener('focus', () => {
      
    });


  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle='light-content' />
      <ImageBackground source={require('../assets/images/welcome.jpg')} style={styles.body}>
        <Animatable.Text animation="bounceInRight" duration={3000} style={styles.welcomeText}>Welcome!</Animatable.Text>
        <Animatable.Text animation="bounceInLeft" duration={3000} style={{color: Colors.colorWhiteTint, fontWeight: '700', fontSize: 15}}>We give you the best {"\n"}to prepare you</Animatable.Text>
        <Animatable.Image animation="fadeInUpBig" delay={1000} source={require('../assets/images/icon.png')} style={styles.logo}/>
        <View style={{flex: 1, paddingVertical: 50, justifyContent: 'flex-end'}}>
          <Animatable.View animation="zoomInUp" duration={3000} >
            <Button block rounded style={[styles.btnStyle, {backgroundColor: Colors.appColorTwo}]} onPress={() => navigation.navigate('Login')}>
              <Icon name="log-in" /><Text style={{color: Colors.colorWhite}}>Sign In</Text>
            </Button>
            <Button block rounded style={[styles.btnStyle, {backgroundColor: Colors.colorWhite}]} onPress={() => navigation.navigate('SignUp')}>
              <Icon name="log-out" style={{color: Colors.colorDark}} /><Text style={{color: Colors.colorDark}}>Sign Up</Text>
            </Button>
          </Animatable.View>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Animatable.View
              animation="slideInLeft"
              duration={500}
              >
              <SocialIcon
                light
                raised={true}
                type='facebook'
                iconSize={15}
                style={{height: 30, width: 30}}
              />
            </Animatable.View>
            <Animatable.View
              animation="slideInLeft"
              duration={500}>
              <SocialIcon
                light
                raised={true}
                type='google'
                iconSize={15}
                style={{height: 30, width: 30}}
              />
            </Animatable.View>
          </View>
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
});
