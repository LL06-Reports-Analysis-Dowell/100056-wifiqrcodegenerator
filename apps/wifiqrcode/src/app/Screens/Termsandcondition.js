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
  Text,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import Header from '../components/Header';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
import Colors from '../../Utils/Colors';
const Termsandcondition = ({ navigation }) => {
  return (
    <ImageBackground
      style={{ ...styles.conatainer }}
      source={require('../Images/home.png')}
    >
      <StatusBar style="dark" />

      <Header
        Title="Terms & Conditions

"
      />

      <View style={{ ...styles.subcont, marginTop: '5%' }}>
        <ScrollView
          style={{
            flex: 1,
            backgroundColor: '#fff',
            borderWidth: 1,
            borderRadius: 10,
            borderColor: Colors.Green,
          }}
        >
          <View
            style={{ ...styles.subcont, marginTop: '5%', paddingBottom: '5%' }}
          >
            <Text style={styles.text}>Terms & Conditions</Text>
            <Text style={styles.text1}>
              The information contained in this App is for general information
              purposes only. The materials on this App may contain inaccuracies
              and typographical errors and while we endeavor to keep the
              information up to date and correct, we make no representations or
              warranties of any kind, express or implied, about the
              completeness, accuracy, reliability, suitability or availability
              with respect to the App or the information, products, services, or
              related graphics contained on the App for any purpose. Any
              reliance you place on such information is therefore strictly at
              your own risk. Dowell reserves the right, in its sole discretion,
              to correct any error or omission in any portion of the site.
              Dowell may make any other changes to the site, the materials, and
              the products, programs, services, or prices described in this App
              at any time without notice. The information, materials, and the
              software made available on this App, are provided "As Is" without
              any representation or warranty, express or implied, of any kind,
              including, but not limited to, warranties of merchantability,
              non-infringement, or fitness for any particular purpose, some
              jurisdictions do not allow for the exclusion of implied
              warranties, so the above exclusions may not apply to you. In no
              event will we be liable for any loss or damage including without
              limitation, indirect or consequential loss or damage, or any loss
              or damage whatsoever arising from loss of data or profits arising
              out of, or in connection with, the use of this App. Through this
              App, you are able to link to other Apps which are not under the
              control of Dowell. We have no control over the nature, content,
              and availability of those sites. The inclusion of any links does
              not necessarily imply a recommendation or endorse the views
              expressed within them. Every effort is made to keep the App up and
              running smoothly. However, Dowell takes no responsibility for, and
              will not be liable for, the App being temporarily unavailable due
              to technical issues beyond our control.{'\n'}
              {'\n'}
              <Text>
                You are solely responsible for any consequences, losses, or
                damages that we may directly or indirectly incur or suffer due
                to any unauthorized activities conducted by you, as explained
                above, and may incur criminal or civil liability.
              </Text>
            </Text>
          </View>
        </ScrollView>
        <View
          style={{
            flex: 0.2,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* <AntDesign name="infocirlceo" size={30} color={Colors.Yellow} /> */}

          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{ marginLeft: 'auto' }}
          >
            <View
              style={{
                width: 50,
                height: 50,
                borderRadius: 30,
                borderWidth: 2,
                borderColor: Colors.Green,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Ionicons name="chevron-back" size={30} color={Colors.Green} />
            </View>
            <Text style={styles.text2}>Back</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Termsandcondition;
const styles = StyleSheet.create({
  conatainer: {
    flex: 1,
  },
  subcont: {
    width: '90%',
    flex: 1,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  maincont: {
    paddingBottom: '20%',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 15,
    color: Colors.Gray,
  },
  text1: {
    marginTop: '2%',
    fontSize: 12,
    color: Colors.Gray,
  },
  text2: {
    marginTop: '2%',
    fontSize: 11,
    color: Colors.Gray,
    textAlign: 'center',
  },
});
