import type { ICardListSlice } from './types';

export const cardListIsFetchSelector = (state: ICardListSlice) =>
  state.cardListState.isFetch;

export const cardListErrorFetchSelector = (state: ICardListSlice) =>
  state.cardListState.errorFetch;

export const cardListSearchSelector = (state: ICardListSlice) =>
  state.cardListState.search;

export const cardListPrevSearchSelector = (state: ICardListSlice) =>
  state.cardListState.prevSearch;

export const cardListPageSelector = (state: ICardListSlice) =>
  state.cardListState.page;

export const cardListPrevPageSelector = (state: ICardListSlice) =>
  state.cardListState.prevPage;

export const cardListPaginationSelector = (state: ICardListSlice) =>
  state.cardListState.pagination;

export const cardListItemsSelector = (state: ICardListSlice) =>
  state.cardListState.items;

export const cardListCsvItemsSelector = (state: ICardListSlice) =>
  state.cardListState.csvItems;

export const cardListActionsSelector = (state: ICardListSlice) =>
  state.cardListActions;
