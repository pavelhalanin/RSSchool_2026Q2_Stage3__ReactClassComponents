import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import CardContent from './CardContent';
import { useParams } from 'react-router-dom';
import { useQuery, useQueryClient } from '@tanstack/react-query';

vi.mock('react-router-dom', () => ({
  useParams: vi.fn(),
}));

vi.mock('@tanstack/react-query', () => ({
  useQuery: vi.fn(),
  useQueryClient: vi.fn(),
}));

vi.mock('../../../query/card/getCardFetch', () => ({
  default: vi.fn(() => Promise.resolve({ id: 1, name: 'Bulbasaur' })),
}));

vi.mock('../../FetchSpinner/FetchSpinner', () => ({
  default: vi.fn(({ children }: { children: React.ReactNode }) => (
    <div data-testid="fetch-spinner">{children}</div>
  )),
}));

vi.mock('../../AlertDanger/AlertDanger', () => ({
  default: vi.fn(({ children }: { children: React.ReactNode }) => (
    <div data-testid="alert-danger">{children}</div>
  )),
}));

vi.mock('./CardMainData/CardMainData', () => ({
  default: vi.fn(({ data }: { data: unknown }) => (
    <div data-testid="card-main-data">Main Data: {JSON.stringify(data)}</div>
  )),
}));

vi.mock('./CardCries/CardCries', () => ({
  default: vi.fn(() => <div data-testid="card-cries" />),
}));

vi.mock('./CardSprites/CardSprites', () => ({
  default: vi.fn(() => <div data-testid="card-sprites" />),
}));

vi.mock('./../../CardList/CardList.module.css', () => ({
  default: { card_list__right_block_buttons: 'mocked-buttons-class' },
}));

describe('CardContent lines', () => {
  const mockRefetch = vi.fn();
  const mockRemoveQueries = vi.fn();
  const mockQueryClient = {
    removeQueries: mockRemoveQueries,
  };

  beforeEach(() => {
    vi.clearAllMocks();
    vi.mocked(useParams).mockReturnValue({ details: '25' });
    vi.mocked(useQueryClient).mockReturnValue(mockQueryClient as never);
  });

  it('renders FetchSpinner when isFetching is true', () => {
    vi.mocked(useQuery).mockReturnValue({
      data: null,
      error: null,
      isError: false,
      isFetching: true,
      refetch: mockRefetch,
    } as never);

    render(<CardContent />);
    const spinner = screen.queryByTestId('fetch-spinner');
    expect(spinner).not.toBeNull();
    expect(spinner?.textContent).toBe('Loading Card');
  });

  it('renders AlertDanger when isError is true', () => {
    const testError = new Error('Network error');
    vi.mocked(useQuery).mockReturnValue({
      data: null,
      error: testError,
      isError: true,
      isFetching: false,
      refetch: mockRefetch,
    } as never);

    render(<CardContent />);
    const alert = screen.queryByTestId('alert-danger');
    expect(alert).not.toBeNull();
    const errorText = screen.queryByText('Error: Network error');
    expect(errorText).not.toBeNull();
    const refetchButton = screen.queryByRole('button', { name: 'Refetch' });
    expect(refetchButton).not.toBeNull();
  });

  it('renders child components when data is loaded', () => {
    vi.mocked(useQuery).mockReturnValue({
      data: { id: 25, name: 'Pikachu' },
      error: null,
      isError: false,
      isFetching: false,
      refetch: mockRefetch,
    } as never);

    render(<CardContent />);
    expect(screen.queryByTestId('card-main-data')).not.toBeNull();
    expect(screen.queryByTestId('card-cries')).not.toBeNull();
    expect(screen.queryByTestId('card-sprites')).not.toBeNull();
  });
});
