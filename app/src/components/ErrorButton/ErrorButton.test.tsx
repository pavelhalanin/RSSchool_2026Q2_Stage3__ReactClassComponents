import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { describe, it, expect, vi, afterEach } from 'vitest';
import ErrorButton from './ErrorButton';

describe('ErrorButton', () => {
  afterEach(() => {
    cleanup();
  });

  it('should render button with correct text and styles', () => {
    render(<ErrorButton />);

    const BUTTON = screen.getByText('Generate error boundary');

    expect(BUTTON).toBeDefined();
    expect(BUTTON).not.toBeNull();
    expect(BUTTON.textContent).toBe('Generate error boundary');
    expect(BUTTON.className).toBe('btn btn-danger');
    expect(BUTTON.className.includes('btn')).toBe(true);
    expect(BUTTON.className.includes('btn-danger')).toBe(true);
    expect(BUTTON.getAttribute('class')).toBe('btn btn-danger');
    expect(BUTTON.tagName).toBe('BUTTON');
    expect(BUTTON.hasAttribute('disabled')).toBe(false);
  });

  it('should throw error when clicked', () => {
    const CONSOLE_ERROR_SPY = vi
      .spyOn(console, 'error')
      .mockImplementation(() => {});

    render(<ErrorButton />);

    const BUTTON = screen.getByText('Generate error boundary');

    expect(() => {
      fireEvent.click(BUTTON);
    }).toThrow('You are triggered custom error boundary');

    CONSOLE_ERROR_SPY.mockRestore();
  });

  it('renders without errors on mount', () => {
    render(<ErrorButton />);

    expect(() => {
      screen.getByText('Generate error boundary');
    }).not.toThrow();
  });
});
