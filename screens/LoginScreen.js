import { StackScreenProps } from '@react-navigation/stack';
import React, { useState, useEffect, useRef } from "react";
import { AsyncStorage, SafeAreaView, ImageBackground, StyleSheet, StatusBar, ScrollView, Animated, useWindowDimensions, Platform, Text, TouchableOpacity, View, Image } from 'react-native';
import { Content, Icon, Button, Item, Input } from 'native-base';
import { Icon as RNEIcon, SearchBar } from 'react-native-elements'
import FontAwesome, { SolidIcons, RegularIcons, BrandIcons } from 'react-native-fontawesome';
import { Header, Tooltip, SocialIcon} from 'react-native-elements';
import { FlatGrid, SectionGrid } from 'react-native-super-grid';
import Colors from '../constants/Colors';
import * as Animatable from 'react-native-animatable';
export default function LoginScreen({
  navigation,
}) {

  useEffect(() => {
    navigation.addListener('focus', () => {
      
    });

  }, []);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  const authLogin = () => {
    navigation.navigate('Dashboard')
  }

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
                value={email}
                onChangeText={(value) => setEmail(value)}
              />
            </Item>
            <Item rounded style={styles.itemStyle}>
              <Input 
                placeholder='Password'
                style={styles.inputStyle}
                keyboardType="default"
                value={password}
                onChangeText={(value) => setPassword(value)}
                secureTextEntry={true}
              />
            </Item>
            <Button block rounded style={[styles.btnStyle, {backgroundColor: Colors.appColorTwo}]} onPress={ () => authLogin() }>
              <Icon name="log-in" /><Text style={{color: Colors.colorWhite}}>Sign In</Text>
            </Button>
            <TouchableOpacity style={{marginVertical: 20}} onPress={ ()=> navigation.navigate('ForgotPwd')}>
              <Text style={{color: Colors.colorDark, fontSize: 13}}>Forgot Password?</Text>
            </TouchableOpacity>
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
          <Animatable.View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Text style={{color: Colors.colorDark, fontSize: 13, marginRight: 5}}>Don't have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
              <Text style={{color: Colors.colorDark, fontSize: 13}}>Sign Up</Text>
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
