import { StyleSheet, Dimensions } from 'react-native';
import { selectMarginTop } from '../Home/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: selectMarginTop(Dimensions.get('window').width),
  },
  listDreams: {
    width: '100%',
  },
});
