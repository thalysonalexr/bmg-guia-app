import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '7%',
    paddingVertical: '2%',
    width: '100%',
    height: 95,
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
  containerTitle: {
    flex: 2,
  },
  title: {
    fontSize: 22,
    textTransform: 'uppercase',
    color: '#FCFCFC',
    textAlign: 'right',
  },
});
