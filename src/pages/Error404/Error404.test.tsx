import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import Error404 from './Error404';

describe('Error404 component', () => {
  it('renders without errors', () => {
    expect(() => render(<Error404 />)).not.toThrow();
  });

  it('renders an image', () => {
    const { container } = render(<Error404 />);

    const image = container.querySelector('img');
    expect(image).toBeTruthy();
    expect(image?.getAttribute('alt')).toBe('');
    expect(image?.getAttribute('src')).toContain('404.jpg');
  });

  it('has correct container classes', () => {
    const { container } = render(<Error404 />);

    const mainDiv = container.querySelector('.container');
    expect(mainDiv).toBeTruthy();

    const section = container.querySelector('.section');
    expect(section).toBeTruthy();
  });
});
