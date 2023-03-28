import {Image, Text, TouchableOpacity} from 'react-native';
import styles from './ProductCard.styles';
import {Button} from '../index';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {addItem} from '../../store/slices/cartSlice';
import Favorite from '../Favorite';

/**
 * ProductCard component
 * @param product - product object for the ProductCard component (id, name, price, image) - required
 * @returns {JSX.Element} - ProductCard component
 */
const ProductCard = ({product}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {id, name, price, image} = product;

  /**
   * Navigate to the ProductDetail screen and pass the id and name of the product as params
   */
  const pressHandler = () => navigation.navigate('ProductDetail', {id, name});

  /**
   * Add the product to the cart and dispatch the action to the store
   * @returns {any} - dispatch action
   */
  const addCart = () => dispatch(addItem(product));

  return (
    <TouchableOpacity style={styles.wrapper} onPress={pressHandler}>
      <Image source={{uri: image}} style={{height: 150}} />
      <Favorite product={product} />
      <Text style={styles.price}>{price} ₺</Text>
      <Text style={styles.name} numberOfLines={2}>
        {name}
      </Text>
      <Button title={'Add to card'} style={styles.button} onPress={addCart} />
    </TouchableOpacity>
  );
};

export default ProductCard;
