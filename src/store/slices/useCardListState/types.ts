export interface ICardListState {
  cardListState: {
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
    csvItems: Array<ICardListPokemon>;
  };
}

interface ICardListActions {
  generateFetchError: () => void;
  setSearch: (newSearch: string) => void;
  fetchPokemons: () => void;
  setPage: (newPage: undefined | string) => void;

  addOrRemoveCsvItem: (isChecked: boolean, pokemonId: number) => void;
  unselectAllCsvItems: () => void;
  downloadCsvItems: () => void;
}

export interface ICardListSlice extends ICardListState {
  cardListActions: ICardListActions;
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

export interface ICardListPokemon {
  id: number;
  name: string;
  weight: number;
  height: number;
  image_src: string;
  pokemontypes: Array<{
    slot: number;
    type: {
      name: string;
    };
  }>;
}
