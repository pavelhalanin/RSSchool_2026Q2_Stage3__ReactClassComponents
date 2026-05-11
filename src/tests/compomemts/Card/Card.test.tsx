import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, afterEach, beforeEach } from 'vitest';
import Card from '../../../components/Card/Card';
import '@testing-library/jest-dom/vitest';

describe('Card', () => {
  const DEFAULT_STATE = {
    errorBoundary: null,
    search: '',
    searchPrev: null,
    cardList: {
      pokemons: [],
      isFetchNow: false,
      errorFetch: null,
    },
    card: {
      dialogIsOpen: false,
      pokemonId: 0,
      isFetchNow: false,
      pokemon: null,
    },
  };

  const mock_updateState_errorBoundary = vi.fn();
  const mock_updateState_card = vi.fn();
  const mock_updateState_cardList = vi.fn();

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
          state={DEFAULT_STATE}
          updateState_errorBoundary={mock_updateState_errorBoundary}
          updateState_card={mock_updateState_card}
          updateState_cardList={mock_updateState_cardList}
        />
      );

      const dialog = document.querySelector('dialog');
      expect(dialog).toBeInTheDocument();
    });

    it('Card render loader', () => {
      const loadingState = {
        ...DEFAULT_STATE,
        card: {
          ...DEFAULT_STATE.card,
          dialogIsOpen: true,
          isFetchNow: true,
        },
      };

      render(
        <Card
          state={loadingState}
          updateState_errorBoundary={mock_updateState_errorBoundary}
          updateState_card={mock_updateState_card}
          updateState_cardList={mock_updateState_cardList}
        />
      );

      expect(screen.getByText('Load Pokemon Data')).toBeInTheDocument();
    });

    it('Card render pokemon name when data is loaded', () => {
      const pokemonData = {
        ...DEFAULT_STATE,
        card: {
          ...DEFAULT_STATE.card,
          dialogIsOpen: true,
          isFetchNow: false,
          pokemon: {
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
        },
      };

      render(
        <Card
          state={pokemonData}
          updateState_errorBoundary={mock_updateState_errorBoundary}
          updateState_card={mock_updateState_card}
          updateState_cardList={mock_updateState_cardList}
        />
      );

      expect(screen.getByText('Pikachu')).toBeInTheDocument();
    });
  });

  describe('Card dialog', () => {
    it('Card dialog showModal', () => {
      const { rerender } = render(
        <Card
          state={DEFAULT_STATE}
          updateState_errorBoundary={mock_updateState_errorBoundary}
          updateState_card={mock_updateState_card}
          updateState_cardList={mock_updateState_cardList}
        />
      );

      const mock_dialog_showModal = vi.fn();
      HTMLDialogElement.prototype.showModal = mock_dialog_showModal;

      const NEW_STATE = {
        ...DEFAULT_STATE,
        card: {
          ...DEFAULT_STATE.card,
          dialogIsOpen: true,
        },
      };

      rerender(
        <Card
          state={NEW_STATE}
          updateState_errorBoundary={mock_updateState_errorBoundary}
          updateState_card={mock_updateState_card}
          updateState_cardList={mock_updateState_cardList}
        />
      );

      expect(mock_dialog_showModal).toHaveBeenCalled();
    });

    it('Card dialog close', () => {
      const OPEN_STATE = {
        ...DEFAULT_STATE,
        card: {
          ...DEFAULT_STATE.card,
          dialogIsOpen: true,
        },
      };

      const { rerender } = render(
        <Card
          state={OPEN_STATE}
          updateState_errorBoundary={mock_updateState_errorBoundary}
          updateState_card={mock_updateState_card}
          updateState_cardList={mock_updateState_cardList}
        />
      );

      const mock_dialog_close = vi.fn();
      HTMLDialogElement.prototype.close = mock_dialog_close;

      rerender(
        <Card
          state={DEFAULT_STATE}
          updateState_errorBoundary={mock_updateState_errorBoundary}
          updateState_card={mock_updateState_card}
          updateState_cardList={mock_updateState_cardList}
        />
      );

      expect(mock_dialog_close).toHaveBeenCalled();
    });
  });

  describe('Кнопки закрытия', () => {
    it('closes modal when "Close" button is clicked', () => {
      const openState = {
        ...DEFAULT_STATE,
        card: {
          ...DEFAULT_STATE.card,
          dialogIsOpen: true,
          pokemonId: 25,
        },
      };

      render(
        <Card
          state={openState}
          updateState_errorBoundary={mock_updateState_errorBoundary}
          updateState_card={mock_updateState_card}
          updateState_cardList={mock_updateState_cardList}
        />
      );

      const closeButtons = screen.getAllByText('Close');
      fireEvent.click(closeButtons[0]);

      expect(mock_updateState_card).toHaveBeenCalledWith({
        dialogIsOpen: false,
        pokemonId: 0,
        isFetchNow: false,
        pokemon: null,
      });
    });

    it('closes modal when "x" button is clicked', () => {
      const openState = {
        ...DEFAULT_STATE,
        card: {
          ...DEFAULT_STATE.card,
          dialogIsOpen: true,
          pokemonId: 25,
        },
      };

      render(
        <Card
          state={openState}
          updateState_errorBoundary={mock_updateState_errorBoundary}
          updateState_card={mock_updateState_card}
          updateState_cardList={mock_updateState_cardList}
        />
      );

      const closeButtons = screen.getAllByText('x');
      fireEvent.click(closeButtons[0]);

      expect(mock_updateState_card).toHaveBeenCalledWith({
        dialogIsOpen: false,
        pokemonId: 0,
        isFetchNow: false,
        pokemon: null,
      });
    });
  });
});
