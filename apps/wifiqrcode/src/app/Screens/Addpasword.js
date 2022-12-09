/* eslint-disable no-dupe-keys */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable import/first */

import React from 'react';
import { useState, useEffect } from 'react';
import { Wifi } from './Data';
import { RadioButton } from 'react-native-paper';
import Header from '../components/Header';
import Colors from '../../Utils/Colors';
import ScreenDividers from '../components/ScreenDividers';

import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  View,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  Alert,
  ScrollView,
  TextInput,
  Text,
} from 'react-native';

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
import RNFetchBlob from 'rn-fetch-blob';
import publicIP from 'react-native-public-ip';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
import Modal from 'react-native-modal';
import { Wifi2 } from '../components/Images';
import { Checkbox } from 'react-native-paper';

const Addpasword = ({ navigation, route }) => {
  const [ip, setip] = useState('');

  const [wifi1, setwifi1] = useState(false);
  const { data } = route.params;
  const [wifi2, setwifi2] = useState(false);
  const [wifi3, setwifi3] = useState(false);
  const [wifi4, setwifi4] = useState(false);

  const [pasword, setpasword] = useState('');
  const [isWEP, setisweb] = useState(false);
  const [checked, setChecked] = useState(false);
  const [hidePass, setHidePass] = useState(true);
  const [Select, setSelect] = useState(false);
  const [checkeds, setCheckeds] = useState('WPA/WPA2');
  const [show, setshow] = useState(false);
  const [Error, SetError] = useState('');

  useEffect(() => {
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
  }, []);
  useEffect(() => {
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
  }, []);

  const [connected, setConnected] = useState({ connected: false });

  const Check = (id) => {
    setSelect({ sellectditem: id });
  };

  const Next = async (SSID, Password, isWEP) => {
    // navigation.navigate('CustomizedQrcode', {
    //   SSID: SSID,
    //   Password: Password,
    //   Type: checkeds,

    //   ip: ip,
    // });
    if (checked == false) {
      Alert.alert('Please Checked Terms And Condition');
    } else if (Password == '') {
      Alert.alert('Please Enter Password');
    } else {
      try {
        const data = await WifiManager.connectToProtectedSSID(
          SSID,
          Password,
          isWEP
        );
        Alert.alert('Connect Successfully');
        setConnected({ connected: true, SSID });

        console.log(SSID, Password, checkeds);

        navigation.navigate('CustomizedQrcode', {
          SSID: SSID,
          Password: Password,
          Type: checkeds,

          ip: ip,
        });
        setChecked(false);
        setpasword('');
      } catch (error) {
        setConnected({ connected: false, error: error.message });
        Alert.alert('Conection Lost !  ');
      }
    }
  };

  const Delay1 = () => {
    setTimeout(function () {
      //Put All Your Code Here, Which You Want To Execute After Some Delay Time.
      navigation.navigate('Createqrocde');
    }, 700);
  };
  return (
    <ImageBackground
      style={{ ...styles.conatainer }}
      source={require('../Images/home.png')}
    >
      <StatusBar style="dark" />
      <Header Title="Enter Wifi Credentials" />
      <ScrollView style={{ ...styles.subcont }}>
        <ScreenDividers
          secondboxstyle={{ backgroundColor: Colors.Green }}
          thirdboxstyle={{ backgroundColor: Colors.LightGray }}
          forthboxstyle={{ backgroundColor: Colors.LightGray }}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            alignSelf: 'center',
            marginTop: '5%',
            marginLeft: '-5%',
          }}
        >
          <Wifi2 />
          <Text style={styles.header}>{data.name}</Text>
        </View>
        <View style={styles.box3}>
          <View
            style={{
              ...styles.subcont,
              marginBottom: null,
              width: '90%',

              justifyContent: 'center',
            }}
          >
            <Text
              style={{ fontSize: 15, fontWeight: 'bold', color: Colors.Gray }}
            >
              Password
            </Text>
            <View style={{ flexDirection: 'row', marginTop: '2%' }}>
              <View
                style={{
                  height: '100%',
                  width: '2%',
                  backgroundColor: Colors.Green,
                }}
              ></View>
              <TextInput
                style={{
                  height: 42,
                  backgroundColor: '#fff',
                  fontSize: 15,
                  width: '100%',
                  borderWidth: 1,
                  borderColor: Colors.LightGray,
                  color: Colors.Gray,
                  paddingHorizontal: 10,
                }}
                type="password"
                secureTextEntry={hidePass ? true : false}
                value={pasword}
                onChangeText={setpasword}
              />
              <TouchableOpacity
                style={{
                  position: 'absolute',
                  right: 0,
                  marginRight: '2%',
                  alignSelf: 'center',
                }}
                activeOpacity={1}
                onPress={() => setHidePass(!hidePass)}
              >
                <AntDesign
                  name="eye"
                  size={24}
                  color={hidePass ? 'gray' : Colors.Green}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{ ...styles.box3, height: 130, marginTop: '5%' }}>
          <View
            style={{
              ...styles.subcont,
              marginBottom: null,
              width: '90%',
              justifyContent: 'center',
            }}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text
                style={{ fontSize: 20, fontWeight: 'bold', color: Colors.Gray }}
              >
                Encryption
              </Text>
              <TouchableOpacity style={{ marginLeft: '2%' }}>
                <AntDesign name="questioncircle" size={20} color={Colors.red} />
              </TouchableOpacity>
            </View>
            <View
              style={{
                marginTop: '5%',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
            >
              <View style={{ alignItems: 'center' }}>
                <RadioButton
                  value="WPA/WPA2"
                  color={Colors.Green}
                  uncheckedColor={Colors.LightGray}
                  status={checkeds === 'WPA/WPA2' ? 'checked' : 'unchecked'}
                  onPress={() => setCheckeds('WPA/WPA2')}
                />
                <Text style={styles.text4}>WPA/WPA2</Text>
              </View>
              <View style={{ alignItems: 'center' }}>
                <RadioButton
                  value="WEP"
                  color={Colors.Green}
                  uncheckedColor={Colors.LightGray}
                  status={checkeds === 'WEP' ? 'checked' : 'unchecked'}
                  onPress={() => setCheckeds('WEP')}
                />
                <Text style={styles.text4}>WEP</Text>
              </View>
              <View style={{ alignItems: 'center' }}>
                <RadioButton
                  value="None"
                  color={Colors.Green}
                  uncheckedColor={Colors.LightGray}
                  status={checkeds === 'None' ? 'checked' : 'unchecked'}
                  onPress={() => setCheckeds('None')}
                />
                <Text style={styles.text4}>None</Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            marginTop: '5%',
            flexDirection: 'row',
            alignItems: 'center',
            alignSelf: 'center',
          }}
        >
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => setChecked(!checked)}
          >
            <Feather
              name={checked ? 'check-circle' : 'circle'}
              size={27}
              color={Colors.LightGreen}
            />
          </TouchableOpacity>
          <View style={{ flexDirection: 'row', marginLeft: '5%' }}>
            <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'black' }}>
              I agree to the
            </Text>
            <TouchableOpacity
              style={{ marginLeft: '1%' }}
              onPress={() => navigation.navigate('Termsandcondition')}
            >
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 'bold',
                  color: Colors.blue,
                  textDecorationLine: 'underline',
                }}
              >
                Terms & Conditions
              </Text>
            </TouchableOpacity>
            <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'black' }}>
              {' '}
              of
            </Text>
          </View>
        </View>
        <Text
          style={{
            fontSize: 15,
            fontWeight: 'bold',
            color: 'black',
            textAlign: 'center',
          }}
        >
          DoWell Wifi QR Code
        </Text>
        <View style={{ ...styles.box3, height: 90, marginTop: '10%' }}>
          <ScrollView
            style={{
              ...styles.subcont,
              marginBottom: null,
              marginTop: '2%',
            }}
          >
            <Text
              style={{ fontSize: 15, fontWeight: 'bold', color: Colors.Gray }}
            >
              Disclaimer
              <Text
                style={{
                  fontSize: 12,
                  color: Colors.Gray,
                  fontWeight: 'normal',
                }}
              >
                __ Dowell may collect certain personally identifiable
                information (“personal information”) about you when you visit
                our App. Examples of personal information we may collect include
                your name, address, telephone number, fax number, and e-mail
                address.
              </Text>
            </Text>
          </ScrollView>
        </View>
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
                  <Ionicons
                    name="chevron-back"
                    size={60}
                    color={Colors.Green}
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => Next(data.name, pasword, isWEP)}>
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
                  Create QR Code
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Addpasword;
const styles = StyleSheet.create({
  conatainer: {
    flex: 1,
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
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.Gray,
    marginLeft: '2%',
  },
  box3: {
    width: '100%',
    height: 90,
    borderWidth: 1,

    borderColor: Colors.Green,
    borderRadius: 10,
    backgroundColor: '#fff',
    marginTop: '5%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text4: {
    fontSize: 12,
    color: Colors.Gray,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
