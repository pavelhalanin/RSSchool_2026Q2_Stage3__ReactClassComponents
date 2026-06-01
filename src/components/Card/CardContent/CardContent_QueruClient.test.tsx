import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest';
import { cleanup, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import CardContent from './CardContent';
import getCardFetch from '../../../query/card/getCardFetch';
import type IPokemon from '../../../query/card/IPokemon';

vi.mock('../../../query/card/getCardFetch');

vi.mock('react-router-dom', () => ({
  useParams: () => ({ details: '1' }),
  useQueryClient: vi.fn(),
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

vi.mock('./CardMainData/CardMainData', () => ({
  default: ({ data }: { data: IPokemon }) => (
    <div data-testid="card-main-data">{data?.name}</div>
  ),
}));

vi.mock('./CardCries/CardCries', () => ({
  default: () => <div data-testid="card-cries" />,
}));

vi.mock('./CardSprites/CardSprites', () => ({
  default: () => <div data-testid="card-sprites" />,
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

const successResponse: IPokemon = {
  id: 1,
  name: 'bulbasaur',
  weight: 69,
  height: 7,
  pokemontypes: [{ slot: 1, type: { name: 'grass' } }],
  pokemonsprites: [],
  pokemoncries: [],
};

describe('CardContent', () => {
  afterEach(() => {
    cleanup();
  });

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('Feature 5: shows loading spinner when isFetching is true', () => {
    vi.mocked(getCardFetch).mockImplementation(
      () => new Promise<IPokemon>(() => {})
    );
    render(<CardContent />, { wrapper: createWrapper() });
    expect(screen.getByTestId('spinner')).toBeDefined();
    expect(screen.getByText('Loading Card')).toBeDefined();
  });

  it('Feature 5: shows error alert and refetch on button click', async () => {
    vi.mocked(getCardFetch).mockRejectedValue(new Error('Network error'));

    render(<CardContent />, { wrapper: createWrapper() });

    await waitFor(() => {
      expect(screen.getByTestId('alert-danger')).toBeDefined();
    });
    expect(screen.getByText(/Network error/)).toBeDefined();

    const retryButton = screen.getByText('Refetch');
    await userEvent.click(retryButton);

    expect(vi.mocked(getCardFetch)).toHaveBeenCalledTimes(2);
  });

  it('Feature 5: renders card data when fetch succeeds', async () => {
    vi.mocked(getCardFetch).mockResolvedValue(successResponse);
    render(<CardContent />, { wrapper: createWrapper() });

    await waitFor(() => {
      expect(screen.getByTestId('card-main-data')).toBeDefined();
    });
    expect(screen.getByText('bulbasaur')).toBeDefined();
    expect(screen.getByTestId('card-cries')).toBeDefined();
    expect(screen.getByTestId('card-sprites')).toBeDefined();
  });

  it('Feature 5: uses cache for identical query key (same details)', async () => {
    const spy = vi.mocked(getCardFetch).mockResolvedValue(successResponse);

    const queryClient = new QueryClient({
      defaultOptions: { queries: { retry: false, staleTime: 10000 } },
    });
    const wrapper: React.FC<React.PropsWithChildren> = ({ children }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );

    const firstRender = render(<CardContent />, { wrapper });
    await waitFor(() => {
      expect(screen.getByTestId('card-main-data')).toBeDefined();
    });
    expect(spy).toHaveBeenCalledTimes(1);
    firstRender.unmount();

    render(<CardContent />, { wrapper });
    await waitFor(() => {
      expect(screen.getByTestId('card-main-data')).toBeDefined();
    });

    expect(spy).toHaveBeenCalledTimes(1);
  });
});
