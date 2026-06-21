import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import SunIcon from './SunIcon';

describe('SunIcon', () => {
  it('renders sun icon', () => {
    const { container } = render(<SunIcon />);

    expect(container.querySelector('svg')).toBeTruthy();
    expect(container.querySelector('path')).toBeTruthy();
  });
});
