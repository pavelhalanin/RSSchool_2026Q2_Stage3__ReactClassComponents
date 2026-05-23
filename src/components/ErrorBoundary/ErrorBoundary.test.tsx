import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import ErrorBoundary from './ErrorBoundary';

describe('ErrorBoundary', () => {
  it('should render children when no error occurs', () => {
    const NoErrorComponent = () => <div>No error component</div>;

    render(
      <ErrorBoundary>
        <NoErrorComponent />
      </ErrorBoundary>
    );

    const DIV = screen.getByText('No error component');

    expect(DIV).toBeDefined();
    expect(DIV).not.toBeNull();
    expect(DIV.textContent).toBe('No error component');
  });

  it('should show fallback UI when child component throws error', () => {
    const CONSOLE_LOG_SPY = vi
      .spyOn(console, 'log')
      .mockImplementation(() => {});
    const CONSOLE_ERROR_SPY = vi
      .spyOn(console, 'error')
      .mockImplementation(() => {});

    const ErrorRenderComponent = () => {
      throw new Error('You triggered error component');
    };

    render(
      <ErrorBoundary>
        <ErrorRenderComponent />
      </ErrorBoundary>
    );

    const DIV = screen.getByText(/You triggered error component/i);

    expect(DIV).toBeDefined();
    expect(DIV).not.toBeNull();
    expect(DIV.textContent).toBe(
      'Fallback UI (ErrorBoundary)Error: You triggered error component'
    );

    CONSOLE_LOG_SPY.mockRestore();
    CONSOLE_ERROR_SPY.mockRestore();
  });
});
