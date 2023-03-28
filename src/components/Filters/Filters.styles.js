import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  wrapper: {
    paddingHorizontal: 20,
  },
  filter: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,

    text: {
      fontSize: 16,
      flex: 1,
    },

    button: {
      backgroundColor: '#D9D9D9',
      padding: 5,
      flex: 1,

      text: {
        fontSize: 13,
        textAlign: 'center',
      },
    },
  },
});
