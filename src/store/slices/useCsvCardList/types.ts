import type { ICardListItemPokemon } from '../../../query/cardList/IPaginationCardList';

export interface ICsvCardListState {
  csvCardListState: {
    items: Array<ICardListItemPokemon>;
  };
}

export interface ICsvCardListActions {
  addItem: (item: ICardListItemPokemon) => void;
  removeItem: (item: ICardListItemPokemon) => void;
  unselectAll: () => void;
  downloadCsvItems: () => void;
}

export interface ICsvCardListSlice extends ICsvCardListState {
  csvCardListActions: ICsvCardListActions;
}
