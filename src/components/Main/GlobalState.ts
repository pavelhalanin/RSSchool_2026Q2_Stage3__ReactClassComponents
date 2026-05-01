export default interface GlobalState {
  errorBoundary: string | null;
  search: string;
  cardList: {
    pokemons: Array<{
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
    }>;
    isFetchNow: boolean;
    errorFetch: string | null;
  };
  card: {
    dialogIsOpen: boolean;
    pokemonId: number;
  };
}
