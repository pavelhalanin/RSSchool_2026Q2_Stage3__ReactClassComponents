import {
  formDataActionsSelector,
  formDataErrorsSelector,
  formDataValuesSelector,
} from "./selector";
import type { IFormDataSlice } from "./types";
import { useFormDataStore } from "./useFormDataStore";

export const useFormDataValue = (): IFormDataSlice["formData"]["values"] =>
  useFormDataStore(formDataValuesSelector);

export const useFormDataErrors = (): IFormDataSlice["formData"]["errors"] =>
  useFormDataStore(formDataErrorsSelector);

export const useFormDataActions = (): IFormDataSlice["formDataActions"] =>
  useFormDataStore(formDataActionsSelector);
