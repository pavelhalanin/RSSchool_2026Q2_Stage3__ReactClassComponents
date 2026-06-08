import { create } from "zustand";
import { createFormDataSlice } from "./slice";
import type { IFormDataSlice } from "./types";

export const useFormDataStore = create<IFormDataSlice>()((...a) => ({
  ...createFormDataSlice(...a),
}));
