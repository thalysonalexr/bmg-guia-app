import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#fcfcfc',
    padding: '4%',
    marginBottom: 15,
    marginHorizontal: 15,
    borderRadius: 20,
    height: 'auto',
    overflow: 'hidden',
  },
  card: {
    borderBottomColor: '#F48222',
  },
  title: {
    color: '#3F3C32',
    fontSize: 16,
    backgroundColor: '#DCDDDF',
    borderRadius: 7,
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
  buttonConfirm: {
    flex: 2,
    marginHorizontal: 15,
    marginBottom: 15,
    borderRadius: 20,
    padding: '4%',
    backgroundColor: '#F48222',
    elevation: 5,
    maxHeight: 60,
  },
  buttonConfirmContent: {
    fontSize: 18,
    color: '#FCFCFC',
    textAlign: 'center',
  },
});
