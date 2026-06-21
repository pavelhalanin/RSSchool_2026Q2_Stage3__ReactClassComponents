const DEFAULT_STATE_MOCK = {
  errorBoundary: null,
  search: '',
  searchPrev: '',
  cardList: {
    pokemons: [],
    isFetchNow: false,
    errorFetch: null,
  },
  card: {
    dialogIsOpen: false,
    pokemonId: 0,
    isFetchNow: false,
    pokemon: null,
  },
};

export default DEFAULT_STATE_MOCK;
