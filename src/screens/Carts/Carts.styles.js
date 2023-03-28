import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  total: {
    flex: 1,

    text: {
      fontSize: 14,
      color: '#2A59FE',
    },
    value: {
      fontSize: 14,
      fontWeight: 'bold',
    },
  },
  button: {
    flex: 1,
  },
});
