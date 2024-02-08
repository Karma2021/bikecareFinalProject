import React from 'react';
import { render } from '@testing-library/react';
import Album from './Album';

describe('Album Component', () => {
  test('renders photo gallery and images', () => {
    const { getByText, getAllByAltText } = render(<Album />);

    // Check if the photo gallery heading is rendered
    expect(getByText('PHOTO GALLERY')).toBeInTheDocument();

    // Check if all four images are rendered
    const images = getAllByAltText(/(\d)|about/i); // Regular expression to match '1', '2', '3', 'about'
    expect(images).toHaveLength(4); // Check if there are exactly 4 images
  });
});
