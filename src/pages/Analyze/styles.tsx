import { StyleSheet, Dimensions } from 'react-native';
import { selectMarginTop } from '../Home/styles';

export default StyleSheet.create({
  title: {
    fontSize: 22,
    textAlign: 'center',
    color: '#FCFCFC',
    marginTop: selectMarginTop(Dimensions.get('window').width),
  },
  subtitle: {
    fontSize: 16,
    color: '#7F878A',
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 14,
    color: '#7F878A',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 15,
    marginHorizontal: 15,
    marginTop: 20,
    flexDirection: 'column',
  },
  card: {
    backgroundColor: '#fcfcfc',
    borderRadius: 20,
    overflow: 'hidden',
    padding: '4%',
    width: '100%',
    marginBottom: 15,
  },
  mascot: {
    resizeMode: 'contain',
    width: 280,
    height: 145,
    marginBottom: 20,
  },
  message: {
    color: '#F48222',
    fontSize: 22,
    textAlign: 'center',
    marginVertical: 20,
    paddingVertical: '1%',
    lineHeight: Dimensions.get('window').width >= 768 ? 32 : 24,
  },
});
