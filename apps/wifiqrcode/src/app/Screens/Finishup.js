/* eslint-disable no-dupe-keys */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable import/first */

import React from 'react';
import { useState, useEffect } from 'react';
import { Wifi } from './Data';
import {
  Qrcode1,
  Gmail,
  Message,
  Wastapp,
  More,
  Print,
  Copy,
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

import { Header, Icon, Card } from 'react-native-elements';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
import Modal from 'react-native-modal';
import publicIP from 'react-native-public-ip';
import { NetworkInfo } from 'react-native-network-info';

const Finishup = ({ navigation, route }) => {
  const [wifi1, setwifi1] = useState(false);
  const [wifi2, setwifi2] = useState(false);
  const [wifi3, setwifi3] = useState(false);
  const [wifi4, setwifi4] = useState(false);

  const { SSID, Password, Type, logo } = route.params;
  const [wifi_ssid, Setwifi_ssid] = useState(SSID);
  const [wifi_password, setwifi_password] = useState(Password);
  const [Function, setFunction] = useState('Wifi QR Code');
  const [ip, setip] = useState('');
  const [time, settime] = useState('');
  const [security, setSecuity] = useState(Type);
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  const [isLoading, setLoading] = useState(true);
  const [location, setlocation] = useState('India');
  const [device, setdevice] = useState('Andriod');
  const [render, setrender] = useState(false);
  const [os, setos] = useState('Andriod');
  const [browser, setbrowser] = useState('Chrome');
  const [type_of_conn, settype_of_conn] = useState('Wifiqrcode');
  const [role_id, setrole_id] = useState('');
  const [load, setload] = useState(true);
  const [Locationdata, setlocationdata] = useState([]);
  const [datas, setData] = useState({ data: { qrcodeimage: '' } });

  const registered = {
    wifi_password: wifi_password,
    wifi_ssid: wifi_ssid,
    Function: Function,
    security: security,
    logo: logo,
  };

  const postdata = async () => {
    await axios
      .post('https://100073.pythonanywhere.com/wifi/create-qr/', registered)
      .then((response) => {
        setData(response.data);
      })

      .catch((e) => console.log(e))
      .finally(() => {
        setLoading(false);
      });
  };

  const onloadimage = () => {
    setload(false);
  };

  const getlocation = async () => {
    await fetch(`https://ipapi.co/${ip}/json/`)
      .then((response) => response.json())
      .then((data) => {
        setlocationdata(data), console.log(Locationdata);
        var locs = Locationdata.country_name;
        setlocation(locs);
      })

      .catch((e) => console.log(e));
  };

  var REMOTE_IMAGE_PATH = datas.data.qrcodeimage;
  const Image_dowload = async () => {
    // Function to check the platform
    // If iOS then start downloading
    // If Android then ask for permission
    if (Platform.OS === 'ios') {
      downloadImage();
    } else {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'Storage Permission Required',
            message: 'App needs access to your storage to download Photos',
          }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          // Once user grant the permission start downloading
          console.log('Storage Permission Granted.');
          downloadImage();
        } else {
          // If permission denied then show alert
          alert('Storage Permission Not Granted');
        }
      } catch (err) {
        // To handle permission related exception
        console.warn(err);
      }
    }
  };
  const downloadImage = () => {
    // Main function to download the image

    // To add the time suffix in filename
    let date = new Date();
    // Image URL which we want to download
    let image_URL = REMOTE_IMAGE_PATH;
    // Getting the extention of the file
    let ext = getExtention(image_URL);
    ext = '.' + ext[0];
    // Get config and fs from RNFetchBlob
    // config: To pass the downloading related options
    // fs: Directory path where we want our image to download
    const { config, fs } = RNFetchBlob;
    let PictureDir = fs.dirs.PictureDir;
    let options = {
      fileCache: true,
      addAndroidDownloads: {
        // Related to the Android only
        useDownloadManager: true,
        notification: true,
        path:
          PictureDir +
          '/image_' +
          Math.floor(date.getTime() + date.getSeconds() / 2) +
          ext,
        description: 'Image',
      },
    };
    config(options)
      .fetch('GET', image_URL)
      .then((res) => {
        // Showing alert after successful downloading
        console.log('res -> ', JSON.stringify(res));
        alert('Image Downloaded Successfully.');
      });
  };

  const getExtention = (filename) => {
    // To get the file extension
    return /[.]/.exec(filename) ? /[^.]+$/.exec(filename) : undefined;
  };
  useEffect(() => {
    const Login = async () => {
      let data = { ...datas };

      var username = data.data.username;
      var password = data.data.password;
      var role_id = data.data.role_id;

      if (!isLoading) {
        console.log(datas);

        const postdata = {
          username: username,
          password: password,
          location: location,
          device: device,
          os: os,
          browser: browser,
          time: time,
          ip: ip,
          type_of_conn: type_of_conn,
          role_id: role_id,
        };
        console.log(
          username,
          password,
          location,
          device,
          os,
          browser,
          time,
          ip,
          type_of_conn,
          role_id
        );
        await axios
          .post(
            'https://100014.pythonanywhere.com/api/mobilelogin/',
            postdata,
            { timeout: 5000 }
          )
          .then((response) => {
            console.log(response.data);
          })
          .catch((e) => console.log(e));
      } else {
        console.log('ABC');
      }
    };
    Login();
  }, [isLoading]);
  useEffect(() => {
    postdata();

    publicIP()
      .then((IP) => {
        console.log(IP);
        setip(IP);

        // '47.122.71.234'
      })
      .catch((error) => {
        console.log(error);
        // 'Unable to get IP address.'
      });
    let today = new Date();
    console.log(today); // 2022-02-06T08:05:49.292Z
    settime(today);
  }, []);

  const [checked, setChecked] = useState(false);
  const [share, setshare] = useState(false);

  const [Select, setSelect] = useState({
    sellectditem: null,
    name: 'basit',
  });

  const Check = (id) => {
    setSelect({ sellectditem: id });
  };

  const Next = () => {
    if (checked == false) {
      setwifi2(true);
    } else {
      setwifi1(true);
    }
  };

  const Delay1 = () => {
    setTimeout(function () {
      //Put All Your Code Here, Which You Want To Execute After Some Delay Time.
      navigation.navigate('Refferal');
    }, 700);
  };
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
            centerComponent={
              <Text style={{ ...styles.text, fontSize: 24 }}>Finishup</Text>
            }
          />
          <VStack
            style={{ width: width * 0.9, borderColor: '#959595CC' }}
            borderBottomWidth="3"
            mx="auto"
          ></VStack>
        </View>
        <ScrollView style={{ flex: 1 }}>
          <VStack style={{ ...styles.maincont }}>
            <VStack style={{ ...styles.subcont }}>
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
                          ✓
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
                          ✓
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
                  }}
                  borderRadius="full"
                ></Box>

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

              <VStack
                style={{ ...styles.subcont, width: width * 0.75 }}
                mt="5%"
              >
                <HStack justifyContent="space-between">
                  <VStack>
                    <Text style={{ ...styles.text, fontSize: 20 }}>
                      MU Guest
                    </Text>

                    <Text
                      style={{
                        ...styles.text,
                        fontSize: 14,
                        fontWeight: '400',
                        color: '#848484',
                      }}
                    >
                      Secured
                    </Text>
                  </VStack>

                  <TouchableOpacity activeOpacity={1} onPress={() => Next()}>
                    <Box
                      style={{
                        width: width * 0.13,
                        height: 54,
                        backgroundColor: '#C1C1C180',
                        borderRadius: 20,
                      }}
                    >
                      <VStack mx="auto" my="auto">
                        <Entypo
                          name={checked ? 'lock-open' : 'lock'}
                          size={30}
                          color="black"
                        />
                      </VStack>
                    </Box>
                  </TouchableOpacity>
                </HStack>
                {isLoading ? (
                  <ActivityIndicator />
                ) : (
                  <VStack>
                    <Image
                      source={{ uri: datas.data.qrcodeimage }}
                      style={{ height: 270 }}
                      alt="121"
                      onLoad={onloadimage}
                    />

                    <Text
                      style={{
                        ...styles.text,
                        fontSize: 16,
                        fontWeight: '400',
                        color: '#848484',
                      }}
                    >
                      Your QR code is ready{'\n'}
                      Print the QR code and display for scanning.
                    </Text>

                    <HStack justifyContent="space-between" mt="5%">
                      <Button
                        style={{ ...styles.Button1 }}
                        shadow="2"
                        _text={{
                          fontSize: 20,
                          marginTop: '-4%',

                          color: '#078F04',
                        }}
                        onPress={() => setwifi3(true)}
                      >
                        <HStack>
                          <MaterialCommunityIcons
                            name="download"
                            size={24}
                            color="#078F04"
                          />
                          <Text
                            style={{
                              ...styles.text,
                              fontSize: 20,
                              marginTop: '-4%',
                              color: '#078F04',
                            }}
                          >
                            Download
                          </Text>
                        </HStack>
                      </Button>

                      <Button
                        style={{ ...styles.Button1 }}
                        shadow="2"
                        _text={{
                          fontSize: 20,
                          marginTop: '-4%',

                          color: '#078F04',
                        }}
                        onPress={() => setshare(true)}
                      >
                        <HStack>
                          <Entypo name="share" size={24} color="#078F04" />
                          <Text
                            style={{
                              ...styles.text,
                              fontSize: 20,
                              marginTop: '-4%',
                              color: '#078F04',
                            }}
                          >
                            Share
                          </Text>
                        </HStack>
                      </Button>
                    </HStack>
                    <TouchableOpacity
                      activeOpacity={1}
                      onPress={() =>
                        navigation.navigate('Emailqrcode', {
                          Qrocdeurl: datas.data.qrcodeimage,
                        })
                      }
                    >
                      <Text
                        style={{
                          ...styles.text,
                          marginTop: '2%',
                          fontSize: 20,
                          color: '#078F04',
                          textDecorationLine: 'underline',
                        }}
                      >
                        Email this QR Code
                      </Text>
                    </TouchableOpacity>

                    <Button
                      style={{ ...styles.Button }}
                      shadow="4"
                      _text={{ fontSize: 30, marginTop: '-4%' }}
                      mt="4%"
                      onPress={() => setwifi4(true)}
                    >
                      Done
                    </Button>
                  </VStack>
                )}
              </VStack>
            </VStack>
          </VStack>
        </ScrollView>

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
              <VStack my="auto" space="5%">
                <Text style={{ ...styles.text, fontSize: 24 }}>
                  Keep Wi-Fi Locked?
                </Text>

                <Text
                  style={{ ...styles.text, fontSize: 20, fontWeight: '400' }}
                >
                  Do you want to “Lock” this Wi-Fi network and make changes to
                  it’s Security?
                </Text>
              </VStack>
            </VStack>
            <VStack
              borderTopWidth="1"
              style={{ borderColor: '#959595', flex: 0.5 }}
            >
              <HStack
                justifyContent="space-between"
                width="70%"
                mx="auto"
                style={{ flex: 1 }}
              >
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => {
                    setwifi1(false);
                  }}
                >
                  <VStack mx="auto" my="auto">
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
                <VStack
                  style={{ ...styles.verticleLine, marginLeft: '15%' }}
                  height="full"
                ></VStack>

                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => {
                    setwifi1(false), setChecked(false);
                  }}
                >
                  <VStack my="auto" ml="5%">
                    <Text
                      style={{
                        ...styles.text,
                        fontSize: 20,
                        color: '#078F04',
                        fontWeight: '400',
                      }}
                    >
                      Yes, Confirm
                    </Text>
                  </VStack>
                </TouchableOpacity>
              </HStack>
            </VStack>
          </View>
        </Modal>

        <Modal
          isVisible={wifi2}
          avoidKeyboard={false}
          animationIn={'slideInRight'}
          animationOut={'slideOutRight'}
          backdropTransitionOutTiming={1000}
          animationInTiming={500}
          animationOutTiming={600}
          onBackButtonPress={() => setwifi2(false)}
        >
          <View style={styles.modalContentwifioverlay}>
            <VStack style={{ flex: 1 }}>
              <VStack my="auto" space="5%">
                <Text style={{ ...styles.text, fontSize: 24 }}>
                  Keep Wi-Fi Open?
                </Text>

                <Text
                  style={{ ...styles.text, fontSize: 20, fontWeight: '400' }}
                >
                  Do you want to “Open” this Wi-Fi network and make changes to
                  it’s Security?
                </Text>
              </VStack>
            </VStack>
            <VStack
              borderTopWidth="1"
              style={{ borderColor: '#959595', flex: 0.5 }}
            >
              <HStack
                justifyContent="space-between"
                width="70%"
                mx="auto"
                style={{ flex: 1 }}
              >
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => {
                    setwifi2(false);
                  }}
                >
                  <VStack mx="auto" my="auto">
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
                <VStack
                  style={{ ...styles.verticleLine, marginLeft: '15%' }}
                  height="full"
                ></VStack>

                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => {
                    setwifi2(false), setChecked(true);
                  }}
                >
                  <VStack my="auto" ml="5%">
                    <Text
                      style={{
                        ...styles.text,
                        fontSize: 20,
                        color: '#078F04',
                        fontWeight: '400',
                      }}
                    >
                      Yes, Confirm
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
                <Text style={{ ...styles.text, fontSize: 24 }}>
                  Confirm Download
                </Text>

                <Text
                  style={{ ...styles.text, fontSize: 20, fontWeight: '400' }}
                >
                  Do you want to download “{datas.data.qrcodeimage}”?
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
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  onPress={() => {
                    setwifi3(false);
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
                <VStack
                  style={{ ...styles.verticleLine }}
                  height="full"
                  bgColor="amber.100"
                ></VStack>

                <TouchableOpacity
                  activeOpacity={1}
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  onPress={() => {
                    setwifi3(false), Image_dowload();
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
                      Yes, Confirm
                    </Text>
                  </VStack>
                </TouchableOpacity>
              </HStack>
            </VStack>
          </View>
        </Modal>
        <Modal
          isVisible={wifi4}
          avoidKeyboard={false}
          animationIn={'slideInRight'}
          animationOut={'slideOutRight'}
          backdropTransitionOutTiming={1000}
          animationInTiming={500}
          animationOutTiming={500}
          onBackButtonPress={() => setwifi4(false)}
        >
          <View style={styles.modalContentwifioverlay}>
            <VStack style={{ flex: 1 }}>
              <VStack my="auto" space="5%">
                <Text style={{ ...styles.text, fontSize: 24 }}>
                  Are you sure?
                </Text>

                <Text
                  style={{ ...styles.text, fontSize: 20, fontWeight: '400' }}
                >
                  You cannot download/share this QR code later. Do you still
                  want to finish up this step?
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
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  onPress={() => {
                    setwifi4(false);
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
                <VStack
                  style={{ ...styles.verticleLine }}
                  height="full"
                ></VStack>

                <TouchableOpacity
                  activeOpacity={1}
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  onPress={() => {
                    setwifi4(false), Delay1();
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
                      Yes,Finish
                    </Text>
                  </VStack>
                </TouchableOpacity>
              </HStack>
            </VStack>
          </View>
        </Modal>

        <Modal
          isVisible={share}
          style={styles.bottomModal}
          animationInTiming={300}
          animationOutTiming={600}
          backdropTransitionOutTiming={1000}
          avoidKeyboard={false}
          onBackButtonPress={() => setshare(false)}
        >
          <View style={styles.modalContent}>
            <View
              style={{ flex: 0.9, backgroundColor: '#fff', borderRadius: 10 }}
            >
              <VStack
                borderBottomWidth="1"
                style={{ borderColor: '#959595CC' }}
                pb="5%"
              >
                <HStack width="90%" justifyContent="space-evenly" mt="5%">
                  <VStack>
                    <Gmail />
                    <Text
                      style={{
                        ...styles.text,
                        fontSize: 14,
                        fontWeight: '400',
                      }}
                    >
                      Gmail
                    </Text>
                  </VStack>
                  <VStack>
                    <Message />
                    <Text
                      style={{
                        ...styles.text,
                        fontSize: 14,
                        fontWeight: '400',
                      }}
                    >
                      Messages
                    </Text>
                  </VStack>
                  <VStack>
                    <Wastapp />
                    <Text
                      style={{
                        ...styles.text,
                        fontSize: 14,
                        fontWeight: '400',
                      }}
                    >
                      WhatsApp
                    </Text>
                  </VStack>

                  <Center>
                    <More />
                    <Text
                      style={{
                        ...styles.text,
                        fontSize: 14,
                        fontWeight: '400',
                      }}
                    >
                      More
                    </Text>
                  </Center>
                </HStack>
              </VStack>
              <HStack width="60%" justifyContent="space-evenly" my="auto">
                <VStack my="auto">
                  <Copy />
                  <Text
                    style={{ ...styles.text, fontSize: 14, fontWeight: '400' }}
                  >
                    Copy
                  </Text>
                </VStack>
                <VStack my="auto">
                  <Print />
                  <Text
                    style={{ ...styles.text, fontSize: 14, fontWeight: '400' }}
                  >
                    Print
                  </Text>
                </VStack>
                <VStack mb="10%">
                  <More />
                  <Text
                    style={{ ...styles.text, fontSize: 14, fontWeight: '400' }}
                  >
                    More
                  </Text>
                </VStack>
              </HStack>
            </View>
            <View
              style={{
                flex: 0.25,
                backgroundColor: '#fff',
                marginTop: '2%',
                borderRadius: 10,
                justifyContent: 'center',
              }}
            >
              <TouchableOpacity
                activeOpacity={1}
                onPress={() => setshare(false)}
              >
                <Text
                  style={{
                    ...styles.text,
                    fontSize: 20,
                    fontWeight: '400',
                    color: '#FF0000',
                  }}
                >
                  Cancel
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </NativeBaseProvider>
    </View>
  );
};

export default Finishup;
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
    flex: 0.18,
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
});
