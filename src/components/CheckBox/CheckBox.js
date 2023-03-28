import {Pressable, Text, View} from 'react-native';
import styles from './CheckBox.styles';
import {Fragment} from 'react';

/**
 * CheckBox component
 * @param label {string} - label text for checkbox item (required)
 * @param checked {boolean} - checked state for checkbox item (required)
 * @param value {string} - value for checkbox item (required)
 * @param onChange {function} - function for checkbox item (required)
 * @param style {object} - style for checkbox item (optional)
 * @returns {JSX.Element} - CheckBox component
 */
const CheckBox = ({label, checked, value, onChange, style}) => {
  return (
    <Pressable
      style={{...styles.wrapper, ...style}}
      onPress={() => onChange(value)}>
      <View style={styles.checkbox}>
        {checked && (
          <Fragment>
            <View style={styles.checked} />
            <View style={styles.checkIcon} />
          </Fragment>
        )}
      </View>
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
};

export default CheckBox;
