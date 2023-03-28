import {Image, ScrollView, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Fragment, useEffect, useState} from 'react';
import {SERVICE_URL} from '@env';
import {Button, Loading} from '../../components';
import styles from './ProductDetail.styles';
import {useDispatch} from 'react-redux';
import {addItem} from '../../store/slices/cartSlice';
import axios from 'axios';
import Favorite from '../../components/Favorite';

const ProductDetail = ({route}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {id, name} = route.params;
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios.get(SERVICE_URL + `/products/${id}`).then(response => {
      setData(response.data);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    navigation.setOptions({title: name});
  }, [name, navigation]);

  const addCart = () => dispatch(addItem(data));

  if (loading) {
    return <Loading />;
  }

  return (
    <Fragment>
      <ScrollView style={styles.wrapper}>
        <Image source={{uri: data.image}} style={styles.image} />
        <Favorite product={data} />
        <Text style={styles.name}>{data.name}</Text>
        <Text style={styles.description}>{data.description}</Text>
      </ScrollView>

      <View style={styles.footer}>
        <View style={styles.price}>
          <Text style={styles.price.title}>Price</Text>
          <Text style={styles.price.value}>{data.price} ₺</Text>
        </View>

        <Button title={'Add to cart'} style={styles.button} onPress={addCart} />
      </View>
    </Fragment>
  );
};

export default ProductDetail;
