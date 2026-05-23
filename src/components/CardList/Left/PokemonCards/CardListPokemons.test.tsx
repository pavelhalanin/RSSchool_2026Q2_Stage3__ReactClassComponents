import { render, screen, fireEvent } from '@testing-library/react';
import { describe, test, expect, vi, beforeEach } from 'vitest';
import CardListPokemons from './CardListPokemons';
import type { ICardListPokemons } from './ICardListPokemons';

vi.mock('../../../../utils/PokemonHelper', () => ({
  default: {
    getMainImage_byPokemonId: vi.fn(() => 'https://example.com/1.png'),
  },
}));

vi.mock('./../Pagination/CardListPagination', () => ({
  default: () => <div data-testid="mock-pagination">Pagination Mock</div>,
}));

describe('CardListPokemons', () => {
  const mockSetParams = vi.fn();
  const mockFetchPokemons = vi.fn();

  const mockPokemon = {
    id: 25,
    name: 'pikachu',
    weight: 60,
    height: 4,
    image_src: '',
    pokemontypes: [{ slot: 1, type: { name: 'electric' } }],
  };

  const baseProps: ICardListPokemons = {
    page: '1',
    searchPrev: 'pikachu',
    pagination: {
      pagination: {
        TOTOL_ITEMS: 100,
        LIMITL_ITEMS: 20,
        CURRENT_PAGE: 1,
        SKIP_ITEMS: 0,
        LAST_PAGE: 5,
      },
      items: [mockPokemon],
      isFetch: false,
      fetchError: null,
    },
    fetchPokemons: mockFetchPokemons,
    setParams: mockSetParams,
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('shows error message and retry button when fetchError exists', () => {
    const errorProps = {
      ...baseProps,
      pagination: {
        ...baseProps.pagination,
        fetchError: 'Failed to load pokemons',
      },
    };

    render(<CardListPokemons {...errorProps} />);

    const errorText = screen.queryByText('Failed to load pokemons');
    const retryButton = screen.queryByText('Repeat load fetch');

    expect(errorText).not.toBeNull();
    expect(retryButton).not.toBeNull();

    if (retryButton) {
      fireEvent.click(retryButton);
      expect(mockFetchPokemons).toHaveBeenCalledTimes(1);
    }
  });

  test('shows not found message when pokemon list is empty', () => {
    const emptyProps = {
      ...baseProps,
      searchPrev: 'ghost',
      pagination: {
        ...baseProps.pagination,
        items: [],
      },
    };

    render(<CardListPokemons {...emptyProps} />);

    const notFoundMessage = screen.queryByText(
      /No Pokémon found by search \(ghost\)/i
    );
    expect(notFoundMessage).not.toBeNull();
  });

  test('does not render pokemon list when loading', () => {
    const loadingProps = {
      ...baseProps,
      pagination: {
        ...baseProps.pagination,
        isFetch: true,
      },
    };

    const { container } = render(<CardListPokemons {...loadingProps} />);
    const pokemonList = container.querySelector('ul');

    expect(pokemonList).toBeNull();
  });
});
