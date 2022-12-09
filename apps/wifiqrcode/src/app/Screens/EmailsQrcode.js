/* eslint-disable import/first */
/* eslint-disable @typescript-eslint/no-unused-expressions */

import React from 'react';
import { useState, useEffect, useRef } from 'react';
import Colors from '../../Utils/Colors';
import { Wifi } from './Data';
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
  TextInput,
  Text,
  Image,
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
import Button from '../components/Button';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
import Modal from 'react-native-modal';
import Header from '../components/Header';

const Emailsqrcode = ({ navigation, route }) => {
  const { nameref } = useRef();
  const { Qrocdeurl, Name, ID } = route.params;
  const [wifi1, setwifi1] = useState(false);
  const [wifi2, setwifi2] = useState(false);
  const [wifi3, setwifi3] = useState(false);
  const [disabled, setdisabled] = useState(false);
  const [disabled1, setdisabled1] = useState(false);
  const [qrcode_url, setqrcode_url] = useState(Qrocdeurl);
  const [subject, setsubject] = useState('');
  const [content, setcontent] = useState('');

  const [checked, setChecked] = useState(false);
  const [checked1, setChecked1] = useState(false);
  const [email, setemail] = useState('');
  const [name, setname] = useState('');
  const [Usernmae, setusername] = useState('');

  //   const Next = (email, name) => {
  //     let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

  //     if (disabled == true) {
  //       Alert.alert('You can only send one Email');
  //     } else if (name === '') {
  //       Alert.alert('Name Required');
  //     } else if (email === '') {
  //       Alert.alert('Email Required');
  //     } else if (reg.test(email) === false) {
  //       Alert.alert('Invalid Email');

  //       return false;
  //     } else {
  //       const registered = {
  //         name: name,
  //         email: email,
  //         qrcode_url: qrcode_url,
  //         subject: subject,
  //         content: content,
  //       };
  //       setusername(name);

  //       axios
  //         .post('https://100056.pythonanywhere.com/wifi/qr-email/', registered)
  //         .then(
  //           (response) => console.log(response.data),
  //           Alert.alert('Email Send Succesfully'),
  //           setdisabled(true),

  //           setChecked(false),
  //           setChecked1(false),
  //           setname(''),
  //           setemail('')
  //         )

  //         .catch((e) => console.log(e));
  //     }
  //   };

  //   const Delay = () => {
  //     setTimeout(function () {
  //       //Put All Your Code Here, Which You Want To Execute After Some Delay Time.
  //       navigation.goBack();
  //     }, 2000);
  //   };

  //   const Delay1 = () => {
  //     setTimeout(function () {
  //       //Put All Your Code Here, Which You Want To Execute After Some Delay Time.
  //       navigation.navigate('Addpasword');
  //     }, 700);
  //   };
  return (
    <ImageBackground
      style={{ ...styles.conatainer }}
      source={require('../Images/home.png')}
    >
      <StatusBar style="dark" />
      <Header Title="Email QR code" />
    </ImageBackground>
  );
};

export default Emailsqrcode;
const styles = StyleSheet.create({
  conatainer: {
    backgroundColor: '#fff',
    flex: 1,
  },
  subcont: {
    width: '90%',
    flex: 1,

    marginLeft: 'auto',
    marginRight: 'auto',
    paddingBottom: '5%',
  },
  Button2: {
    width: '100%',
    marginTop: '5%',
  },
  box3: {
    width: '100%',
    height: 350,
    borderWidth: 1,

    borderColor: Colors.Green,
    borderRadius: 10,
    backgroundColor: '#fff',
    marginTop: '5%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  maincont: {
    paddingBottom: '20%',
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
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.Gray,
    marginLeft: '2%',
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
    // eslint-disable-next-line no-dupe-keys
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
    height: height * 0.98,
  },
  modalContent: {
    flex: 0.4,

    justifyContent: 'space-between',
    paddingHorizontal: '1%',
  },
  Input: {
    height: 50,
    backgroundColor: '#fff',
    fontSize: 20,
    borderWidth: 2,
    borderColor: '#078F04',
    marginTop: '5%',
    color: 'black',
  },
});
