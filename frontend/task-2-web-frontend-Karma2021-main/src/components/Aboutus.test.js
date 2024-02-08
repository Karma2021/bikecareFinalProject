import React from 'react';
import { render } from '@testing-library/react';
import Aboutus from './Aboutus';

describe('Aboutus Component', () => {
  test('renders about us content', () => {
    const { getByText, getByAltText } = render(<Aboutus />);

    // Check if the banner content is rendered
    expect(getByText('About Us')).toBeInTheDocument();
    expect(getByText('Know More About Us')).toBeInTheDocument();

    // Check if the about section content is rendered
    expect(getByText('BIKECARE')).toBeInTheDocument();
    expect(getByText('Online Service Booking')).toBeInTheDocument();

    // Check if the contributor section content is rendered
    expect(getByText('CONTRIBUTOR')).toBeInTheDocument();
    expect(getByText('Karma Palsang Lama')).toBeInTheDocument();
    expect(getByText('Founder / Developer')).toBeInTheDocument();

    // Check if the images are rendered
    const aboutusImage = getByAltText('About Us');
    const karmaImage = getByAltText('avater');
    expect(aboutusImage).toBeInTheDocument();
    expect(karmaImage).toBeInTheDocument();
  });
});
