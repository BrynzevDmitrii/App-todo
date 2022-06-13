import { render, screen } from '@testing-library/react';
import Form from './Form';

test('renders form component', () => {
  render(<Form />);
  
  expect(screen.getAllByRole('textbox'));
  expect(screen.getAllByRole('button'));
});
