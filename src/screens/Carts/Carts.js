import {FlatList, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {Button, CartItem} from '../../components';
import {Fragment} from 'react';
import styles from './Carts.styles';

const Carts = () => {
  const {items} = useSelector(state => state.cart);

  const getTotalPrice = () => {
    return items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  return (
    <Fragment>
      <FlatList
        data={items}
        renderItem={({item}) => <CartItem item={item} />}
        keyExtractor={item => item.id}
        contentContainerStyle={{flex: 1}}
      />

      <View style={styles.footer}>
        <View style={styles.total}>
          <Text style={styles.total.text}>Total</Text>
          <Text style={styles.total.value}>{getTotalPrice()}₺</Text>
        </View>

        <Button title="Complete" style={styles.button} />
      </View>
    </Fragment>
  );
};

export default Carts;
