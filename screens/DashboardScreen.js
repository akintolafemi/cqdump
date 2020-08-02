import { StackScreenProps } from '@react-navigation/stack';
import React, { useState, useEffect, useRef } from "react";
import useCart from '../hooks/useCart';
import { AsyncStorage, SafeAreaView, ImageBackground, StyleSheet, StatusBar, ScrollView, Animated, useWindowDimensions, Platform, Text, TouchableOpacity, View, Image } from 'react-native';
import { Content, Icon, Button, Card } from 'native-base';
import { Icon as RNEIcon, SearchBar } from 'react-native-elements'
import FontAwesome, { SolidIcons, RegularIcons, BrandIcons } from 'react-native-fontawesome';
import { Header, Tooltip, SocialIcon} from 'react-native-elements';
import { FlatGrid, SectionGrid } from 'react-native-super-grid';
import Colors from '../constants/Colors';
import * as Animatable from 'react-native-animatable';
export default function DashboardScreen({
  navigation,
}) {

  useEffect(() => {
    navigation.addListener('focus', () => {
      
    });


  }, []);

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
      <Content style={styles.body}>
        <FlatGrid
          itemDimension={120}
          data={portals}
          style={{}}
          spacing={15}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              key={index.toString()}
              keyExtractor={index.toString()}
            >  
            <Card style={{alignItems: 'center', padding: 35, borderRadius: 10}}>
              <Image animation="fadeInUpBig" delay={1000} source={item.img} style={{marginBottom: 7, width: 55, height: 55}}/>
              <Text style={{fontWeight: 'bold'}}>{item.title}</Text>
            </Card>
            </TouchableOpacity>
          )}
          listKey={(portals.length).toString()}
          keyExtractor={(item, index) => index.toString()}
        />
      </Content>
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
    paddingTop: 20
  }
});
