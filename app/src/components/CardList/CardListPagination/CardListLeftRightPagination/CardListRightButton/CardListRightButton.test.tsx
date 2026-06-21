import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CardListRightButton from './CardListRightButton';
import { useParams } from 'react-router-dom';
import { usePokemonNavigation } from '../../../../../hook/usePokemonNavigation/usePokemonNavigation';

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useParams: vi.fn(),
  };
});

vi.mock(
  '../../../../../hook/usePokemonNavigation/usePokemonNavigation',
  () => ({
    usePokemonNavigation: vi.fn(),
  })
);

describe('CardListRightButton', () => {
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

  it('should be disabled when nextPage > lastPage', () => {
    vi.mocked(useParams).mockReturnValue({ details: undefined });

    render(<CardListRightButton nextPage={5} lastPage={3} />);

    const button = screen.getByText('→');
    expect(button).toHaveProperty('disabled', true);
    expect(mockPokemonNavigation).not.toHaveBeenCalled();
  });

  it('should call pokemonNavigation with correct arguments on click when nextPage <= lastPage', async () => {
    const user = userEvent.setup();
    vi.mocked(useParams).mockReturnValue({ details: '1' });

    render(<CardListRightButton nextPage={2} lastPage={5} />);
    const button = screen.getByText('→');
    expect(button).toHaveProperty('disabled', false);

    await user.click(button);
    expect(mockPokemonNavigation).toHaveBeenCalledTimes(1);
    expect(mockPokemonNavigation).toHaveBeenCalledWith({
      page: 2,
      details: '1',
    });
  });
});
