import { StyleSheet } from 'react-native';
import colors from '../components/colors';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    paddingHorizontal: 15,
    width: width,
    backgroundColor: 'white',
    height: height,
  },
  introLogoTop: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  topLogo: {
    width: 148,
    height: 101,
  },
  titlesWrapper: {
    marginTop: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titlesTitle: {
    color: colors.textDark,
    fontFamily: 'InriaSans-Bold',
    fontSize: 32,
    textAlign: 'center',
  },
  policyWrapper: {
    flexDirection: 'row',
    marginTop: 20,
    marginHorizontal: 30,
    justifyContent: 'center',
    alignItems: 'center',
    // flexWrap: 'wrap',
  },
  checkbox: {
    // alignSelf: 'center',
    marginBottom: 10,
  },
  policyText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 15,
    color: colors.textDark,
  },

  policyTextLink: {
    color: colors.primary,
    textDecorationLine: 'underline',
    paddingLeft: 3,
  },

  inputsContainer: {
    width: '100%',
    marginTop: 60,
  },

  passwordInputsContainer: {
    backgroundColor: '#D9D9D9',
    borderColor: '#33585858',
    borderWidth: 1,
    borderRadius: 15,
    width: '100%',
    padding: 2,
    height: 57,
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 17,
  },

  inputStyle: {
    fontSize: 20,
    width: '90%',
    textDecorationLine: 'none',
  },

  getStarted: {
    marginTop: 45,
    backgroundColor: colors.primary,
    borderRadius: 15,
    // paddingVertical: 12,
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    height: 51,
    elevation: 3,
  },
  getStartedText: {
    color: 'white',
    fontFamily: 'Roboto-Medium',
    fontSize: 26,
    alignItems: 'center',
  },
  errors: {
    fontSize: 14,
    color: 'red',
    fontWeight: 'bold',
    marginBottom: 3,
    marginLeft: 10,
  },
  alertMessageText: {
    fontSize: 18,
    color: colors.textDark,
    fontFamily: 'roboto',
    paddingHorizontal: 20,
    paddingTop: 20,
    marginBottom: 'auto',
  },
  alertButtonsConatainer: {
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-between',
    alignSelf: 'flex-end',
  },
  alertButton: {
    backgroundColor: colors.primary,
    borderRadius: 7,
    marginRight: 23,
  },
  alertButtonText: {
    color: 'white',
    padding: 10,
    fontFamily: 'roboto',
  },
  popup: {
    backgroundColor: 'white',
    width: '98.5%',
    marginHorizontal: '1.5%',
    height: '35%',
    overflow: 'hidden',
    zIndex: 10,
    borderRadius: 15,
    justifyContent: 'space-between',
    paddingBottom: 13,
  },
  alertHeader: {
    height: 45,
    width: '100%',
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  alertHeaderText: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
    fontFamily: 'roboto',
  },
});

export default styles;
