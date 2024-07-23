import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Hello World React! title', () => {
  render(<App />);
  const textElement = screen.getByText(/Hello World React!/i);
  expect(textElement).toBeInTheDocument();
});
