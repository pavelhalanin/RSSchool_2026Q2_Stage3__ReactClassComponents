import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import FetchSpinner from './FetchSpinner';

describe('FetchSpinner', () => {
  it('renders children inside div', () => {
    render(<FetchSpinner>Loading...</FetchSpinner>);
    const div = screen.getByText('Loading...');
    expect(div).not.toBeNull();
    expect(div.tagName).toBe('DIV');
    expect(div.className).toContain('spinner__wrapper');
  });
});
