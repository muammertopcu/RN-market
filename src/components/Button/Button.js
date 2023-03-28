import {Text, TouchableOpacity} from 'react-native';
import styles from './Button.styles';

/**
 * Button component with onPress and title props and style prop for custom styling
 * @param onPress - onPress function for the button component
 * @param title - title for the button component (default is 'Button') - optional
 * @param style - style for the button component - optional (default is {})
 * @returns {JSX.Element} - Button component
 */
const Button = ({onPress, title, style}) => {
  return (
    <TouchableOpacity
      testID={'button'}
      style={{...styles.wrapper, ...style}}
      onPress={onPress}>
      <Text style={styles.title}>{title || 'Button'}</Text>
    </TouchableOpacity>
  );
};

export default Button;
