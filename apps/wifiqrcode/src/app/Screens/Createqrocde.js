import React from 'react';
import { useState, useEffect } from 'react';
import { Arrow, Update } from '../../Utils/Icons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { WebView } from 'react-native-webview';
import {
  StyleSheet,
  View,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  Alert,
  ScrollView,
  Image,
  Text,
  BackHandler,
} from 'react-native';

import Button from '../components/Button';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Createqrocde = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="dark" />
      <ImageBackground
        style={{ ...styles.conatainer }}
        source={require('../Images/home.png')}
      >
        <StatusBar style="dark" />
        <View style={styles.maincont}>
          <Image
            source={require('../Images/Logo.png')}
            resizeMode="contain"
            style={{ width: 150, height: 150 }}
          />
          <Text style={styles.text}>
            DoWell{'\n'}
            <Text style={{ ...styles.text, color: '#008037', fontSize: 25 }}>
              Wi-Fi QR Code
            </Text>
          </Text>
        </View>
        <View style={styles.subcont}>
          <View style={{ flexDirection: 'row' }}>
            <Arrow />
            <Text style={styles.text1}>Create QR code for your Wifi</Text>
          </View>
          <View style={{ flexDirection: 'row', marginTop: '5%' }}>
            <Arrow />
            <Text style={styles.text1}>
              Users can Scan the QR code to connect without entering wifi
              credentials
            </Text>
          </View>
          <View style={{ flexDirection: 'row', marginTop: '5%' }}>
            <Arrow />
            <Text style={{ ...styles.text1, width: null }}>Read the</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Tutorial')}>
              <Text style={{ ...styles.text2 }}>Disclaimer </Text>
            </TouchableOpacity>
          </View>
          <Text style={{ ...styles.text1, width: null, marginLeft: '10%' }}>
            before continuing
          </Text>
          <Button
            Context="Create QR Code"
            style={styles.Button}
            onPress={() => navigation.navigate('Selectwifi')}
          />
        </View>
        <View style={styles.bottomview}>
          {/* <AntDesign name="infocirlceo" size={30} color="#fac43a" /> */}
          {/* <View>
            <Update />
            <Button
              Context="Install"
              style={styles.Button1}
              Contextstyle={{ fontSize: 10 }}
            />
          </View> */}
          <Image
            style={{
              width: 200,
              height: 200,
              position: 'absolute',
              top: -150,
              marginLeft: '40%',
            }}
            source={require('../Images/qrcode12.png')}
            resizeMode="contain"
          />
          <TouchableOpacity
            onPress={() => BackHandler.exitApp()}
            activeOpacity={1}
            style={{ marginLeft: 'auto' }}
          >
            <AntDesign name="login" size={30} color="#a6a6a6" />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Createqrocde;
const styles = StyleSheet.create({
  conatainer: {
    flex: 1,
  },
  subcont: {
    width: '90%',
    flex: 1,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  maincont: {
    alignSelf: 'center',
    marginTop: '10%',
  },
  text: {
    fontFamily: 'robotoRegular',
    color: '#C4C4C4',
    fontSize: 20,

    fontWeight: 'bold',

    top: '-15%',
  },
  text1: {
    fontSize: 17,
    color: 'black',
    fontStyle: 'italic',
    width: '40%',
    marginLeft: '2%',
  },
  text2: {
    fontSize: 17,
    color: '#5271ff',
    fontStyle: 'italic',
    marginLeft: '5%',
    textDecorationLine: 'underline',
  },
  Button: {
    marginTop: '5%',
  },
  Button1: {
    alignSelf: 'center',
    width: 70,
    height: 20,
  },
  bottomview: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '95%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '5%',
  },
});
