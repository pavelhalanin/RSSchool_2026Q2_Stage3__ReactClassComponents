import type { IPaginationData } from './IPaginationData';

export interface ICardListPagination {
  page: string;
  pagination: IPaginationData;
  setParams: (page: string, details: string) => void;
}
