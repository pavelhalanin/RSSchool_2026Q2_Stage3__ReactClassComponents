import type { IPokemon } from '../../components/CardList/Right/IPokemon';

export interface ICardState {
  isFetch: boolean;
  errorFetch: null | string;
  item: null | IPokemon;
  closeCard: () => void;
  generateFetchError: () => void;
  loadCard_byDetails: (details: null | string) => void;
}
