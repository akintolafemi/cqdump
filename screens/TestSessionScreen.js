import { StackScreenProps } from '@react-navigation/stack';
import React, { useState, useEffect, useRef } from "react";
import { ProgressBarAndroid, ProgressViewIOS, AsyncStorage, SafeAreaView, ImageBackground, StyleSheet, StatusBar, ScrollView, Animated, useWindowDimensions, Platform, Text, TouchableOpacity, View, Image } from 'react-native';
import { Content, Icon, Button, Card, CardItem, ListItem, Left, Right, Body, Fab } from 'native-base';
import { Icon as RNEIcon, SearchBar, Slider } from 'react-native-elements'
import FontAwesome, { SolidIcons, RegularIcons, BrandIcons } from 'react-native-fontawesome';
import { Header, Tooltip, SocialIcon, CheckBox } from 'react-native-elements';
import Colors from '../constants/Colors';
import * as Animatable from 'react-native-animatable';
import { ProgressBar } from '@react-native-community/progress-bar-android';
import Line from '../components/Line';

export default function TestSessionScreen({
  navigation,
}) {

  const [testProgressBar, setTestProgressBar] = useState(0.3);
  const [selectA, setSelectA] = useState(false);
  const [selectB, setSelectB] = useState(false);
  const [selectC, setSelectC] = useState(false);
  const [selectD, setSelectD] = useState(false);
  const [answer, setAnswer] = useState('');

  useEffect(() => {
    navigation.addListener('focus', () => {
      
    });


  }, []);

  const [numOfQuestions, setNumOfQuestions] = useState(30)

  const uncheckAll = () => {
    setSelectA(false)
    setSelectB(false)
    setSelectC(false)
    setSelectD(false)
  }

  const setSelected = (option) => {
    switch(option) {
      case 'a':
        uncheckAll()
        setAnswer('a')
        setSelectA(true)
        break;
      case 'b':
        uncheckAll()
        setAnswer('a')
        setSelectB(true)
        break;
      case 'c':
        uncheckAll()
        setAnswer('c')
        setSelectC(true)
        break;
      case 'd':
        uncheckAll()
        setAnswer('d')
        setSelectD(true)
        break;
      default:
        break;
    }
  }

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
        centerComponent={{ text: `Test Simulation`, style: { fontSize: 20, fontWeight: 'bold' } }}
        containerStyle={{
          height: 90,
          backgroundColor: Colors.colorWhite,
        }}
      />
      <View style={styles.body}>
        <Card>
          <CardItem style={{}}>
            <Body style={{paddingVertical: 5, flexDirection: 'row', justifyContent: 'space-between'}}>
              <View>
                <View style={[styles.rowView]}>
                  <Text style={[styles.textLight]}>Questions</Text>
                  <Text style={[styles.textNormal]}>1</Text>
                  <Text style={[styles.textLight]}>of</Text>
                  <Text style={[styles.textNormal]}>100</Text>
                </View>
                {Platform.OS === 'ios' ? (
                  <ProgressViewIOS
                    style={styles.progress}
                    progressTintColor={Colors.appColorThree}
                    progress={testProgressBar}
                  />
                ) : <ProgressBarAndroid
                      styleAttr="Horizontal"
                      indeterminate={false}
                      progress={testProgressBar}
                      color={Colors.appColorThree}
                    />
                }
              </View>
              <View>
                <View style={[styles.rowView, {justifyContent: 'space-between'}]}>
                  <Text style={[styles.textLight]}>Total Time</Text>
                  <Text style={[styles.textNormal, {marginLeft: 10}]}>20:00</Text>
                </View>
                <View style={[styles.rowView, {justifyContent: 'space-between'}]}>
                  <Text style={[styles.textLight]}>Question Time</Text>
                  <Text style={[styles.textNormal, {marginLeft: 10}]}>20:00</Text>
                </View>
              </View>
            </Body>
           </CardItem>
        </Card>
        <View style={{flex: 1}}>
          <Card>
            <CardItem>
              <Body>
                <Text style={styles.questionText}>
                  What is the process of applying mananual changes to a program called?
                </Text>
                <Line style={{height: 1, width: '100%', backgroundColor: Colors.borderDefault, marginVertical: 10}} />
                <View>
                  <CheckBox
                    title='A) Option A'
                    checked={selectA}
                    size={20}
                    containerStyle={styles.optionsStyle}
                    textStyle={styles.optionsTitleStyle}
                    checkedColor={Colors.appColorThree}
                    onPress={ () => setSelected('a') }
                  />
                  <CheckBox
                    title='B) Option B'
                    checked={selectB}
                    size={20}
                    containerStyle={styles.optionsStyle}
                    textStyle={styles.optionsTitleStyle}
                    checkedColor={Colors.appColorThree}
                    onPress={ () => setSelected('b') }
                  />
                  <CheckBox
                    title='C) Option C'
                    checked={selectC}
                    size={20}
                    containerStyle={styles.optionsStyle}
                    textStyle={styles.optionsTitleStyle}
                    checkedColor={Colors.appColorThree}
                    onPress={ () => setSelected('c') }
                  />
                  <CheckBox
                    title='D) Option D'
                    checked={selectD}
                    size={20}
                    containerStyle={styles.optionsStyle}
                    textStyle={styles.optionsTitleStyle}
                    checkedColor={Colors.appColorThree}
                    onPress={ () => setSelected('d') }
                  />
                </View>
              </Body>
            </CardItem>
          </Card>
        </View>
      </View>
      <Animatable.View animation="zoomIn" duration={1000} style={{marginBottom: 30, paddingHorizontal: 10}}>
        <TouchableOpacity style={{justifyContent: 'center', flexDirection: 'row'}}>
          <Fab
          	active={false}
          	direction="up"
          	containerStyle={{}}
          	style={{ backgroundColor: Colors.appColorTwo }}
          	position="bottomLeft"
          >
          	<RNEIcon color={Colors.colorWhite} name="keyboard-arrow-left" />
       	  </Fab>
        </TouchableOpacity>
        <TouchableOpacity style={{justifyContent: 'center', flexDirection: 'row'}}>
          <Fab
          	active={false}
          	direction="up"
          	containerStyle={{}}
          	style={{ backgroundColor: Colors.appColorTwo }}
          	position="bottomRight"
          >
          	<RNEIcon color={Colors.colorWhite} name="keyboard-arrow-right" />
       	  </Fab>
        </TouchableOpacity>
      </Animatable.View>
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
  },
  rowView: {
    flexDirection: 'row'
  },
  textLight: {
    color: Colors.colorDark,
    fontWeight: '200',
    fontSize: 12
  },
  textNormal: {
    color: Colors.colorDark,
    fontWeight: '500',
    marginHorizontal: 3,
    fontSize: 12
  },
  progress: {
    marginTop: 10
  },
  questionText: {
    color: Colors.colorDark,
    fontSize: 14,
    fontWeight: '500'
  },
  optionsStyle: {
    borderWidth: 0,
    backgroundColor: 'transparent',
    paddingHorizontal: 0,
  },
  optionsTitleStyle: {
    fontWeight: '300'
  }
});
