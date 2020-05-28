import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight + 20,
  },
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listDreams: {
    width: '100%',
  },
});
