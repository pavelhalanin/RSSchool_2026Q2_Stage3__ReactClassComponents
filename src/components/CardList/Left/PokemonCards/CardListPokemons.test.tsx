import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import CardListPokemons from './CardListPokemons';

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useParams: vi.fn(),
  };
});

vi.mock('../../../../utils/getPokemonSrcImage_byId', () => ({
  getPokemonSrcImage_byId: vi.fn(),
}));

vi.mock('../../../../hook/usePokemonNavigation/usePokemonNavigation', () => ({
  usePokemonNavigation: vi.fn(),
}));

vi.mock('../../../FetchSpinner/FetchSpinner', () => ({
  default: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="spinner">{children}</div>
  ),
}));

vi.mock('../../../AlertDanger/AlertDanger', () => ({
  default: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="alert">{children}</div>
  ),
}));

vi.mock('../Pagination/CardListPagination', () => ({
  default: () => <div data-testid="pagination">Pagination</div>,
}));

vi.mock('../../../../store/slices/useCardListState/hook', () => ({
  useCardListActions: vi.fn(),
  useCardListCsvItems: vi.fn(),
  useCardListErrorFetch: vi.fn(),
  useCardListIsFetch: vi.fn(),
  useCardListItems: vi.fn(),
  useCardListPrevSearch: vi.fn(),
}));

import { useParams } from 'react-router-dom';
import { usePokemonNavigation } from '../../../../hook/usePokemonNavigation/usePokemonNavigation';
import { getPokemonSrcImage_byId } from '../../../../utils/getPokemonSrcImage_byId';
import {
  useCardListActions,
  useCardListErrorFetch,
  useCardListIsFetch,
  useCardListItems,
  useCardListPrevSearch,
} from '../../../../store/slices/useCardListState/hook';

const mockUseParams = vi.mocked(useParams);
const mockUsePokemonNavigation = vi.mocked(usePokemonNavigation);
const mockGetPokemonSrcImage_byId = vi.mocked(getPokemonSrcImage_byId);
const mockUseCardListActions = vi.mocked(useCardListActions);
const mockUseCardListErrorFetch = vi.mocked(useCardListErrorFetch);
const mockUseCardListIsFetch = vi.mocked(useCardListIsFetch);
const mockUseCardListItems = vi.mocked(useCardListItems);
const mockUseCardListPrevSearch = vi.mocked(useCardListPrevSearch);

describe('CardListPokemons', () => {
  const mockPokemonNavigation = vi.fn();
  const mockFetchPokemons = vi.fn();
  const mockAddOrRemoveCsvItem = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();

    mockUsePokemonNavigation.mockReturnValue({
      pokemonNavigation: mockPokemonNavigation,
    });

    mockUseCardListActions.mockReturnValue({
      fetchPokemons: mockFetchPokemons,
      addOrRemoveCsvItem: mockAddOrRemoveCsvItem,
      setSearch: vi.fn(),
      setPage: vi.fn(),
      generateFetchError: vi.fn(),
      unselectAllCsvItems: vi.fn(),
      downloadCsvItems: vi.fn(),
    });

    mockGetPokemonSrcImage_byId.mockReturnValue('mocked-image-url');
    mockUseParams.mockReturnValue({ page: '2' });
  });

  it('displays loading spinner when isFetch is true', () => {
    mockUseCardListIsFetch.mockReturnValue(true);
    mockUseCardListErrorFetch.mockReturnValue(null);
    mockUseCardListItems.mockReturnValue([]);

    const { container } = render(<CardListPokemons />);
    const spinner = container.querySelector('[data-testid="spinner"]');
    expect(spinner).not.toBeNull();
    expect(spinner?.textContent).toContain('Loading Card List');
  });

  it('displays error alert when errorFetch exists', () => {
    mockUseCardListIsFetch.mockReturnValue(false);
    mockUseCardListErrorFetch.mockReturnValue('Network error');
    mockUseCardListItems.mockReturnValue([]);

    const { container } = render(<CardListPokemons />);
    const alert = container.querySelector('[data-testid="alert"]');
    expect(alert).not.toBeNull();
    expect(alert?.textContent).toContain('Network error');
    expect(alert?.textContent).toContain('Repeat load fetch');
  });

  it('calls fetchPokemons when retry button is clicked', () => {
    mockUseCardListIsFetch.mockReturnValue(false);
    mockUseCardListErrorFetch.mockReturnValue('Error');
    mockUseCardListItems.mockReturnValue([]);

    const { container } = render(<CardListPokemons />);
    const retryButton = container.querySelector(
      '.btn-success'
    ) as HTMLButtonElement;
    expect(retryButton).not.toBeNull();
    fireEvent.click(retryButton);
    expect(mockFetchPokemons).toHaveBeenCalledTimes(1);
  });

  it('displays no pokemon message when items array is empty', () => {
    mockUseCardListIsFetch.mockReturnValue(false);
    mockUseCardListErrorFetch.mockReturnValue(null);
    mockUseCardListItems.mockReturnValue([]);
    mockUseCardListPrevSearch.mockReturnValue('pika');
    mockUseParams.mockReturnValue({ page: '2' });

    const { container } = render(<CardListPokemons />);
    const alert = container.querySelector('[data-testid="alert"]');
    expect(alert).not.toBeNull();
    expect(alert?.textContent).toContain(
      'No Pokémon found by search (pika) on page 2'
    );
  });
});
