import {Pressable, Text, View} from 'react-native';
import styles from './Filters.styles';
import {useNavigation} from '@react-navigation/native';

/**
 * Filters component for the product list screen header to navigate to the filters screen
 * @returns {JSX.Element} Filters component
 */
const Filters = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.wrapper}>
      <View style={styles.filter}>
        <Text style={styles.filter.text}>Filters:</Text>

        <Pressable
          style={styles.filter.button}
          onPress={() => navigation.navigate('Filters')}>
          <Text style={styles.filter.button.text}>Select Filter</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Filters;
