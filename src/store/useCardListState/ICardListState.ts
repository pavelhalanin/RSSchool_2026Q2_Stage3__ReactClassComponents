import type { ICardListPokemon } from '../../components/CardList/Left/PokemonCards/ICardListPokemon';

export interface ICardListState {
  isFetch: boolean;
  errorFetch: null | string;
  search: string;
  prevSearch: null | string;
  page: string;
  prevPage: string;
  pagination: {
    TOTAL_ITEMS: number;
    LIMITL_ITEMS: number;
    CURRENT_PAGE: number;
    SKIP_ITEMS: number;
    LAST_PAGE: number;
  };
  items: Array<ICardListPokemon>;

  generateFetchError: () => void;
  setSearch: (newSearch: string) => void;
  fetchPokemons: () => void;
  setPage: (newPage: string) => void;
}

export interface ICardListPokemonWithPadination {
  data: {
    pokemon: Array<ICardListPokemon>;
    pokemon_aggregate: {
      aggregate: {
        count: number;
      };
    };
  };
}
