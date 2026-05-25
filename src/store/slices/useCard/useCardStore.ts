import { create } from 'zustand';
import type { ICardSlice } from './types';
import { createCardSlice } from './slice';

export const useCardStore = create<ICardSlice>()((...a) => ({
  ...createCardSlice(...a),
}));
