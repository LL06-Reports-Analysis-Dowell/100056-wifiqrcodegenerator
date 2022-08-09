import React from 'react';
import { useState, useEffect } from 'react';

import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
  StyleSheet,
  View,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  Alert,
  ScrollView,
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
import { Qrcode, Mobile, Wifi, Nav } from '../components/Images';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Createqrocde = ({ navigation }) => {
  return (
    <SafeAreaProvider>
      <ScrollView style={{ ...styles.conatainer }}>
        <StatusBar style="dark" />
        <NativeBaseProvider>
          <VStack style={{ ...styles.maincont }}>
            <VStack style={{ ...styles.subcont }} mt="30%">
              <Text style={{ ...styles.text, lineHeight: null }}>
                Do you want to create{'\n'}QR Code for your Wi-Fi?
              </Text>
              <HStack justifyContent="space-between" mt="10%">
                <Qrcode />
                <Center mb="5%">
                  <Nav />
                </Center>

                <Mobile style={{ width: 90, height: 120 }} />

                <Center mb="5%">
                  <Nav />
                </Center>

                <Center mb="5%">
                  <Wifi style={{ width: 80, height: 57 }} />
                </Center>
              </HStack>

              <Text
                style={{
                  ...styles.text,
                  fontWeight: '400',
                  fontSize: 17,
                  marginTop: '10%',
                  lineHeight: null,
                }}
              >
                Create QR code for your Wi-Fi connection{'\n'}
                Scan the QR code to connect {'\n'}
                Wi-Fi at any time{}
              </Text>

              <Button
                style={{ ...styles.Button }}
                shadow="4"
                _text={{ fontSize: 30, marginTop: '-4%' }}
                mt="10%"
                onPress={() => navigation.navigate('Selectwifi')}
              >
                Create QR Code
              </Button>

              <VStack
                style={{ width: width * 0.8, borderColor: '#959595CC' }}
                borderBottomWidth="4"
                mx="auto"
                mt="13%"
              ></VStack>
              <Text
                style={{
                  ...styles.text,
                  marginTop: '10%',
                  fontSize: 24,
                  lineHeight: null,
                }}
              >
                Don’t know how to use?
              </Text>
              <TouchableOpacity
                activeOpacity={1}
                onPress={() => navigation.navigate('Tutorial')}
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
                  Click here for tutorial
                </Text>
              </TouchableOpacity>
            </VStack>
          </VStack>
        </NativeBaseProvider>
      </ScrollView>
    </SafeAreaProvider>
  );
};

export default Createqrocde;
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
    height: height,
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'robotoRegular',
    fontWeight: '600',
    fontSize: 30,
    textAlign: 'center',
  },
  Button: {
    width: width * 0.7,
    height: 54,
    backgroundColor: '#078F04',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 10,
  },
});
