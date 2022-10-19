/* eslint-disable no-dupe-keys */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable import/first */

import React from 'react';
import { useState, useEffect } from 'react';
import { Wifi } from './Data';
import Colors from '../../Utils/Colors';
import Button from '../components/Button';
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
  Share,
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
import Modal from 'react-native-modal';
import publicIP from 'react-native-public-ip';
import { NetworkInfo } from 'react-native-network-info';
import { WebView } from 'react-native-webview';
import Header from '../components/Header';

const Finishup = ({ navigation, route }) => {
  const [wifi1, setwifi1] = useState(false);
  const [wifi2, setwifi2] = useState(false);
  const [wifi3, setwifi3] = useState(false);
  const [wifi4, setwifi4] = useState(false);

  const { SSID, Password, Type, logo, ip } = route.params;
  const [wifi_ssid, Setwifi_ssid] = useState(SSID);
  const [wifi_password, setwifi_password] = useState(Password);
  const [Function, setFunction] = useState('Wifi QR Code');

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
        console.log(data);
        var Loc = data.country_name;
        setlocation(Loc);
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
  const ActivityIndicatorElement = () => {
    return (
      <View
        style={{
          bottom: 0,
          position: 'absolute',
          marginBottom: 200,
          alignSelf: 'center',
        }}
      >
        <ActivityIndicator color="#009688" size="large" />
      </View>
    );
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

    getlocation();

    // '47.122.71.234'

    let today = new Date();
    console.log(today); // 2022-02-06T08:05:49.292Z
    settime(today);
  }, [1]);

  const [checked, setChecked] = useState(false);
  const [share, setshare] = useState(false);
  const [visible, setVisible] = useState(false);
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
  const Send = () => {
    Share.share({
      title: 'Share QrCode',
      message: REMOTE_IMAGE_PATH,
      url: REMOTE_IMAGE_PATH,
    });
  };
  return (
    <ImageBackground
      style={{ ...styles.conatainer }}
      source={require('../Images/home.png')}
    >
      <StatusBar style="dark" />
      <Header Title="Wifi QR Code Created" />
      <ScrollView style={styles.subcont}>
        <View style={styles.Headerview}>
          <View>
            <View style={styles.Box}>
              <Text style={styles.text}>1</Text>
            </View>
            <Text style={styles.text1}>Select Wifi</Text>
          </View>
          <Text style={styles.text2}>- - - - -{'>'}</Text>
          <View>
            <View style={{ ...styles.Box }}>
              <Text style={{ ...styles.text }}>2</Text>
            </View>
            <Text style={styles.text1}>Enter Credentials</Text>
          </View>
          <Text style={styles.text2}>- - - - -{'>'}</Text>
          <View>
            <View style={{ ...styles.Box }}>
              <Text style={{ ...styles.text }}>3</Text>
            </View>
            <Text style={styles.text1}>Create QR Code</Text>
          </View>
        </View>

        {isLoading ? (
          <View style={{ marginTop: '50%', alignSelf: 'center' }}>
            <ActivityIndicator size="large" />
            <Text
              style={{
                fontSize: 15,
                fontStyle: 'italic',
                color: Colors.Gray,
              }}
            >
              Generating Qr Code ....
            </Text>
          </View>
        ) : (
          <View style={{ ...styles.subcont }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                alignSelf: 'center',
                marginTop: '10%',
                marginLeft: '-5%',
              }}
            >
              <Wifi2 />
              <Text style={styles.header}>{SSID}</Text>
            </View>

            <Image
              source={{ uri: datas.data.qrcodeimage }}
              style={{
                height: 270,
                width: 270,
                alignSelf: 'center',
                marginTop: '5%',
              }}
              alt="121"
              onLoad={onloadimage}
            />
            <Text
              style={{
                fontSize: 12,
                fontWeight: 'bold',
                textAlign: 'center',

                color: Colors.red,
                marginTop: '5%',
              }}
            >
              Display the QR Code for scanning
            </Text>
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
                  {datas.data.role_id}
                  {'>'}
                </Text>
              </View>
            </View>
            <Button
              Context="Email the QR Code"
              style={styles.Button2}
              onPress={() =>
                navigation.navigate('Emailqrcode', {
                  Qrocdeurl: datas.data.qrcodeimage,
                  Name: SSID,
                  ID: datas.data.role_id,
                })
              }
            />
            <Button
              Context="Download QR Code image"
              style={styles.Button2}
              onPress={() => downloadImage()}
            />
            <Button
              Context="Share QR Code"
              style={styles.Button2}
              onPress={() => Send()}
            />
            <Text
              style={{
                fontSize: 15,
                fontWeight: 'bold',
                color: Colors.Gray,
                textAlign: 'center',
                marginTop: '5%',
              }}
            >
              Rate this App
            </Text>
            <WebView
              style={{ height: 200, width: '100%' }}
              source={{
                uri: 'https://100035.pythonanywhere.com/nps-lite/nps-lite-scale/defaultnplslite/?brand_name=your-brand&product_name=your-product',
              }}
              javaScriptEnabled={true}
              //For the Cache
              renderLoading={ActivityIndicatorElement}
              domStorageEnabled={true}
              onLoadStart={() => setVisible(false)}
              onLoad={() => setVisible(false)}
            />

            <View
              style={{
                marginTop: '5%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              {/* <TouchableOpacity>
                <AntDesign name="infocirlceo" size={30} color={Colors.Yellow} />
              </TouchableOpacity> */}
              <TouchableOpacity
                style={{ marginLeft: 'auto' }}
                onPress={() =>
                  navigation.navigate('FeedBack', {
                    ID: datas.data.role_id,
                  })
                }
              >
                <Image
                  source={require('../Images/well.jpg')}
                  style={{ width: 100, height: 100, marginTop: '-5%' }}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
          </View>
        )}
      </ScrollView>

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
          <NativeBaseProvider>
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
                        ...styles.header,
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
                        ...styles.header,
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
                        ...styles.header,
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
                        ...styles.header,
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
                    style={{
                      ...styles.header,
                      fontSize: 14,
                      fontWeight: '400',
                    }}
                  >
                    Copy
                  </Text>
                </VStack>
                <VStack my="auto">
                  <Print />
                  <Text
                    style={{
                      ...styles.header,
                      fontSize: 14,
                      fontWeight: '400',
                    }}
                  >
                    Print
                  </Text>
                </VStack>
                <VStack mb="10%">
                  <More />
                  <Text
                    style={{
                      ...styles.header,
                      fontSize: 14,
                      fontWeight: '400',
                    }}
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
                    textAlign: 'center',
                  }}
                >
                  Cancel
                </Text>
              </TouchableOpacity>
            </View>
          </NativeBaseProvider>
        </View>
      </Modal>
    </ImageBackground>
  );
};

export default Finishup;
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
    paddingBottom: '10%',
  },
  maincont: {
    paddingBottom: '20%',
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
