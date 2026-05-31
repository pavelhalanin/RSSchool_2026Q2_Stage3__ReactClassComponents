// CardListLeftRightPagination.test.tsx
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CardListLeftRightPagination from './CardListLeftRightPagination';
import { useParams } from 'react-router-dom';
import { usePokemonNavigation } from '../../../../hook/usePokemonNavigation/usePokemonNavigation';

vi.mock('./CardListLeftButton/CardListLeftButton', () => ({
  default: vi.fn(({ prevPage }) => (
    <button data-testid="mock-left-button" data-prev-page={prevPage}>
      ←
    </button>
  )),
}));

vi.mock('./CardListRightButton/CardListRightButton', () => ({
  default: vi.fn(({ nextPage, lastPage }) => (
    <button
      data-testid="mock-right-button"
      data-next-page={nextPage}
      data-last-page={lastPage}
    >
      →
    </button>
  )),
}));

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useParams: vi.fn(),
  };
});

vi.mock('../../../../hook/usePokemonNavigation/usePokemonNavigation', () => ({
  usePokemonNavigation: vi.fn(),
}));

describe('CardListLeftRightPagination', () => {
  const mockPokemonNavigation = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    vi.mocked(usePokemonNavigation).mockReturnValue({
      pokemonNavigation: mockPokemonNavigation,
    });
  });

  afterEach(() => {
    cleanup();
  });

  it('should render left button, center button, and right button', () => {
    vi.mocked(useParams).mockReturnValue({ details: 'charizard' });
    render(<CardListLeftRightPagination lastPage={10} currentPage={5} />);

    expect(screen.getByTestId('mock-left-button')).toBeTruthy();
    expect(screen.getByRole('button', { name: '5' })).toBeTruthy();
    expect(screen.getByTestId('mock-right-button')).toBeTruthy();
  });

  it('should pass correct prevPage to CardListLeftButton', () => {
    vi.mocked(useParams).mockReturnValue({ details: 'charizard' });
    render(<CardListLeftRightPagination lastPage={10} currentPage={5} />);

    const leftButton = screen.getByTestId('mock-left-button');
    expect(leftButton).toHaveProperty('dataset.prevPage', '4');
  });

  it('should pass correct nextPage and lastPage to CardListRightButton', () => {
    vi.mocked(useParams).mockReturnValue({ details: 'charizard' });
    render(<CardListLeftRightPagination lastPage={10} currentPage={5} />);

    const rightButton = screen.getByTestId('mock-right-button');
    expect(rightButton).toHaveProperty('dataset.nextPage', '6');
    expect(rightButton).toHaveProperty('dataset.lastPage', '10');
  });

  it('should call pokemonNavigation with current page and details when center button is clicked', async () => {
    const user = userEvent.setup();
    vi.mocked(useParams).mockReturnValue({ details: 'charizard' });
    render(<CardListLeftRightPagination lastPage={10} currentPage={5} />);

    const centerButton = screen.getByRole('button', { name: '5' });
    await user.click(centerButton);

    expect(mockPokemonNavigation).toHaveBeenCalledTimes(1);
    expect(mockPokemonNavigation).toHaveBeenCalledWith({
      page: 5,
      details: 'charizard',
    });
  });

  it('should work correctly when details is undefined', async () => {
    const user = userEvent.setup();
    vi.mocked(useParams).mockReturnValue({ details: undefined });
    render(<CardListLeftRightPagination lastPage={3} currentPage={2} />);

    const centerButton = screen.getByRole('button', { name: '2' });
    await user.click(centerButton);

    expect(mockPokemonNavigation).toHaveBeenCalledWith({
      page: 2,
      details: undefined,
    });
  });
});
