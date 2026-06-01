import { create } from 'zustand';
import type { ICsvCardListSlice } from './types';
import { createCsvCardListSlice } from './slice';

export const useCsvCardListStore = create<ICsvCardListSlice>()((...a) => ({
  ...createCsvCardListSlice(...a),
}));
