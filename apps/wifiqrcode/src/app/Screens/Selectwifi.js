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
  PermissionsAndroid,
  ActivityIndicator,
} from 'react-native';
import {
  Box,
  FlatList,
  Text,
  Image,
  HStack,
  VStack,
  Center,
  NativeBaseProvider,
  ArrowBackIcon,
  Button,
  Radio,
  Select,
  CheckIcon,
  Link,
  Heading,
  Input,
  Form,
  FormControl,
  Item,
  Label,
  ArrowDownIcon,
  TextArea,
} from 'native-base';
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
import WifiManager from 'react-native-wifi-reborn';

import { Wifi2 } from '../components/Images';

import { Header, Icon, Card } from 'react-native-elements';

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
      setwifi1(true);
    } else {
      setwifi2(true);
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
    <View style={{ ...styles.conatainer }}>
      <StatusBar style="dark" />
      <NativeBaseProvider>
        <View style={{ ...styles.header }}>
          <Header
            containerStyle={
              {
                // remove shadow on Android
              }
            }
            backgroundColor={'#fff'}
            leftComponent={
              <TouchableOpacity
                activeOpacity={1}
                onPress={() => navigation.goBack()}
              >
                <HStack>
                  <Ionicons
                    name="arrow-back-outline"
                    size={27}
                    color="#078F04"
                  />
                  <Center>
                    <Text
                      style={{ ...styles.text, fontSize: 18, color: '#078F04' }}
                    >
                      Back
                    </Text>
                  </Center>
                </HStack>
              </TouchableOpacity>
            }
            centerComponent={
              <Text style={{ ...styles.text, fontSize: 24, lineHeight: null }}>
                Select Wi-Fi
              </Text>
            }
          />
          <VStack
            style={{ width: width * 0.9, borderColor: '#959595CC' }}
            borderBottomWidth="3"
            mx="auto"
          ></VStack>

          <VStack style={{ ...styles.subcont }} mt="5%">
            <View
              style={{
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
            >
              <VStack>
                <Center>
                  <Box style={{ ...styles.circle }} borderRadius="full">
                    <VStack my="auto" mx="auto">
                      <Text
                        style={{
                          ...styles.text,
                          fontSize: 12,
                          fontWeight: '500',
                          color: '#fff',
                        }}
                      >
                        1
                      </Text>
                    </VStack>
                  </Box>
                </Center>
                <Text
                  style={{ ...styles.text, fontSize: 12, fontWeight: '400' }}
                >
                  Select Wi-Fi
                </Text>
              </VStack>

              <Box
                style={{
                  ...styles.circle,
                  width: width * 0.15,
                  height: 5.4,
                  marginTop: '3%',
                }}
                borderRadius="full"
              ></Box>
              <VStack>
                <Center>
                  <Box
                    style={{
                      ...styles.circle,
                      backgroundColor: '#fff',
                      borderColor: '#0000009E',
                    }}
                    borderRadius="full"
                    borderWidth="1"
                  >
                    <VStack my="auto" mx="auto">
                      <Text
                        style={{
                          ...styles.text,
                          fontSize: 12,
                          fontWeight: '500',
                          color: '#0000009E',
                        }}
                      >
                        2
                      </Text>
                    </VStack>
                  </Box>
                </Center>
                <Text
                  style={{ ...styles.text, fontSize: 12, fontWeight: '400' }}
                >
                  Add Password
                </Text>
              </VStack>

              <Box
                style={{
                  ...styles.circle,
                  width: width * 0.15,
                  height: 5.4,
                  marginTop: '3%',
                  backgroundColor: '#C4C4C4',
                }}
                borderRadius="full"
              ></Box>

              <VStack>
                <Center>
                  <Box
                    style={{
                      ...styles.circle,
                      backgroundColor: '#fff',
                      borderColor: '#0000009E',
                    }}
                    borderRadius="full"
                    borderWidth="1"
                  >
                    <VStack my="auto" mx="auto">
                      <Text
                        style={{
                          ...styles.text,
                          fontSize: 12,
                          fontWeight: '500',
                          color: '#0000009E',
                        }}
                      >
                        3
                      </Text>
                    </VStack>
                  </Box>
                </Center>
                <Text
                  style={{ ...styles.text, fontSize: 12, fontWeight: '400' }}
                >
                  Finish Up
                </Text>
              </VStack>
            </View>

            <HStack mx="auto" mt="8%">
              <Heading
                style={{ ...styles.text, fontSize: 20, textAlign: 'center' }}
              >
                Available Networks
              </Heading>
            </HStack>
          </VStack>
        </View>
        <View style={{ flex: 1 }}>
          {nearbyNetworksList.length >= 1 ? (
            <FlatList
              extraData={Select.sellectditem}
              data={nearbyNetworksList}
              renderItem={({ item }) => (
                <VStack pb="5%">
                  <TouchableOpacity
                    style={{
                      marginTop: '5%',
                      width: '90%',
                      marginLeft: 'auto',
                      marginRight: 'auto',
                      flexDirection: 'row',
                    }}
                    activeOpacity={1}
                    onPress={() => Check(item.BSSID, item.SSID)}
                  >
                    <Wifi2 />

                    <Center>
                      <Text
                        style={{
                          ...styles.text,
                          fontSize: 20,
                          marginLeft: '5%',
                        }}
                      >
                        {item.SSID}
                      </Text>
                    </Center>
                    <Center ml="auto">
                      <TouchableOpacity
                        activeOpacity={1}
                        onPress={() => Check(item.BSSID, item.SSID)}
                      >
                        <AntDesign
                          name="checkcircle"
                          size={20}
                          color={
                            Select.sellectditem == item.BSSID
                              ? '#078F04'
                              : '#959595D9'
                          }
                        />
                      </TouchableOpacity>
                    </Center>
                  </TouchableOpacity>
                </VStack>
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
                  ...styles.text,
                  fontSize: 20,
                }}
              >
                Scanning for networks...
              </Text>
              <ActivityIndicator />
            </View>
          )}
        </View>

        <View style={{ flex: 0.3, justifyContent: 'center' }}>
          <Button
            style={{ ...styles.Button }}
            shadow="4"
            _text={{ fontSize: 30, marginTop: '-4%' }}
            onPress={() => Next()}
          >
            Next
          </Button>
          <TouchableOpacity activeOpacity={1} onPress={() => setwifi3(true)}>
            <Text
              style={{
                ...styles.text,
                marginTop: '2%',
                fontSize: 20,
                color: '#078F04',
                textDecorationLine: 'underline',
              }}
            >
              Cancel
            </Text>
          </TouchableOpacity>
        </View>

        <Modal
          isVisible={wifi1}
          avoidKeyboard={false}
          animationIn={'slideInRight'}
          animationOut={'slideOutRight'}
          backdropTransitionOutTiming={1000}
          animationInTiming={500}
          animationOutTiming={500}
          onBackButtonPress={() => setwifi1(false)}
        >
          <View style={styles.modalContentwifioverlay}>
            <VStack style={{ flex: 1 }}>
              <VStack my="auto" space="10%">
                <Text style={{ ...styles.text, fontSize: 24 }}>Hold Up!</Text>

                <Text
                  style={{ ...styles.text, fontSize: 20, fontWeight: '400' }}
                >
                  Select a Wi-Fi Network First.
                </Text>
              </VStack>
            </VStack>
            <TouchableOpacity
              style={{ borderColor: '#959595', flex: 0.5, borderTopWidth: 1 }}
              activeOpacity={1}
              onPress={() => setwifi1(false)}
            >
              <VStack my="auto">
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => setwifi1(false)}
                >
                  <Text
                    style={{
                      ...styles.text,
                      fontSize: 20,
                      color: '#078F04',
                      fontWeight: '400',
                    }}
                  >
                    Okay
                  </Text>
                </TouchableOpacity>
              </VStack>
            </TouchableOpacity>
          </View>
        </Modal>

        <Modal
          isVisible={wifi2}
          avoidKeyboard={false}
          animationIn={'slideInRight'}
          animationOut={'slideOutRight'}
          backdropTransitionOutTiming={1000}
          animationInTiming={500}
          animationOutTiming={500}
          onBackButtonPress={() => setwifi2(false)}
        >
          <View style={styles.modalContentwifioverlay}>
            <VStack style={{ flex: 1 }}>
              <VStack my="auto" space="5%">
                <Text style={{ ...styles.text, fontSize: 24 }}>Confirm</Text>

                <Text
                  style={{ ...styles.text, fontSize: 20, fontWeight: '400' }}
                >
                  Are you sure you want to add {namewifi.name} Network?
                </Text>
              </VStack>
            </VStack>
            <VStack
              borderTopWidth="1"
              style={{ borderColor: '#959595', flex: 0.5 }}
            >
              <HStack
                justifyContent="space-between"
                width="100%"
                mx="auto"
                style={{ flex: 1 }}
              >
                <TouchableOpacity
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  onPress={() => setwifi2(false)}
                  activeOpacity={1}
                >
                  <VStack>
                    <Text
                      style={{
                        ...styles.text,
                        fontSize: 20,
                        color: '#FF0000',
                        fontWeight: '400',
                      }}
                    >
                      No
                    </Text>
                  </VStack>
                </TouchableOpacity>
                <VStack style={styles.verticleLine} height="full"></VStack>

                <TouchableOpacity
                  activeOpacity={1}
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  onPress={() => {
                    setwifi2(false), Delay1();
                  }}
                >
                  <VStack>
                    <Text
                      style={{
                        ...styles.text,
                        fontSize: 20,
                        color: '#078F04',
                        fontWeight: '400',
                      }}
                    >
                      Yes
                    </Text>
                  </VStack>
                </TouchableOpacity>
              </HStack>
            </VStack>
          </View>
        </Modal>

        <Modal
          isVisible={wifi3}
          avoidKeyboard={false}
          animationIn={'slideInRight'}
          animationOut={'slideOutRight'}
          backdropTransitionOutTiming={1000}
          animationInTiming={500}
          animationOutTiming={500}
          onBackButtonPress={() => setwifi3(false)}
        >
          <View style={styles.modalContentwifioverlay}>
            <VStack style={{ flex: 1 }}>
              <VStack my="auto" space="5%">
                <Text style={{ ...styles.text, fontSize: 24 }}>Hold Up!</Text>

                <Text
                  style={{ ...styles.text, fontSize: 20, fontWeight: '400' }}
                >
                  Do you still want to cancel the process?
                </Text>
              </VStack>
            </VStack>
            <VStack
              borderTopWidth="1"
              style={{ borderColor: '#959595', flex: 0.5 }}
            >
              <HStack
                justifyContent="space-between"
                width="100%"
                mx="auto"
                style={{ flex: 1 }}
              >
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => setwifi3(false)}
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <VStack>
                    <Text
                      style={{
                        ...styles.text,
                        fontSize: 20,
                        color: '#FF0000',
                        fontWeight: '400',
                      }}
                    >
                      Not Now
                    </Text>
                  </VStack>
                </TouchableOpacity>
                <VStack style={styles.verticleLine} height="full"></VStack>

                <TouchableOpacity
                  activeOpacity={1}
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  onPress={() => {
                    setwifi3(false), Delay();
                  }}
                >
                  <VStack my="auto">
                    <Text
                      style={{
                        ...styles.text,
                        fontSize: 20,
                        color: '#078F04',
                        fontWeight: '400',
                      }}
                    >
                      Confirm
                    </Text>
                  </VStack>
                </TouchableOpacity>
              </HStack>
            </VStack>
          </View>
        </Modal>
      </NativeBaseProvider>
    </View>
  );
};

export default Selectwifi;
const styles = StyleSheet.create({
  conatainer: {
    backgroundColor: '#fff',
    flex: 1,
  },
  subcont: {
    width: width * 0.9,

    marginLeft: 'auto',
    marginRight: 'auto',
  },
  maincont: {
    paddingBottom: '20%',
  },
  text: {
    fontFamily: 'robotoRegular',
    fontWeight: '600',
    fontSize: 26,
    textAlign: 'center',
    lineHeight: null,
  },
  Button: {
    width: width * 0.7,
    height: 50,
    backgroundColor: '#078F04',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 10,
  },
  header: {
    flex: 0.5,
    justifyContent: 'center',
  },
  circle: {
    width: width * 0.068,
    height: 24,

    backgroundColor: '#078F04',
  },
  modalContentwifioverlay: {
    backgroundColor: 'white',
    width: width * 0.9,

    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    height: 203,
    borderRadius: 20,
  },

  verticleLine: {
    width: 1,
    backgroundColor: '#959595CC',
  },
});
