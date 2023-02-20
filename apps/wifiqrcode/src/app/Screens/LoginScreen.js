import React from 'react';
import { useState, useEffect, useRef } from 'react';

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
  SafeAreaView,
  ActivityIndicator,
  BackHandler,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { WebView } from 'react-native-webview';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

import Header from '../components/Header';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
import Colors from '../../Utils/Colors';
const LoginScreen = ({ navigation }) => {
  const webViewRef = useRef();
  const runFirst = `window.ReactNativeWebView.postMessage("this is message from web");`;
  useEffect(() => {
    CheckLogin();
  }, []);
  const [Loading, setloading] = useState(false);
  const CheckLogin = async () => {
    const value = await AsyncStorage.getItem('@Session_id');
    if (value !== null) {
      console.log(value);
      Alert.alert(
        'Already Login !',
        'User Is already login no need to login again',
        [
          {
            text: 'Ok',
            onPress: () => navigation.goBack(),
          },
        ]
      );
    } else {
      console.log(value);
    }
  };

  const displaySpinner = () => {
    return (
      <View
        style={{ flex: 1, justifyContent: 'center', backgroundColor: '#fff' }}
      >
        <ActivityIndicator size="large" />
        <Text
          style={{
            fontSize: 15,
            fontStyle: 'italic',
            color: Colors.Gray,
            textAlign: 'center',
            marginTop: '10%',
          }}
        >
          Loading ....
        </Text>
      </View>
    );
  };
  const onNavigationStateChange = async (event) => {
    console.log(event.url);
    let url = event.url;
    myGeeks(url);

    // await StoreData(userinormation);
  };
  const myGeeks = (data) => {
    if (data.length >= 95) {
      setloading(false);
      var str = `${data}`;
      let result = str.substr(-32, 32);

      let url = JSON.stringify(result);
      StoreData(url);
      console.log(result);
    } else {
      console.log(data);
    }
  };
  const StoreData = async (Sessionid) => {
    try {
      await AsyncStorage.setItem('@Session_id', Sessionid);

      console.log(Sessionid);
    } catch (e) {
      // saving error
      Alert.alert('Network Error');
    }
  };

  const GetUserInfo = async (data) => {
    const getdata = {
      session_id: data,
    };
    axios
      .post('https://100014.pythonanywhere.com/api/userinfo/', getdata)
      .then((res) => {
        console.log(res.data);

        let userid = JSON.stringify(res.data.userinfo.userID);
      })
      .catch((e) => {
        console.log(e);
        setloading(false);
      });
  };

  return (
    <ImageBackground
      style={{ ...styles.conatainer }}
      source={require('../Images/home.png')}
    >
      <StatusBar style="dark" />

      <Header Title="Login" />
      {Loading ? (
        <View style={{ marginTop: '50%', alignSelf: 'center' }}>
          <ActivityIndicator size="large" />
          <Text
            style={{
              fontSize: 15,
              fontStyle: 'italic',
              color: Colors.Gray,
            }}
          >
            Loading....
          </Text>
        </View>
      ) : (
        <View style={{ ...styles.subcont, marginTop: '5%' }}>
          <SafeAreaView
            style={{
              flex: 1,
              backgroundColor: '#fff',
            }}
          >
            <WebView
              originWhiteList={['*']}
              source={{
                uri: 'https://100014.pythonanywhere.com/en-gb/?redirect_url=com.wifiqrcode',
              }}
              startInLoadingState={true}
              ref={webViewRef}
              renderLoading={() => {
                return displaySpinner();
              }}
              injectedJavaScript={runFirst}
              onNavigationStateChange={(event) =>
                onNavigationStateChange(event)
              }
            />
          </SafeAreaView>
          <View
            style={{
              flex: 0.15,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            {/* <AntDesign name="infocirlceo" size={30} color={Colors.Yellow} /> */}

            {/* <TouchableOpacity
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
          </TouchableOpacity> */}
          </View>
        </View>
      )}
    </ImageBackground>
  );
};

export default LoginScreen;
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
