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
} from 'react-native';
import {
  Box,
  FlatList,
  Image,
  HStack,
  VStack,
  Center,
  NativeBaseProvider,
  Text,
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

import { Header, Icon, Card } from 'react-native-elements';
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

const Tutorial = ({ navigation }) => {
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
              <Text style={{ ...styles.text, fontSize: 24, lineHeight: null }}>
                Tutorial
              </Text>
            }
          />
          <VStack
            style={{ width: width * 0.9, borderColor: '#959595CC' }}
            borderBottomWidth="3"
            mx="auto"
          ></VStack>
        </View>

        <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
          <VStack style={{ ...styles.maincont }}>
            <VStack style={{ ...styles.subcont }}>
              <Text style={{ ...styles.text, lineHeight: null }}>
                How to create QR Code for your Wi-Fi Network
              </Text>
              <Text
                style={{
                  ...styles.text,
                  fontSize: 20,
                  fontWeight: '400',
                  marginTop: '5%',
                  lineHeight: null,
                }}
              >
                Below are the steps for creating your QR code
              </Text>

              <View style={{ ...styles.step }}>
                <Text
                  style={{
                    ...styles.text,
                    fontSize: 20,
                    color: 'white',
                    fontWeight: 'bold',
                  }}
                >
                  1
                </Text>
              </View>
              <Text style={{ ...styles.text }}>
                Select the Wi-Fi network for your QR Code
              </Text>

              <View style={{ ...styles.step }}>
                <Text
                  style={{
                    ...styles.text,
                    fontSize: 20,
                    color: 'white',
                    fontWeight: 'bold',
                  }}
                >
                  2
                </Text>
              </View>
              <Text style={{ ...styles.text }}>
                Add the security credentials of the selected network
              </Text>
              <View style={{ ...styles.step }}>
                <Text
                  style={{
                    ...styles.text,
                    fontSize: 20,
                    color: 'white',
                    fontWeight: 'bold',
                  }}
                >
                  3
                </Text>
              </View>
              <Text style={{ ...styles.text }}>
                Finish up the process with final step
              </Text>
            </VStack>
          </VStack>
        </ScrollView>
      </NativeBaseProvider>
    </View>
  );
};

export default Tutorial;
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
    height: 54,
    backgroundColor: '#078F04',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 10,
  },
  header: {
    flex: 0.18,
    justifyContent: 'center',
  },
  step: {
    backgroundColor: 'rgba(7, 143, 4, 1)',
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    alignSelf: 'center',
    marginTop: '5%',
    marginBottom: '5%',
  },
});
