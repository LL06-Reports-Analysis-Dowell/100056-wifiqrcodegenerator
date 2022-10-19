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

import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import WifiManager from 'react-native-wifi-reborn';
import Header from '../components/Header';

import { Wifi2 } from '../components/Images';
import Colors from '../../Utils/Colors';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
import Modal from 'react-native-modal';

const Selectwifi = ({ navigation }) => {
  const [wifi1, setwifi1] = useState(false);
  const [wifi2, setwifi2] = useState(false);
  const [wifi3, setwifi3] = useState(false);
  const [Restart, setrestart] = useState(false);
  const [ssid, setSsid] = useState('');
  const password = 'tanenbaum-1981';
  const [connected, setConnected] = useState({ connected: false, ssid: 'S4N' });
  let [nearbyNetworksList, setNearbyNetworks] = useState([]);
  const [name, setname] = useState('');

  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'React Native Wifi Reborn App Permission',
          message:
            'Location permission is required to connect with or scan for Wifi networks. ',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Location permission Granted');
        getWifiList();
      } else {
        Alert.alert('Location permission denied , Please go back and Restart');
      }
    } catch (err) {
      console.log(err);
    }
  };
  // const connectWithWifi = async () => {
  //   try {
  //     const data = await WifiManager.connectToProtectedSSID(
  //       ssid,
  //       password,
  //       false,
  //     );
  //     console.log('Connected successfully!', {data});

  //   } catch (error) {
  //     setConnected({connected: false, error: error.message});
  //     console.log('Connection failed!', {error});
  //   }
  // };

  const getWifiList = async () => {
    let wifiList = await WifiManager.reScanAndLoadWifiList(); //wifiList will be Array<WifiEntry>
    console.log('wifi list', wifiList);
    setNearbyNetworks(wifiList);
  };

  // useEffect(() => {
  //   console.log('Restarting......');
  //   getWifiList();
  // }, [Restart]);
  useEffect(() => {
    requestLocationPermission();
  }, []);

  const [Select, setSelect] = useState({
    sellectditem: null,
  });
  const [namewifi, setnamewifi] = useState({
    name: 'No wifi',
  });
  const [signal, setsignal] = useState({
    sign: require('../Images/Wifi.png'),
  });
  const Check = (id, name) => {
    setSelect({ sellectditem: id });

    setnamewifi({ name: name });
    console.log(name);
  };

  const Next = () => {
    if (Select.sellectditem == null) {
      Alert.alert('Please Select Wifi');
    } else {
      navigation.navigate('ConfirmWifi', {
        data: namewifi,
      });
    }
  };

  const Delay = () => {
    setTimeout(function () {
      //Put All Your Code Here, Which You Want To Execute After Some Delay Time.
      navigation.navigate('Createqrocde');
    }, 700);
  };

  const Delay1 = () => {
    setTimeout(function () {
      //Put All Your Code Here, Which You Want To Execute After Some Delay Time.
      navigation.navigate('Addpasword', {
        data: namewifi,
      });
    }, 700);
  };

  const checkimage = (level) => {};

  return (
    <ImageBackground
      style={{ ...styles.conatainer }}
      source={require('../Images/home.png')}
    >
      <StatusBar style="dark" />
      <Header Title="Select Wifi to create QR code" />

      <View style={styles.subcont}>
        <View style={styles.Headerview}>
          <View>
            <View style={styles.Box}>
              <Text style={styles.text}>1</Text>
            </View>
            <Text style={styles.text1}>Select Wifi</Text>
          </View>
          <Text style={styles.text2}>- - - - -{'>'}</Text>
          <View>
            <View style={{ ...styles.Box, backgroundColor: Colors.LightGray }}>
              <Text style={{ ...styles.text }}>2</Text>
            </View>
            <Text style={styles.text1}>Enter Credentials</Text>
          </View>
          <Text style={styles.text2}>- - - - -{'>'}</Text>
          <View>
            <View style={{ ...styles.Box, backgroundColor: Colors.LightGray }}>
              <Text style={{ ...styles.text }}>3</Text>
            </View>
            <Text style={styles.text1}>Create QR Code</Text>
          </View>
        </View>

        <View style={{ flex: 1, marginTop: '5%' }}>
          {nearbyNetworksList.length >= 1 ? (
            <FlatList
              extraData={Select.sellectditem}
              data={nearbyNetworksList}
              renderItem={({ item }) => (
                <View style={{ flex: 1 }}>
                  <TouchableOpacity
                    style={{
                      ...styles.wifiview,
                    }}
                    onPress={() => Check(item.BSSID, item.SSID)}
                  >
                    <View
                      style={{
                        height: '100%',
                        width: '2%',
                        backgroundColor: Colors.Green,
                      }}
                    ></View>
                    <Wifi2 style={{ marginLeft: '2%' }} />
                    <Text
                      style={{
                        fontSize: 20,
                        marginLeft: '5%',
                        color: Colors.Gray,
                      }}
                    >
                      {item.SSID}
                    </Text>
                    <View style={{ ...styles.Box1 }}>
                      <FontAwesome
                        name="check"
                        size={20}
                        color={
                          Select.sellectditem == item.BSSID
                            ? Colors.Green
                            : '#fff'
                        }
                      />
                    </View>
                  </TouchableOpacity>
                </View>
              )}
              keyExtractor={(item) => item.BSSID}
            />
          ) : (
            <View
              style={{
                marginLeft: 'auto',
                marginRight: 'auto',

                marginTop: '5%',
              }}
            >
              <Text
                style={{
                  ...styles.text1,
                  fontSize: 20,
                }}
              >
                Scanning for networks...
              </Text>
              <ActivityIndicator />
            </View>
          )}
        </View>
        <View
          style={{
            flex: 0.4,
            flexDirection: 'row',
            alignItems: 'center',
            width: '90%',

            marginLeft: 'auto',
            marginRight: 'auto',
            justifyContent: 'space-between',
          }}
        >
          {/* <AntDesign name="infocirlceo" size={30} color={Colors.Yellow} /> */}

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
                  <Ionicons
                    name="chevron-back"
                    size={60}
                    color={Colors.Green}
                  />
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
                <Text style={{ ...styles.text1, fontSize: 15 }}>
                  Credentials
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Selectwifi;
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

  text: {
    fontSize: 20,
    color: '#fff',
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
  wifiview: {
    marginTop: '5%',
    alignItems: 'center',
    flexDirection: 'row',
    height: 50,
    backgroundColor: '#fff',
  },
});
