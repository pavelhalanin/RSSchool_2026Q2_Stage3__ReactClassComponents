import { create } from "zustand";
import { createArrayFormDataSlice } from "./slice";
import type { IArrayFormDataSlice } from "./types";

export const useArrayFormDataStore = create<IArrayFormDataSlice>()((...a) => ({
  ...createArrayFormDataSlice(...a),
}));
