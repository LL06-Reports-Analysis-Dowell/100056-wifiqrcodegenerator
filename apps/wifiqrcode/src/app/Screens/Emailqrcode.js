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
  ActivityIndicator,
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

const Emailqrcode = ({ navigation, route }) => {
  const { nameref } = useRef();
  const { Qrocdeurl, Name, id } = route.params;
  const [wifi1, setwifi1] = useState(false);
  const [wifi2, setwifi2] = useState(false);
  const [wifi3, setwifi3] = useState(false);
  const [disabled, setdisabled] = useState(false);
  const [disabled1, setdisabled1] = useState(false);
  const [qrcode_url, setqrcode_url] = useState(Qrocdeurl);
  const [subject, setsubject] = useState('');
  const [content, setcontent] = useState('');
  const [responses, setresponses] = useState(true);

  const [checked, setChecked] = useState(false);
  const [checked1, setChecked1] = useState(false);
  const [email, setemail] = useState('');
  const [name, setname] = useState('');
  const [Usernmae, setusername] = useState('');

  const Next = (email, name) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

    if (disabled == true) {
      Alert.alert('You can only send one Email');
    } else if (name === '') {
      Alert.alert('Name Required');
    } else if (email === '') {
      Alert.alert('Email Required');
    } else if (subject === '') {
      Alert.alert('subject Required');
    } else if (content === '') {
      Alert.alert('content Required');
    } else if (reg.test(email) === false) {
      Alert.alert('Invalid Email');

      return false;
    } else {
      const registered = {
        name: name,
        email: email,
        qrcode_url: qrcode_url,
        subject: subject,
        content: content,
        id: id,
      };
      console.log(id);
      setusername(name);

      axios
        .post('https://100056.pythonanywhere.com/wifi/qr-email/', registered)
        .then((response) => {
          setdisabled(true),
            setChecked(false),
            setChecked1(false),
            setname(''),
            setemail('');
          setcontent('');
          setsubject('');
          console.log(response.data), Alert.alert('Email Send Succesfully');
        })
        .catch((e) => {
          console.log(e);
          Alert.alert('Email Didnt Send ');
        });
    }
  };

  const Delay = () => {
    setTimeout(function () {
      //Put All Your Code Here, Which You Want To Execute After Some Delay Time.
      navigation.goBack();
    }, 2000);
  };

  const Delay1 = () => {
    setTimeout(function () {
      //Put All Your Code Here, Which You Want To Execute After Some Delay Time.
      navigation.navigate('Addpasword');
    }, 700);
  };
  return (
    <ImageBackground
      style={{ ...styles.conatainer }}
      source={require('../Images/home.png')}
    >
      <StatusBar style="dark" />
      <Header Title="Email QR code" />
      <ScrollView style={styles.subcont}>
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
          <Text style={styles.header}>{Name}</Text>
        </View>
        <Image
          source={{ uri: qrcode_url }}
          style={{
            height: 270,
            width: 270,
            alignSelf: 'center',
            marginTop: '5%',
          }}
          alt="121"
        />
        <View style={styles.box3}>
          <ScrollView
            style={{
              ...styles.subcont,
              marginBottom: null,

              marginTop: '2%',
            }}
          >
            <View>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 'bold',
                  color: Colors.Gray,
                }}
              >
                Recipient Name
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
                    width: '95%',
                    borderWidth: 1,
                    borderColor: Colors.LightGray,
                    color: Colors.Gray,
                    paddingHorizontal: 10,
                  }}
                  value={name}
                  onChangeText={setname}
                  placeholder="Enter the name of recipient"
                  placeholderTextColor={Colors.Gray}
                />
              </View>
            </View>
            <View style={{ marginTop: '5%' }}>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 'bold',
                  color: Colors.Gray,
                }}
              >
                Recipient Email
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
                    width: '95%',
                    borderWidth: 1,
                    borderColor: Colors.LightGray,
                    color: Colors.Gray,
                    paddingHorizontal: 10,
                  }}
                  value={email}
                  onChangeText={setemail}
                  placeholder="Enter the Email of recipient"
                  placeholderTextColor={Colors.Gray}
                />
              </View>
            </View>
            <View style={{ marginTop: '5%' }}>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 'bold',
                  color: Colors.Gray,
                }}
              >
                Subject
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
                    width: '95%',
                    borderWidth: 1,
                    borderColor: Colors.LightGray,
                    color: Colors.Gray,
                    paddingHorizontal: 10,
                  }}
                  value={subject}
                  onChangeText={setsubject}
                  placeholder="<1234567890Q123456789012345678901234>"
                  placeholderTextColor={Colors.Gray}
                />
              </View>
            </View>
            <View style={{ marginTop: '5%', marginBottom: '5%' }}>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: 'bold',
                  color: Colors.Gray,
                }}
              >
                Email content
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
                    width: '95%',
                    borderWidth: 1,
                    borderColor: Colors.LightGray,
                    color: Colors.Gray,
                    paddingHorizontal: 10,
                  }}
                  placeholder="Message"
                  placeholderTextColor={Colors.Gray}
                  value={content}
                  onChangeText={setcontent}
                />
              </View>
            </View>
          </ScrollView>
        </View>
        <Button
          Context="Email the QR Code"
          style={styles.Button2}
          onPress={() => Next(email, name)}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: '5%',
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
                  }}
                >
                  <Ionicons
                    name="chevron-back"
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

export default Emailqrcode;
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
