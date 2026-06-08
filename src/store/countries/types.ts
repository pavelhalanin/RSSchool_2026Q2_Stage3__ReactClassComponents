export interface ICountryArrayState {
  countryArray: Array<{
    name: string;
    code: string;
  }>;
}

export interface ICountryArrayActions {
  loadCountryArray: () => void;
}

export interface ICountryArraySlice extends ICountryArrayState {
  countryArrayActions: ICountryArrayActions;
}
