import { StackScreenProps } from '@react-navigation/stack';
import React, { useState, useEffect, useRef } from "react";
import { AsyncStorage, SafeAreaView, ImageBackground, StyleSheet, StatusBar, ScrollView, Animated, useWindowDimensions, Platform, Text, TouchableOpacity, View, Image } from 'react-native';
import { Content, Icon, Button, Card, CardItem, ListItem, Left, Right, Body } from 'native-base';
import { Icon as RNEIcon, SearchBar, Slider } from 'react-native-elements'
import FontAwesome, { SolidIcons, RegularIcons, BrandIcons } from 'react-native-fontawesome';
import { Header, Tooltip, SocialIcon} from 'react-native-elements';
import Colors from '../constants/Colors';
import * as Animatable from 'react-native-animatable';


export default function NewFlashCardsScreen({
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
        centerComponent={{ text: `Start Flashcards`, style: { fontSize: 20, fontWeight: 'bold' } }}
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
                  <Text style={{fontSize: 13, color: Colors.colorDark}}>New Flashcards</Text>
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
