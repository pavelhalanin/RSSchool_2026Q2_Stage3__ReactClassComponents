import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CardList from './CardList';
import { useParams } from 'react-router-dom';
import { usePokemonNavigation } from '../../hook/usePokemonNavigation/usePokemonNavigation';

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useParams: vi.fn(),
    Outlet: () => <div data-testid="outlet" />,
  };
});

vi.mock('../../hook/usePokemonNavigation/usePokemonNavigation', () => ({
  usePokemonNavigation: vi.fn(),
}));

vi.mock('../CsvPanel/CsvPanel', () => ({
  default: () => <div data-testid="csv-panel" />,
}));
vi.mock('../ContainerSection/ContainerSection', () => ({
  default: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
}));
vi.mock('./CardListItems/CardListItems', () => ({
  default: () => <div data-testid="card-list-items" />,
}));
vi.mock('./Search/Search', () => ({
  default: () => <div data-testid="search" />,
}));

describe('CardList', () => {
  it('renders main components when page is valid and details is absent', () => {
    vi.mocked(useParams).mockReturnValue({ page: '1', details: undefined });
    vi.mocked(usePokemonNavigation).mockReturnValue({
      pokemonNavigation: vi.fn(),
    });

    render(
      <MemoryRouter>
        <CardList />
      </MemoryRouter>
    );

    expect(screen.getByText('Pokémon Collection')).toBeDefined();
    expect(screen.getByTestId('search')).toBeDefined();
    expect(screen.getByTestId('card-list-items')).toBeDefined();
    expect(screen.getByTestId('outlet')).toBeDefined();
    expect(screen.getByTestId('csv-panel')).toBeDefined();
  });
});
