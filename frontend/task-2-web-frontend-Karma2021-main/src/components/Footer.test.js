import { render } from '@testing-library/react';
import React from 'react';
import Footer from './Footer';

describe('Footer Component', () => {
    test('renders social icons and copyright', () => {
        const { getByText } = render(<Footer />);



        // Check if copyright text is rendered
        expect(getByText('© BIKECARE-Online Bike Service. All rights reserved 2023.')).toBeInTheDocument();
    });
});
