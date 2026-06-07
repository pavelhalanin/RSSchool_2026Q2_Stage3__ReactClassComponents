import type { ICountryArraySlice } from "./types";

export const countryArraySelector = (state: ICountryArraySlice) =>
  state.countryArray;

export const countryArrayActionSelector = (state: ICountryArraySlice) =>
  state.countryArrayActions;
