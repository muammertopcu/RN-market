import {TextInput, View} from 'react-native';
import styles from './Search.styles';
import {SearchIcon} from '../../assets/svg';

/**
 * Search component for the HomeScreen component - contains a TextInput for searching
 * @param onSubmit - onSubmit function for the TextInput component - required
 * @returns {JSX.Element} - Search component
 */
const Search = ({onSubmit}) => {
  return (
    <View style={styles.wrapper}>
      <TextInput
        style={styles.input}
        testID={'search'}
        onSubmitEditing={({nativeEvent: {text}}) => onSubmit(text)}
        placeholder={'Search'}
      />
      <View style={styles.icon}>
        <SearchIcon />
      </View>
    </View>
  );
};

export default Search;
