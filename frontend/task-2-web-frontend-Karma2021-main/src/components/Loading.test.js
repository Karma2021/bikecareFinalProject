import React from 'react';
import { render } from '@testing-library/react';
import Spinner from './Loading';

describe('Spinner Component', () => {
  test('renders a spinner component', () => {
    const { container } = render(<Spinner />);

    // Check if the Spin component from Ant Design is rendered
    const spinElement = container.querySelector('.ant-spin');
    expect(spinElement).toBeInTheDocument();

    // Check if the Spin component contains the Spin element
    const antSpinElement = container.querySelector('.ant-spin');
    expect(antSpinElement).toContainElement(spinElement);
  });
});
