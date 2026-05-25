import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import Search from './Search';
import type { ICardListActions } from '../../../../store/slices/useCardListState/types';

vi.mock('../../../../hook/usePokemonNavigation/usePokemonNavigation', () => ({
  usePokemonNavigation: vi.fn(),
}));

vi.mock('../../../../store/slices/useCardListState/hook', () => ({
  useCardListSearch: vi.fn(),
  useCardListPrevSearch: vi.fn(),
  useCardListErrorFetch: vi.fn(),
  useCardListActions: vi.fn(),
}));

import { usePokemonNavigation } from '../../../../hook/usePokemonNavigation/usePokemonNavigation';
import {
  useCardListSearch,
  useCardListPrevSearch,
  useCardListErrorFetch,
  useCardListActions,
} from '../../../../store/slices/useCardListState/hook';

const mockUsePokemonNavigation = vi.mocked(usePokemonNavigation);
const mockUseCardListSearch = vi.mocked(useCardListSearch);
const mockUseCardListPrevSearch = vi.mocked(useCardListPrevSearch);
const mockUseCardListErrorFetch = vi.mocked(useCardListErrorFetch);
const mockUseCardListActions = vi.mocked(useCardListActions);

describe('Search', () => {
  const mockPokemonNavigation = vi.fn();
  const mockSetSearch = vi.fn();
  const mockFetchPokemons = vi.fn();

  const createFullMockActions = (): ICardListActions => ({
    setSearch: mockSetSearch,
    fetchPokemons: mockFetchPokemons,
    generateFetchError: vi.fn(),
    setPage: vi.fn(),
    addOrRemoveCsvItem: vi.fn(),
    unselectAllCsvItems: vi.fn(),
    downloadCsvItems: vi.fn(),
  });

  beforeEach(() => {
    vi.clearAllMocks();

    mockUsePokemonNavigation.mockReturnValue({
      pokemonNavigation: mockPokemonNavigation,
    });

    mockUseCardListActions.mockReturnValue(createFullMockActions());
  });

  it('renders input with current search value', () => {
    mockUseCardListSearch.mockReturnValue('pikachu');
    mockUseCardListPrevSearch.mockReturnValue('pika');
    mockUseCardListErrorFetch.mockReturnValue(null);

    const { container } = render(<Search />);
    const input = container.querySelector(
      'input[type="search"]'
    ) as HTMLInputElement;
    expect(input).not.toBeNull();
    expect(input.value).toBe('pikachu');
  });

  it('calls setSearch on input change', () => {
    mockUseCardListSearch.mockReturnValue('');
    mockUseCardListPrevSearch.mockReturnValue('');
    mockUseCardListErrorFetch.mockReturnValue(null);

    const { container } = render(<Search />);
    const input = container.querySelector(
      'input[type="search"]'
    ) as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'bulbasaur' } });
    expect(mockSetSearch).toHaveBeenCalledWith('bulbasaur');
  });

  it('button is disabled when no error and search equals prevSearch', () => {
    mockUseCardListSearch.mockReturnValue('charmander');
    mockUseCardListPrevSearch.mockReturnValue('charmander');
    mockUseCardListErrorFetch.mockReturnValue(null);

    const { container } = render(<Search />);
    const button = container.querySelector('.btn-success') as HTMLButtonElement;
    expect(button.disabled).toBe(true);
  });

  it('button is not disabled when search differs from prevSearch', () => {
    mockUseCardListSearch.mockReturnValue('charmander');
    mockUseCardListPrevSearch.mockReturnValue('char');
    mockUseCardListErrorFetch.mockReturnValue(null);

    const { container } = render(<Search />);
    const button = container.querySelector('.btn-success') as HTMLButtonElement;
    expect(button.disabled).toBe(false);
  });

  it('button is not disabled when errorFetch exists', () => {
    mockUseCardListSearch.mockReturnValue('squirtle');
    mockUseCardListPrevSearch.mockReturnValue('squirtle');
    mockUseCardListErrorFetch.mockReturnValue('Some error');

    const { container } = render(<Search />);
    const button = container.querySelector('.btn-success') as HTMLButtonElement;
    expect(button.disabled).toBe(false);
  });

  it('calls pokemonNavigation and fetchPokemons on button click when enabled', () => {
    mockUseCardListSearch.mockReturnValue('pidgey');
    mockUseCardListPrevSearch.mockReturnValue('pidegy');
    mockUseCardListErrorFetch.mockReturnValue(null);

    const { container } = render(<Search />);
    const button = container.querySelector('.btn-success') as HTMLButtonElement;
    fireEvent.click(button);

    expect(mockPokemonNavigation).toHaveBeenCalledWith({ page: 1 });
    expect(mockFetchPokemons).toHaveBeenCalled();
  });

  it('does not call actions when button is disabled and clicked', () => {
    mockUseCardListSearch.mockReturnValue('rattata');
    mockUseCardListPrevSearch.mockReturnValue('rattata');
    mockUseCardListErrorFetch.mockReturnValue(null);

    const { container } = render(<Search />);
    const button = container.querySelector('.btn-success') as HTMLButtonElement;
    expect(button.disabled).toBe(true);
    fireEvent.click(button);

    expect(mockPokemonNavigation).not.toHaveBeenCalled();
    expect(mockFetchPokemons).not.toHaveBeenCalled();
  });
});
