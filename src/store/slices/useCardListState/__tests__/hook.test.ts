import { describe, it, expect, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import {
  useCardListIsFetch,
  useCardListErrorFetch,
  useCardListSearch,
  useCardListPrevSearch,
  useCardListPage,
  useCardListPrevPage,
  useCardListPagination,
  useCardListItems,
  useCardListCsvItems,
  useCardListActions,
} from './../hook';
import { useCardListStore } from './../useCardListStore';
import type { ICardListState } from './../types';

const defaultState: ICardListState = {
  cardListState: {
    isFetch: false,
    errorFetch: null,
    search: '',
    prevSearch: null,
    page: '1',
    prevPage: '1',
    pagination: {
      CURRENT_PAGE: 1,
      LAST_PAGE: 1,
      LIMITL_ITEMS: 8,
      SKIP_ITEMS: 0,
      TOTAL_ITEMS: 0,
    },
    items: [],
    csvItems: [],
  },
};

describe('Custom hooks for CardList store', () => {
  beforeEach(() => {
    useCardListStore.setState({
      cardListState: { ...defaultState.cardListState },
    });
  });

  describe('useCardListIsFetch', () => {
    it('should return isFetch from store', () => {
      const { result } = renderHook(() => useCardListIsFetch());
      expect(result.current).toBe(false);

      act(() => {
        useCardListStore.setState((state) => ({
          cardListState: { ...state.cardListState, isFetch: true },
        }));
      });
      expect(result.current).toBe(true);
    });
  });

  describe('useCardListErrorFetch', () => {
    it('should return errorFetch from store', () => {
      const { result } = renderHook(() => useCardListErrorFetch());
      expect(result.current).toBeNull();

      const errorMsg = 'Network error';
      act(() => {
        useCardListStore.setState((state) => ({
          cardListState: { ...state.cardListState, errorFetch: errorMsg },
        }));
      });
      expect(result.current).toBe(errorMsg);
    });
  });

  describe('useCardListSearch', () => {
    it('should return search from store', () => {
      const { result } = renderHook(() => useCardListSearch());
      expect(result.current).toBe('');

      act(() => {
        useCardListStore.setState((state) => ({
          cardListState: { ...state.cardListState, search: 'pikachu' },
        }));
      });
      expect(result.current).toBe('pikachu');
    });
  });

  describe('useCardListPrevSearch', () => {
    it('should return prevSearch from store', () => {
      const { result } = renderHook(() => useCardListPrevSearch());
      expect(result.current).toBeNull();

      act(() => {
        useCardListStore.setState((state) => ({
          cardListState: { ...state.cardListState, prevSearch: 'bulbasaur' },
        }));
      });
      expect(result.current).toBe('bulbasaur');
    });
  });

  describe('useCardListPage', () => {
    it('should return page from store', () => {
      const { result } = renderHook(() => useCardListPage());
      expect(result.current).toBe('1');

      act(() => {
        useCardListStore.setState((state) => ({
          cardListState: { ...state.cardListState, page: '3' },
        }));
      });
      expect(result.current).toBe('3');
    });
  });

  describe('useCardListPrevPage', () => {
    it('should return prevPage from store', () => {
      const { result } = renderHook(() => useCardListPrevPage());
      expect(result.current).toBe('1');

      act(() => {
        useCardListStore.setState((state) => ({
          cardListState: { ...state.cardListState, prevPage: '2' },
        }));
      });
      expect(result.current).toBe('2');
    });
  });

  describe('useCardListPagination', () => {
    it('should return full pagination object', () => {
      const { result } = renderHook(() => useCardListPagination());
      expect(result.current).toEqual(defaultState.cardListState.pagination);

      const newPagination = {
        CURRENT_PAGE: 2,
        LAST_PAGE: 5,
        LIMITL_ITEMS: 10,
        SKIP_ITEMS: 10,
        TOTAL_ITEMS: 50,
      };
      act(() => {
        useCardListStore.setState((state) => ({
          cardListState: { ...state.cardListState, pagination: newPagination },
        }));
      });
      expect(result.current).toEqual(newPagination);
    });
  });

  describe('useCardListItems', () => {
    it('should return items array', () => {
      const { result } = renderHook(() => useCardListItems());
      expect(result.current).toEqual([]);

      const mockItems = [
        {
          id: 1,
          name: 'bulbasaur',
          weight: 69,
          height: 7,
          image_src: '',
          pokemontypes: [],
        },
      ];
      act(() => {
        useCardListStore.setState((state) => ({
          cardListState: { ...state.cardListState, items: mockItems },
        }));
      });
      expect(result.current).toEqual(mockItems);
    });
  });

  describe('useCardListCsvItems', () => {
    it('should return csvItems array', () => {
      const { result } = renderHook(() => useCardListCsvItems());
      expect(result.current).toEqual([]);

      const mockCsvItems = [
        {
          id: 2,
          name: 'ivysaur',
          weight: 130,
          height: 10,
          image_src: '',
          pokemontypes: [],
        },
      ];
      act(() => {
        useCardListStore.setState((state) => ({
          cardListState: { ...state.cardListState, csvItems: mockCsvItems },
        }));
      });
      expect(result.current).toEqual(mockCsvItems);
    });
  });

  describe('useCardListActions', () => {
    it('should return actions object with all methods', () => {
      const { result } = renderHook(() => useCardListActions());
      expect(result.current).toHaveProperty('setSearch');
      expect(result.current).toHaveProperty('fetchPokemons');
      expect(result.current).toHaveProperty('generateFetchError');
      expect(result.current).toHaveProperty('setPage');
      expect(result.current).toHaveProperty('addOrRemoveCsvItem');
      expect(result.current).toHaveProperty('unselectAllCsvItems');
      expect(result.current).toHaveProperty('downloadCsvItems');
      expect(typeof result.current.setSearch).toBe('function');
      expect(typeof result.current.fetchPokemons).toBe('function');
    });

    it('should allow calling setSearch to update search state', () => {
      const { result } = renderHook(() => ({
        search: useCardListSearch(),
        actions: useCardListActions(),
      }));

      expect(result.current.search).toBe('');

      act(() => {
        result.current.actions.setSearch('charmander');
      });

      expect(result.current.search).toBe('charmander');
    });

    it('should allow calling setPage to update page', () => {
      const { result } = renderHook(() => ({
        page: useCardListPage(),
        actions: useCardListActions(),
      }));

      expect(result.current.page).toBe('1');

      act(() => {
        result.current.actions.setPage('5');
      });

      expect(result.current.page).toBe('5');
    });

    it('should allow calling unselectAllCsvItems to clear csvItems', () => {
      const { result } = renderHook(() => ({
        csvItems: useCardListCsvItems(),
        actions: useCardListActions(),
      }));

      act(() => {
        useCardListStore.setState((state) => ({
          cardListState: {
            ...state.cardListState,
            csvItems: [
              {
                id: 1,
                name: 'test',
                weight: 0,
                height: 0,
                image_src: '',
                pokemontypes: [],
              },
            ],
          },
        }));
      });
      expect(result.current.csvItems.length).toBe(1);

      act(() => {
        result.current.actions.unselectAllCsvItems();
      });
      expect(result.current.csvItems).toEqual([]);
    });
  });
});
