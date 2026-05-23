import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import IconGitHub from './IconGitHub';

describe('IconGitHub', () => {
  it('renders GitHub icon', () => {
    const { container } = render(<IconGitHub />);

    expect(container.querySelector('svg')).toBeTruthy();
    expect(container.querySelector('path')).toBeTruthy();
  });

  it('has correct width and height', () => {
    const { container } = render(<IconGitHub />);
    const svg = container.querySelector('svg');

    expect(svg?.getAttribute('width')).toBe('16');
    expect(svg?.getAttribute('height')).toBe('16');
  });
});
