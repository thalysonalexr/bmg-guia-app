import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Dimensions.get('window').width > 374 ? 75 : 62,
  },
  listDreams: {
    width: '100%',
  },
});
