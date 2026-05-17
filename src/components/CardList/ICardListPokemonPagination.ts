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
