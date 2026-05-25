import { useShallow } from 'zustand/shallow';
import {
  allCardSelector,
  cardActionsSelector,
  cardErrorFetchSelector,
  cardIsFetchSelector,
  cardItemSelector,
} from './selectors';
import type { ICardSlice } from './types';
import { useCardStore } from './useCardStore';

export const useCardIsFetch = (): ICardSlice['isFetch'] =>
  useCardStore(cardIsFetchSelector);

export const useCardErrorFetch = (): ICardSlice['errorFetch'] =>
  useCardStore(cardErrorFetchSelector);

export const useCardItem = (): ICardSlice['item'] =>
  useCardStore(cardItemSelector);

export const useCardAll = (): {
  isFetch: ICardSlice['isFetch'];
  errorFetch: ICardSlice['errorFetch'];
  item: ICardSlice['item'];
} => useCardStore(useShallow(allCardSelector));

export const useCardActions = (): ICardSlice['actions'] =>
  useCardStore(cardActionsSelector);
