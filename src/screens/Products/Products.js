import {FlatList, View} from 'react-native';
import {SERVICE_URL} from '@env';
import {useEffect, useState} from 'react';
import {Filters, Loading, ProductCard, Search} from '../../components';
import axios from 'axios';

const Products = () => {
  const [config, setConfig] = useState({page: 1, limit: 12, name: ''});
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    getData();
  }, [config]);

  const getData = () => {
    setLoading(true);

    axios
      .get(
        SERVICE_URL +
          `/products?page=${config.page}&limit=${config.limit}&name=${config.name}`,
      )
      .then(response => {
        setData(prevState => [...(prevState || []), ...response.data]);
      })
      .finally(() => setLoading(false));
  };

  const nextPage = () => {
    !loading &&
      setConfig(prevState => ({...prevState, page: prevState.page + 1}));
  };

  const searchHandler = text => {
    setData(null);
    setConfig(prevState => ({...prevState, name: text, page: 1}));
  };

  return (
    <View>
      <Search onSubmit={searchHandler} />
      <Filters />
      <FlatList
        data={data}
        renderItem={({item}) => <ProductCard product={item} />}
        numColumns={2}
        keyExtractor={item => item.id}
        ListFooterComponent={loading && <Loading />}
        onEndReached={() => data?.length && nextPage()}
        contentContainerStyle={{paddingBottom: 120}}
      />
    </View>
  );
};

export default Products;
