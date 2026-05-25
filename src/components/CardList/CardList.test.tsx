import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import CardList from './CardList';
import styles from './CardList.module.css';

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useParams: vi.fn(),
  };
});

vi.mock('../../hook/usePokemonNavigation/usePokemonNavigation', () => ({
  usePokemonNavigation: vi.fn(),
}));

vi.mock('../../store/slices/useCardListState/hook', () => ({
  useCardListActions: vi.fn(),
}));

vi.mock('./CardListSearch/CardListSearch', () => ({
  default: () => <div data-testid="mock-card-list-search">Search</div>,
}));

vi.mock('./Left/PokemonCards/CardListPokemons', () => ({
  default: () => <div data-testid="mock-card-list-pokemons">Pokemons</div>,
}));

vi.mock('../CsvPanel/CsvPanel', () => ({
  default: () => <div data-testid="mock-csv-panel">CsvPanel</div>,
}));

vi.mock('../ContainerSection/ContainerSection', () => ({
  default: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="mock-container">{children}</div>
  ),
}));

import { useParams } from 'react-router-dom';
import { usePokemonNavigation } from '../../hook/usePokemonNavigation/usePokemonNavigation';
import { useCardListActions } from '../../store/slices/useCardListState/hook';

const mockUseParams = vi.mocked(useParams);
const mockUsePokemonNavigation = vi.mocked(usePokemonNavigation);
const mockUseCardListActions = vi.mocked(useCardListActions);

describe('CardList', () => {
  const mockPokemonNavigation = vi.fn();
  const mockSetPage = vi.fn();
  const mockFetchPokemons = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();

    mockUsePokemonNavigation.mockReturnValue({
      pokemonNavigation: mockPokemonNavigation,
    });

    mockUseCardListActions.mockReturnValue({
      setPage: mockSetPage,
      fetchPokemons: mockFetchPokemons,
      generateFetchError: vi.fn(),
      setSearch: vi.fn(),
      addOrRemoveCsvItem: vi.fn(),
      unselectAllCsvItems: vi.fn(),
      downloadCsvItems: vi.fn(),
    });
  });

  const renderWithParams = (page?: string, details?: string) => {
    mockUseParams.mockReturnValue({ page, details });
    return render(
      <MemoryRouter initialEntries={[`/${page ?? ''}/${details ?? ''}`]}>
        <Routes>
          <Route path="/:page/:details" element={<CardList />} />
          <Route path="/:page" element={<CardList />} />
          <Route path="/" element={<CardList />} />
        </Routes>
      </MemoryRouter>
    );
  };

  it('renders all main components when page is valid and details not present', () => {
    mockUseParams.mockReturnValue({ page: '1', details: undefined });
    const { container } = renderWithParams('1');

    expect(
      container.querySelector('[data-testid="mock-card-list-search"]')
    ).not.toBeNull();
    expect(
      container.querySelector('[data-testid="mock-card-list-pokemons"]')
    ).not.toBeNull();
    expect(
      container.querySelector('[data-testid="mock-csv-panel"]')
    ).not.toBeNull();
    expect(
      container.querySelector('[data-testid="mock-container"]')
    ).not.toBeNull();
  });

  it('calls setPage and fetchPokemons on mount when page changes', () => {
    renderWithParams('2');
    expect(mockSetPage).toHaveBeenCalledWith('2');
    expect(mockFetchPokemons).toHaveBeenCalled();
  });

  it('calls setPage and fetchPokemons again when page prop changes', () => {
    const { rerender } = renderWithParams('1');
    expect(mockSetPage).toHaveBeenCalledWith('1');
    expect(mockFetchPokemons).toHaveBeenCalledTimes(1);

    mockUseParams.mockReturnValue({ page: '3', details: undefined });
    rerender(
      <MemoryRouter initialEntries={['/3']}>
        <Routes>
          <Route path="/:page" element={<CardList />} />
        </Routes>
      </MemoryRouter>
    );
    expect(mockSetPage).toHaveBeenCalledWith('3');
    expect(mockFetchPokemons).toHaveBeenCalledTimes(2);
  });

  it('redirects to page 1 when page is not a positive number', () => {
    renderWithParams('invalid');
    expect(mockPokemonNavigation).toHaveBeenCalledWith({ page: 1 });

    const { container } = renderWithParams('invalid');
    expect(
      container.querySelector('[data-testid="mock-card-list-search"]')
    ).toBeNull();
  });

  it('redirects to same page when details is an empty string', () => {
    renderWithParams('1', '');
    expect(mockPokemonNavigation).toHaveBeenCalledWith({ page: '1' });

    const { container } = renderWithParams('1', '');
    expect(
      container.querySelector('[data-testid="mock-card-list-search"]')
    ).toBeNull();
  });

  it('adds class to right block when details exists', () => {
    const { container } = renderWithParams('1', '25');
    const rightBlock = container.querySelector(
      `.${styles.card_list__right_block}`
    );

    expect(rightBlock?.className).toContain('card_list__right_block--open');
  });

  it('does not add open class when details is null or undefined', () => {
    const { container } = renderWithParams('1', undefined);
    const rightBlock = container.querySelector(
      `.${styles.card_list__right_block}`
    );

    expect(rightBlock?.className).not.toContain('card_list__right_block--open');
  });
});
