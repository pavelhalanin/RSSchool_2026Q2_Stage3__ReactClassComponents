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
      isFetch: false,
      errorFetch: null,
      item: null,
      actions: useCardStore.getState().actions,
    });
    FETCH_MOCK.mockClear();
  });

  it('should have initial state', () => {
    const state = useCardStore.getState();
    expect(state.isFetch).toBe(false);
    expect(state.errorFetch).toBeNull();
    expect(state.item).toBeNull();
  });

  describe('closeCard', () => {
    it('should reset state to default', () => {
      const { actions } = useCardStore.getState();
      useCardStore.setState({
        isFetch: true,
        errorFetch: 'error',
        item: mockPokemon,
      });
      actions.closeCard();
      const state = useCardStore.getState();
      expect(state.isFetch).toBe(false);
      expect(state.errorFetch).toBeNull();
      expect(state.item).toBeNull();
    });
  });

  describe('generateFetchError', () => {
    it('should set errorFetch and clear item', () => {
      const { actions } = useCardStore.getState();
      useCardStore.setState({ item: mockPokemon, isFetch: true });
      actions.generateFetchError();
      const state = useCardStore.getState();
      expect(state.isFetch).toBe(false);
      expect(state.errorFetch).toBe('Custom test error HTTP 400-500');
      expect(state.item).toBeNull();
    });
  });

  describe('loadCard_byDetails', () => {
    it('should do nothing if details is undefined', async () => {
      const { actions } = useCardStore.getState();
      await actions.loadCard_byDetails(undefined);
      const state = useCardStore.getState();
      expect(state.isFetch).toBe(false);
      expect(state.errorFetch).toBeNull();
      expect(state.item).toBeNull();
      expect(FETCH_MOCK).not.toHaveBeenCalled();
    });

    it('should do nothing if details is null', async () => {
      const { actions } = useCardStore.getState();
      await actions.loadCard_byDetails(null as unknown as undefined);
      const state = useCardStore.getState();
      expect(state.isFetch).toBe(false);
      expect(state.errorFetch).toBeNull();
      expect(state.item).toBeNull();
      expect(FETCH_MOCK).not.toHaveBeenCalled();
    });

    it('should set loading state then success', async () => {
      FETCH_MOCK.mockResolvedValue({
        status: 200,
        json: async () => ({ data: { pokemon: [mockPokemon] } }),
        text: async () => '',
      } as Response);

      const { actions } = useCardStore.getState();
      const promise = actions.loadCard_byDetails('1');
      let state = useCardStore.getState();
      expect(state.isFetch).toBe(true);
      expect(state.errorFetch).toBeNull();
      expect(state.item).toBeNull();

      await promise;
      state = useCardStore.getState();
      expect(state.isFetch).toBe(false);
      expect(state.errorFetch).toBeNull();
      expect(state.item).toEqual(mockPokemon);
      expect(FETCH_MOCK).toHaveBeenCalledTimes(1);
    });

    it('should handle HTTP error status', async () => {
      FETCH_MOCK.mockResolvedValue({
        status: 404,
        text: async () => 'Not Found',
        json: async () => ({}),
      } as Response);

      const { actions } = useCardStore.getState();
      await actions.loadCard_byDetails('999');
      const state = useCardStore.getState();
      expect(state.isFetch).toBe(false);
      expect(state.item).toBeNull();
    });

    it('should handle network exception', async () => {
      FETCH_MOCK.mockRejectedValue(new Error('Network error'));

      const { actions } = useCardStore.getState();
      await actions.loadCard_byDetails('1');
      const state = useCardStore.getState();
      expect(state.isFetch).toBe(false);
      expect(state.errorFetch).toBe('Error: Network error');
      expect(state.item).toBeNull();
    });
  });
});
