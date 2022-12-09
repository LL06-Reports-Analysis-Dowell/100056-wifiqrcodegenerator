import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import Colors from '../../Utils/Colors';

const ScreenDividers = ({
  firstboxstyle,
  secondboxstyle,
  thirdboxstyle,
  forthboxstyle,
}) => {
  return (
    <View style={styles.Headerview}>
      <View>
        <View style={[styles.Box1, firstboxstyle]}>
          <Text style={styles.text}>1</Text>
        </View>
        <Text style={styles.text1}>Select{'\n'}Wifi</Text>
      </View>
      <Text style={styles.text2}> - -{'>'}</Text>
      <View>
        <View style={[styles.Box, secondboxstyle]}>
          <Text style={{ ...styles.text }}>2</Text>
        </View>
        <Text style={styles.text1}>Enter{'\n'}Credentials</Text>
      </View>
      <Text style={styles.text2}>- -{'>'}</Text>
      <View>
        <View style={[styles.Box, thirdboxstyle]}>
          <Text style={{ ...styles.text }}>3</Text>
        </View>
        <Text style={styles.text1}>Customized Qr Code</Text>
      </View>
      <Text style={styles.text2}>- -{'>'}</Text>
      <View>
        <View style={[styles.Box, forthboxstyle]}>
          <Text style={{ ...styles.text }}>4</Text>
        </View>
        <Text style={styles.text1}>Create{'\n'}Qr Code</Text>
      </View>
    </View>
  );
};

export default ScreenDividers;
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

  text: {
    fontSize: 20,
    color: '#fff',
  },
  text1: {
    fontSize: 10,
    color: Colors.Gray,
    fontStyle: 'italic',
    textAlign: 'center',
    position: 'absolute',
    top: 50,
    width: '110%',
  },
  text5: {
    fontSize: 10,
    color: Colors.Gray,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  text2: {
    fontSize: 20,
    color: Colors.Green,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  Headerview: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: '5%',
    alignSelf: 'center',
  },
  Box: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: Colors.Green,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginLeft: '5%',
  },
  Box1: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: Colors.Green,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  wifiview: {
    marginTop: '5%',
    alignItems: 'center',
    flexDirection: 'row',
    height: 50,
    backgroundColor: '#fff',
  },
});
