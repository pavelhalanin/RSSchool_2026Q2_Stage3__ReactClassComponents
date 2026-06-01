import { create } from 'zustand';
import type { ISearchSlice } from './types';
import { createSearchSlice } from './slice';

export const useSearchStore = create<ISearchSlice>()((...a) => ({
  ...createSearchSlice(...a),
}));
