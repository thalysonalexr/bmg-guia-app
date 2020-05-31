import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '7%',
    paddingVertical: '2%',
    width: '100%',
    justifyContent: 'space-between',
  },
  cloud: {
    width: 150,
    height: 82,
    resizeMode: 'contain',
  },
  cloudContent: {
    fontSize: 10,
    textAlign: 'center',
    color: '#7F878A',
    marginTop: 30,
  },
  arrowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrow: {
    width: 75,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrowContent: {
    fontSize: 14,
    textAlign: 'center',
    color: '#FCFCFC',
  },
});
