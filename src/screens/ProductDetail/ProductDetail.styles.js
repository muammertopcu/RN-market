import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 10,
  },
  image: {
    height: 225,
  },
  name: {
    fontSize: 24,
    fontWeight: '700',
    marginVertical: 10,
  },
  description: {
    fontSize: 14,
    fontWeight: '300',
    paddingBottom: 15,
  },
  footer: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  price: {
    flex: 1,

    title: {
      color: '#2A59FE',
      fontWeight: '300',
      fontSize: 16,
    },
    value: {
      fontSize: 16,
      fontWeight: '700',
    },
  },
  button: {
    flex: 1,
  },
});
