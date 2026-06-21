import { type StateCreator } from 'zustand';
import { devtools } from 'zustand/middleware';
import type { ISearchState, ISearchSlice } from './types';
import {
  storageGetItem,
  storageSetItem,
} from '../../../hook/useLocalStorage/Storage';

const SEARCH_VALUE = (storageGetItem('search') || '').trim();

const defaultCardListSearch: ISearchState = {
  searchState: {
    searchSumbited: SEARCH_VALUE,
    search: SEARCH_VALUE,
    prevSearch: null,
  },
};

export const createSearchSlice: StateCreator<
  ISearchSlice,
  [],
  [['zustand/devtools', never]],
  ISearchSlice
> = devtools(
  (set) => ({
    ...defaultCardListSearch,
    searchActions: {
      setSearch(newSearch) {
        set(
          (state) => ({
            ...state,
            searchState: {
              ...state.searchState,
              search: newSearch,
            },
          }),
          false,
          'search/setSearch'
        );
      },
      setSubmitedSearch(newSearchSumbited) {
        const SEARCH_VALUE = newSearchSumbited.trim();
        set(
          (state) => ({
            ...state,
            searchState: {
              ...state.searchState,
              search: SEARCH_VALUE,
              searchSumbited: SEARCH_VALUE,
            },
          }),
          false,
          'search/setSubmitedSearch'
        );
        storageSetItem('search', SEARCH_VALUE);
      },
    },
  }),
  { name: 'searchStore' }
);
