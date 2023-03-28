import {NavigationContainer} from '@react-navigation/native';
import MainNavigator from './MainNavigator';

export default function Navigator() {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
}
