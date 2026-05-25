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

export const useCardIsFetch = (): ICardSlice['cardState']['isFetch'] =>
  useCardStore(cardIsFetchSelector);

export const useCardErrorFetch = (): ICardSlice['cardState']['errorFetch'] =>
  useCardStore(cardErrorFetchSelector);

export const useCardItem = (): ICardSlice['cardState']['item'] =>
  useCardStore(cardItemSelector);

export const useCardAll = (): {
  isFetch: ICardSlice['cardState']['isFetch'];
  errorFetch: ICardSlice['cardState']['errorFetch'];
  item: ICardSlice['cardState']['item'];
} => useCardStore(useShallow(allCardSelector));

export const useCardActions = (): ICardSlice['cardActions'] =>
  useCardStore(cardActionsSelector);
