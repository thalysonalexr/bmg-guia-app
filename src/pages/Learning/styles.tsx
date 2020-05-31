import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 15,
  },
  card: {
    borderRadius: 20,
    padding: '4%',
    backgroundColor: '#fcfcfc',
    marginBottom: 15,
    overflow: 'hidden',
  },
  title: {
    fontSize: 18,
    color: '#3F3C32',
    textAlign: 'left',
    marginBottom: 15,
  },
  content: {
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'justify',
    color: '#3F3C32',
  },
  buttonQuestions: {
    flex: 2,
    marginHorizontal: 15,
    marginBottom: 15,
    borderRadius: 20,
    padding: '4%',
    backgroundColor: '#F48222',
    elevation: 5,
    maxHeight: 60,
  },
  buttonQuestionsContent: {
    fontSize: 18,
    color: '#FCFCFC',
    textAlign: 'center',
  },
});
