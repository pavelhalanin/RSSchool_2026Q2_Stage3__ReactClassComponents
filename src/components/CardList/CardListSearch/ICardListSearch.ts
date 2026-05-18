import type { IPaginationData } from '../Left/Pagination/IPaginationData';

export interface ICardListSearch {
  page: string;
  search: string;
  searchPrev: string | null;
  pagination: IPaginationData;
  fetchPokemons: () => void;
  setParams: (page: string, details: string) => void;
  setSearch: (search: string) => void;
  setPagination: (paginationData: IPaginationData) => void;
}
