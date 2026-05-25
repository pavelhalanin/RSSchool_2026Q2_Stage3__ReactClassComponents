import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { create } from 'zustand';
import { createCardListSlice } from '../slice';
import type { ICardListSlice } from '../types';

vi.mock('../../../../utils/downloadFile_byText/downloadFile_byText', () => ({
  downloadFile_byText: vi.fn(),
}));

import { downloadFile_byText } from '../../../../utils/downloadFile_byText/downloadFile_byText';

const FETCH_MOCK = vi.fn();
vi.stubGlobal('fetch', FETCH_MOCK);

const createStore = () =>
  create<ICardListSlice>()((...args) => createCardListSlice(...args));

describe('CardList Slice Tests', () => {
  describe('createCardListSlice', () => {
    beforeEach(() => {
      vi.spyOn(console, 'log').mockImplementation(() => {});
    });

    afterEach(() => {
      vi.clearAllMocks();
    });

    describe('cardListActions', () => {
      it('setSearch should update search in state', () => {
        const store = createStore();
        const newSearch = 'pikachu';

        store.getState().cardListActions.setSearch(newSearch);

        expect(store.getState().cardListState.search).toBe(newSearch);
        expect(store.getState().cardListState.prevSearch).toBeNull();
      });

      it('setPage should update page and CURRENT_PAGE, ignoring values <= 0', () => {
        const store = createStore();
        const newPage = '5';

        store.getState().cardListActions.setPage(newPage);

        expect(store.getState().cardListState.page).toBe('5');
        expect(store.getState().cardListState.pagination.CURRENT_PAGE).toBe(5);

        store.getState().cardListActions.setPage('0');
        expect(store.getState().cardListState.page).toBe('1');
        expect(store.getState().cardListState.pagination.CURRENT_PAGE).toBe(1);
      });

      it('generateFetchError should set errorFetch and clear items', () => {
        const store = createStore();
        expect(store.getState().cardListState.errorFetch).toBeNull();
        expect(store.getState().cardListState.items).toEqual([]);

        store.getState().cardListActions.generateFetchError();

        expect(store.getState().cardListState.errorFetch).toBe(
          'Custom test error HTTP 400-500'
        );
        expect(store.getState().cardListState.isFetch).toBe(false);
        expect(store.getState().cardListState.items).toEqual([]);
      });

      describe('fetchPokemons', () => {
        const mockPokemonData = {
          data: {
            pokemon: [
              {
                id: 1,
                name: 'bulbasaur',
                weight: 69,
                height: 7,
                image_src: '',
                pokemontypes: [{ slot: 1, type: { name: 'grass' } }],
              },
            ],
            pokemon_aggregate: {
              aggregate: { count: 1 },
            },
          },
        };

        beforeEach(() => {
          FETCH_MOCK.mockResolvedValue({
            status: 200,
            json: async () => mockPokemonData,
            text: async () => '',
          });
        });

        it('should perform fetch if search or page changed, and update state', async () => {
          const store = createStore();
          store.getState().cardListActions.setSearch('pikachu');
          store.getState().cardListActions.setPage('2');

          await store.getState().cardListActions.fetchPokemons();

          expect(FETCH_MOCK).toHaveBeenCalledTimes(1);
          const fetchCall = FETCH_MOCK.mock.calls[0];
          expect(fetchCall[0]).toBe('https://graphql.pokeapi.co/v1beta2');
          expect(fetchCall[1].method).toBe('POST');
          const body = JSON.parse(fetchCall[1].body);
          expect(body.query).toContain('pokemon(limit: 8, offset: 8');
          expect(body.query).toContain('where: {name: {_like: "%pikachu%"}}');

          const state = store.getState();
          expect(state.cardListState.isFetch).toBe(false);
          expect(state.cardListState.items).toEqual(
            mockPokemonData.data.pokemon
          );
          expect(state.cardListState.prevSearch).toBe('pikachu');
          expect(state.cardListState.prevPage).toBe('2');
          expect(state.cardListState.errorFetch).toBeNull();
          expect(state.cardListState.pagination.TOTAL_ITEMS).toBe(1);
          expect(state.cardListState.pagination.LAST_PAGE).toBe(1);
          expect(state.cardListState.pagination.CURRENT_PAGE).toBe(2);
          expect(state.cardListState.pagination.SKIP_ITEMS).toBe(8);
        });

        it('should not perform fetch if search and page unchanged and no error', async () => {
          const store = createStore();
          store.setState({
            cardListState: {
              ...store.getState().cardListState,
              search: 'pika',
              prevSearch: 'pika',
              page: '1',
              prevPage: '1',
              errorFetch: null,
            },
          });

          await store.getState().cardListActions.fetchPokemons();

          expect(FETCH_MOCK).not.toHaveBeenCalled();
          const state = store.getState();
          expect(state.cardListState.isFetch).toBe(false);
        });

        it('should perform fetch if error exists (errorFetch not null), even when search/page are equal', async () => {
          const store = createStore();
          store.setState({
            cardListState: {
              ...store.getState().cardListState,
              search: 'pika',
              prevSearch: 'pika',
              page: '1',
              prevPage: '1',
              errorFetch: 'some error',
            },
          });

          await store.getState().cardListActions.fetchPokemons();

          expect(FETCH_MOCK).toHaveBeenCalledTimes(1);
          const state = store.getState();
          expect(state.cardListState.errorFetch).toBeNull();
        });

        it('should handle HTTP error (status !== 200)', async () => {
          FETCH_MOCK.mockResolvedValue({
            status: 500,
            text: async () => 'Internal Server Error',
          });
          const store = createStore();
          store.getState().cardListActions.setSearch('pika');

          await store.getState().cardListActions.fetchPokemons();

          const state = store.getState();
          expect(state.cardListState.items).toEqual([]);
          expect(state.cardListState.errorFetch).toBe(
            'HTTP 500\nInternal Server Error'
          );
          expect(state.cardListState.isFetch).toBe(false);
        });

        it('should handle fetch exception', async () => {
          FETCH_MOCK.mockRejectedValue(new Error('Network error'));
          const store = createStore();
          store.getState().cardListActions.setSearch('pika');

          await store.getState().cardListActions.fetchPokemons();

          const state = store.getState();
          expect(state.cardListState.errorFetch).toContain(
            'Error: Network error'
          );
          expect(state.cardListState.isFetch).toBe(false);
        });
      });

      describe('addOrRemoveCsvItem', () => {
        it('should add pokemon to csvItems if isChecked is true', () => {
          const store = createStore();
          const pokemon = {
            id: 1,
            name: 'bulbasaur',
            weight: 69,
            height: 7,
            image_src: '',
            pokemontypes: [{ slot: 1, type: { name: 'grass' } }],
          };
          store.setState({
            cardListState: {
              ...store.getState().cardListState,
              items: [pokemon],
            },
          });

          store.getState().cardListActions.addOrRemoveCsvItem(true, 1);

          expect(store.getState().cardListState.csvItems).toContainEqual(
            pokemon
          );
          expect(store.getState().cardListState.csvItems).toHaveLength(1);
        });

        it('should remove pokemon from csvItems if isChecked is false', () => {
          const store = createStore();
          const pokemon = {
            id: 1,
            name: 'bulbasaur',
            weight: 69,
            height: 7,
            image_src: '',
            pokemontypes: [{ slot: 1, type: { name: 'grass' } }],
          };
          store.setState({
            cardListState: {
              ...store.getState().cardListState,
              csvItems: [pokemon],
            },
          });

          store.getState().cardListActions.addOrRemoveCsvItem(false, 1);

          expect(store.getState().cardListState.csvItems).toHaveLength(0);
        });
      });

      describe('unselectAllCsvItems', () => {
        it('should clear csvItems', () => {
          const store = createStore();
          store.setState({
            cardListState: {
              ...store.getState().cardListState,
              csvItems: [
                {
                  id: 1,
                  name: 'pika',
                  weight: 10,
                  height: 5,
                  image_src: '',
                  pokemontypes: [],
                },
              ],
            },
          });

          store.getState().cardListActions.unselectAllCsvItems();

          expect(store.getState().cardListState.csvItems).toEqual([]);
        });
      });
    });
  });

  describe('downloadCsvItems', () => {
    beforeEach(() => {
      vi.useFakeTimers();
      vi.setSystemTime(new Date('2026-05-25T12:00:00.000Z'));
    });

    afterEach(() => {
      vi.useRealTimers();
      vi.clearAllMocks();
    });

    it('generates CSV with only header if csvItems is empty', () => {
      const store = createStore();
      store.getState().cardListActions.downloadCsvItems();

      const expectedFilename = '[2026-05-25_12-00-00]__0_pokemon.csv';
      const expectedCsv = '#\tid\tname\tweight\theight\ttypes';

      expect(downloadFile_byText).toHaveBeenCalledTimes(1);
      expect(downloadFile_byText).toHaveBeenCalledWith(
        expectedFilename,
        expectedCsv
      );
    });

    it('generates correct CSV with pokemon data', () => {
      const store = createStore();
      const mockPokemon = {
        id: 25,
        name: 'pikachu',
        weight: 60,
        height: 4,
        image_src: '',
        pokemontypes: [{ slot: 1, type: { name: 'electric' } }],
      };

      store.setState({
        cardListState: {
          ...store.getState().cardListState,
          csvItems: [mockPokemon],
        },
      });

      store.getState().cardListActions.downloadCsvItems();

      const expectedFilename = '[2026-05-25_12-00-00]__1_pokemon.csv';
      const expectedCsv =
        '#\tid\tname\tweight\theight\ttypes\n1\t25\tpikachu\t60\t4\telectric';

      expect(downloadFile_byText).toHaveBeenCalledWith(
        expectedFilename,
        expectedCsv
      );
    });
  });
});
