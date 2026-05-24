import type { ICardListStore } from './types';

export const cardListIsFetchSelector = (state: ICardListStore) => state.isFetch;

export const cardListErrorFetchSelector = (state: ICardListStore) =>
  state.errorFetch;

export const cardListSearchSelector = (state: ICardListStore) => state.search;

export const cardListPrevSearchSelector = (state: ICardListStore) =>
  state.prevSearch;

export const cardListPageSelector = (state: ICardListStore) => state.page;

export const cardListPrevPageSelector = (state: ICardListStore) =>
  state.prevPage;

export const cardListPaginationSelector = (state: ICardListStore) =>
  state.pagination;

export const cardListItemsSelector = (state: ICardListStore) => state.items;

export const cardListCsvItemsSelector = (state: ICardListStore) =>
  state.csvItems;

export const cardListActionsSelector = (state: ICardListStore) => state.actions;
