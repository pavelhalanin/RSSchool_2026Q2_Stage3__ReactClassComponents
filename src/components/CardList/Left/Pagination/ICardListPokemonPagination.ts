import type { ICardListPokemon } from '../PokemonCards/ICardListPokemon';

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
