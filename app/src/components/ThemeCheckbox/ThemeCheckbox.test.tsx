import { describe, it, expect, vi, afterEach } from 'vitest';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { ThemeContext } from '../../context/theme/ThemeContext';
import ThemeCheckbox from './ThemeCheckbox';

afterEach(() => {
  cleanup();
});

vi.mock('./MoonIcon/MoonIcon', () => ({
  default: () => <div data-testid="moon-icon" />,
}));
vi.mock('./SunIcon/SunIcon', () => ({
  default: () => <div data-testid="sun-icon" />,
}));

describe('ThemeCheckbox', () => {
  it('renders MoonIcon for light theme and SunIcon for dark theme', () => {
    const { unmount: unmountLight } = render(
      <ThemeContext.Provider value={{ theme: 'light', changeTheme: vi.fn() }}>
        <ThemeCheckbox />
      </ThemeContext.Provider>
    );
    expect(screen.getByTestId('moon-icon')).toBeDefined();
    expect(screen.queryByTestId('sun-icon')).toBeNull();
    unmountLight();

    const { unmount: unmountDark } = render(
      <ThemeContext.Provider value={{ theme: 'dark', changeTheme: vi.fn() }}>
        <ThemeCheckbox />
      </ThemeContext.Provider>
    );
    expect(screen.getByTestId('sun-icon')).toBeDefined();
    expect(screen.queryByTestId('moon-icon')).toBeNull();
    unmountDark();
  });

  it('calls changeTheme when checkbox is clicked', () => {
    const changeTheme = vi.fn();
    render(
      <ThemeContext.Provider value={{ theme: 'light', changeTheme }}>
        <ThemeCheckbox />
      </ThemeContext.Provider>
    );
    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);
    expect(changeTheme).toHaveBeenCalledTimes(1);
  });
});
