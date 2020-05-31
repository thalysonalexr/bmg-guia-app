import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  containerQuestion: {
    width: '100%',
  },
  containerInput: {
    flexDirection: 'row',
  },
  questionContent: {
    fontSize: 14,
    textAlign: 'left',
    width: '100%',
    color: '#7F878A',
    marginVertical: 10,
  },
  buttonYesOrNot: {
    flex: 2,
    borderRadius: 7,
    padding: '2%',
  },
  buttonYesOrNotContent: {
    fontSize: 14,
    color: '#FCFCFC',
    textAlign: 'center',
  },
  buttonActive: {
    backgroundColor: '#F48222',
  },
  buttonDisabled: {
    backgroundColor: '#7F878A',
  },
});
