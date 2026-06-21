import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import IconLinkedIn from './IconLinkedIn';

describe('IconLinkedIn', () => {
  it('renders LinkedIn icon', () => {
    const { container } = render(<IconLinkedIn />);

    expect(container.querySelector('svg')).toBeTruthy();
    expect(container.querySelector('path')).toBeTruthy();
  });

  it('has correct width and height', () => {
    const { container } = render(<IconLinkedIn />);
    const svg = container.querySelector('svg');

    expect(svg?.getAttribute('width')).toBe('16');
    expect(svg?.getAttribute('height')).toBe('16');
  });
});
