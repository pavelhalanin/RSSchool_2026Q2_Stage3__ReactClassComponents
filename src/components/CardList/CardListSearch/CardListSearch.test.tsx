import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import CardListSearch from './CardListSearch';
import ThemeProvider from '../../../context/theme/ThemeProvider';
import * as hooks from '../../../store/slices/useCardListState/hook';

vi.mock('../../../store/slices/useCardListState/hook', () => ({
  useCardListActions: vi.fn(),
}));

vi.mock('./Search/Search', () => ({
  default: () => <div data-testid="mock-search">Mocked Search</div>,
}));

vi.mock('../../ErrorButton/ErrorButton', () => ({
  default: () => <button data-testid="mock-error-button">Error Button</button>,
}));

const mockUseCardListActions = vi.mocked(hooks.useCardListActions);

describe('CardListSearch', () => {
  const mockGenerateFetchError = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    mockUseCardListActions.mockReturnValue({
      generateFetchError: mockGenerateFetchError,
      setSearch: vi.fn(),
      fetchPokemons: vi.fn(),
      setPage: vi.fn(),
      addOrRemoveCsvItem: vi.fn(),
      unselectAllCsvItems: vi.fn(),
      downloadCsvItems: vi.fn(),
    });
  });

  it('renders without errors', () => {
    expect(() =>
      render(
        <ThemeProvider>
          <CardListSearch />
        </ThemeProvider>
      )
    ).not.toThrow();
  });

  it('renders Search component', () => {
    const { container } = render(
      <ThemeProvider>
        <CardListSearch />
      </ThemeProvider>
    );
    const searchElement = container.querySelector(
      '[data-testid="mock-search"]'
    );
    expect(searchElement).not.toBeNull();
    expect(searchElement?.textContent).toBe('Mocked Search');
  });

  it('renders ErrorButton component', () => {
    const { container } = render(
      <ThemeProvider>
        <CardListSearch />
      </ThemeProvider>
    );
    const errorButton = container.querySelector(
      '[data-testid="mock-error-button"]'
    );
    expect(errorButton).not.toBeNull();
    expect(errorButton?.textContent).toBe('Error Button');
  });

  it('renders "Generate fetch error" button', () => {
    const { container } = render(
      <ThemeProvider>
        <CardListSearch />
      </ThemeProvider>
    );
    const generateButton = container.querySelector('.btn-danger');
    expect(generateButton).not.toBeNull();
    expect(generateButton?.textContent).toBe('Generate fetch error');
  });

  it('calls generateFetchError when "Generate fetch error" button is clicked', () => {
    const { container } = render(
      <ThemeProvider>
        <CardListSearch />
      </ThemeProvider>
    );
    const generateButton = container.querySelector(
      '.btn-danger'
    ) as HTMLButtonElement;
    fireEvent.click(generateButton);
    expect(mockGenerateFetchError).toHaveBeenCalledTimes(1);
  });
});
