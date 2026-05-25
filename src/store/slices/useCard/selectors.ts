import type { ICardSlice } from './types';

export const cardIsFetchSelector = (state: ICardSlice) => state.isFetch;

export const cardErrorFetchSelector = (state: ICardSlice) => state.errorFetch;

export const cardItemSelector = (state: ICardSlice) => state.item;

export const allCardSelector = (state: ICardSlice) => ({
  isFetch: state.isFetch,
  errorFetch: state.errorFetch,
  item: state.item,
});

export const cardActionsSelector = (state: ICardSlice) => state.actions;
