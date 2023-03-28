import StarIcon from '../../assets/svg/StarIcon';
import {TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {toggleFavorite} from '../../store/slices/favoriteSlice';

/**
 * Favorite component for the ProductScreen component - used to add or remove the product from the favorites
 * @param product - product object for the Favorite component (id, name, price, image) - required
 * @returns {JSX.Element} - Favorite component
 */
const Favorite = ({product}) => {
  const {favorites} = useSelector(state => state.favorite);
  const dispatch = useDispatch();

  /**
   * Toggle the product in the favorites and dispatch the action to the store
   * @returns {any} - dispatch action
   */
  const clickHandler = () => dispatch(toggleFavorite(product));

  /**
   * Check if the product is in the favorites or not and return the result as a boolean value (true or false)
   * @returns {boolean} - true or false
   */
  const isFavorite = favorites.find(i => i.id === product.id);

  return (
    <TouchableOpacity
      testID="favorite"
      onPress={clickHandler}
      style={{position: 'absolute', top: 15, right: 15}}>
      <StarIcon isFavorite={!!isFavorite} />
    </TouchableOpacity>
  );
};

export default Favorite;
