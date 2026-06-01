import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { CardOutlet } from './CardOutlet';

describe('CardOutlet', () => {
  it('renders without crashing when wrapped in MemoryRouter', () => {
    const { container } = render(
      <MemoryRouter>
        <CardOutlet />
      </MemoryRouter>
    );
    expect(container).not.toBeNull();
  });
});
