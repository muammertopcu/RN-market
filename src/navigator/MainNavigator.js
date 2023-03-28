import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Carts, Favorites, Profile} from '../screens';
import {CartIcon, HomeIcon, Person, StarIcon} from '../assets/svg';
import ProductNavigator from './ProductNavigator';
import {useSelector} from 'react-redux';

const Tab = createBottomTabNavigator();

const MainNavigator = () => {
  const options = {
    tabBarShowLabel: false,
    title: 'E-Market',
    headerTitleStyle: {
      color: '#fff',
      fontSize: 24,
      fontWeight: '800',
    },
    headerStyle: {backgroundColor: '#2A59FE'},
  };
  const {items} = useSelector(state => state.cart);

  return (
    <Tab.Navigator
      screenOptions={options}
      sceneContainerStyle={{backgroundColor: '#fff'}}>
      <Tab.Screen
        name={'Home'}
        component={ProductNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => <HomeIcon focused={!!focused} />,
        }}
      />
      <Tab.Screen
        name={'Cart'}
        component={Carts}
        options={{
          tabBarIcon: ({focused}) => <CartIcon focused={!!focused} />,
          tabBarBadge: items.length,
          tabBarBadgeStyle: {display: items.length ? 'flex' : 'none'},
        }}
      />
      <Tab.Screen
        name={'Favorite'}
        component={Favorites}
        options={{
          tabBarIcon: ({focused}) => (
            <StarIcon
              focused={!!focused}
              outline={true}
              width={35}
              height={32}
            />
          ),
        }}
      />
      <Tab.Screen
        name={'Profile'}
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => <Person focused={!!focused} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default MainNavigator;
