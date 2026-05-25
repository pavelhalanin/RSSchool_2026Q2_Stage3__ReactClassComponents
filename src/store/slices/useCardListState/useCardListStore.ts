import { create } from 'zustand';
import type { ICardListSlice } from './types';
import { createCardListSlice } from './slice';

export const useCardListStore = create<ICardListSlice>()((...a) => ({
  ...createCardListSlice(...a),
}));
