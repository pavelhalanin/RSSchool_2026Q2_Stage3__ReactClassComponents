import type { IPaginationData } from '../Pagination/IPaginationData';

export interface ICardListPokemons {
  page: string;
  searchPrev: string | null;
  pagination: IPaginationData;
  fetchPokemons: () => void;
  setParams: (page: string, details: string) => void;
}
