export default interface GlobalState {
  errorBoundary: string | null;
  search: string;
  cardList: {
    pokemons: {
      name: string;
      url: string;
    }[];
    isFetchNow: boolean;
    errorFetch: string | null;
  };
}
