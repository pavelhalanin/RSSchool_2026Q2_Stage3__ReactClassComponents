import { describe, it, expect, beforeEach } from 'vitest';
import { useCardStore } from './../useCardStore';
import FETCH_MOCK from './../../../../test-utils/mock/FETCH_MOCK.mock';
import type { IPokemon } from './../types';

const mockPokemon: IPokemon = {
  id: 1,
  name: 'bulbasaur',
  weight: 69,
  height: 7,
  pokemontypes: [{ slot: 1, type: { name: 'grass' } }],
  pokemonsprites: [],
  pokemoncries: [],
};

describe('useCardStore', () => {
  beforeEach(() => {
    useCardStore.setState({
      cardState: {
        isFetch: false,
        errorFetch: null,
        item: null,
      },
      cardActions: useCardStore.getState().cardActions,
    });
    FETCH_MOCK.mockClear();
  });

  it('should have initial state', () => {
    const state = useCardStore.getState();
    expect(state.cardState.isFetch).toBe(false);
    expect(state.cardState.errorFetch).toBeNull();
    expect(state.cardState.item).toBeNull();
  });

  describe('closeCard', () => {
    it('should reset state to default', () => {
      const { cardActions } = useCardStore.getState();
      useCardStore.setState({
        cardState: {
          isFetch: true,
          errorFetch: 'error',
          item: mockPokemon,
        },
      });
      cardActions.closeCard();
      const state = useCardStore.getState();
      expect(state.cardState.isFetch).toBe(false);
      expect(state.cardState.errorFetch).toBeNull();
      expect(state.cardState.item).toBeNull();
    });
  });

  describe('generateFetchError', () => {
    it('should set errorFetch and clear item', () => {
      const { cardActions } = useCardStore.getState();
      useCardStore.setState({
        cardState: {
          item: mockPokemon,
          isFetch: true,
          errorFetch: null,
        },
      });
      cardActions.generateFetchError();
      const state = useCardStore.getState();
      expect(state.cardState.isFetch).toBe(false);
      expect(state.cardState.errorFetch).toBe('Custom test error HTTP 400-500');
      expect(state.cardState.item).toBeNull();
    });
  });

  describe('loadCard_byDetails', () => {
    it('should do nothing if details is undefined', async () => {
      const { cardActions } = useCardStore.getState();
      await cardActions.loadCard_byDetails(undefined);
      const state = useCardStore.getState();
      expect(state.cardState.isFetch).toBe(false);
      expect(state.cardState.errorFetch).toBeNull();
      expect(state.cardState.item).toBeNull();
      expect(FETCH_MOCK).not.toHaveBeenCalled();
    });

    it('should do nothing if details is null', async () => {
      const { cardActions } = useCardStore.getState();
      await cardActions.loadCard_byDetails(null as unknown as undefined);
      const state = useCardStore.getState();
      expect(state.cardState.isFetch).toBe(false);
      expect(state.cardState.errorFetch).toBeNull();
      expect(state.cardState.item).toBeNull();
      expect(FETCH_MOCK).not.toHaveBeenCalled();
    });

    it('should set loading state then success', async () => {
      FETCH_MOCK.mockResolvedValue({
        status: 200,
        json: async () => ({ data: { pokemon: [mockPokemon] } }),
        text: async () => '',
      } as Response);

      const { cardActions } = useCardStore.getState();
      const promise = cardActions.loadCard_byDetails('1');

      let state = useCardStore.getState();
      expect(state.cardState.isFetch).toBe(true);
      expect(state.cardState.errorFetch).toBeNull();
      expect(state.cardState.item).toBeNull();

      await promise;
      state = useCardStore.getState();
      expect(state.cardState.isFetch).toBe(false);
      expect(state.cardState.errorFetch).toBeNull();
      expect(state.cardState.item).toEqual(mockPokemon);
      expect(FETCH_MOCK).toHaveBeenCalledTimes(1);
    });

    it('should handle HTTP error status', async () => {
      FETCH_MOCK.mockResolvedValue({
        status: 404,
        text: async () => 'Not Found',
        json: async () => ({}),
      } as Response);

      const { cardActions } = useCardStore.getState();
      await cardActions.loadCard_byDetails('999');
      const state = useCardStore.getState();
      expect(state.cardState.isFetch).toBe(false);
      expect(state.cardState.item).toBeNull();
    });

    it('should handle network exception', async () => {
      FETCH_MOCK.mockRejectedValue(new Error('Network error'));

      const { cardActions } = useCardStore.getState();
      await cardActions.loadCard_byDetails('1');
      const state = useCardStore.getState();
      expect(state.cardState.isFetch).toBe(false);
      expect(state.cardState.errorFetch).toBe('Error: Network error');
      expect(state.cardState.item).toBeNull();
    });
  });
});
