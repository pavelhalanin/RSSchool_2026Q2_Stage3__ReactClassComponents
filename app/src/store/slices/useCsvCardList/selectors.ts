import type { ICsvCardListSlice } from './types';

export const cscCardListItemsSelector = (state: ICsvCardListSlice) =>
  state.csvCardListState.items;

export const csvCardListActionsSelector = (state: ICsvCardListSlice) =>
  state.csvCardListActions;
