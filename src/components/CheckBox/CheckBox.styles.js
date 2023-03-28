import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 18,
    height: 18,
    borderRadius: 3,
    borderWidth: 2,
    borderColor: '#2A59FE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checked: {
    width: 12,
    height: 12,
    borderRadius: 2,
    backgroundColor: '#2A59FE',
  },
  checkIcon: {
    position: 'absolute',
    width: 8,
    height: 5,
    borderRadius: 2,
    borderLeftColor: '#fff',
    borderLeftWidth: 2,
    borderBottomColor: '#fff',
    borderBottomWidth: 2,
    transform: [{rotate: '-45deg'}],
  },
  label: {
    marginLeft: 5,
    fontSize: 16,
    fontWeight: '300',
  },
});
