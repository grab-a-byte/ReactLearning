import React from 'react';
import { render } from '@testing-library/react';
import { App } from './App';

test('renders to-do header', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText("To-Do");
  expect(linkElement).toBeInTheDocument();
});