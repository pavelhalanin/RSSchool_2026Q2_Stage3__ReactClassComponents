import { create } from 'zustand';
import type { ICardSlice } from './slices/useCard/types';
import { createCardSlice } from './slices/useCard/slice';
import type { ICardListSlice } from './slices/useCardListState/types';
import { createCardListSlice } from './slices/useCardListState/slice';

type IBoundState = ICardListSlice & ICardSlice;

export const useBoundStore = create<IBoundState>()((...a) => ({
  ...createCardListSlice(...a),
  ...createCardSlice(...a),
}));
