import type { IFormDataSlice } from "./types";

export const formDataValuesSelector = (state: IFormDataSlice) =>
  state.formData.values;

export const formDataErrorsSelector = (state: IFormDataSlice) =>
  state.formData.errors;

export const formDataActionsSelector = (state: IFormDataSlice) =>
  state.formDataActions;
