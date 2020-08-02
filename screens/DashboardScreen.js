import { StackScreenProps } from '@react-navigation/stack';
import React, { useState, useEffect, useRef } from "react";
import { AsyncStorage, SafeAreaView, ImageBackground, StyleSheet, StatusBar, ScrollView, Animated, useWindowDimensions, Platform, Text, TouchableOpacity, View, Image } from 'react-native';
import { Content, Icon, Button, Card, CardItem, ListItem, Left, Right, Body, Fab } from 'native-base';
import { Icon as RNEIcon, SearchBar } from 'react-native-elements'
import { Header, Tooltip, SocialIcon} from 'react-native-elements';
import Colors from '../constants/Colors';
import * as Animatable from 'react-native-animatable';
import { Ionicons, MaterialCommunityIcons, FontAwesome, Octicons } from '@expo/vector-icons';
export default function DashboardScreen({
  navigation,
}) {

  useEffect(() => {
    navigation.addListener('focus', () => {
      
    });


  }, []);

  const [openFab, setOpenFab] = useState(false)

  const portals = [
    { title: 'PROFILE', img: require('../assets/icons/person.png') },
    { title: 'About', img: require('../assets/icons/info.png') }
  ];

  return (
    <View style={styles.container}>
      <Header
        barStyle="dark-content" // or directly
        centerComponent={{ text: `PORTAL`, style: { fontSize: 20, fontWeight: 'bold' } }}
        containerStyle={{
          height: 90,
          backgroundColor: Colors.colorWhite,
        }}
      />
      <View style={{backgroundColor: Colors.colorWhite, paddingHorizontal: 15, paddingVertical: 15, marginTop: 10, flexDirection: 'row'}}>
        <View style={{alignItems: 'center'}}>
          <Text style={{textAlign: 'center', fontWeight: '100', fontSize: 12, color: Colors.colorGreyDark}}>Practiced{"\n"}Today</Text>
          <Text style={{fontWeight: 'bold', fontSize: 25, marginTop: 5}}>0</Text>
        </View>
        <View style={{flex: 1, justifyContent: 'flex-end', flexDirection: 'row'}}>
          <View style={{alignItems: 'center', justifyContent: 'center', marginLeft: 10}}>
            <Text style={{textAlign: 'center', fontWeight: '100', fontSize: 12, color: Colors.colorGreyDark}}>Correct</Text>
            <Text style={{fontWeight: 'bold', fontSize: 25, marginTop: 5, color: Colors.appColorTwo}}>0</Text>
          </View>
          <View style={{alignItems: 'center', justifyContent: 'center', marginLeft: 10}}>
            <Text style={{textAlign: 'center', fontWeight: '100', fontSize: 12, color: Colors.colorGreyDark}}>Attempted</Text>
            <Text style={{fontWeight: 'bold', fontSize: 25, marginTop: 5, color: Colors.colorDanger}}>0</Text>
          </View>
          <View style={{alignItems: 'center', justifyContent: 'center', marginLeft: 10}}>
            <Text style={{textAlign: 'center', fontWeight: '100', fontSize: 12, color: Colors.colorGreyDark}}>Remaining</Text>
            <Text style={{fontWeight: 'bold', fontSize: 25, marginTop: 5, color: Colors.appColorOne}}>0</Text>
          </View>
        </View>
      </View>
      <Content style={styles.body}>
        <Animatable.View animation="slideInLeft" duration={500}>
          <TouchableOpacity onPress={ () => navigation.navigate('NewTest') }>
            <Card style={{borderRadius: 5}}>
              <CardItem style={styles.cardItem}>
                <RNEIcon name="book" color={Colors.colorWhite} size={25} style={{backgroundColor: Colors.appColorTwo, padding:7, borderRadius: 25}} />
                <Body style={{paddingHorizontal: 10}}>
                  <Text style={{fontSize: 15, marginBottom: 5}}>Test Session</Text>
                  <Text style={{color: Colors.colorDark, fontSize: 12}}>Simulate a real world exam</Text>
                </Body>
              </CardItem>
            </Card>
          </TouchableOpacity>
        </Animatable.View>
        <Animatable.View animation="slideInRight" duration={500}>
          <TouchableOpacity onPress={ () => navigation.navigate('NewPractice') }>
            <Card style={{borderRadius: 5}}>
              <CardItem style={styles.cardItem}>
                <RNEIcon name="assessment" color={Colors.colorWhite} size={25} style={{backgroundColor: Colors.appColorTwo, padding:7, borderRadius: 25}} />
                <Body style={{paddingHorizontal: 10}}>
                  <Text style={{fontSize: 15, marginBottom: 5}}>Practice</Text>
                  <Text style={{color: Colors.colorDark, fontSize: 12}}>Answer and get feedback</Text>
                </Body>
               </CardItem>
             </Card>
            </TouchableOpacity>
          </Animatable.View>
          <Animatable.View animation="slideInLeft" duration={500}>
            <TouchableOpacity onPress={ () => navigation.navigate('NewFlashCards') }>
             <Card style={{borderRadius: 5}}>
              <CardItem style={styles.cardItem}>
                <RNEIcon name="card-membership" color={Colors.colorWhite} size={25} style={{backgroundColor: Colors.appColorTwo, padding:7, borderRadius: 25}} />
                <Body style={{paddingHorizontal: 10}}>
                  <Text style={{fontSize: 15, marginBottom: 5}}>Flashcards</Text>
                  <Text style={{color: Colors.colorDark, fontSize: 12}}>Effective way to memorize information</Text>
                </Body>
               </CardItem>
             </Card>
            </TouchableOpacity>
          </Animatable.View>
          <Animatable.View animation="slideInRight" duration={500}>
            <TouchableOpacity onPress={ () => navigation.navigate('BonusFeedback') }>
              <Card style={{borderRadius: 5}}>
              <CardItem style={styles.cardItem}>
                <RNEIcon name="chat-bubble" color={Colors.colorWhite} size={25} style={{backgroundColor: Colors.appColorTwo, padding:7, borderRadius: 25}} />
                <Body style={{paddingHorizontal: 10}}>
                  <Text style={{fontSize: 15, marginBottom: 5}}>Bonus and feedback</Text>
                  <Text style={{color: Colors.colorDark, fontSize: 12}}>Unlock more</Text>
                </Body>
               </CardItem>
             </Card>
          </TouchableOpacity>
        </Animatable.View>
      </Content>
      <Animatable.View animation="zoomIn" duration={2000} style={{marginBottom: 30, paddingHorizontal: 10}}>
        <Fab
          active={openFab}
          direction="up"
          containerStyle={{ }}
          style={{ backgroundColor: Colors.appColorTwo }}
          position="bottomRight"
          onPress={() => setOpenFab(!openFab)}>
          <Icon name="menu" />
          <Button disabled style={{ backgroundColor: Colors.colorDanger }}>
            <Octicons name="settings" size={20} color='white' />
          </Button>
          <Button style={{ backgroundColor: '#34A34F' }}>
            <MaterialCommunityIcons name="share-variant" size={20} color='white' />
          </Button>
        </Fab>
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
    paddingHorizontal: 10
  },
  cardItem: {
    marginVertical: 5,
    paddingVertical: 10
  },
  cardIcon: {
    color: Colors.colorWhite,
    fontSize: 25,
  }
});
