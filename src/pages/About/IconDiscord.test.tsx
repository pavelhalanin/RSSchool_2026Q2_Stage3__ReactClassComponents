import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import IconDiscord from './IconDiscord';

describe('IconDiscord', () => {
  it('renders Discord icon', () => {
    const { container } = render(<IconDiscord />);

    expect(container.querySelector('svg')).toBeTruthy();
    expect(container.querySelector('path')).toBeTruthy();
  });

  it('has correct width and height', () => {
    const { container } = render(<IconDiscord />);
    const svg = container.querySelector('svg');

    expect(svg?.getAttribute('width')).toBe('16');
    expect(svg?.getAttribute('height')).toBe('16');
  });
});
