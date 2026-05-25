import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import MoonIcon from './MoonIcon';

describe('MoonIcon', () => {
  it('renders sun icon', () => {
    const { container } = render(<MoonIcon />);

    expect(container.querySelector('svg')).toBeTruthy();
    expect(container.querySelector('path')).toBeTruthy();
  });
});
