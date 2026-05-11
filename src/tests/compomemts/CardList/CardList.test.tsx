import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { describe, it, expect, vi, afterEach, beforeEach } from 'vitest';
import CardList from '../../../components/CardList/CardList';
import '@testing-library/jest-dom/vitest';
import CARD_LIST_PROPS_MOCK from '../../../test-utils/mock/CARD_LIST_PROPS_MOCK.mock';

const mock_localStorage = (() => {
  const STORE: Record<string, string> = {};
  return {
    getItem: vi.fn((key: string) => STORE[key] || null),
    setItem: vi.fn((key: string, value: string) => {
      STORE[key] = value;
    }),
  };
})();

Object.defineProperty(window, 'localStorage', { value: mock_localStorage });

vi.mock('../../../components/Search/Search', () => ({
  default: () => <div data-testid="mock-search">Mock Search</div>,
}));

vi.mock('../../../components/Card/Card', () => ({
  default: () => <div data-testid="mock-card">Mock Card</div>,
}));

describe('CardList', () => {
  const DEFAULT_STATE_MOCK = {
    errorBoundary: null,
    search: '',
    searchPrev: '',
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

  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  describe('CardList render', () => {
    it('CardList', () => {
      const loadingState = {
        ...DEFAULT_STATE_MOCK,
        cardList: {
          ...DEFAULT_STATE_MOCK.cardList,
          isFetchNow: true,
        },
      };

      render(<CardList {...CARD_LIST_PROPS_MOCK} state={loadingState} />);

      expect(screen.getByText('Pokémon Collection')).toBeInTheDocument();
    });

    it('CardList render Search component', () => {
      render(<CardList {...CARD_LIST_PROPS_MOCK} />);

      expect(screen.getByTestId('mock-search')).toBeInTheDocument();
    });

    it('CardList render Card component', () => {
      render(<CardList {...CARD_LIST_PROPS_MOCK} />);

      expect(screen.getByTestId('mock-card')).toBeInTheDocument();
    });

    it('CardList render error buttons', () => {
      render(<CardList {...CARD_LIST_PROPS_MOCK} />);

      expect(screen.getByText('Generate error boundary')).toBeInTheDocument();
      expect(screen.getByText('Generate fetch error')).toBeInTheDocument();
    });

    it('CardList render title "Pokémon Collection"', () => {
      render(<CardList {...CARD_LIST_PROPS_MOCK} />);

      expect(screen.getByText('Pokémon Collection')).toBeInTheDocument();
    });
  });

  describe('Errors', () => {
    it('CardList render fecth error', () => {
      const ERROR_STATE = {
        ...DEFAULT_STATE_MOCK,
        cardList: {
          ...DEFAULT_STATE_MOCK.cardList,
          errorFetch: 'HTTP 404',
        },
      };

      render(<CardList {...CARD_LIST_PROPS_MOCK} state={ERROR_STATE} />);

      expect(screen.getByText('HTTP 404')).toBeInTheDocument();
      expect(screen.getByText('Repeat load fetch')).toBeInTheDocument();
    });

    it('CardList render "No Pokémon found"', () => {
      const EMPTY_POKEMON_ARRAY_STATE = {
        ...DEFAULT_STATE_MOCK,
        cardList: {
          ...DEFAULT_STATE_MOCK.cardList,
          pokemons: [],
          errorFetch: null,
        },
      };

      render(
        <CardList {...CARD_LIST_PROPS_MOCK} state={EMPTY_POKEMON_ARRAY_STATE} />
      );

      expect(
        screen.getByText(/No Pokémon found by search/i)
      ).toBeInTheDocument();
    });
  });

  describe('CardList error buttons', () => {
    it('CardList clicked on "Generate fetch error" button', () => {
      render(<CardList {...CARD_LIST_PROPS_MOCK} />);

      const generateErrorButton = screen.getByText('Generate fetch error');
      fireEvent.click(generateErrorButton);

      expect(CARD_LIST_PROPS_MOCK.updateState_cardList).toHaveBeenCalledWith({
        pokemons: [],
        isFetchNow: false,
        errorFetch: 'Custom test error HTTP 400-500',
      });
    });

    it('CardList clicked on "Generate error boundary" button', () => {
      render(<CardList {...CARD_LIST_PROPS_MOCK} />);

      const boundaryButton = screen.getByText('Generate error boundary');
      fireEvent.click(boundaryButton);

      expect(
        CARD_LIST_PROPS_MOCK.updateState_errorBoundary
      ).toHaveBeenCalledWith(
        'Error: Custom Error Boundary generated for Fallback UI'
      );
    });
  });

  describe('CardList render Pokemon list', () => {
    it('CardList render Pokemon list', () => {
      const pokemonsState = {
        ...DEFAULT_STATE_MOCK,
        cardList: {
          ...DEFAULT_STATE_MOCK.cardList,
          pokemons: [
            {
              id: 1,
              name: 'Bulbasaur',
              weight: 0,
              height: 0,
              image_src: '',
              pokemontypes: [],
            },
            {
              id: 2,
              name: 'Ivysaur',
              weight: 0,
              height: 0,
              image_src: '',
              pokemontypes: [],
            },
          ],
          errorFetch: null,
        },
      };

      render(<CardList {...CARD_LIST_PROPS_MOCK} state={pokemonsState} />);

      expect(screen.getByText('Bulbasaur')).toBeInTheDocument();
      expect(screen.getByText('Ivysaur')).toBeInTheDocument();
      expect(screen.getByText('#1')).toBeInTheDocument();
      expect(screen.getByText('#2')).toBeInTheDocument();
    });
  });
});
