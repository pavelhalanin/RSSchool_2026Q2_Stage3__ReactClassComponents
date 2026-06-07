import type { IArrayFormDataSlice } from "./types";

export const arrayFormDataSelector = (state: IArrayFormDataSlice) =>
  state.arrayFormData;

export const arrayFormDataActionsSelector = (state: IArrayFormDataSlice) =>
  state.arrayFormDataActions;
