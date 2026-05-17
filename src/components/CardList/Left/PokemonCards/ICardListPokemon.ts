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
