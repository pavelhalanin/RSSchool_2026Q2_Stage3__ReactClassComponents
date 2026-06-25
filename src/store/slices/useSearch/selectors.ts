import type { ISearchSlice } from './types';

export const searchSearchSumbitedSelector = (state: ISearchSlice) =>
  state.searchState.searchSumbited;

export const searchValueSelector = (state: ISearchSlice) =>
  state.searchState.search;

export const searchPrevSearchSelector = (state: ISearchSlice) =>
  state.searchState.prevSearch;

export const searchActionsSelector = (state: ISearchSlice) =>
  state.searchActions;
