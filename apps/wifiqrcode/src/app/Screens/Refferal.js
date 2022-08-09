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

import { Header, Icon, Card } from 'react-native-elements';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
import Modal from 'react-native-modal';

const Refferal = ({ navigation }) => {
  const [wifi1, setwifi1] = useState(false);
  const [wifi2, setwifi2] = useState(false);
  const [wifi3, setwifi3] = useState(false);
  const [wifi4, setwifi4] = useState(false);
  const [Email, setEmail] = useState('');

  const [checked, setChecked] = useState(true);
  const [form, setform] = useState(false);
  const [valid, setvalid] = useState(false);

  const Next = (Email) => {
    if (Email == '') {
      setvalid(true);
    } else {
      setvalid(false);
      setwifi2(true);
    }
  };

  const Delay1 = () => {
    setTimeout(function () {
      //Put All Your Code Here, Which You Want To Execute After Some Delay Time.
      navigation.navigate('Createqrocde');
    }, 700);
  };

  const Delay = () => {
    setTimeout(function () {
      //Put All Your Code Here, Which You Want To Execute After Some Delay Time.
      setChecked(true);
      setform(false);
    }, 2000);
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
              <Text style={{ ...styles.text, fontSize: 24 }}>Referral</Text>
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
              <HStack width="95%" mx="auto" mt="2%">
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
                          ✓
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
              </HStack>

              <VStack
                style={{ ...styles.subcont, width: width * 0.75 }}
                mt="5%"
              >
                <Image
                  source={require('../Images/ref.png')}
                  style={{ height: 250 }}
                  resizeMode="contain"
                />
                <Text
                  style={{ ...styles.text, fontSize: 30, marginBottom: '5%' }}
                >
                  Do you recommend this to your friends and colleagues?
                </Text>

                {checked ? (
                  <HStack justifyContent="space-between" mt="5%">
                    <Button
                      style={{ ...styles.Button1 }}
                      shadow="2"
                      _text={{
                        fontSize: 20,
                        marginTop: '-4%',

                        color: '#078F04',
                      }}
                      onPress={() => setwifi1(true)}
                    >
                      No
                    </Button>

                    <Button
                      style={{ ...styles.Button1 }}
                      shadow="2"
                      _text={{
                        fontSize: 20,
                        marginTop: '-4%',

                        color: '#078F04',
                      }}
                      onPress={() => {
                        setChecked(false), setform(true);
                      }}
                    >
                      Yes
                    </Button>
                  </HStack>
                ) : null}

                {form ? (
                  <View>
                    <Text
                      style={{
                        ...styles.text,
                        fontSize: 16,
                        fontWeight: '400',
                        color: '#848484',
                      }}
                    >
                      Refer this to your friend and colleagues by sharing them
                      on email
                    </Text>
                    <TextInput
                      style={{ ...styles.Input, marginTop: '10%' }}
                      placeholder="  Enter Friend’s Name"
                      value={Email}
                      onChangeText={setEmail}
                    />
                    {valid ? (
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
                      placeholder="  Enter Friend’s Email"
                    />
                    {valid ? (
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
                      _text={{ fontSize: 30, marginTop: '-4%' }}
                      mt="10%"
                      onPress={() => Next(Email)}
                    >
                      Invite
                    </Button>
                  </View>
                ) : null}

                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => setwifi3(true)}
                >
                  <Text
                    style={{
                      ...styles.text,
                      marginTop: '5%',
                      fontSize: 20,
                      color: '#078F04',
                      textDecorationLine: 'underline',
                    }}
                  >
                    Maybe later
                  </Text>
                </TouchableOpacity>
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
                <Text style={{ ...styles.text, fontSize: 24 }}>Thank you!</Text>

                <Text
                  style={{ ...styles.text, fontSize: 20, fontWeight: '400' }}
                >
                  Your response has been saved. Thnaks for feedback.
                </Text>
              </VStack>
            </VStack>
            <TouchableOpacity
              style={{ borderColor: '#959595', flex: 0.5, borderTopWidth: 1 }}
              activeOpacity={1}
              onPress={() => {
                setwifi1(false), Delay1();
              }}
            >
              <VStack my="auto">
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => {
                    setwifi1(false), Delay1();
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
          animationOutTiming={600}
          onBackButtonPress={() => setwifi2(false)}
        >
          <View style={styles.modalContentwifioverlay}>
            <VStack style={{ flex: 1 }}>
              <VStack my="auto" space="10%">
                <Text style={{ ...styles.text, fontSize: 24 }}>
                  Referral Sent
                </Text>

                <Text
                  style={{ ...styles.text, fontSize: 20, fontWeight: '400' }}
                >
                  Thank you for referring this to “Saurabh” via email.
                </Text>
              </VStack>
            </VStack>
            <TouchableOpacity
              style={{ borderColor: '#959595', flex: 0.5, borderTopWidth: 1 }}
              activeOpacity={1}
              onPress={() => {
                setwifi2(false), Delay1(), Delay();
              }}
            >
              <VStack my="auto">
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => {
                    setwifi2(false), Delay1(), Delay();
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
            </TouchableOpacity>
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
                <Text style={{ ...styles.text, fontSize: 24 }}>Confirm</Text>

                <Text
                  style={{ ...styles.text, fontSize: 20, fontWeight: '400' }}
                >
                  Are you sure you want to go back to creating QR code?
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
                      No
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
                    setwifi3(false), Delay1();
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
                width="70%"
                mx="auto"
                style={{ flex: 1 }}
              >
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => {
                    setwifi4(false);
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
                  style={{ ...styles.verticleLine, marginLeft: '12%' }}
                  height="full"
                ></VStack>

                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => {
                    setwifi4(false), Delay1();
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
                      Yes,Finish
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

export default Refferal;
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
  },
});
