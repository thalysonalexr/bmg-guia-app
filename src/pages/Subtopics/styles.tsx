import { StyleSheet, Dimensions } from 'react-native';
import { selectMarginTop } from '../Home/styles';

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
    marginTop: selectMarginTop(Dimensions.get('window').width),
  },
  mascot: {
    width: '100%',
    height: 120,
    alignItems: 'flex-end',
  },
  mascotMessage: {
    color: '#7F878A',
    fontSize: 12,
    width: 110,
    marginTop: 20,
    marginRight: 40,
    textAlign: 'center',
  },
  containerSubtopics: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subtopics: {
    backgroundColor: '#F48222',
    borderRadius: 20,
    padding: '5%',
    width: '46%',
    height: 120,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    margin: '2%',
  },
});
