import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fcfcfc',
    padding: '4%',
    marginBottom: 15,
    marginHorizontal: 15,
    borderRadius: 20,
    overflow: 'hidden',
    marginTop: Dimensions.get('window').width > 374 ? 75 : 62,
  },
  containerTopics: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topics: {
    backgroundColor: '#F48222',
    borderRadius: 20,
    padding: '5%',
    width: '46%',
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    margin: '2%',
  },
  mascot: {
    resizeMode: 'contain',
    width: Dimensions.get('window').width > 440 ? 130 : 115,
    maxHeight: 240,
  },
});
