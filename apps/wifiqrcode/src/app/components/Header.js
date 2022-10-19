import React from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  View,
  Image,
} from 'react-native';

import Colors from '../../Utils/Colors';

const Header = ({ style, onPress, Title, Contextstyle }) => {
  return (
    <View style={[styles.container, style]}>
      <View
        style={{
          flexDirection: 'row',
          marginTop: '9%',
          alignItems: 'center',
          justifyContent: 'space-between',
          flex: 1,
        }}
      >
        <Text style={[styles.Text, Contextstyle]}>{Title}</Text>
        <Image
          source={require('../Images/Logo.png')}
          style={{
            width: 50,
            height: 50,
          }}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

export default Header;
const styles = StyleSheet.create({
  container: {
    width: '95%',
    flex: 0.1,
    borderBottomWidth: 2,
    borderColor: Colors.Green,
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: '2%',
    justifyContent: 'space-between',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  Text: {
    fontSize: 20,
    fontStyle: 'italic',
    color: Colors.Gray,
  },
});
