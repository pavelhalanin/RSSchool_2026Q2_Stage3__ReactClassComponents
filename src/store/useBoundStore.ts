import { create } from 'zustand';
import type { ICardListSlice } from './slices/useCardListState/types';
import { createCardListSlice } from './slices/useCardListState/slice';

type IBoundState = ICardListSlice;

export const useBoundStore = create<IBoundState>()((...a) => ({
  ...createCardListSlice(...a),
}));
