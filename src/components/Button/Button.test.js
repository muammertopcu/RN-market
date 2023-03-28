import {fireEvent, render} from '@testing-library/react-native';
import Button from './Button';

test('should render the button', () => {
  const comp = render(<Button />);
  const button = comp.getByTestId('button');
  expect(button).toBeTruthy();
});

test('should trigger onPress', () => {
  const mockFn = jest.fn();
  const comp = render(<Button onPress={mockFn} />);
  const button = comp.getByTestId('button');
  fireEvent(button, 'press');
  expect(mockFn).toHaveBeenCalled();
});
