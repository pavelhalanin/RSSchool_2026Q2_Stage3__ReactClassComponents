export interface IPadinationCardList {
  data: {
    pokemon: Array<ICardListItemPokemon>;
    pokemon_aggregate: {
      aggregate: {
        count: number;
      };
    };
  };
}

export interface ICardListItemPokemon {
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
