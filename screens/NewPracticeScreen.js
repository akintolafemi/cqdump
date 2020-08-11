import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useState, useEffect, useRef } from "react";

import { BottomTabParamList, TabOneParamList, TabTwoParamList } from '../types';

import { AsyncStorage, SafeAreaView, ImageBackground, StyleSheet, StatusBar, ScrollView, Animated, useWindowDimensions, Platform, Text, TouchableOpacity, View, Image } from 'react-native';
import FontAwesome, { SolidIcons, RegularIcons, BrandIcons } from 'react-native-fontawesome';
import { Header, Tooltip, SocialIcon} from 'react-native-elements';
import { FlatGrid, SectionGrid } from 'react-native-super-grid';
import Colors from '../constants/Colors';
import * as Animatable from 'react-native-animatable';
import { Entypo, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
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
        centerComponent={{ text: `Practice Session`, style: { fontSize: 20, fontWeight: 'bold' } }}
        containerStyle={{
          height: 90,
          backgroundColor: Colors.colorWhite,
        }}
      />
      <View style={styles.body}>
        <Animatable.View animation="flipInY" duration={500}>
          <TouchableOpacity>
             <Card style={{borderRadius: 5}}>
              <CardItem style={{backgroundColor: Colors.appColorTwo}}>
                <Body style={{alignItems: 'center'}}>
                  <Text style={{fontSize: 15, marginBottom: 5, color: Colors.colorWhite}}>Bonus and feedback</Text>
                  <Text style={{color: Colors.colorWhite, fontSize: 12}}>Unlock more</Text>
                </Body>
               </CardItem>
             </Card>
          </TouchableOpacity>
        </Animatable.View>
        <Animatable.View animation="flipInX" duration={1000}>
          <TouchableOpacity>
             <Card style={{borderRadius: 5}}>
              <CardItem style={{}}>
                <Body style={{alignItems: 'center', paddingVertical: 10}}>
                  <Text style={{fontSize: 13, color: Colors.colorDark}}>New Session</Text>
                </Body>
               </CardItem>
             </Card>
          </TouchableOpacity>
        </Animatable.View>
        <Animatable.View animation="flipInX" duration={2000}>
          <Slider
            minimumValue={10}
            step={10}
            maximumValue={100}
            thumbTintColor={Colors.appColorTwo}
            minimumTrackTintColor={Colors.appColorTwo}
            value={numOfQuestions}
            onValueChange={(value) => setNumOfQuestions(value)}
          />
          <Text style={{color: Colors.colorDark}}>Number of Questions: {numOfQuestions}</Text>
        </Animatable.View>
      </View>
      <Animatable.View animation="zoomIn" duration={2000} style={{marginBottom: 30, paddingHorizontal: 10}}>
        <TouchableOpacity style={{justifyContent: 'center', flexDirection: 'row'}}>
          <Text style={{color: Colors.colorDark, fontSize: 12}}>Total Questions 100</Text>
        </TouchableOpacity>
      </Animatable.View>
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
        centerComponent={{ text: `Sessions`, style: { fontSize: 20, fontWeight: 'bold' } }}
        containerStyle={{
          height: 90,
          backgroundColor: Colors.colorWhite,
        }}
      />
      <View style={styles.body}>
        <Animatable.View animation="flipInY" duration={500}>
          <TouchableOpacity>
             <Card style={{borderRadius: 5}}>
              <CardItem style={{backgroundColor: Colors.appColorTwo}}>
                <Body style={{alignItems: 'center'}}>
                  <Text style={{fontSize: 15, marginBottom: 5, color: Colors.colorWhite}}>Bonus and feedback</Text>
                  <Text style={{color: Colors.colorWhite, fontSize: 12}}>Unlock more</Text>
                </Body>
               </CardItem>
             </Card>
          </TouchableOpacity>
        </Animatable.View>
        <Animatable.View animation="flipInX" duration={1000}>
          <TouchableOpacity>
             <Card style={{borderRadius: 5}}>
              <CardItem style={{}}>
                <Body style={{alignItems: 'center', paddingVertical: 10}}>
                  <Text style={{fontSize: 13, color: Colors.colorDark}}>New Session</Text>
                </Body>
               </CardItem>
             </Card>
          </TouchableOpacity>
        </Animatable.View>
      </View>
      <Animatable.View animation="zoomIn" duration={1000} style={{marginBottom: 30, paddingHorizontal: 10}}>
        <TouchableOpacity style={{justifyContent: 'center', flexDirection: 'row'}}>
          <Text style={{color: Colors.colorDark, fontSize: 12}}>Total Questions 100</Text>
        </TouchableOpacity>
      </Animatable.View>
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
        centerComponent={{ text: `Filter Practice`, style: { fontSize: 20, fontWeight: 'bold' } }}
        containerStyle={{
          height: 90,
          backgroundColor: Colors.colorWhite,
        }}
      />
      <View style={styles.body}>
        <Animatable.View animation="flipInY" duration={500}>
          <TouchableOpacity>
             <Card style={{borderRadius: 5}}>
              <CardItem style={{backgroundColor: Colors.appColorTwo}}>
                <Body style={{alignItems: 'center'}}>
                  <Text style={{fontSize: 15, marginBottom: 5, color: Colors.colorWhite}}>Bonus and feedback</Text>
                  <Text style={{color: Colors.colorWhite, fontSize: 12}}>Unlock more</Text>
                </Body>
               </CardItem>
             </Card>
          </TouchableOpacity>
        </Animatable.View>
        <Animatable.View animation="flipInX" duration={1000}>
          <TouchableOpacity>
             <Card style={{borderRadius: 5}}>
              <CardItem style={{}}>
                <Body style={{alignItems: 'center', paddingVertical: 10}}>
                  <Text style={{fontSize: 13, color: Colors.colorDark}}>New Session</Text>
                </Body>
               </CardItem>
             </Card>
          </TouchableOpacity>
        </Animatable.View>
      </View>
      <Animatable.View animation="zoomIn" duration={2000} style={{marginBottom: 30, paddingHorizontal: 10}}>
        <TouchableOpacity style={{justifyContent: 'center', flexDirection: 'row'}}>
          <Text style={{color: Colors.colorDark, fontSize: 12}}>Total Questions 100</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}

const BottomTab = createBottomTabNavigator();

export default function NewPracticeScreen({ navigation, route }) {

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
          title: 'Start',
          tabBarIcon: ({ focused, color }) => <Entypo focused={focused} name='hour-glass' style={{color: focused ? Colors.appColorTwo : Colors.colorGreyDark}}/>,
        }}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoScreen}
        options={{
          title: 'Sessions',
          tabBarIcon: ({ focused, color }) => <FontAwesome5 focused={focused} name='layer-group' style={{color: focused ? Colors.appColorTwo : Colors.colorGreyDark}}/>,
        }}
      />
      <BottomTab.Screen
        name="TabThree"
        component={TabThreeScreen}
        options={{
          title: 'Filters',
          tabBarIcon: ({ focused, color }) => <MaterialCommunityIcons focused={focused} name='filter-remove' style={{color: focused ? Colors.appColorTwo : Colors.colorGreyDark}}/>,
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
    paddingHorizontal: 10,
    justifyContent: 'center'
  }
});
