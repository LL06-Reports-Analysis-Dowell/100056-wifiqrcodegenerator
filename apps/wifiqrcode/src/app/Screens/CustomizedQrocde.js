/* eslint-disable no-dupe-keys */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable import/first */

import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { Wifi } from './Data';
import Colors from '../../Utils/Colors';
import Button from '../components/Button';
import Share from 'react-native-share';
import { captureRef } from 'react-native-view-shot';
import ImagePicker from 'react-native-image-crop-picker';
import RNFS from 'react-native-fs';

import {
  Qrcode1,
  Gmail,
  Message,
  Wastapp,
  More,
  Print,
  Copy,
  Wifi2,
} from '../components/Images';

import axios from 'axios';

import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  View,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  Alert,
  ScrollView,
  ActivityIndicator,
  PermissionsAndroid,
  Text,
  Image,
} from 'react-native';
import { VStack, HStack, NativeBaseProvider, Center } from 'native-base';

import RNFetchBlob from 'rn-fetch-blob';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Foundation from 'react-native-vector-icons/Foundation';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

import Header from '../components/Header';
import ScreenDividers from '../components/ScreenDividers';

const CustomizedQrcode = ({ navigation, route }) => {
  const { SSID, Password, Type, ip } = route.params;
  const [wifi_ssid, Setwifi_ssid] = useState(SSID);
  const [logo, setlogo] = useState('');
  const [wifi_password, setwifi_password] = useState(Password);
  const [Function, setFunction] = useState('Wifi QR Code');
  const [State, setState] = useState();
  const [images, setimage] = useState('');
  const [time, settime] = useState('');
  const [security, setSecuity] = useState(Type);
  const [show, setshow] = useState(false);
  const [isLoading, setlodain] = useState(false);
  let base64;
  let letqrcode;
  const registered = {
    wifi_password: wifi_password,
    wifi_ssid: wifi_ssid,
    Function: Function,
    security: security,
    logo: logo,
  };

  // const postdata = async () => {
  //   await axios
  //     .post('https://100073.pythonanywhere.com/wifi/create-qr/', registered)
  //     .then(async (response) => {
  //       let imagee = await response.data;
  //       setData(imagee);
  //       console.log(imagee);
  //       setshow(true);
  //     })

  //     .catch((e) => console.log(e))
  //     .finally(() => {
  //       setlodain(false);
  //     });
  // };

  const [datas, setData] = useState({ data: { qrcodeimage: '' } });

  const Uploadimage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    })

      .then(async (image) => {
        let imagepath = image;
        RNFS.readFile(imagepath.path, 'base64').then(async (res) => {
          base64 = res;
          setlogo(base64);
          setimage(imagepath.path);

          console.log(base64);
        });
      })
      .catch((e) => {
        console.error(e);
      });
  };
  const Next = () => {
    if (images.length == 0) {
      Alert.alert('Please Upload Your  Logo');
    } else {
      navigation.navigate('Finishup1', {
        SSID: SSID,
        Password: Password,
        Type: Type,
        logo: logo,

        ip: ip,
      });
    }
  };

  return (
    <ImageBackground
      style={{ ...styles.conatainer }}
      source={require('../Images/home.png')}
    >
      <StatusBar style="dark" />
      <Header Title="Customization" />
      <ScrollView style={styles.subcont}>
        <ScreenDividers forthboxstyle={{ backgroundColor: Colors.LightGray }} />

        <View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              alignSelf: 'center',
              marginTop: '10%',
              marginLeft: '-5%',
            }}
          >
            <Text style={styles.header}>Your Logo</Text>
          </View>
          {images.length == 0 ? (
            <Image
              source={require('../Images/Logo1.png')}
              style={{
                height: 270,
                width: 270,
                alignSelf: 'center',
                marginTop: '5%',
              }}
              alt="121"
            />
          ) : (
            <Image
              source={{ uri: images }}
              style={{
                height: 270,
                width: 270,
                alignSelf: 'center',
                marginTop: '5%',
              }}
              alt="121"
            />
          )}
        </View>

        <Button
          Context="Update Logo"
          style={styles.Button2}
          onPress={() => Uploadimage()}
        />

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Finishup', {
              SSID: SSID,
              Password: Password,
              Type: Type,

              ip: ip,
            });
          }}
        >
          <Text
            style={{
              fontSize: 15,
              fontWeight: 'bold',
              color: Colors.Gray,
              textAlign: 'center',
              marginTop: '5%',
            }}
          >
            Skip
          </Text>
        </TouchableOpacity>
      </ScrollView>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: '10%',
          justifyContent: 'space-between',
        }}
      >
        <View style={{ marginLeft: 'auto' }}>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <View
                style={{
                  width: 90,
                  height: 90,
                  borderRadius: 90,
                  borderWidth: 2,
                  borderColor: Colors.Green,
                  justifyContent: 'center',
                  alignItems: 'center',
                  position: 'absolute',

                  left: -100,
                }}
              >
                <Ionicons name="chevron-back" size={60} color={Colors.Green} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Next()}>
              <View
                style={{
                  width: 90,
                  height: 90,
                  borderRadius: 90,
                  borderWidth: 2,
                  borderColor: Colors.Green,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Ionicons
                  name="chevron-forward"
                  size={60}
                  color={Colors.Green}
                />
              </View>
              <Text style={{ ...styles.text1, fontSize: 15 }}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default CustomizedQrcode;
const styles = StyleSheet.create({
  conatainer: {
    backgroundColor: '#fff',
    flex: 1,
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
  subcont: {
    width: '95%',
    flex: 1,

    marginLeft: 'auto',
    marginRight: 'auto',
  },
  maincont: {
    paddingBottom: '20%',
  },
  text: {
    fontSize: 20,
    color: '#fff',
  },
  text1: {
    fontSize: 15,
    color: Colors.Gray,
    fontStyle: 'italic',
    textAlign: 'center',
    marginTop: '2%',
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

  text2: {
    fontSize: 20,
    color: Colors.Green,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  Button: {
    width: width * 0.7,
    height: 50,
    backgroundColor: '#078F04',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 10,
  },

  Button1: {
    width: width * 0.35,
    height: 40,
    backgroundColor: '#C7C0C0',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 10,
  },
  bottomModal: {
    justifyContent: 'flex-end',
    margin: 0,
    position: 'absolute',
    width: width,
    height: '98%',
  },
  modalContent: {
    flex: 0.4,

    justifyContent: 'space-between',
    paddingHorizontal: '1%',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.Gray,
    marginLeft: '2%',
  },
  Button2: {
    width: '100%',
    marginTop: '5%',
  },
  activityIndicatorStyle: {
    flex: 1,
    position: 'absolute',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 'auto',
    marginBottom: 'auto',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
  },
});
