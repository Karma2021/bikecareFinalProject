import React from 'react';
import { render } from '@testing-library/react';
import ServiceH from './ServiceH';

test('renders ServiceH component', () => {
  const { getByText } = render(<ServiceH />);

  const headerElement = getByText('SERVICES');
  
  // Assert that the header element is rendered
  expect(headerElement).toBeInTheDocument();
});
