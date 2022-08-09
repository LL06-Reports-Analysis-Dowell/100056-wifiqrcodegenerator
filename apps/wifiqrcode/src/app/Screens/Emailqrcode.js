/* eslint-disable import/first */
/* eslint-disable @typescript-eslint/no-unused-expressions */

import React from 'react';
import { useState, useEffect, useRef } from 'react';
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
  TextInput,
} from 'react-native';
import {
  Box,
  Text,
  FlatList,
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

import { Header, Icon, Card } from 'react-native-elements';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
import Modal from 'react-native-modal';

const Emailqrcode = ({ navigation, route }) => {
  const { nameref } = useRef();
  const { Qrocdeurl } = route.params;
  const [wifi1, setwifi1] = useState(false);
  const [wifi2, setwifi2] = useState(false);
  const [wifi3, setwifi3] = useState(false);
  const [disabled, setdisabled] = useState(false);
  const [disabled1, setdisabled1] = useState(false);
  const [qrcode_url, setqrcode_url] = useState(Qrocdeurl);

  const [checked, setChecked] = useState(false);
  const [checked1, setChecked1] = useState(false);
  const [email, setemail] = useState('');
  const [name, setname] = useState('');
  const [Usernmae, setusername] = useState('');

  const Next = (email, name) => {
    if (disabled == true) {
      setwifi2(true);
    } else if (name === '') {
      setChecked1(true);
      setChecked(true);
    } else if (email === '') {
      setChecked1(true);
      setChecked(false);
    } else {
      const registered = {
        name: name,
        email: email,
        qrcode_url: qrcode_url,
      };
      setusername(name);

      axios
        .post('https://100056.pythonanywhere.com/wifi/qr-email/', registered)
        .then(
          (response) => console.log(response.data),
          setwifi1(true),
          setdisabled(true),

          setChecked(false),
          setChecked1(false),
          setname(''),
          setemail('')
        )

        .catch((e) => console.log(e));
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
                  <Ionicons name="chevron-back" size={27} color="#078F04" />
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
              <Text style={{ ...styles.text, fontSize: 24 }}>
                Email QR Code
              </Text>
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
              <VStack
                style={{ ...styles.subcont, width: width * 0.75 }}
                mt="1%"
              >
                <VStack>
                  <Text style={{ ...styles.text, fontSize: 20 }}>MU Guest</Text>

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

                <Image
                  source={{ uri: Qrocdeurl }}
                  style={{ height: 270 }}
                  resizeMode="contain"
                  mt="5%"
                />

                <Text
                  style={{
                    ...styles.text,
                    fontSize: 16,
                    fontWeight: '400',
                    color: '#848484',
                  }}
                >
                  You can email this QR code.
                </Text>

                <TextInput
                  style={{ ...styles.Input }}
                  placeholder="  Enter Your Name"
                  value={name}
                  onChangeText={(name) => setname(name)}
                />
                {checked ? (
                  <HStack ml="auto">
                    <Text
                      style={{
                        ...styles.text,
                        fontSize: 16,
                        fontWeight: '400',
                        color: '#FF0000',
                      }}
                    >
                      Field Required
                    </Text>
                  </HStack>
                ) : null}

                <TextInput
                  style={{ ...styles.Input, marginTop: '10%' }}
                  placeholder="  Enter Email"
                  value={email}
                  onChangeText={(email) => setemail(email)}
                />
                {checked1 ? (
                  <HStack ml="auto">
                    <Text
                      style={{
                        ...styles.text,
                        fontSize: 16,
                        fontWeight: '400',
                        color: '#FF0000',
                      }}
                    >
                      Field Required
                    </Text>
                  </HStack>
                ) : null}

                <Button
                  style={{ ...styles.Button }}
                  shadow="4"
                  // disabled={disabled1}
                  _text={{ fontSize: 30, marginTop: '-4%' }}
                  mt="10%"
                  onPress={() => Next(email, name)}
                >
                  Done
                </Button>
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
              <VStack my="auto" space="10%">
                <Text style={{ ...styles.text, fontSize: 24 }}>Email Sent</Text>

                <Text
                  style={{ ...styles.text, fontSize: 20, fontWeight: '400' }}
                >
                  Email sent to “{Usernmae} ”.
                </Text>
              </VStack>
            </VStack>
            <VStack
              borderTopWidth="1"
              style={{ borderColor: '#959595', flex: 0.5 }}
            >
              <VStack my="auto">
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => {
                    setwifi1(false), Delay();
                  }}
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
          animationOutTiming={500}
          onBackButtonPress={() => {
            setwifi2(false), setdisabled1(true);
          }}
        >
          <View style={styles.modalContentwifioverlay}>
            <VStack style={{ flex: 1 }}>
              <VStack my="auto" space="10%">
                <Text
                  style={{ ...styles.text, fontSize: 24, fontWeight: 'bold' }}
                >
                  Email not Send{' '}
                </Text>

                <Text
                  style={{
                    ...styles.text,
                    fontSize: 20,
                    fontWeight: '400',
                    textAlign: 'center',
                  }}
                >
                  You Can Only Send {'\n'}One Email At a Time
                </Text>
              </VStack>
            </VStack>
            <VStack
              borderTopWidth="1"
              style={{ borderColor: '#959595', flex: 0.5 }}
            >
              <VStack my="auto">
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => {
                    setwifi2(false), setdisabled1(true);
                  }}
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
            </VStack>
          </View>
        </Modal>
      </NativeBaseProvider>
    </View>
  );
};

export default Emailqrcode;
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
    height: 49,
    backgroundColor: '#fff',
    fontSize: 20,
    borderWidth: 2,
    borderColor: '#078F04',
    marginTop: '5%',
    color: 'black',
  },
});
