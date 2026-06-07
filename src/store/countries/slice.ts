import type { StateCreator } from "zustand";
import type { ICountryArraySlice, ICountryArrayState } from "./types";
import { devtools } from "zustand/middleware";
import country from "./../../const/country.json";

export const defaultCountryArray: ICountryArrayState = {
  countryArray: [],
};

export const createCountryArraySlice: StateCreator<
  ICountryArraySlice,
  [],
  [["zustand/devtools", never]],
  ICountryArraySlice
> = devtools(
  (set) => ({
    ...defaultCountryArray,
    countryArrayActions: {
      loadCountryArray: () => {
        set(
          (state) => {
            return {
              ...state,
              countryArray: country,
            };
          },
          false,
          "countryArray/loadArrayCountry",
        );
      },
    },
  }),
  { name: "arrayFormData" },
);
