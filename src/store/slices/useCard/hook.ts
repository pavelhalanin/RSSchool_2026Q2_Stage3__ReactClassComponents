import { useShallow } from 'zustand/shallow';
import {
  allCardSelector,
  cardActionsSelector,
  cardErrorFetchSelector,
  cardIsFetchSelector,
  cardItemSelector,
} from './selectors';
import type { ICardStore } from './types';
import { useCardStore } from './useCardStore';

export const useCardIsFetch = (): ICardStore['isFetch'] =>
  useCardStore(cardIsFetchSelector);

export const useCardErrorFetch = (): ICardStore['errorFetch'] =>
  useCardStore(cardErrorFetchSelector);

export const useCardItem = (): ICardStore['item'] =>
  useCardStore(cardItemSelector);

export const useCardAll = (): {
  isFetch: ICardStore['isFetch'];
  errorFetch: ICardStore['errorFetch'];
  item: ICardStore['item'];
} => useCardStore(useShallow(allCardSelector));

export const useCardActions = (): ICardStore['actions'] =>
  useCardStore(cardActionsSelector);
