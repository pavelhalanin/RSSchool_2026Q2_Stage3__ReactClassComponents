import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import ThemeProvider from './ThemeProvider';
import { ThemeContext } from './ThemeContext';

describe('ThemeProvider', () => {
  it('provides theme and changeTheme to children', () => {
    const TestConsumer = () => (
      <ThemeContext.Consumer>
        {(value) => (
          <div>
            <span data-testid="theme-value">{value?.theme}</span>
            <button onClick={value?.changeTheme}>Toggle</button>
          </div>
        )}
      </ThemeContext.Consumer>
    );

    render(
      <ThemeProvider>
        <TestConsumer />
      </ThemeProvider>
    );

    const themeSpan = screen.getByTestId('theme-value');
    expect(themeSpan.textContent).toBe('light');

    const button = screen.getByText('Toggle');

    fireEvent.click(button);
    expect(themeSpan.textContent).toBe('dark');

    fireEvent.click(button);
    expect(themeSpan.textContent).toBe('light');
  });
});
