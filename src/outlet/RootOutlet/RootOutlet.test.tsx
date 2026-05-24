import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import RootOutlet from './RootOutlet';
import ThemeProvider from '../../context/theme/ThemeProvider';

describe('RootOutlet', () => {
  it('renders without errors', () => {
    expect(() =>
      render(
        <ThemeProvider>
          <MemoryRouter>
            <RootOutlet />
          </MemoryRouter>
        </ThemeProvider>
      )
    ).not.toThrow();
  });
});
