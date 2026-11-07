import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App routing', () => {
  it('renders the landing hero at the root route', () => {
    window.history.pushState({}, '', '/');
    render(<App />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      /rosario, en tiempo real/i
    );
  });

  it('renders the login route', () => {
    window.history.pushState({}, '', '/login');
    render(<App />);
    expect(screen.getByRole('heading', { name: /login/i })).toBeInTheDocument();
  });
});
