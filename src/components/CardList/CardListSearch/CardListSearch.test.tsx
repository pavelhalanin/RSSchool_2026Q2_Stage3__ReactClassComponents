import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render } from '@testing-library/react';
import CardListSearch from './CardListSearch';
import CardListInit from '../CardListInit';

interface SearchMockProps {
  search: string;
  fetchPokemons: () => void;
  updateState_search: (search: string) => void;
  setParams: (page: string, details: string) => void;
}

vi.mock('./Search/Search', () => ({
  default: ({
    search,
    fetchPokemons,
    updateState_search,
    setParams,
  }: SearchMockProps) => (
    <div data-testid="mock-search">
      <input
        data-testid="search-input"
        value={search}
        onChange={(e) => updateState_search(e.target.value)}
      />
      <button data-testid="search-button" onClick={() => fetchPokemons()}>
        Search
      </button>
      <button
        data-testid="set-params-button"
        onClick={() => setParams('1', '')}
      >
        Set Params
      </button>
    </div>
  ),
}));

vi.mock('../../ErrorButton/ErrorButton', () => ({
  default: () => <button data-testid="mock-error-button">Error Button</button>,
}));

describe('CardListSearch', () => {
  const mockSetPagination = vi.fn();
  const mockSetSearch = vi.fn();
  const mockSetParams = vi.fn();
  const mockFetchPokemons = vi.fn();

  const defaultProps = {
    page: '1',
    search: 'pikachu',
    searchPrev: null,
    pagination: {
      items: [],
      isFetch: false,
      fetchError: null,
      pagination: CardListInit.getInitPagination(),
    },
    setSearch: mockSetSearch,
    setParams: mockSetParams,
    fetchPokemons: mockFetchPokemons,
    setPagination: mockSetPagination,
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders without errors', () => {
    expect(() => render(<CardListSearch {...defaultProps} />)).not.toThrow();
  });
});
