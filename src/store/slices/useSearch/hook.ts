import {
  searchPrevSearchSelector,
  searchActionsSelector,
  searchSearchSumbitedSelector,
  searchValueSelector,
} from './selectors';
import type { ISearchSlice } from './types';
import { useSearchStore } from './useSearchStore';

export const useSubmitedSearchValue =
  (): ISearchSlice['searchState']['searchSumbited'] =>
    useSearchStore(searchSearchSumbitedSelector);

export const useSearchValue = (): ISearchSlice['searchState']['search'] =>
  useSearchStore(searchValueSelector);

export const useSearchPrevValue =
  (): ISearchSlice['searchState']['prevSearch'] =>
    useSearchStore(searchPrevSearchSelector);

export const useSearchActions = (): ISearchSlice['searchActions'] =>
  useSearchStore(searchActionsSelector);
