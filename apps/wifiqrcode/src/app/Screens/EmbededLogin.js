import React, { useState } from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Pressable,
  Linking,
} from 'react-native';

import CheckBox from '@react-native-community/checkbox';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Modal from 'react-native-modal';

import styles from '../components/style';
import { useEffect } from 'react';

const EmbededLogins = ({ route, navigation }) => {
  const [agree, setAgree] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [date, setDate] = useState(null);

  const fetchdata = async () => {
    const data = await AsyncStorage.getItem('previouslyAgreedDate');
    const iAgree = JSON.parse(await AsyncStorage.getItem('iAgree'));
    setDate(data);
    setAgree(iAgree);
    console.log(data);
    console.log(iAgree);
  };
  useEffect(() => {
    fetchdata();
  }, [agree, date]);

  useEffect(() => {}, []);
  return (
    <>
      {date && (
        <Modal
          propagateSwipe
          isVisible={isModalVisible}
          animationIn="slideInRight"
          animationOut="slideOutRight"
          animationInTiming={600}
          animationOutTiming={400}
          avoidKeyboard={true}
          backdropTransitionOutTiming={0}
          onBackdropPress={() => setModalVisible(false)}
          onBackButtonPress={() => setModalVisible(false)}
        >
          <View style={styles.popup}>
            <View style={styles.alertHeader}>
              <Text style={styles.alertHeaderText}>Message</Text>
            </View>
            <Text
              style={styles.alertMessageText}
            >{`You agreed to these terms and conditions on ${date}. Do you want to visit again?`}</Text>
            <View style={styles.alertButtonsConatainer}>
              <Pressable
                onPress={() => navigation.navigate('PrivacyPolicy')}
                style={styles.alertButton}
              >
                <Text style={styles.alertButtonText}>Visit anyway</Text>
              </Pressable>
              <Pressable
                onPress={() => setModalVisible(false)}
                style={styles.alertButton}
              >
                <Text style={styles.alertButtonText}>Skip</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      )}
      <ScrollView contentContainerStyle={styles.container}>
        <StatusBar backgroundColor="white" barStyle="dark-content" />

        <View style={styles.introLogoTop}>
          <Image
            source={require('..//Images/Logo.png')}
            style={styles.topLogo}
          />
        </View>

        <View style={styles.titlesWrapper}>
          <Text style={styles.titlesTitle}>DoWell Research Services</Text>
        </View>

        {/* Policy statrts here */}
        <View style={[styles.policyWrapper, { marginTop: 120 }]}>
          <CheckBox
            disabled={false}
            value={agree}
            onValueChange={() => {
              if (agree === false) {
                setDate(null);
              } else {
                setAgree(agree);
              }
            }}
            tintColor={agree ? '#078F04' : undefined}
            style={styles.checkbox}
          />
          <Text style={styles.policyText}>
            {' '}
            I agree to the{' '}
            <Text
              style={styles.policyTextLink}
              onPress={() => {
                date === null
                  ? navigation.navigate('PrivacyPolicy')
                  : setModalVisible(true);
              }}
            >
              privacy policy and terms & conditions
            </Text>
          </Text>
        </View>

        {/* Button */}
        <TouchableOpacity
          onPress={() => {
            Linking.openURL(
              'https://100014.pythonanywhere.com/?redirect_url=wifiqrcode'
            );
          }}
          style={[
            styles.getStarted,
            {
              backgroundColor: '#078F04',
            },
          ]}
          disabled={agree}
        >
          <Text style={styles.getStartedText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Createqrocde');
          }}
          style={[
            styles.getStarted,
            {
              backgroundColor: '#078F04',
            },
          ]}
        >
          <Text
            style={{
              color: '#fff',
              fontSize: 20,
              fontWeight: 'bold',
            }}
          >
            Go to HomeScreen
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </>
  );
};
export default EmbededLogins;
