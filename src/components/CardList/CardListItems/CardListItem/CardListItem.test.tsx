import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import type { Mock } from 'vitest';
import CardListItem from './CardListItem';
import type { ICardListItemPokemon } from '../../../../query/cardList/IPaginationCardList';
import { useParams } from 'react-router-dom';
import { usePokemonNavigation } from '../../../../hook/usePokemonNavigation/usePokemonNavigation';

vi.mock('react-router-dom', () => ({
  useParams: vi.fn(),
}));

vi.mock('../../../../hook/usePokemonNavigation/usePokemonNavigation', () => ({
  usePokemonNavigation: vi.fn(),
}));

describe('CardListItem', () => {
  const mockItem: ICardListItemPokemon = {
    id: 25,
    name: 'pikachu',
    image_src: '',
    weight: 60,
    height: 4,
    pokemontypes: [{ slot: 1, type: { name: 'electric' } }],
  };

  const mockPage = '2';
  const mockPokemonNavigation = vi.fn();

  const mockedUseParams = useParams as Mock<typeof useParams>;
  const mockedUsePokemonNavigation = usePokemonNavigation as Mock<
    typeof usePokemonNavigation
  >;

  beforeEach(() => {
    mockedUseParams.mockReturnValue({ page: mockPage });
    mockedUsePokemonNavigation.mockReturnValue({
      pokemonNavigation: mockPokemonNavigation,
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('calls pokemonNavigation with correct arguments when button is clicked', () => {
    render(<CardListItem item={mockItem} />);

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(mockPokemonNavigation).toHaveBeenCalledTimes(1);
    expect(mockPokemonNavigation).toHaveBeenCalledWith({
      page: mockPage,
      details: '25',
    });
  });

  it('renders multiple types correctly', () => {
    const multiTypeItem: ICardListItemPokemon = {
      ...mockItem,
      pokemontypes: [
        { slot: 1, type: { name: 'grass' } },
        { slot: 1, type: { name: 'poison' } },
      ],
    };

    render(<CardListItem item={multiTypeItem} />);

    expect(screen.getByText('grass')).toBeDefined();
    expect(screen.getByText('poison')).toBeDefined();
  });
});
