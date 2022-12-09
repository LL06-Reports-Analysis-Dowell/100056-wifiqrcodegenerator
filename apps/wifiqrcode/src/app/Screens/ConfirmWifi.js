/* eslint-disable no-dupe-keys */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable no-undef */
/* eslint-disable import/first */

import React from 'react';
import { useState, useEffect } from 'react';

import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  View,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  Alert,
  ScrollView,
  Text,
  PermissionsAndroid,
  ActivityIndicator,
  FlatList,
} from 'react-native';

import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Header from '../components/Header';
import { Cycle, Update } from '../../Utils/Icons';
import Button from '../components/Button';
import ScreenDividers from '../components/ScreenDividers';

import Colors from '../../Utils/Colors';

const ConfirmWifi = ({ navigation, route }) => {
  const { data } = route.params;

  return (
    <ImageBackground
      style={{ ...styles.conatainer }}
      source={require('../Images/home.png')}
    >
      <StatusBar style="dark" />
      <Header Title="Data Safety" style={styles.Header} />
      <ScreenDividers
        secondboxstyle={{ backgroundColor: Colors.LightGray }}
        thirdboxstyle={{ backgroundColor: Colors.LightGray }}
        forthboxstyle={{ backgroundColor: Colors.LightGray }}
      />
      <ScrollView style={styles.subcont}>
        <ScrollView style={{ flex: 1, marginTop: '5%' }}>
          <View style={styles.box3}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                position: 'absolute',
                top: -40,
                left: -5,
              }}
            >
              <AntDesign name="Safety" size={60} color={Colors.Green} />
              <Text style={styles.text5}>Data Safety</Text>
            </View>

            <ScrollView style={{ ...styles.subcard, height: 170 }}>
              <Text style={styles.bodytext}>
                Dowell may collect certain personally identifiable information
                (“personal information”)about you when you visit our App.
                Examples of personal information
              </Text>
            </ScrollView>
            <TouchableOpacity
              style={{
                marginLeft: 'auto',
                marginRight: '5%',
              }}
              onPress={() => navigation.navigate('SecurityPolicy')}
            >
              <Text style={styles.more}>More</Text>
            </TouchableOpacity>
          </View>
          <View style={{ ...styles.box3, marginTop: '10%' }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                position: 'absolute',
                top: -40,
                left: -5,
              }}
            >
              <MaterialCommunityIcons
                name="eye-off-outline"
                size={60}
                color={Colors.Green}
              />
              <Text style={styles.text5}>Personal Privacy</Text>
            </View>

            <ScrollView style={styles.subcard}>
              <Text style={styles.bodytext}>
                Dowell may collect certain personally identifiable information
                (“personal information”) about you when you visit our App.
                Examples of personal information we may collect include your
                name, address, telephone number, fax number, and e-mail address.
                We also automatically collect certain non-personally
                identifiable information when you visit our App, including, but
                not limited to, the location, the type of browser you are using,
                the type of operating system you are using, and the domain name
                of your Internet service provider.
              </Text>
            </ScrollView>
            <TouchableOpacity
              style={{
                marginLeft: 'auto',
                marginRight: '5%',
              }}
              onPress={() => navigation.navigate('PrivacyPolicy')}
            >
              <Text style={styles.more}>More</Text>
            </TouchableOpacity>
          </View>
          <View style={{ ...styles.box3, height: 110, marginTop: '5%' }}>
            <Text style={styles.text6}>App details</Text>
            <View
              style={{
                ...styles.subcard,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
            >
              <View style={{ flexDirection: 'row' }}>
                <Cycle />
                <Text style={styles.subtext}>
                  Installation ID{'\n'}
                  <Text style={{ ...styles.subtext, fontWeight: 'normal' }}>
                    1234567890 {'\n'}
                  </Text>
                  Installed version{'\n'}
                  8.00
                </Text>
              </View>
              {/* <View>
                <View style={{ position: 'absolute', left: -10, bottom: 20 }}>
                  <Update />
                </View>
                <Button
                  Context="Install"
                  style={styles.Button1}
                  Contextstyle={{ fontSize: 10 }}
                />
              </View> */}
            </View>
          </View>
          <View style={{ ...styles.box3, height: 130, marginTop: '5%' }}>
            <ImageBackground
              style={{
                ...styles.conatainer,
                overflow: 'hidden',
                borderRadius: 10,
              }}
              source={require('../Images/home.png')}
            >
              <View
                style={{
                  ...styles.subcont,
                  alignItems: 'center',
                  marginTop: '5%',
                }}
              >
                <Text style={styles.contexttext}>
                  Do want to create QR code for{'\n'}
                  {'<'} {data.name} {'>'}
                </Text>
                <View style={{ marginTop: '5%', flexDirection: 'row' }}>
                  <TouchableOpacity
                    style={styles.box4}
                    activeOpacity={1}
                    onPress={() => navigation.goBack()}
                  >
                    <View style={styles.subbox}>
                      <Entypo name="cross" size={35} color="#fff" />
                    </View>
                    <Text
                      style={{
                        fontSize: 15,
                        color: '#fff',
                        fontWeight: 'bold',
                        marginLeft: '5%',
                      }}
                    >
                      NO
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      ...styles.box4,
                      backgroundColor: Colors.LightGreen,
                      marginLeft: '5%',
                    }}
                    activeOpacity={1}
                    onPress={() =>
                      navigation.navigate('Addpasword', {
                        data: data,
                      })
                    }
                  >
                    <View
                      style={{
                        ...styles.subbox,
                        backgroundColor: Colors.LightGreen,
                      }}
                    >
                      <AntDesign name="check" size={35} color="#fff" />
                    </View>
                    <Text
                      style={{
                        fontSize: 15,
                        color: '#fff',
                        fontWeight: 'bold',
                        marginLeft: '5%',
                      }}
                    >
                      Yes
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ImageBackground>
          </View>
        </ScrollView>
      </ScrollView>
      {/* <TouchableOpacity style={{ marginLeft: '2%' }}>
        <AntDesign name="infocirlceo" size={30} color={Colors.Yellow} />
      </TouchableOpacity> */}
    </ImageBackground>
  );
};

