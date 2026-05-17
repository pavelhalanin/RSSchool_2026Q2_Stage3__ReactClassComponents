import type { ICardListPokemon } from './ICardListPokemon';

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
