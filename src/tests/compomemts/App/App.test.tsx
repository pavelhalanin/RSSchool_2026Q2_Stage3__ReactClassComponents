import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../../../components/App/App';

vi.mock('../../../components/ErrorBoundary/ErrorBoundary', () => ({
  default: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="error-boundary-mock1">{children}</div>
  ),
}));

vi.mock('../../../components/Main/Main', () => ({
  default: () => <div data-testid="main-mock">Main Component</div>,
}));

describe('App Component', () => {
  it('should render ErrorBoundary with Main inside', () => {
    render(<App />);

    expect(screen.getByTestId('error-boundary-mock1')).toBeDefined();
    expect(screen.getByTestId('main-mock')).toBeDefined();
  });
});
