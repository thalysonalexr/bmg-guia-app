import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#fcfcfc',
    padding: '4%',
    marginBottom: 20,
    marginHorizontal: 20,
    borderRadius: 20,
    elevation: 5,
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
    width: 115,
    minWidth: 115,
    maxWidth: 115,
  },
  containerInfo: {
    flex: 2,
    marginLeft: 10,
    minHeight: 215,
    justifyContent: 'space-between',
  },
  buttonLearn: {
    backgroundColor: '#F48222',
    borderRadius: 20,
    padding: 7,
    alignItems: 'center',
  },
  buttonLearnContent: {
    color: '#fcfcfc',
    textAlign: 'center',
    fontSize: 16,
  },
  dreamText: {
    fontFamily: 'Comfortaa-Bold',
    textAlign: 'center',
    color: '#7F878A',
    flex: 1,
    marginVertical: '20%',
  },
  containerChallenge: {
    borderStyle: 'solid',
    borderColor: '#7F878A',
    borderWidth: 2,
    borderRadius: 7,
    padding: 7,
    marginVertical: 10,
  },
  containerInvestment: {
    backgroundColor: '#F48222',
    borderRadius: 7,
    padding: 7,
  },
});
