import {FlatList, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {ProductCard} from '../../components';

const Favorites = () => {
  const {favorites} = useSelector(state => state.favorite);

  return (
    <FlatList
      data={favorites}
      renderItem={({item}) => <ProductCard product={item} />}
      ListEmptyComponent={<Text>Favorites is Empty</Text>}
    />
  );
};

export default Favorites;
