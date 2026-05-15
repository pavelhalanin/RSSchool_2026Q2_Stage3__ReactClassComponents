import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, afterEach, beforeEach } from 'vitest';
import Card from '../../../components/Card/Card';
import '@testing-library/jest-dom/vitest';
import FETCH_MOCK from '../../../test-utils/mock/FETCH_MOCK.mock';

describe('Card', () => {
  const mock_updateState_card_isDialogOpen = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  describe('Card render', () => {
    it('Card render dialog', () => {
      render(
        <Card
          isDialogOpen={false}
          pokemonId={1}
          updateState_card_isDialogOpen={mock_updateState_card_isDialogOpen}
        />
      );

      const dialog = document.querySelector('dialog');
      expect(dialog).toBeInTheDocument();
    });

    it('Card render loader when fetching', () => {
      HTMLDialogElement.prototype.showModal = vi.fn();

      render(
        <Card
          isDialogOpen={true}
          pokemonId={1}
          updateState_card_isDialogOpen={mock_updateState_card_isDialogOpen}
        />
      );

      expect(screen.getByText('Load Pokemon Data')).toBeInTheDocument();
    });

    it('Card render pokemon name when data is loaded', async () => {
      HTMLDialogElement.prototype.showModal = vi.fn();

      const mockPokemonData = {
        data: {
          pokemon: [
            {
              name: 'Pikachu',
              pokemoncries: [],
              pokemonsprites: [],
              pokemonabilities: [],
              pokemontypes: [],
              base_experience: 0,
              height: 0,
              weight: 0,
              id: 0,
              is_default: true,
              pokemon_species_id: 0,
            },
          ],
        },
      };

      FETCH_MOCK.mockResolvedValue({
        status: 200,
        json: () => Promise.resolve(mockPokemonData),
      });

      render(
        <Card
          isDialogOpen={true}
          pokemonId={1}
          updateState_card_isDialogOpen={mock_updateState_card_isDialogOpen}
        />
      );

      await waitFor(() => {
        expect(screen.getByText('Pikachu')).toBeInTheDocument();
      });
    });
  });

  it('Card dialog showModal', () => {
    const mock_showModal = vi.fn();
    HTMLDialogElement.prototype.showModal = mock_showModal;
    HTMLDialogElement.prototype.close = vi.fn();

    const { rerender } = render(
      <Card
        isDialogOpen={false}
        pokemonId={1}
        updateState_card_isDialogOpen={mock_updateState_card_isDialogOpen}
      />
    );

    rerender(
      <Card
        isDialogOpen={true}
        pokemonId={1}
        updateState_card_isDialogOpen={mock_updateState_card_isDialogOpen}
      />
    );

    expect(mock_showModal).toHaveBeenCalled();
  });

  it('closes modal when "Close" button is clicked', () => {
    HTMLDialogElement.prototype.showModal = vi.fn();
    HTMLDialogElement.prototype.close = vi.fn();

    render(
      <Card
        isDialogOpen={true}
        pokemonId={25}
        updateState_card_isDialogOpen={mock_updateState_card_isDialogOpen}
      />
    );

    const closeButtons = screen.getAllByText('Close');
    fireEvent.click(closeButtons[0]);

    expect(mock_updateState_card_isDialogOpen).toHaveBeenCalledWith(false);
  });

  it('closes modal when "x" button is clicked', () => {
    HTMLDialogElement.prototype.showModal = vi.fn();
    HTMLDialogElement.prototype.close = vi.fn();

    render(
      <Card
        isDialogOpen={true}
        pokemonId={25}
        updateState_card_isDialogOpen={mock_updateState_card_isDialogOpen}
      />
    );

    const xButtons = screen.getAllByText('x');
    fireEvent.click(xButtons[0]);

    expect(mock_updateState_card_isDialogOpen).toHaveBeenCalledWith(false);
  });
});
