import { describe, it, expect, vi, afterEach } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CardListItems from './CardListItems';
import { useParams } from 'react-router-dom';
import { useSubmitedSearchValue } from '../../../store/slices/useSearch/hook';
import { usePokemonNavigation } from '../../../hook/usePokemonNavigation/usePokemonNavigation';
import { useQuery } from '@tanstack/react-query';

vi.mock('react-router-dom', () => ({
  useParams: vi.fn(),
}));

vi.mock('../../../store/slices/useSearch/hook', () => ({
  useSubmitedSearchValue: vi.fn(),
}));

vi.mock('../../../hook/usePokemonNavigation/usePokemonNavigation', () => ({
  usePokemonNavigation: vi.fn(),
}));

vi.mock('@tanstack/react-query', () => ({
  useQuery: vi.fn(),
}));

vi.mock('../../FetchSpinner/FetchSpinner', () => ({
  default: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="fetch-spinner">{children}</div>
  ),
}));

vi.mock('../../AlertDanger/AlertDanger', () => ({
  default: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="alert-danger">{children}</div>
  ),
}));

vi.mock('../CardListPagination/CardListPagination', () => ({
  default: () => <div data-testid="pagination" />,
}));

vi.mock('./CardListItem/CardListItem', () => ({
  default: () => <li data-testid="card-list-item" />,
}));

