import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Header from '../../../components/Header/Header';
import '@testing-library/jest-dom/vitest';

describe('Header', () => {
  it('renders Header component', () => {
    render(<Header />);

    const headerElement = screen.getByText('Header');
    expect(headerElement).toBeInTheDocument();
  });
});
