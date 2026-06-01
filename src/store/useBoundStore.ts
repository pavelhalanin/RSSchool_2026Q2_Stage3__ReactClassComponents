import { create } from 'zustand';
import type { ICsvCardListSlice } from './slices/useCsvCardList/types';
import { createCsvCardListSlice } from './slices/useCsvCardList/slice';
import type { ISearchSlice } from './slices/useSearch/types';
import { createSearchSlice } from './slices/useSearch/slice';

type IBoundState = ICsvCardListSlice & ISearchSlice;

export const useBoundStore = create<IBoundState>()((...a) => ({
  ...createCsvCardListSlice(...a),
  ...createSearchSlice(...a),
}));
