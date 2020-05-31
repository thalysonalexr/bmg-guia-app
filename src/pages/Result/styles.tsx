import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  title: {
    fontSize: 22,
    textTransform: 'uppercase',
    textAlign: 'center',
    color: '#FCFCFC',
    marginBottom: 20,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fcfcfc',
    padding: '4%',
    marginBottom: 15,
    marginHorizontal: 15,
    borderRadius: 20,
    minHeight: 500,
    overflow: 'hidden',
    justifyContent: 'space-evenly',
  },
  inline: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  containerResult: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  result: {
    backgroundColor: '#F48222',
    borderRadius: 20,
    padding: '5%',
    width: '46%',
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
    margin: '2%',
    marginBottom: 20,
  },
  textContent: {
    color: '#FCFCFC',
    fontSize: 22,
  },
  containerDiffilcuty: {
    width: '100%',
    backgroundColor: '#F48222',
    borderRadius: 20,
    padding: 5,
  },
  textDifficulty: {
    textAlign: 'center',
  },
  containerMascot: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  mascot: {
    resizeMode: 'contain',
    height: Dimensions.get('window').width > 440 ? 152 : 182,
  },
  buttonQuit: {
    flex: 2,
    marginHorizontal: 15,
    marginBottom: 15,
    borderRadius: 20,
    padding: '4%',
    backgroundColor: '#F48222',
    elevation: 5,
    maxHeight: 60,
  },
  buttonQuitContent: {
    fontSize: 18,
    color: '#FCFCFC',
    textAlign: 'center',
  },
});
