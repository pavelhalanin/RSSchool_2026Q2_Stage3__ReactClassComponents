import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import RootOutlet from './RootOutlet';

describe('RootOutlet', () => {
  it('renders without errors', () => {
    expect(() =>
      render(
        <MemoryRouter>
          <RootOutlet />
        </MemoryRouter>
      )
    ).not.toThrow();
  });
});
