import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radio: {
    width: 16,
    height: 16,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#2A59FE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checked: {
    width: 8,
    height: 8,
    borderRadius: 8,
    backgroundColor: '#2A59FE',
  },
  label: {
    marginLeft: 5,
    fontSize: 16,
    fontWeight: '300',
  },
});
