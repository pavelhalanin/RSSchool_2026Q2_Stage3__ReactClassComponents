export interface ISearchProps {
  search: string;
  fetchPokemons: () => void;
  updateState_search: (search: string) => void;
  setParams: (page: string, details: string) => void;
}
