import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest';
import { cleanup, render, screen, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import CardListItems from './CardListItems';
import getCardListFetch from '../../../query/cardList/getCardListFetch';
import type { ICardListItemPokemon } from '../../../query/cardList/IPaginationCardList';
import type IPadinationCardList from '../../../query/cardList/IPaginationCardList';

vi.mock('../../../query/cardList/getCardListFetch');

vi.mock('react-router-dom', () => ({
  useParams: () => ({ page: '1' }),
}));

vi.mock('../../../store/slices/useSearch/hook', () => ({
  useSubmitedSearchValue: () => '',
}));

const pokemonNavigationMock = vi.fn();

vi.mock('../../../hook/usePokemonNavigation/usePokemonNavigation', () => ({
  usePokemonNavigation: () => ({ pokemonNavigation: pokemonNavigationMock }),
}));

vi.mock('../../FetchSpinner/FetchSpinner', () => ({
  default: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="spinner">{children}</div>
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
  default: ({ item }: { item: ICardListItemPokemon }) => (
    <div data-testid="card-item">{item.name}</div>
  ),
}));

function createWrapper(): React.FC<React.PropsWithChildren> {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: false } },
  });
  const Wrapper = ({ children }: React.PropsWithChildren) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
  Wrapper.displayName = 'QueryClientWrapper';
  return Wrapper;
}

const successResponse: IPadinationCardList = {
  data: {
    pokemon: [
      {
        id: 1,
        name: 'bulbasaur',
        weight: 69,
        height: 7,
        image_src: '',
        pokemontypes: [],
      },
      {
        id: 2,
        name: 'ivysaur',
        weight: 130,
        height: 10,
        image_src: '',
        pokemontypes: [],
      },
    ],
    pokemon_aggregate: { aggregate: { count: 2 } },
  },
};

const emptyResponse: IPadinationCardList = {
  data: { pokemon: [], pokemon_aggregate: { aggregate: { count: 0 } } },
};

describe('CardListItems', () => {
  afterEach(() => {
    cleanup();
  });

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('Feature 5: shows loading state while query is fetching', () => {
    vi.mocked(getCardListFetch).mockImplementation(
      () => new Promise<IPadinationCardList>(() => {})
    );
    render(<CardListItems />, { wrapper: createWrapper() });
    expect(screen.getByTestId('spinner')).toBeDefined();
  });

  it('Feature 5: renders pokemon cards after successful fetch', async () => {
    vi.mocked(getCardListFetch).mockResolvedValue(successResponse);
    render(<CardListItems />, { wrapper: createWrapper() });
    await waitFor(() => {
      expect(screen.getAllByTestId('card-item')).toHaveLength(2);
    });
    expect(screen.getByText('bulbasaur')).toBeDefined();
    expect(screen.getByText('ivysaur')).toBeDefined();
    expect(screen.getByTestId('pagination')).toBeDefined();
  });

  it('Feature 5: renders error state when request fails', async () => {
    vi.mocked(getCardListFetch).mockRejectedValue(new Error('Network error'));
    render(<CardListItems />, { wrapper: createWrapper() });
    await waitFor(() => {
      expect(screen.getByTestId('alert-danger')).toBeDefined();
    });
    expect(screen.getByText(/Network error/)).toBeDefined();
  });

  it('Feature 5: renders empty state when pokemon list is empty', async () => {
    vi.mocked(getCardListFetch).mockResolvedValue(emptyResponse);
    render(<CardListItems />, { wrapper: createWrapper() });
    await waitFor(() => {
      expect(screen.getByText('No Pokemons found')).toBeDefined();
    });
  });

  it('Feature 5: uses react-query cache for identical query key', async () => {
    const spy = vi.mocked(getCardListFetch).mockResolvedValue(successResponse);
    const queryClient = new QueryClient({
      defaultOptions: { queries: { retry: false, staleTime: 10000 } },
    });
    const wrapper: React.FC<React.PropsWithChildren> = ({ children }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );
    const firstRender = render(<CardListItems />, { wrapper });
    await waitFor(() => {
      expect(screen.getAllByTestId('card-item')).toHaveLength(2);
    });
    expect(spy).toHaveBeenCalledTimes(1);
    firstRender.unmount();
    render(<CardListItems />, { wrapper });
    await waitFor(() => {
      expect(screen.getAllByTestId('card-item')).toHaveLength(2);
    });
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
