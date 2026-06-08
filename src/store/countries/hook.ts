import { countryArrayActionSelector, countryArraySelector } from "./selector";
import type { ICountryArraySlice } from "./types";
import { useCountryArrayStore } from "./useCountryArrayStore";

export const useCountryArray = (): ICountryArraySlice["countryArray"] =>
  useCountryArrayStore(countryArraySelector);

export const useCountryArrayActions =
  (): ICountryArraySlice["countryArrayActions"] =>
    useCountryArrayStore(countryArrayActionSelector);