export default ConfirmWifi;
const styles = StyleSheet.create({
  conatainer: {
    flex: 1,
  },
  subcont: {
    width: '95%',
    flex: 1,

    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '10%',
  },
  text: {
    fontSize: 20,
    color: '#fff',
  },

  text5: {
    fontSize: 15,
    color: Colors.Gray,
    fontWeight: 'bold',
    marginBottom: '10%',
  },
  text6: {
    fontSize: 12,
    color: Colors.Gray,
    fontWeight: 'bold',
    marginTop: '2%',
    marginLeft: '5%',
  },
  text1: {
    fontSize: 10,
    color: Colors.Gray,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  text2: {
    fontSize: 20,
    color: Colors.Green,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  Headerview: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '5%',
    alignSelf: 'center',
  },
  Box: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: Colors.Green,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  Box1: {
    width: 25,
    height: 25,
    borderRadius: 50,
    backgroundColor: Colors.LightGray,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: '5%',
  },
  box3: {
    width: '100%',
    height: 90,
    borderWidth: 1,

    borderColor: Colors.Green,
    borderRadius: 10,
    backgroundColor: '#fff',
    marginTop: '10%',
  },
  subcard: {
    width: '90%',
    flex: 1,

    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '5%',
  },
  bodytext: {
    fontSize: 10,
    color: Colors.Gray,
  },
  more: {
    fontSize: 12,
    fontWeight: 'bold',
    color: Colors.blue,
    fontStyle: 'italic',
    textDecorationLine: 'underline',
  },
  subtext: {
    fontWeight: 'bold',
    fontSize: 13,
    color: Colors.Green,
    marginLeft: '5%',
  },
  Button1: {
    width: 70,
    height: 20,
    marginTop: '70%',
  },
  contexttext: {
    fontSize: 18,
    fontStyle: 'italic',
    color: Colors.Green,
    textAlign: 'center',
  },
  box4: {
    width: 80,
    height: 41,
    backgroundColor: Colors.red,
    borderRadius: 20,
    borderBottomStartRadius: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  subbox: {
    width: 45,
    height: 45,
    backgroundColor: Colors.red,
    borderRadius: 40,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
