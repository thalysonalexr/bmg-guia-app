import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: '7%',
    width: '100%',
    justifyContent: 'space-between',
  },
  avatar: {
    width: Dimensions.get('window').width > 500 ? 60 : 52,
    height: Dimensions.get('window').width > 500 ? 60 : 52,
    borderRadius: 52,
    marginRight: 10,
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonPrevious: {
    width: Dimensions.get('window').width > 500 ? 52 : 42,
    height: Dimensions.get('window').width > 500 ? 52 : 42,
    alignSelf: 'flex-end',
  },
  name: {
    fontSize: Dimensions.get('window').width > 500 ? 20 : 16,
  },
  account: {
    fontSize: Dimensions.get('window').width > 500 ? 14 : 12,
  },
});
