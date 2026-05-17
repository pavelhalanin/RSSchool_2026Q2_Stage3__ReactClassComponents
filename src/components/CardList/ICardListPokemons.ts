import type { IPaginationData } from './IPaginationData';

export interface ICardListPokemons {
  page: string;
  searchPrev: string | null;
  pagination: IPaginationData;
  fetchPokemons: () => void;
  setParams: (page: string, details: string) => void;
}
