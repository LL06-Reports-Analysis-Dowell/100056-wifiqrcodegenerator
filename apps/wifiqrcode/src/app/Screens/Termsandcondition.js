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
import { Protect } from '../components/Images';

const Termsandcondition = ({ navigation }) => {
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
              <Text style={{ ...styles.text, fontSize: 24, marginTop: '0%' }}>
                Terms & Conditions
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
            <VStack style={{ ...styles.subcont }} mt="5%">
              <Protect style={{ marginLeft: 'auto', marginRight: 'auto' }} />

              <Text style={{ ...styles.text }}>Privacy Policy</Text>

              <Text style={{ ...styles.text, fontSize: 20, fontWeight: '400' }}>
                Privacy Policy This Privacy Policy governs the manner in which
                we collect, uses, maintains and discloses information collected
                from users (each, a "User") of this ­­­­­­­­website ("Site").
              </Text>

              <Text style={{ ...styles.text, marginTop: '5%' }}>
                Personal Identification Information
              </Text>

              <Text style={{ ...styles.text, fontSize: 20, fontWeight: '400' }}>
                We may collect personal identification information from Users in
                a variety of ways in connection with activities, services,
                features or resources we make available on our Site. We will
                collect personal identification information from Users only if
                they voluntarily submit such information to us. Users can always
                refuse to supply personally identification information, except
                that it may prevent them from engaging in certain Site
                relatedactivities.
              </Text>

              <Text style={{ ...styles.text, marginTop: '5%' }}>
                Nonpersonal Identification Information
              </Text>

              <Text style={{ ...styles.text, fontSize: 20, fontWeight: '400' }}>
                We may collect non-personal identification information about
                Users whenever they interact with our Site. Non-personal
                identification information may include the browser name, the
                type of computer and technical information about Users means of
                connection to our Site, such as the operating system and the
                Internet service providers utilized and other similar
                information.
              </Text>

              <Text style={{ ...styles.text }}>Web browser cookies</Text>

              <Text style={{ ...styles.text, fontSize: 20, fontWeight: '400' }}>
                Our Site may use "cookies" to enhance User experience. Users web
                browser places cookies on their hard drive for record-keeping
                purposes and sometimes to track information about them. User may
                choose to set their web browser to refuse cookies, or to alert
                you when cookies are being sent. If they do so, note that some
                parts of the Site may not function properly.
              </Text>

              <Text style={{ ...styles.text }}>
                How we use collected information
              </Text>

              <Text style={{ ...styles.text, fontSize: 20, fontWeight: '400' }}>
                We may collect and use Users personal information for the
                following purposes: To run and operate our Site We may need your
                information display content on the Site correctly. To
                personalize user experience, we may use information in the
                aggregate to understand how our Users as a group use the
                services and resources provided on our Site. To improve our
                Site, we may use feedback you provide to improve our products
                and services. To run a promotion, contest, survey or other Site
                Feature to send Users information they agreed to receive about
                topics we think will be of interest to them. To send periodic
                emails We may use the email address to respond to their
                inquiries, questions, and/or other requests.
              </Text>
            </VStack>
          </VStack>
        </ScrollView>
      </NativeBaseProvider>
    </View>
  );
};
export default Termsandcondition;
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
    justifyContent: 'space-between',
  },
  text: {
    fontFamily: 'robotoRegular',
    fontWeight: '600',
    fontSize: 26,
    textAlign: 'center',
    marginTop: '5%',
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
});
