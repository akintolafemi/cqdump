import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';

import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import BottomTabNavigator from './BottomTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import DashboardScreen from '../screens/DashboardScreen';
import LogoutScreen from '../screens/LogoutScreen';
import ForgotPwdScreen from '../screens/ForgotPwdScreen';
import NewTestScreen from '../screens/NewTestScreen';
import NewPracticeScreen from '../screens/NewPracticeScreen';
import NewFlashCardsScreen from '../screens/NewFlashCardsScreen';
import BonusFeedbackScreen from '../screens/BonusFeedbackScreen';

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator 
      initialRouteName="Drawer"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen 
        name="Welcome" 
        component={WelcomeScreen} 
        options={{ 
          headerShown: false
        }} 
      />
      <Stack.Screen 
        name="Logout" 
        component={LogoutScreen} 
        options={{ 
          headerShown: false
        }} 
      />
      <Stack.Screen 
        name="Login" 
        component={LoginScreen} 
        options={{ 
          headerShown: false
        }} 
      />
      <Stack.Screen 
        name="ForgotPwd" 
        component={ForgotPwdScreen} 
        options={{ 
          headerShown: false
        }} 
      />
      <Stack.Screen 
        name="SignUp" 
        component={SignUpScreen} 
        options={{ 
          headerShown: false
        }} 
      />
      <Stack.Screen 
        name="Dashboard" 
        component={DashboardScreen} 
        options={{ 
          headerShown: false
        }} 
      />
      <Stack.Screen 
        name="NewTest" 
        component={NewTestScreen} 
        options={{ 
          headerShown: false
        }} 
      />
      <Stack.Screen 
        name="NewPractice" 
        component={NewPracticeScreen} 
        options={{ 
          headerShown: false
        }} 
      />
      <Stack.Screen 
        name="NewFlashCards" 
        component={NewFlashCardsScreen} 
        options={{ 
          headerShown: false
        }} 
      />
      <Stack.Screen 
        name="BonusFeedback" 
        component={BonusFeedbackScreen} 
        options={{ 
          headerShown: false
        }} 
      />
    </Stack.Navigator>
  );
}
