import React from 'react';

import { useEffect, useState } from 'react';
import 'react-native-gesture-handler';
import { View, Text, LogBox, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import Createqrocde from './Screens/Createqrocde';
import Tutorial from './Screens/Tutorial';
import Selectwifi from './Screens/Selectwifi';
import Addpasword from './Screens/Addpasword';
import Termsandcondition from './Screens/Termsandcondition';
import Finishup from './Screens/Finishup';
import Emailqrcode from './Screens/Emailqrcode';
import Refferal from './Screens/Refferal';
import SplashScreen from 'react-native-splash-screen';
import ConfirmWifi from './Screens/ConfirmWifi';
import SecurityPolicy from './Screens/SecurityPolicy';
import PrivacyPolicy from './Screens/PrivacyPolicy';
import CustomizedQrcode from './Screens/CustomizedQrocde';
import Emailsqrcode from './Screens/EmailsQrcode';
import FeedBack from './Screens/Feedback';
import Finishup1 from './Screens/Finishup1';
const Stack = createStackNavigator();
LogBox.ignoreAllLogs();

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Createqrocde" component={Createqrocde} />
        <Stack.Screen name="Tutorial" component={Tutorial} />
        <Stack.Screen name="Selectwifi" component={Selectwifi} />
        <Stack.Screen name="Addpasword" component={Addpasword} />
        <Stack.Screen name="CustomizedQrcode" component={CustomizedQrcode} />

        <Stack.Screen name="Termsandcondition" component={Termsandcondition} />
        <Stack.Screen name="Finishup" component={Finishup} />
        <Stack.Screen name="Finishup1" component={Finishup1} />
        <Stack.Screen name="Emailqrcode" component={Emailqrcode} />
        <Stack.Screen name="Emailsqrcode" component={Emailsqrcode} />
        <Stack.Screen name="Refferal" component={Refferal} />
        <Stack.Screen name="ConfirmWifi" component={ConfirmWifi} />
        <Stack.Screen name="SecurityPolicy" component={SecurityPolicy} />
        <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
        <Stack.Screen name="FeedBack" component={FeedBack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
