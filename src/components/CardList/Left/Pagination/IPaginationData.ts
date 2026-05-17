import type { ICardListPokemon } from '../PokemonCards/ICardListPokemon';

export interface IPaginationData {
  pagination: {
    TOTOL_ITEMS: number;
    LIMITL_ITEMS: number;
    CURRENT_PAGE: number;
    SKIP_ITEMS: number;
    LAST_PAGE: number;
  };
  items: Array<ICardListPokemon>;
  isFetch: boolean;
  fetchError: null | string;
}
