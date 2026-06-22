import { ICardListItemPokemon } from '@/src/query/CardList/IPaginationCardList';

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
