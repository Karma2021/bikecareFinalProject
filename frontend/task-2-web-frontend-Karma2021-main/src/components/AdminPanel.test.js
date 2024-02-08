import React from 'react';
import { render } from '@testing-library/react';
import AdminPanel from './AdminPanel';

describe('AdminPanel Component', () => {
  test('renders admin panel title', () => {
    const { getByText } = render(<AdminPanel />);
    
    // Check if the admin panel title is rendered
    const adminPanelTitle = getByText('Admin Panel');
    expect(adminPanelTitle).toBeInTheDocument();
  });
});
