import {ScrollView, Text, View} from 'react-native';
import {Button, CheckBox, RadioButton} from '../../components';
import {useState} from 'react';
import styles from './Filters.styles';
import {useNavigation} from '@react-navigation/native';

/**
 * Filters screen component to filter products based on brand, model and sort by options
 * @returns {JSX.Element} JSX Element of Filters screen component
 */
const Filters = () => {
  const navigation = useNavigation();
  const [filter, setFilter] = useState({
    sortBy: 'oldToNew',
    brand: [],
    model: [],
  });

  const sortBy = [
    {value: 'oldToNew', label: 'Old to new'},
    {value: 'newToOld', label: 'New to old'},
    {value: 'priceHighToLow', label: 'Price high to low'},
    {value: 'priceLowToHigh', label: 'Price low to high'},
  ];

  const brands = [
    {
      value: 'apple',
      label: 'Apple',
      model: ['iPhone 12', 'iPhone 11', 'iPhone 10'],
    },
    {
      value: 'samsung',
      label: 'Samsung',
      model: ['Galaxy S21', 'Galaxy S20', 'Galaxy S10'],
    },
    {
      value: 'xiaomi',
      label: 'Xiaomi',
      model: ['Redmi Note 10', 'Redmi Note 9', 'Redmi Note 8'],
    },
    {
      value: 'huawei',
      label: 'Huawei',
      model: ['P40', 'P30', 'P20'],
    },
    {
      value: 'oppo',
      label: 'Oppo',
      model: ['A53', 'A52', 'A51'],
    },
    {
      value: 'vivo',
      label: 'Vivo',
      model: ['V20', 'V19', 'V18'],
    },
    {
      value: 'realme',
      label: 'Realme',
      model: ['X7', 'X7 Pro', 'X50 Pro'],
    },
  ];

  /**
   * Check if filter value is checked in filter state based on type and value of filter item (brand or model)
   * @param value Value of filter item (brand or model)
   * @param type Type of filter item (brand or model)
   * @returns {boolean} True if filter value is checked in filter state, false otherwise
   */
  const isChecked = (value, type) => {
    return !!filter[type].some(item => item === value);
  };

  /**
   * Toggle filter value in filter state based on type and value of filter item (brand or model)
   * @param value Value of filter item (brand or model)
   * @param type Type of filter item (brand or model)
   */
  const toggleFilter = (value, type) => {
    if (isChecked(value, type)) {
      setFilter(prevState => ({
        ...prevState,
        [type]: prevState[type].filter(item => item !== value),
      }));
    } else {
      setFilter(prevState => ({
        ...prevState,
        [type]: [...prevState[type], value],
      }));
    }
  };

  /**
   * Get active models based on active brands in filter state or all models if no brand is selected in filter state
   * @returns {*[]} Array of active models
   */
  const getModels = () => {
    const activeModels = [];
    const activeBrands = filter.brand.length
      ? filter.brand
      : brands.map(item => item.value);

    activeBrands.forEach(brand => {
      const brandData = brands.find(item => item.value === brand);
      activeModels.push(...brandData.model);
    });

    return activeModels;
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.filters}>
        <Text style={styles.title}>Sort by</Text>
        {sortBy.map(item => (
          <RadioButton
            key={item.value}
            value={item.value}
            label={item.label}
            checked={filter.sortBy === item.value}
            onChange={() => setFilter(item.value)}
            style={styles.filterItem}
          />
        ))}
      </View>
      <View style={styles.separator} />
      <View style={styles.filters}>
        <Text style={styles.title}>Brand</Text>
        <ScrollView>
          {brands.map(item => (
            <CheckBox
              key={item.value}
              value={item.value}
              label={item.label}
              checked={isChecked(item.value, 'brand')}
              onChange={value => toggleFilter(value, 'brand')}
              style={styles.filterItem}
            />
          ))}
        </ScrollView>
      </View>
      <View style={styles.separator} />
      <View style={styles.filters}>
        <Text style={styles.title}>Model</Text>
        <ScrollView>
          {getModels().map(item => (
            <CheckBox
              key={item}
              value={item}
              label={item}
              checked={isChecked(item, 'model')}
              onChange={() => toggleFilter(item, 'model')}
              style={styles.filterItem}
            />
          ))}
        </ScrollView>
      </View>
      <Button
        title={'Apply'}
        onPress={() => navigation.goBack()}
        style={styles.button}
      />
    </View>
  );
};

export default Filters;
