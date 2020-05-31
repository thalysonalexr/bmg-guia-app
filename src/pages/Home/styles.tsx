import { StyleSheet, Dimensions } from 'react-native';

export function selectMarginTop(margin: number) {
  if (margin >= 768) {
    return 120;
  } else if (margin >= 374) {
    return 75;
  }

  return 62;
}

export default StyleSheet.create({
  title: {
    fontSize: 22,
    textAlign: 'center',
    color: '#FCFCFC',
    marginTop: selectMarginTop(Dimensions.get('window').width),
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fcfcfc',
    padding: '4%',
    marginBottom: 15,
    marginHorizontal: 15,
    borderRadius: 20,
    overflow: 'hidden',
    marginTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  mascot: {
    resizeMode: 'contain',
    width: 280,
    height: 145,
    marginBottom: 20,
  },
  questionContent: {
    fontSize: 14,
    textAlign: 'left',
    width: '100%',
    color: '#7F878A',
    marginVertical: 10,
  },
  textInput: {
    width: '100%',
    height: 50,
    fontSize: 22,
  },
  containerNavigation: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 20,
  },
  buttonNavigation: {
    flex: 2,
    borderRadius: 20,
    backgroundColor: '#F48222',
    minHeight: 80,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
  buttonNavigationContent: {
    maxWidth: '80%',
    color: '#FCFCFC',
    textAlign: 'center',
    fontSize: 18,
    textTransform: 'uppercase',
  },
});
