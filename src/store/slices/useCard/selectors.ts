import type { ICardStore } from './types';

export const cardIsFetchSelector = (state: ICardStore) => state.isFetch;

export const cardErrorFetchSelector = (state: ICardStore) => state.errorFetch;

export const cardItemSelector = (state: ICardStore) => state.item;

export const allCardSelector = (state: ICardStore) => ({
  isFetch: state.isFetch,
  errorFetch: state.errorFetch,
  item: state.item,
});

export const cardActionsSelector = (state: ICardStore) => state.actions;
