import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import CardListPagination from './CardListPagination';

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

vi.mock('../../../../store/slices/useCardListState/hook', () => ({
  useCardListPagination: vi.fn(),
}));

import { useParams } from 'react-router-dom';
import { usePokemonNavigation } from '../../../../hook/usePokemonNavigation/usePokemonNavigation';
import { useCardListPagination } from '../../../../store/slices/useCardListState/hook';

const mockUseParams = vi.mocked(useParams);
const mockUsePokemonNavigation = vi.mocked(usePokemonNavigation);
const mockUseCardListPagination = vi.mocked(useCardListPagination);

describe('CardListPagination', () => {
  const mockPokemonNavigation = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();

    mockUsePokemonNavigation.mockReturnValue({
      pokemonNavigation: mockPokemonNavigation,
    });
  });

  it('renders buttons for each page based on LAST_PAGE', () => {
    mockUseParams.mockReturnValue({ page: '1' });
    mockUseCardListPagination.mockReturnValue({
      LAST_PAGE: 5,
      CURRENT_PAGE: 1,
      LIMITL_ITEMS: 8,
      SKIP_ITEMS: 0,
      TOTAL_ITEMS: 40,
    });

    const { container } = render(<CardListPagination />);
    const buttons = container.querySelectorAll('button');
    expect(buttons.length).toBe(5);

    buttons.forEach((button, index) => {
      expect(button.textContent).toBe(`${index + 1}`);
    });
  });

  it('applies active class to the button matching page from URL', () => {
    mockUseParams.mockReturnValue({ page: '3' });
    mockUseCardListPagination.mockReturnValue({
      LAST_PAGE: 5,
      CURRENT_PAGE: 3,
      LIMITL_ITEMS: 8,
      SKIP_ITEMS: 0,
      TOTAL_ITEMS: 40,
    });

    const { container } = render(<CardListPagination />);
    const buttons = container.querySelectorAll('button');

    expect(buttons[2].className).toContain('pagination__active');

    expect(buttons[0].className).not.toContain('pagination__active');
    expect(buttons[1].className).not.toContain('pagination__active');
    expect(buttons[3].className).not.toContain('pagination__active');
    expect(buttons[4].className).not.toContain('pagination__active');
  });

  it('does not apply active class when page does not match any button', () => {
    mockUseParams.mockReturnValue({ page: '10' });
    mockUseCardListPagination.mockReturnValue({
      LAST_PAGE: 5,
      CURRENT_PAGE: 5,
      LIMITL_ITEMS: 8,
      SKIP_ITEMS: 0,
      TOTAL_ITEMS: 40,
    });

    const { container } = render(<CardListPagination />);
    const buttons = container.querySelectorAll('button');

    buttons.forEach((button) => {
      expect(button.className).not.toContain('pagination__active');
    });
  });

  it('calls pokemonNavigation with correct page when button is clicked', () => {
    mockUseParams.mockReturnValue({ page: '1' });
    mockUseCardListPagination.mockReturnValue({
      LAST_PAGE: 3,
      CURRENT_PAGE: 1,
      LIMITL_ITEMS: 8,
      SKIP_ITEMS: 0,
      TOTAL_ITEMS: 24,
    });

    const { container } = render(<CardListPagination />);
    const buttons = container.querySelectorAll('button');

    fireEvent.click(buttons[1]);
    expect(mockPokemonNavigation).toHaveBeenCalledWith({ page: '2' });

    fireEvent.click(buttons[2]);
    expect(mockPokemonNavigation).toHaveBeenCalledWith({ page: '3' });
  });
});
