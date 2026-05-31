export interface ISearchState {
  searchState: {
    searchSumbited: string;
    search: string;
    prevSearch: null | string;
  };
}

export interface ISearchActions {
  setSearch: (newSearch: string) => void;
  setSubmitedSearch: (newSubmitedSearch: string) => void;
}

export interface ISearchSlice extends ISearchState {
  searchActions: ISearchActions;
}
