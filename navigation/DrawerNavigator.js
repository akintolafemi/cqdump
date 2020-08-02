import React, {useState, useEffect} from 'react';
import { AsyncStorage, Platform, StatusBar, StyleSheet, NativeModules, Alert, BackHandler, View, Text, Image } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem, useIsDrawerOpen } from '@react-navigation/drawer';
import { Icon, Button } from 'native-base';
import { Icon as RNEIcon } from 'react-native-elements'
import { NavigationContainer } from '@react-navigation/native';
import Animated from 'react-native-reanimated';
import MarketLaunchScreen from '../screens/MarketLaunchScreen';
import AccountSettingsScreen from '../screens/AccountSettingsScreen';
import AirtimeScreen from '../screens/AirtimeScreen';
import FundTransferScreen from '../screens/FundTransferScreen';
import PayBillsScreen from '../screens/PayBillsScreen';
import FundWalletScreen from '../screens/FundWalletScreen';
import TransactionHistoryScreen from '../screens/TransactionHistoryScreen';
import LogoutScreen from '../screens/LogoutScreen';
import ProfileScreen from '../screens/ProfileScreen';

import SupportScreen from '../screens/SupportScreen';

import useProfileData from '../hooks/useProfileData';

import Colors from '../constants/Colors';

import RNExitApp from 'react-native-exit-app';

const logOut = () => {
  Alert.alert(
    'Logout',
    'Are you sure you want to logout?',
    [
      {
        text: 'No',
        style: 'cancel',
        // onPress: () => {
        //   navigation.goBack()
        // }
      },
      {
        text: 'Yes',
        onPress: () => {
          closeApp()
        }
      }
    ],
    { cancelable: false }
  );
}

const exitApp = () => {
  BackHandler.exitApp();
  return true;
}


function ConfirmLogout({ navigation }) {

  const closeApp = () => {
    //AsyncStorage.removeItem('mpUser');
    //RNExitApp.exitApp;
  //  console.log(RNExitApp.exitApp)
    navigation.navigate('Drawer')
    //exitApp()
  }

  return (
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
        onPress={() => closeApp()}
        >
          <Text>Confirm Logout</Text>
      </Button>
    </View>
  );
}

