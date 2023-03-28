import {Pressable, Text, View} from 'react-native';
import styles from './RadioButton.styles';

/**
 * Radio button component
 * @param label {string} - label of the radio button (required)
 * @param value {string} - value of the radio button (should be unique) (required)
 * @param checked {boolean} - is radio button checked (required)
 * @param onChange {function} - function to call when radio button is pressed (required)
 * @param style {object} - style object to override default styles (optional)
 * @returns {JSX.Element} - radio button component
 */
const RadioButton = ({label, value, checked, onChange, style}) => {
  return (
    <Pressable
      onPress={() => onChange(value)}
      style={{...styles.wrapper, ...style}}>
      <View style={styles.radio}>
        {checked && <View style={styles.checked} />}
      </View>
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
};

export default RadioButton;
