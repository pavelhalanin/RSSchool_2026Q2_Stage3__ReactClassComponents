export interface ISearchProps {
  search: string;
  fetchPokemons: () => void;
  updateState_search: (search: string) => void;
}
