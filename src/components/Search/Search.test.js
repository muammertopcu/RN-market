import {fireEvent, render} from '@testing-library/react-native';
import Search from './Search';

test('should render the search', () => {
  const comp = render(<Search />);
  const search = comp.getByTestId('search');
  expect(search).toBeTruthy();
});

test('should trigger onSubmit', () => {
  const onSubmit = jest.fn();
  const comp = render(<Search onSubmit={onSubmit} />);
  const search = comp.getByTestId('search');
  fireEvent(search, 'onSubmitEditing', {nativeEvent: {text: 'test'}});
  expect(onSubmit).toBeCalled();
});
