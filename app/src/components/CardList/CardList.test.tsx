import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import CardList from './CardList';

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useParams: vi.fn(),
  };
});

vi.mock('../../hook/usePokemonNavigation/usePokemonNavigation', () => ({
  usePokemonNavigation: vi.fn(),
}));

vi.mock('./CardListSearch/CardListSearch', () => ({
  default: () => <div data-testid="mock-card-list-search">Search</div>,
}));

vi.mock('./Left/PokemonCards/CardListPokemons', () => ({
  default: () => <div data-testid="mock-card-list-pokemons">Pokemons</div>,
}));

vi.mock('../CsvPanel/CsvPanel', () => ({
  default: () => <div data-testid="mock-csv-panel">CsvPanel</div>,
}));

vi.mock('../ContainerSection/ContainerSection', () => ({
  default: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="mock-container">{children}</div>
  ),
}));

import { useParams } from 'react-router-dom';
import { usePokemonNavigation } from '../../hook/usePokemonNavigation/usePokemonNavigation';

const mockUseParams = vi.mocked(useParams);
const mockUsePokemonNavigation = vi.mocked(usePokemonNavigation);

describe('CardList', () => {
  const mockPokemonNavigation = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();

    mockUsePokemonNavigation.mockReturnValue({
      pokemonNavigation: mockPokemonNavigation,
    });
  });

  const renderWithParams = (page?: string, details?: string) => {
    mockUseParams.mockReturnValue({ page, details });
    return render(
      <MemoryRouter initialEntries={[`/${page ?? ''}/${details ?? ''}`]}>
        <Routes>
          <Route path="/:page/:details" element={<CardList />} />
          <Route path="/:page" element={<CardList />} />
          <Route path="/" element={<CardList />} />
        </Routes>
      </MemoryRouter>
    );
  };

  it('redirects to page 1 when page is not a positive number', () => {
    renderWithParams('invalid');
    expect(mockPokemonNavigation).toHaveBeenCalledWith({ page: 1 });

    const { container } = renderWithParams('invalid');
    expect(
      container.querySelector('[data-testid="mock-card-list-search"]')
    ).toBeNull();
  });

  it('redirects to same page when details is an empty string', () => {
    renderWithParams('1', '');
    expect(mockPokemonNavigation).toHaveBeenCalledWith({ page: '1' });

    const { container } = renderWithParams('1', '');
    expect(
      container.querySelector('[data-testid="mock-card-list-search"]')
    ).toBeNull();
  });
});
