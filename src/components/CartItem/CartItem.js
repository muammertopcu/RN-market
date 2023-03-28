import {Text, TouchableOpacity, View} from 'react-native';
import styles from './CartItem.styles';
import {useDispatch} from 'react-redux';
import {addItem, decrementItem} from '../../store/slices/cartSlice';

/**
 * CartItem component for the CartScreen component
 * @param item - item object for the CartItem component (name, price, quantity) - required
 * @returns {JSX.Element} - CartItem component
 */
const CartItem = ({item}) => {
  const dispatch = useDispatch();

  /**
   * Increment the quantity of the item in the cart by 1 and dispatch the action to the store
   * @returns {any} - dispatch action
   */
  const increment = () => dispatch(addItem(item));

  /**
   * Decrement the quantity of the item in the cart by 1 and dispatch the action to the store
   * @returns {any} - dispatch action
   */
  const decrement = () => dispatch(decrementItem(item));

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>{item.price}₺</Text>
      </View>

      <View style={styles.actions}>
        <TouchableOpacity style={styles.decrement} onPress={decrement}>
          <Text style={styles.decrement.text}>-</Text>
        </TouchableOpacity>

        <Text style={styles.quantity}>{item.quantity}</Text>

        <TouchableOpacity style={styles.increment} onPress={increment}>
          <Text>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartItem;
