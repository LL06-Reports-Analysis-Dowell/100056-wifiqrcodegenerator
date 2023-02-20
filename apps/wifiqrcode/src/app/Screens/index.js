import { Alert, ActivityIndicator } from 'react-native';
import React, { useRef, useEffect } from 'react';
import { WebView } from 'react-native-webview';

const Index = ({ navigation }) => {
  const session_id = 'ayaquq6jdyqvaq9h6dlm9ysu3wkykyx0ssdfs';
  const URL = `https://100087.pythonanywhere.com/legalpolicies/FB1010000000001665306290565391/app-privacy-policy/policies/?redirect_url=http://127.0.0.1:8000/callbackurl&session_id=${session_id}`;

  const webViewRef = useRef();
  const NavigationHandler = async ({ url }) => {
    console.log(url, 'URL');
    try {
      if (url == `http://127.0.0.1:8000/callbackurl`) {
        navigation.navigate('Loading');
      }
    } catch (error) {
      Alert.alert('Error message', `${error}`);
    }
  };

  return (
    <>
      <WebView
        ref={webViewRef}
        source={{
          uri: URL,
        }}
        startInLoadingState
        onNavigationStateChange={NavigationHandler}
      />
    </>
  );
};

export default Index;
