import { render } from '@testing-library/react';
import React from 'react';
import Cover from './Cover';

describe('Cover Component', () => {
    test('renders header and button', () => {
        const { getByText } = render(<Cover />);

        // Check if the header text is rendered
        expect(getByText('BOOK YOUR SERVICE')).toBeInTheDocument();

        // Check if the button text is rendered
        expect(getByText('Book Now')).toBeInTheDocument();
    });
});
