import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, act } from '@testing-library/react';
import Main from '../../../components/Main/Main';

vi.mock('../../../components/CardList/CardList', () => ({
  default: ({
    updateState_errorBoundary,
  }: {
    updateState_errorBoundary: (exception: string) => void;
  }) => (
    <div data-testid="mock-cardlist">
      <button
        data-testid="error-trigger"
        onClick={() => updateState_errorBoundary('Test error')}
      >
        Trigger Error
      </button>
    </div>
  ),
}));

describe('Main - updateState_errorBoundary', () => {
  let consoleLogSpy: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    consoleLogSpy = vi.spyOn(console, 'log').mockImplementation(() => {});
  });

  it('should update errorBoundary state when error occurs', async () => {
    render(<Main />);

    expect(screen.queryByText('Fallback UI')).toBeNull();

    await act(async () => {
      screen.getByTestId('error-trigger').click();
    });

    expect(screen.getByText('Fallback UI')).toBeDefined();
    expect(screen.getByText('Test error')).toBeDefined();
    expect(consoleLogSpy).toHaveBeenCalledWith('Test error');
  });
});
