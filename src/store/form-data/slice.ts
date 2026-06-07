import type { StateCreator } from "zustand";
import type { IFormDataSlice, IFormDataState } from "./types";
import { devtools } from "zustand/middleware";

export const defaultFormData: IFormDataState = {
  formData: {
    values: {
      name: "",
      age: 0,
      email: "",
      gender: "other",
      isAgree: false,
      photo: "",
    },
    errors: {
      name: [],
      age: [],
      email: [],
      gender: [],
      isAgree: [],
      photo: [],
    },
  },
};

export const createFormDataSlice: StateCreator<
  IFormDataSlice,
  [],
  [["zustand/devtools", never]],
  IFormDataSlice
> = devtools(
  (set) => ({
    ...defaultFormData,
    formDataActions: {
      setFormDataValues: (data) => {
        set(
          (state) => {
            return {
              ...state,
              formData: {
                ...state.formData,
                values: {
                  ...state.formData.values,
                  ...data,
                },
              },
            };
          },
          false,
          "formData/setFormDataValues",
        );
      },

      setFormDataErrors: (data) => {
        set(
          (state) => {
            return {
              ...state,
              formData: {
                ...state.formData,
                errors: {
                  ...data,
                },
              },
            };
          },
          false,
          "formData/setFormDataErrors",
        );
      },

      clearErrors: () => {
        set(
          (state) => {
            return {
              ...state,
              formData: {
                ...state.formData,
                errors: {
                  name: [],
                  age: [],
                  email: [],
                  gender: [],
                  isAgree: [],
                  photo: [],
                },
              },
            };
          },
          false,
          "formData/clearErrors",
        );
      },

      getEmptyErrors: () => {
        return {
          name: [],
          age: [],
          email: [],
          gender: [],
          isAgree: [],
          photo: [],
        };
      },
    },
  }),
  { name: "formData" },
);
