import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import Error404 from './Error404';
import ThemeProvider from '../../context/theme/ThemeProvider';

describe('Error404 component', () => {
  it('renders without errors', () => {
    expect(() =>
      render(
        <ThemeProvider>
          <Error404 />
        </ThemeProvider>
      )
    ).not.toThrow();
  });

  it('renders an image', () => {
    const { container } = render(
      <ThemeProvider>
        <Error404 />
      </ThemeProvider>
    );

    const image = container.querySelector('img');
    expect(image).toBeTruthy();
    expect(image?.getAttribute('alt')).toBe('');
    expect(image?.getAttribute('src')).toContain('404.jpg');
  });
});