function CustomDrawerContent({progress, ...rest }) {
  const translateX = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [-100, 0],
  });
  
  return (
    <DrawerContentScrollView {...rest}>
      <Animated.View style={{ transform: [{ translateX }] }}>
        <View style={{paddingHorizontal: 10, marginBottom: 20, paddingBottom: 30, borderBottomWidth: 0.2, borderBottomColor: Colors.appColorTwo, alignItems: 'center'}}>
          <Image source={require('../assets/images/logo.png')} style={{width: 120, height: 42}}/>
          <Text style={{color: Colors.appColorThree, fontWeight: 'bold', marginTop: 10,}}>Hi, welcome</Text>
        </View>
        <DrawerItemList {...rest} />
        {/*{profile ?
        (
          <DrawerItem
            label="Logout"
            icon={({focused}) => (
              <Icon name="log-out" style={[styles.iconStyle, {color: focused ? Colors.colorWhite : Colors.appColorThree}]} />
            )}
            labelStyle={{color: Colors.appColorThree}}
            onPress={() => navigation.navigate('Logout')}
          />
        ) : null
        }*/}
      </Animated.View>
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

function DrawerNavigator({navigation, route}) {
  // console.log(navigation)
  // console.log(route)
  // const [profile, setProfile] = useState(undefined);

  // // const isDrawerOpen = useIsDrawerOpen();

  // async function getProfile() {
  //   try {
  //     const retrievedProfile =  await AsyncStorage.getItem('mpUser');
  //     const savedProfile = JSON.parse(retrievedProfile);
  //     console.log(savedProfile)
  //     return savedProfile
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  //   return
  // }

  // useEffect(() => {
  //   // if (isDrawerOpen) {
  //   //   console.log("yes")
  //   // }
  //   // else
  //   //   console.log("no")
  //   // if (navigation.isFocused())
  //   //   console.log("dsds")
  //   // else
  //   //   console.log("aa")
  //   const checkLogin = navigation.addListener('Navigation/OPEN_DRAWER', () => {
  //     console.log("1234")
  //     // getProfile().then((data) => {
  //     //   console.log(data)
  //     //   setProfile(data)
  //     // });
  //     console.log('open')
  //   });
  //   return checkLogin;
  // }, [navigation]);

  return (
    <Drawer.Navigator 
      drawerContent={props => <CustomDrawerContent {...props} />}
      initialRouteName="Airtime"
      drawerType="slide"
      drawerContentOptions={{
        style: {backgroundColor: Colors.colorWhite, paddingTop: 50, paddingHorizontal: 10},
        itemStyle: {},
        activeBackgroundColor: Colors.appColorThree,
        activeTintColor: Colors.colorWhite,
        inactiveTintColor: Colors.appColorThree,
      }}    
    > 
      <Drawer.Screen 
        name="Airtime" 
        component={AirtimeScreen} 
        options={{ 
          drawerLabel: 'Airtime/Data Purchase',
          drawerIcon: ({focused}) => (
            <RNEIcon name="sim-card" iconStyle={[styles.iconStyle, {color: focused ? Colors.colorWhite : Colors.appColorThree}]} />
          )
        }}
      />
      <Drawer.Screen 
        name="Transfer" 
        component={FundTransferScreen} 
        options={{ 
          drawerLabel: 'Fund Transfer',
          drawerIcon: ({focused}) => (
            <Icon name="cash" style={[styles.iconStyle, {color: focused ? Colors.colorWhite : Colors.appColorThree}]} />
          )
        }}
      />
      <Drawer.Screen 
        name="BillsPayment" 
        component={PayBillsScreen} 
        options={{ 
          drawerLabel: 'Bills Payment',
          drawerIcon: ({focused}) => (
            <RNEIcon name="queue" iconStyle={[styles.iconStyle, {color: focused ? Colors.colorWhite : Colors.appColorThree}]} />
          )
        }}
      />
      <Drawer.Screen 
        name="FundWallet" 
        component={FundWalletScreen} 
        options={{ 
          drawerLabel: 'Fund Wallet',
          drawerIcon: ({focused}) => (
            <RNEIcon name="account-balance-wallet" iconStyle={[styles.iconStyle, {color: focused ? Colors.colorWhite : Colors.appColorThree}]} />
          )
        }}
      />
      <Drawer.Screen 
        name="TransactionHistory" 
        component={TransactionHistoryScreen} 
        options={{ 
          drawerLabel: 'Transaction History',
          drawerIcon: ({focused}) => (
            <RNEIcon name="history" iconStyle={[styles.iconStyle, {color: focused ? Colors.colorWhite : Colors.appColorThree}]} />
          )
        }}
      />
      <Drawer.Screen 
        name="Profile" 
        component={ProfileScreen} 
        options={{ 
          drawerLabel: 'My Account',
          drawerIcon: ({focused}) => (
            <RNEIcon name="account-box" iconStyle={[styles.iconStyle, {color: focused ? Colors.colorWhite : Colors.appColorThree}]} />
          )
        }}
      />
      <Drawer.Screen 
        name="AccountSettings" 
        component={AccountSettingsScreen} 
        options={{ 
          drawerLabel: 'Settings',
          drawerIcon: ({focused}) => (
            <Icon name="settings" style={[styles.iconStyle, {color: focused ? Colors.colorWhite : Colors.appColorThree}]} />
          )
        }}
      />
      <Drawer.Screen 
        name="Support" 
        component={SupportScreen} 
        options={{ 
          drawerLabel: 'Contact Support',
          drawerIcon: ({focused}) => (
            <Icon name="chatboxes" style={[styles.iconStyle, {color: focused ? Colors.colorWhite : Colors.appColorThree}]} />
          )
        }}
      />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  iconStyle: {
    fontSize: 25
  }
 
});

export default DrawerNavigator;