import {createStackNavigator} from '@react-navigation/stack';
import {ProductDetail, Products, Filters} from '../screens';
import ArrowBackIcon from '../assets/svg/ArrowBackIcon';

const Stack = createStackNavigator();

const ProductNavigator = () => {
  const options = {
    headerTitleStyle: {
      color: '#fff',
      fontSize: 24,
      fontWeight: '800',
    },
    headerStyle: {backgroundColor: '#2A59FE'},
    cardStyle: {backgroundColor: '#fff'},
    headerBackImage: () => <ArrowBackIcon />,
    headerBackTitleVisible: false,
    headerLeftContainerStyle: {paddingLeft: 10},
    headerRightContainerStyle: {paddingRight: 10},
  };

  return (
    <Stack.Navigator screenOptions={options}>
      <Stack.Screen
        name="ProductList"
        component={Products}
        options={{title: 'E-Market'}}
      />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
      <Stack.Screen
        name={'Filters'}
        component={Filters}
        options={{
          presentation: 'modal',
          title: 'Filters',
          headerStyle: {
            backgroundColor: '#fff',
            shadowOffset: {width: 0, height: 3},
            shadowOpacity: 0.5,
            shadowRadius: 3.84,
            elevation: 5,
          },
          headerTitleStyle: {color: '#000', fontSize: 20, fontWeight: '300'},
          headerBackImage: () => <ArrowBackIcon color={'#000'} />,
        }}
      />
    </Stack.Navigator>
  );
};

export default ProductNavigator;
