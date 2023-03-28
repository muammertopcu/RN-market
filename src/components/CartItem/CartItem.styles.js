import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 10,
    margin: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    fontSize: 14,
  },
  price: {
    color: '#2A59FE',
    fontSize: 12,
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantity: {
    paddingHorizontal: 14,
    paddingVertical: 12,
    backgroundColor: '#2A59FE',
    color: '#FFF',
  },
  decrement: {
    backgroundColor: 'rgba(204,204,204,0.30)',
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  increment: {
    backgroundColor: 'rgba(204,204,204,0.30)',
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
});
