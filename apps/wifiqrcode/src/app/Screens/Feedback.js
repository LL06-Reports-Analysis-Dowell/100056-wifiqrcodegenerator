import React from 'react';
import { useState, useEffect } from 'react';
import { WebView } from 'react-native-webview';

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
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import Header from '../components/Header';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
import Colors from '../../Utils/Colors';
const FeedBack = ({ navigation, route }) => {
  const { ID } = route.params;
  return (
    <ImageBackground
      style={{ ...styles.conatainer }}
      source={require('../Images/home.png')}
    >
      <StatusBar style="dark" />

      <Header Title="Your Comments" />

      <View style={{ ...styles.subcont, marginTop: '5%' }}>
        <View style={styles.box3}>
          <View
            style={{
              ...styles.subcont,
              marginBottom: null,
              paddingBottom: null,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <TouchableOpacity
              style={{ position: 'absolute', right: 0, bottom: 30 }}
            >
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: 'bold',
                  color: Colors.LightGreen,
                }}
              >
                Copy
              </Text>
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 15,
                fontWeight: 'bold',
                color: Colors.Gray,
                textAlign: 'center',
              }}
            >
              QR Code ID {'\n'}
              {'<'}
              {ID}
              {'>'}
            </Text>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: '#fff',
            borderWidth: 1,
            borderRadius: 10,
            borderColor: Colors.Green,
            marginTop: '5%',
            overflow: 'hidden',
          }}
        >
          <WebView
            style={{ flex: 1, borderRadius: 20 }}
            source={{
              uri: 'https://docs.google.com/forms/d/e/1FAIpQLSfkA4nyFeRuHb_Fs1k1w5oNE7iL3y4IgX8ESiQHO142lkk-YA/viewform',
            }}
            javaScriptEnabled={true}
            //For the Cache

            domStorageEnabled={true}
          />
        </View>
        <View
          style={{
            flex: 0.2,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <TouchableOpacity
            style={{ marginLeft: 'auto' }}
            onPress={() => navigation.navigate('Createqrocde')}
          >
            <View
              style={{
                width: 50,
                height: 50,
                borderRadius: 30,
                borderWidth: 2,
                borderColor: Colors.Green,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Ionicons name="chevron-back" size={30} color={Colors.Green} />
            </View>
            <Text style={styles.text2}>Thank You </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default FeedBack;
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
    paddingBottom: '20%',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 30,
    color: Colors.Gray,
  },
  text1: {
    marginTop: '2%',
    fontSize: 12,
    color: Colors.Gray,
  },
  text2: {
    marginTop: '2%',
    fontSize: 11,
    color: Colors.Gray,
    textAlign: 'center',
  },
  box3: {
    width: '100%',
    height: 50,
    borderWidth: 1,

    borderColor: Colors.Green,
    borderRadius: 10,
    backgroundColor: '#fff',
    marginTop: '5%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
