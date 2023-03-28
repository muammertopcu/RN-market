import {render} from '@testing-library/react-native';
import {Loading} from '../index';

test('should render Loading component', () => {
  const comp = render(<Loading />);
  expect(comp).toBeTruthy();
});
