import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import CardListSelectPagination from './CardListSelectPagination';
import { useParams } from 'react-router-dom';

vi.mock('./CardListSelectPagination.module.css', () => ({
  default: {
    select_block: 'mock-select-block',
    select: 'mock-select',
  },
}));

const mockPokemonNavigation = vi.fn();
vi.mock('../../../../hook/usePokemonNavigation/usePokemonNavigation', () => ({
  usePokemonNavigation: () => ({
    pokemonNavigation: mockPokemonNavigation,
  }),
}));

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useParams: vi.fn(),
  };
});

describe('CardListSelectPagination', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    (useParams as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
      details: undefined,
    });
  });

  it('renders label and select', () => {
    render(<CardListSelectPagination lastPage={5} currentPage={2} />);

    const label = screen.getByLabelText('Page');
    expect(label).toBeDefined();

    const select = screen.getByLabelText('Page') as HTMLSelectElement;
    expect(select).toBeDefined();
  });

  it('renders correct number of options', () => {
    const lastPage = 5;
    render(<CardListSelectPagination lastPage={lastPage} currentPage={1} />);

    const select = screen.getByLabelText('Page') as HTMLSelectElement;
    expect(select.options.length).toBe(lastPage + 1);
  });

  it('first option is "-" with value "1"', () => {
    render(<CardListSelectPagination lastPage={3} currentPage={2} />);

    const select = screen.getByLabelText('Page') as HTMLSelectElement;
    const firstOption = select.options[0];
    expect(firstOption.value).toBe('1');
    expect(firstOption.textContent).toBe('-');
  });

  it('calls pokemonNavigation with details undefined when no details in URL', () => {
    (useParams as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
      details: undefined,
    });

    render(<CardListSelectPagination lastPage={10} currentPage={1} />);

    const select = screen.getByLabelText('Page') as HTMLSelectElement;
    fireEvent.change(select, { target: { value: '3' } });

    expect(mockPokemonNavigation).toHaveBeenCalledWith({
      page: '3',
      details: undefined,
    });
  });
});
