import {
  cardListIsFetchSelector,
  cardListErrorFetchSelector,
  cardListSearchSelector,
  cardListPrevSearchSelector,
  cardListPageSelector,
  cardListPrevPageSelector,
  cardListPaginationSelector,
  cardListItemsSelector,
  cardListCsvItemsSelector,
  cardListActionsSelector,
} from './selectors';
import type { ICardListSlice } from './types';
import { useCardListStore } from './useCardListStore';

export const useCardListIsFetch = (): ICardListSlice['isFetch'] =>
  useCardListStore(cardListIsFetchSelector);

export const useCardListErrorFetch = (): ICardListSlice['errorFetch'] =>
  useCardListStore(cardListErrorFetchSelector);

export const useCardListSearch = (): ICardListSlice['search'] =>
  useCardListStore(cardListSearchSelector);

export const useCardListPrevSearch = (): ICardListSlice['prevSearch'] =>
  useCardListStore(cardListPrevSearchSelector);

export const useCardListPage = (): ICardListSlice['page'] =>
  useCardListStore(cardListPageSelector);

export const useCardListPrevPage = (): ICardListSlice['prevPage'] =>
  useCardListStore(cardListPrevPageSelector);

export const useCardListPagination = (): ICardListSlice['pagination'] =>
  useCardListStore(cardListPaginationSelector);

export const useCardListItems = (): ICardListSlice['items'] =>
  useCardListStore(cardListItemsSelector);

export const useCardListCsvItems = (): ICardListSlice['csvItems'] =>
  useCardListStore(cardListCsvItemsSelector);

export const useCardListActions = (): ICardListSlice['actions'] =>
  useCardListStore(cardListActionsSelector);