describe('CardListItems', () => {
  afterEach(() => {
    cleanup();
  });

  it('shows FetchSpinner with "Loading Card List" when isFetching is true', () => {
    vi.mocked(useParams).mockReturnValue({ page: '1' });
    vi.mocked(useSubmitedSearchValue).mockReturnValue('');
    vi.mocked(usePokemonNavigation).mockReturnValue({
      pokemonNavigation: vi.fn(),
    });
    vi.mocked(useQuery).mockReturnValue({
      data: null,
      error: null,
      isError: false,
      isFetching: true,
      refetch: vi.fn(),
    } as never);

    render(<CardListItems />);
    expect(screen.getByTestId('fetch-spinner')).toBeDefined();
    expect(screen.getByText('Loading Card List')).toBeDefined();
  });

  it('shows AlertDanger with error message when isError is true', () => {
    const mockRefetch = vi.fn();
    vi.mocked(useParams).mockReturnValue({ page: '1' });
    vi.mocked(useSubmitedSearchValue).mockReturnValue('');
    vi.mocked(usePokemonNavigation).mockReturnValue({
      pokemonNavigation: vi.fn(),
    });
    vi.mocked(useQuery).mockReturnValue({
      data: null,
      error: new Error('Failed to load'),
      isError: true,
      isFetching: false,
      refetch: mockRefetch,
    } as never);

    render(<CardListItems />);
    expect(screen.getByTestId('alert-danger')).toBeDefined();
    expect(screen.getByText('Error: Failed to load')).toBeDefined();
    expect(screen.getByText('Repeat load fetch')).toBeDefined();
  });

  it('shows "No Pokemons found" when pokemon list is empty and page is 1', () => {
    vi.mocked(useParams).mockReturnValue({ page: '1' });
    vi.mocked(useSubmitedSearchValue).mockReturnValue('');
    vi.mocked(usePokemonNavigation).mockReturnValue({
      pokemonNavigation: vi.fn(),
    });
    vi.mocked(useQuery).mockReturnValue({
      data: {
        data: {
          pokemon: [],
          pokemon_aggregate: { aggregate: { count: 0 } },
        },
      },
      error: null,
      isError: false,
      isFetching: false,
      refetch: vi.fn(),
    } as never);

    render(<CardListItems />);
    expect(screen.getByTestId('alert-danger')).toBeDefined();
    expect(screen.getByText('No Pokemons found')).toBeDefined();
  });

  it('renders pagination and list items when data has pokemon', () => {
    vi.mocked(useParams).mockReturnValue({ page: '1' });
    vi.mocked(useSubmitedSearchValue).mockReturnValue('');
    vi.mocked(usePokemonNavigation).mockReturnValue({
      pokemonNavigation: vi.fn(),
    });
    vi.mocked(useQuery).mockReturnValue({
      data: {
        data: {
          pokemon: [{ id: 1 }, { id: 2 }],
          pokemon_aggregate: { aggregate: { count: 10 } },
        },
      },
      error: null,
      isError: false,
      isFetching: false,
      refetch: vi.fn(),
    } as never);

    render(<CardListItems />);
    expect(screen.getByTestId('pagination')).toBeDefined();
    const listItems = screen.getAllByTestId('card-list-item');
    expect(listItems.length).toBe(2);
  });

  it('navigates to page 1 when page is <= 0', () => {
    const mockNavigation = vi.fn();
    vi.mocked(useParams).mockReturnValue({ page: '0' });
    vi.mocked(useSubmitedSearchValue).mockReturnValue('');
    vi.mocked(usePokemonNavigation).mockReturnValue({
      pokemonNavigation: mockNavigation,
    });
    vi.mocked(useQuery).mockReturnValue({
      data: null,
      error: null,
      isError: false,
      isFetching: false,
      refetch: vi.fn(),
    } as never);

    render(<CardListItems />);
    expect(mockNavigation).toHaveBeenCalledWith({ page: 1 });

    expect(screen.queryByTestId('fetch-spinner')).toBeNull();
    expect(screen.queryByTestId('alert-danger')).toBeNull();
    expect(screen.queryByTestId('pagination')).toBeNull();
  });

  it('returns empty fragment when data is null', () => {
    vi.mocked(useParams).mockReturnValue({ page: '1' });
    vi.mocked(useSubmitedSearchValue).mockReturnValue('');
    vi.mocked(usePokemonNavigation).mockReturnValue({
      pokemonNavigation: vi.fn(),
    });
    vi.mocked(useQuery).mockReturnValue({
      data: null,
      error: null,
      isError: false,
      isFetching: false,
      refetch: vi.fn(),
    } as never);

    render(<CardListItems />);

    expect(screen.queryByTestId('fetch-spinner')).toBeNull();
    expect(screen.queryByTestId('alert-danger')).toBeNull();
    expect(screen.queryByTestId('pagination')).toBeNull();
    expect(screen.queryByTestId('card-list-item')).toBeNull();
  });

  it('navigates to page 1 when pokemon list is empty and page is not 1', () => {
    const mockNavigation = vi.fn();
    vi.mocked(useParams).mockReturnValue({ page: '2' });
    vi.mocked(useSubmitedSearchValue).mockReturnValue('');
    vi.mocked(usePokemonNavigation).mockReturnValue({
      pokemonNavigation: mockNavigation,
    });
    vi.mocked(useQuery).mockReturnValue({
      data: {
        data: {
          pokemon: [],
          pokemon_aggregate: { aggregate: { count: 0 } },
        },
      },
      error: null,
      isError: false,
      isFetching: false,
      refetch: vi.fn(),
    } as never);

    render(<CardListItems />);
    expect(mockNavigation).toHaveBeenCalledWith({ page: 1 });

    expect(screen.queryByTestId('pagination')).toBeNull();
  });

  it('calls refetch when "Repeat load fetch" button is clicked', async () => {
    const mockRefetch = vi.fn();
    vi.mocked(useParams).mockReturnValue({ page: '1' });
    vi.mocked(useSubmitedSearchValue).mockReturnValue('');
    vi.mocked(usePokemonNavigation).mockReturnValue({
      pokemonNavigation: vi.fn(),
    });
    vi.mocked(useQuery).mockReturnValue({
      data: null,
      error: new Error('Failed to load'),
      isError: true,
      isFetching: false,
      refetch: mockRefetch,
    } as never);

    render(<CardListItems />);
    const retryButton = screen.getByText('Repeat load fetch');
    await userEvent.click(retryButton);
    expect(mockRefetch).toHaveBeenCalledTimes(1);
  });
});
