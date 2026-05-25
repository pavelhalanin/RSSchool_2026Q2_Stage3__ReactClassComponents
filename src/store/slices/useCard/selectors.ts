import type { ICardSlice } from './types';

export const cardIsFetchSelector = (state: ICardSlice) =>
  state.cardState.isFetch;

export const cardErrorFetchSelector = (state: ICardSlice) =>
  state.cardState.errorFetch;

export const cardItemSelector = (state: ICardSlice) => state.cardState.item;

export const allCardSelector = (state: ICardSlice) => ({
  isFetch: state.cardState.isFetch,
  errorFetch: state.cardState.errorFetch,
  item: state.cardState.item,
});

export const cardActionsSelector = (state: ICardSlice) => state.cardActions;
