import {
  arrayFormDataActionsSelector,
  arrayFormDataSelector,
} from "./selector";
import type { IArrayFormDataSlice } from "./types";
import { useArrayFormDataStore } from "./useArrayFormDataStore";

export const useArrayFormData = (): IArrayFormDataSlice["arrayFormData"] =>
  useArrayFormDataStore(arrayFormDataSelector);

export const useArrayFormDataActions =
  (): IArrayFormDataSlice["arrayFormDataActions"] =>
    useArrayFormDataStore(arrayFormDataActionsSelector);
