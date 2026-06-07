import { create } from "zustand";
import { createCountryArraySlice } from "./slice";
import type { ICountryArraySlice } from "./types";

export const useCountryArrayStore = create<ICountryArraySlice>()((...a) => ({
  ...createCountryArraySlice(...a),
}));
