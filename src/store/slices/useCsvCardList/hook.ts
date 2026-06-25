import {
  cscCardListItemsSelector,
  csvCardListActionsSelector,
} from './selectors';
import type { ICsvCardListSlice } from './types';
import { useCsvCardListStore } from './useCsvCardListStore';

export const useCsvCardListItems =
  (): ICsvCardListSlice['csvCardListState']['items'] =>
    useCsvCardListStore(cscCardListItemsSelector);

export const useCsvCardListActions =
  (): ICsvCardListSlice['csvCardListActions'] =>
    useCsvCardListStore(csvCardListActionsSelector);
