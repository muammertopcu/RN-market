import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  wrapper: {
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 7,
    marginHorizontal: 10,
    flex: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  price: {
    fontWeight: '500',
    fontSize: 14,
    color: '#2A59FE',
    marginVertical: 15,
  },
  name: {
    fontWeight: '500',
    fontSize: 14,
    color: '#000',
    marginBottom: 15,
  },
  button: {
    marginTop: 'auto',
  },
});
