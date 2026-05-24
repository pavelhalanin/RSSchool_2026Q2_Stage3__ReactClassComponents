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
import type { ICardListStore } from './types';
import { useCardListStore } from './useCardListStore';

export const useCardListIsFetch = (): ICardListStore['isFetch'] =>
  useCardListStore(cardListIsFetchSelector);

export const useCardListErrorFetch = (): ICardListStore['errorFetch'] =>
  useCardListStore(cardListErrorFetchSelector);

export const useCardListSearch = (): ICardListStore['search'] =>
  useCardListStore(cardListSearchSelector);

export const useCardListPrevSearch = (): ICardListStore['prevSearch'] =>
  useCardListStore(cardListPrevSearchSelector);

export const useCardListPage = (): ICardListStore['page'] =>
  useCardListStore(cardListPageSelector);

export const useCardListPrevPage = (): ICardListStore['prevPage'] =>
  useCardListStore(cardListPrevPageSelector);

export const useCardListPagination = (): ICardListStore['pagination'] =>
  useCardListStore(cardListPaginationSelector);

export const useCardListItems = (): ICardListStore['items'] =>
  useCardListStore(cardListItemsSelector);

export const useCardListCsvItems = (): ICardListStore['csvItems'] =>
  useCardListStore(cardListCsvItemsSelector);

export const useCardListActions = (): ICardListStore['actions'] =>
  useCardListStore(cardListActionsSelector);
