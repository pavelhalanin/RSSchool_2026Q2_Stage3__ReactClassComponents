import type { ICardListSlice } from './types';

export const cardListIsFetchSelector = (state: ICardListSlice) => state.isFetch;

export const cardListErrorFetchSelector = (state: ICardListSlice) =>
  state.errorFetch;

export const cardListSearchSelector = (state: ICardListSlice) => state.search;

export const cardListPrevSearchSelector = (state: ICardListSlice) =>
  state.prevSearch;

export const cardListPageSelector = (state: ICardListSlice) => state.page;

export const cardListPrevPageSelector = (state: ICardListSlice) =>
  state.prevPage;

export const cardListPaginationSelector = (state: ICardListSlice) =>
  state.pagination;

export const cardListItemsSelector = (state: ICardListSlice) => state.items;

export const cardListCsvItemsSelector = (state: ICardListSlice) =>
  state.csvItems;

export const cardListActionsSelector = (state: ICardListSlice) => state.actions;
