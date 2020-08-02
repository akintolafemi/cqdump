import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useState, useEffect, useRef } from "react";

import { BottomTabParamList, TabOneParamList, TabTwoParamList } from '../types';

import { AsyncStorage, SafeAreaView, ImageBackground, StyleSheet, StatusBar, ScrollView, Animated, useWindowDimensions, Platform, Text, TouchableOpacity, View, Image } from 'react-native';
import { Header, Tooltip, SocialIcon} from 'react-native-elements';
import { FlatGrid, SectionGrid } from 'react-native-super-grid';
import Colors from '../constants/Colors';
import * as Animatable from 'react-native-animatable';
import { Ionicons, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { Content, Icon, Button, Card, CardItem, ListItem, Left, Right, Body } from 'native-base';
import { Icon as RNEIcon, SearchBar, Slider } from 'react-native-elements'

function TabOneScreen({
  navigation,
}) {

  useEffect(() => {
    navigation.addListener('focus', () => {
      
    });


  }, []);

  const [numOfQuestions, setNumOfQuestions] = useState(30)

  return (
    <View style={styles.container}>
      <Header
        barStyle="dark-content"
        leftComponent={
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{ paddingLeft: 8}}
          >
            <RNEIcon 
              style={{color: Colors.colorDark, fontSize: 35}}
              name="arrow-back"
            />
          </TouchableOpacity>
        }
        centerComponent={{ text: `Contact Us`, style: { fontSize: 20, fontWeight: 'bold' } }}
        containerStyle={{
          height: 90,
          backgroundColor: Colors.colorWhite,
        }}
      />
      <View style={styles.body}>
        
      </View>
    </View>
  );
}

function TabTwoScreen({
  navigation,
}) {

  useEffect(() => {
    navigation.addListener('focus', () => {
      
    });


  }, []);

  return (
    <View style={styles.container}>
      <Header
        barStyle="dark-content"
        leftComponent={
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{ paddingLeft: 8}}
          >
            <RNEIcon 
              style={{color: Colors.colorDark, fontSize: 35}}
              name="arrow-back"
            />
          </TouchableOpacity>
        }
        centerComponent={{ text: `More Apps`, style: { fontSize: 20, fontWeight: 'bold' } }}
        containerStyle={{
          height: 90,
          backgroundColor: Colors.colorWhite,
        }}
      />
      <View style={styles.body}>
        
      </View>
    </View>
  );
}

function TabThreeScreen({
  navigation,
}) {

  useEffect(() => {
    navigation.addListener('focus', () => {
      
    });


  }, []);

  return (
    <View style={styles.container}>
      <Header
        barStyle="dark-content"
        leftComponent={
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{ paddingLeft: 8}}
          >
            <RNEIcon 
              style={{color: Colors.colorDark, fontSize: 35}}
              name="arrow-back"
            />
          </TouchableOpacity>
        }
        centerComponent={{ text: `Share App`, style: { fontSize: 20, fontWeight: 'bold' } }}
        containerStyle={{
          height: 90,
          backgroundColor: Colors.colorWhite,
        }}
      />
      <View style={styles.body}>
        
      </View>
    </View>
  );
}

const BottomTab = createBottomTabNavigator();

export default function BonusFeedbackScreen({ navigation, route }) {

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      tabBarOptions={{ 
        activeTintColor: Colors.appColorTwo, 
        inactiveTintColor: Colors.colorGreyDark,
        style: {
          backgroundColor: Colors.colorWhite, 
        } 
      }}>
      <BottomTab.Screen
        name="TabOne"
        component={TabOneScreen}
        options={{
          title: 'Contact Us',
          tabBarIcon: ({ focused, color }) => <MaterialCommunityIcons focused={focused} name='contact-mail' style={{color: focused ? Colors.appColorTwo : Colors.colorGreyDark}}/>,
        }}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoScreen}
        options={{
          title: 'More Apps',
          tabBarIcon: ({ focused, color }) => <Ionicons focused={focused} name='md-apps' style={{color: focused ? Colors.appColorTwo : Colors.colorGreyDark}}/>,
        }}
      />
      <BottomTab.Screen
        name="TabThree"
        component={TabThreeScreen}
        options={{
          title: 'Share',
          tabBarIcon: ({ focused, color }) => <FontAwesome focused={focused} name='share-alt' style={{color: focused ? Colors.appColorTwo : Colors.colorGreyDark}}/>,
        }}
      />
    </BottomTab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bgColor
  },
  body: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 10
  }
});
