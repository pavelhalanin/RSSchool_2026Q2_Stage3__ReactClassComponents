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

export const useCardListIsFetch =
  (): ICardListSlice['cardListState']['isFetch'] =>
    useCardListStore(cardListIsFetchSelector);

export const useCardListErrorFetch =
  (): ICardListSlice['cardListState']['errorFetch'] =>
    useCardListStore(cardListErrorFetchSelector);

export const useCardListSearch =
  (): ICardListSlice['cardListState']['search'] =>
    useCardListStore(cardListSearchSelector);

export const useCardListPrevSearch =
  (): ICardListSlice['cardListState']['prevSearch'] =>
    useCardListStore(cardListPrevSearchSelector);

export const useCardListPage = (): ICardListSlice['cardListState']['page'] =>
  useCardListStore(cardListPageSelector);

export const useCardListPrevPage =
  (): ICardListSlice['cardListState']['prevPage'] =>
    useCardListStore(cardListPrevPageSelector);

export const useCardListPagination =
  (): ICardListSlice['cardListState']['pagination'] =>
    useCardListStore(cardListPaginationSelector);

export const useCardListItems = (): ICardListSlice['cardListState']['items'] =>
  useCardListStore(cardListItemsSelector);

export const useCardListCsvItems =
  (): ICardListSlice['cardListState']['csvItems'] =>
    useCardListStore(cardListCsvItemsSelector);

export const useCardListActions = (): ICardListSlice['cardListActions'] =>
  useCardListStore(cardListActionsSelector);
