import { StyleSheet, Dimensions } from 'react-native';

export const fullSize = 440;

export default StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#fcfcfc',
    padding: '4%',
    marginBottom: 15,
    marginHorizontal: 15,
    borderRadius: 20,
    height: 'auto',
    maxHeight: 400,
    overflow: 'hidden',
  },
  containerData: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    overflow: 'hidden',
    marginBottom: 10,
  },
  containerMascot: {
    width: Dimensions.get('window').width > fullSize ? 130 : 115,
  },
  containerInfo: {
    flex: 2,
    marginLeft: 10,
    minHeight: Dimensions.get('window').width > fullSize ? 250 : 215,
    justifyContent: 'space-between',
  },
  buttonLearn: {
    backgroundColor: '#F48222',
    borderRadius: 20,
    padding: Dimensions.get('window').width > fullSize ? 12 : 7,
    alignItems: 'center',
  },
  buttonLearnContent: {
    color: '#fcfcfc',
    textAlign: 'center',
    fontSize: Dimensions.get('window').width > fullSize ? 20 : 16,
  },
  dreamText: {
    fontFamily: 'Comfortaa-Bold',
    textAlign: 'center',
    color: '#7F878A',
    flex: 1,
    marginVertical: '24%',
  },
  containerChallenge: {
    borderStyle: 'solid',
    borderColor: '#7F878A',
    borderWidth: 2,
    borderRadius: 7,
    padding: Dimensions.get('window').width > fullSize ? 12 : 7,
    marginVertical: 10,
  },
  challengeTitle: {
    textAlign: 'center',
    fontSize: Dimensions.get('window').width > fullSize ? 18 : 14,
  },
  challengeDescription: {
    textAlign: 'center',
    fontSize: Dimensions.get('window').width > fullSize ? 14 : 12,
  },
  containerInvestment: {
    backgroundColor: '#F48222',
    borderRadius: 7,
    padding: Dimensions.get('window').width > fullSize ? 12 : 7,
  },
  investmentDescription: {
    textAlign: 'center',
    color: '#fcfcfc',
    fontSize: Dimensions.get('window').width > fullSize ? 14 : 12,
  },
});
