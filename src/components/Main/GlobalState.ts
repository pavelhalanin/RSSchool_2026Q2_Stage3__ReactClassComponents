export default interface GlobalState {
  errorBoundary: string | null;
  cardList: {
    pokemons: {
      name: string;
      url: string;
    }[];
    isFetchNow: boolean;
    errorFetch: string | null;
  };
}
