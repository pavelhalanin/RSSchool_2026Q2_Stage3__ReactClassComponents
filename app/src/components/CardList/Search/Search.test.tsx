import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import Search from './Search';
import { usePokemonNavigation } from '../../../hook/usePokemonNavigation/usePokemonNavigation';
import {
  useSearchValue,
  useSearchPrevValue,
  useSearchActions,
} from '../../../store/slices/useSearch/hook';

vi.mock('../../../hook/usePokemonNavigation/usePokemonNavigation', () => ({
  usePokemonNavigation: vi.fn(),
}));

vi.mock('../../../store/slices/useSearch/hook', () => ({
  useSearchValue: vi.fn(),
  useSearchPrevValue: vi.fn(),
  useSearchActions: vi.fn(),
}));

describe('Search', () => {
  const mockPokemonNavigation = vi.fn();
  const mockSetSearch = vi.fn();
  const mockSetSubmitedSearch = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();

    vi.mocked(usePokemonNavigation).mockReturnValue({
      pokemonNavigation: mockPokemonNavigation,
    });

    vi.mocked(useSearchActions).mockReturnValue({
      setSearch: mockSetSearch,
      setSubmitedSearch: mockSetSubmitedSearch,
    });
  });

  it('renders input with current search value', () => {
    vi.mocked(useSearchValue).mockReturnValue('pikachu');
    vi.mocked(useSearchPrevValue).mockReturnValue('pika');

    const { container } = render(<Search />);
    const input = container.querySelector(
      'input[type="search"]'
    ) as HTMLInputElement;
    expect(input).toBeTruthy();
    expect(input.value).toBe('pikachu');
  });

  it('calls setSearch on input change', () => {
    vi.mocked(useSearchValue).mockReturnValue('');
    vi.mocked(useSearchPrevValue).mockReturnValue('');

    const { container } = render(<Search />);
    const input = container.querySelector(
      'input[type="search"]'
    ) as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'bulbasaur' } });
    expect(mockSetSearch).toHaveBeenCalledWith('bulbasaur');
  });

  it('button is disabled when search equals prevSearch', () => {
    vi.mocked(useSearchValue).mockReturnValue('charmander');
    vi.mocked(useSearchPrevValue).mockReturnValue('charmander');

    const { container } = render(<Search />);
    const button = container.querySelector('.btn-success') as HTMLButtonElement;
    expect(button).toHaveProperty('disabled', true);
  });

  it('button is enabled when search differs from prevSearch', () => {
    vi.mocked(useSearchValue).mockReturnValue('charmander');
    vi.mocked(useSearchPrevValue).mockReturnValue('char');

    const { container } = render(<Search />);
    const button = container.querySelector('.btn-success') as HTMLButtonElement;
    expect(button).toHaveProperty('disabled', false);
  });

  it('calls pokemonNavigation and setSubmitedSearch on button click when enabled', () => {
    vi.mocked(useSearchValue).mockReturnValue('pidgey');
    vi.mocked(useSearchPrevValue).mockReturnValue('pidegy');

    const { container } = render(<Search />);
    const button = container.querySelector('.btn-success') as HTMLButtonElement;
    fireEvent.click(button);

    expect(mockPokemonNavigation).toHaveBeenCalledTimes(1);
    expect(mockPokemonNavigation).toHaveBeenCalledWith({ page: 1 });
    expect(mockSetSubmitedSearch).toHaveBeenCalledTimes(1);
    expect(mockSetSubmitedSearch).toHaveBeenCalledWith('pidgey');
  });

  it('does not call actions when button is disabled and clicked', () => {
    vi.mocked(useSearchValue).mockReturnValue('rattata');
    vi.mocked(useSearchPrevValue).mockReturnValue('rattata');

    const { container } = render(<Search />);
    const button = container.querySelector('.btn-success') as HTMLButtonElement;
    expect(button).toHaveProperty('disabled', true);
    fireEvent.click(button);

    expect(mockPokemonNavigation).not.toHaveBeenCalled();
    expect(mockSetSubmitedSearch).not.toHaveBeenCalled();
  });
});
